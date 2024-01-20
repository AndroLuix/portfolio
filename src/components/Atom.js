import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Jimp from 'jimp';

import gifAtom from '../asset/img/gif/atom.gif';

function Atom() {
  const [loading, setLoading] = useState(true);
  const [modifiedGifUrl, setModifiedGifUrl] = useState('');

  useEffect(() => {
    const removeBackground = async (inputGif) => {
      try {
        // Carica l'immagine con Jimp
        const image = await Jimp.read(inputGif);

        // Rimuovi lo sfondo nero impostando la trasparenza per i pixel neri
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
          const red = this.bitmap.data[idx + 0];
          const green = this.bitmap.data[idx + 1];
          const blue = this.bitmap.data[idx + 2];

          if (red === 0 && green === 0 && blue === 0) {
            // Imposta l'alfa a 0 (trasparente) per i pixel neri
            this.bitmap.data[idx + 3] = 0;
          }
        });

        // Crea un buffer con i dati dell'immagine modificata
        const modifiedImageBuffer = await image.getBufferAsync(Jimp.MIME_GIF);

        // Crea un oggetto Blob dal buffer dell'immagine modificata
        const modifiedImageBlob = new Blob([modifiedImageBuffer], { type: 'image/gif' });

        // Genera un URL oggetto per l'oggetto Blob
        const modifiedGifUrl = URL.createObjectURL(modifiedImageBlob);

        // Imposta l'URL del nuovo GIF nello stato
        setModifiedGifUrl(modifiedGifUrl);

        // Indica che l'operazione è completata e nasconde lo spinner
        setLoading(false);
      } catch (error) {
        // Gestisce gli errori e nasconde lo spinner
        console.error("Errore durante la rimozione dello sfondo:", error);
        setLoading(false);
      }
    };

    // Chiama la funzione di rimozione dello sfondo con il GIF di input
    removeBackground(gifAtom);
  }, []); 

  return (
    <div className="text-center">
      {loading ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <img src={modifiedGifUrl || gifAtom} alt='Atom' />
      )}
    </div>
  );
}

export default Atom;
