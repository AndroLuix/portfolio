import React, { useEffect, useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import '../App.css';
import { Row, Col } from 'react-bootstrap';

import { ArrowRightCircle } from 'react-bootstrap-icons';
import ImgJs from "../asset/img/js.png"
import ImgMySQL from "../asset/img/mysql.png"
import ImgHtmlCss from "../asset/img/html-css.png"
import PHP from "../asset/img/php.png"
import imgJava from "../asset/img/java.png"
import ImgSpring from "../asset/img/spring.png"
import imgLaravel from "../asset/img/laravel.png"
import imgReact from "../asset/img/react.png"
import { faL } from '@fortawesome/free-solid-svg-icons';

// ... (il codice rimane invariato)



function Banner() {

    /**
     * FUNZIONE PER IL GENERATORE DI TESTO
     */
    const toRotate = ["Frontend Developer",
        "Backend Developer", "App Developer", "Database Developer"]
    const [looopNum, setLoopNum] = useState(0);
    const [isDeleting, setiIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000; //tempo per rimanere la frase sullo schhermo

    useEffect(() => {
        //Creo un intervallo che chiama la funzione tick
        let ticker = setInterval(() => {
            tick();

        }, delta);

        //pulische l'intervallo quando il componente si dimostra
        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        // determina l'indice dell'array toRotate da cui ottenere il testo
        let i = looopNum % toRotate.length;
        let fullText = toRotate[i];

        // Aggiorna il testo in base il valore booleano di isDeleting
        let updateText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        //aggiorno lo stato del testo
        setText(updateText);

        /**
         * Condizioni e regole
         */

        // se la frase è cancellata
        if (isDeleting) {
            //velocità di scrittura e cancellazione
            setDelta(prevDelta => prevDelta / 2)
        }

        //gestione del cambio di direzione del cursore
        if (!isDeleting && updateText === fullText) {
            setiIsDeleting(true);
            setDelta(period);

        } else if (isDeleting && updateText === '') {
            setiIsDeleting(false);
            setDelta(500);

            // inncremento l'indice per accedere al prossimo testo nell'array toRotate
            setLoopNum((prevNum) => prevNum + 1)

        }
    }


    
    return (
        <section className='banner bg-dark text-white' id='home'>
            <Container>
                <Row className='align-items-center '>
                    <Col xs={7} md={3} xl={6} >
                        <span className='tagline'> Benvenuto nel mio Portfolio</span>
                        <h1 className='text-skills'>{`Le mie competenze e specializzazioni: `}
                            <span className='wrap'> {text}<span className='line-text'>|</span></span>
                            <p>Prova prova prova</p>
                            <button onClick={() => console.log('connesso')}>
                                Let's Connect <ArrowRightCircle size={24} />
                            </button>
                        </h1>
                    </Col>

                    <Col  xs={7} md={3} xl={6}>
                    <Row className='d-flex flex-wrap'>
                            
                            <img  className='img-skills' src={ImgJs} alt='Js' />
                            <img className='img-skills' src={ImgMySQL} alt='MySQL' />
                            <img  className='img-skills' src={ImgHtmlCss} alt='HTML CSS' />
                            <img  className='img-skills' src={PHP} alt='PHP' />
                            <img  className='img-skills' src={imgJava} alt='java' />
                            <img  className='img-skills' src={ImgSpring} alt='Spirngboot' />
                            <img  className='img-skills' src={imgLaravel} alt='Laravel' />
                            <img  className='img-skills' src={imgReact} alt='React' />

                        </Row>
                    </Col>

                </Row>
            </Container>

        </section>
    );
}

export default Banner;
