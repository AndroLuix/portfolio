import React, { useEffect, useState } from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import ImgJs from "../asset/img/js.png"
import ImgMySQL from "../asset/img/mysql.png"
import ImgHtmlCss from "../asset/img/html-css.png"
import imgPHP from "../asset/img/php.png"
import imgJava from "../asset/img/java.png"
import ImgSpring from "../asset/img/spring.png"
import imgLaravel from "../asset/img/laravel.png"
import imgReact from "../asset/img/react.png"
import imgMDB from "../asset/img/mongoDB.png"
import imgPython from "../asset/img/python.png"


const SkillImage = ({
    src, alt, description, 
}) => {
    const [showDescription, setShowDescription] = useState(false);

    const toggleDescription = () => {
        setShowDescription(!showDescription);
      };

      const handleClickOutside = (event) => {
        if (showDescription && !event.target.closest('.img-description-skill')) {
          setShowDescription(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [showDescription]);
    return (
        <div
            className='img-description-skill'
            onClick={toggleDescription}
           
        >
            <img className='img-skills' src={src} alt={alt} />
            {showDescription && <p className='img-description for-effect'>{description}</p>}
        </div>
    )
}
function Skills() {
    return (
        <section className='skills bg-dark'>
        <div>
        <h1>Tecnologie più utilizzate</h1>
        </div>
       <Container>
       <Col xs={9} md={9} xl={12} >
                <Row className='d-flex flex-wrap scroll-skills'>

                    <SkillImage src={ImgMySQL} alt='MySQL' 
                    description='
                    MySQL è un sistema di gestione di database relazionali 
                    ampiamente utilizzato per ottimizzare la gestione dei dati. 
                    Grazie alla sua affidabilità e flessibilità,
                     è spesso la scelta preferita per progetti 
                     che richiedono una gestione efficiente e sicura dei database.
                    '  />

                    <SkillImage src={imgMDB} alt='React' 
                     description='
                     MongoDB è un database non relazionale che si distingue per 
                     la sua leggerezza e flessibilità. Scelto in molti progetti 
                     software, offre un approccio diverso rispetto ai database relazionali, 
                     facilitando la gestione di dati complessi e in continua evoluzione'       />

                    <SkillImage src={ImgJs} alt='Js'
                    description="JavaScript è il caffè degli sviluppatori web. 
                    Ti dà la carica per rendere il tuo sito più interattivo e vivace. 
                    Chi ha bisogno di un sito statico quando puoi far ballare gli 
                    elementi della pagina con un tocco di magia JavaScript? "      />

                    <SkillImage src={ImgHtmlCss} alt='HTML CSS' description='
                    HTML e CSS sono come il duo dinamico del mondo web. HTML fornisce la struttura di base,
                     mentre CSS è il decoratore personale che rende il tuo sito decorato. 
                     Insieme, sono il segreto dietro ogni sito web che si rispetti.
                    '  />


                    <SkillImage src={imgPHP} alt='PHP' 
                    description='  PHP è il webmaster che si occupa degli affari dietro le quinte. 
                    Gestisce il lato server delle cose, 
                    come il direttore di scena che assicura che tutto funzioni senza intoppi. Un linguaggio di scripting di tutto rispetto. '  
                                />

                    <SkillImage src={imgPython} alt='Python' 
                    description='  Python è un linguaggio di programmazione 
                    back-end versatile e potente. Con una vasta gamma di librerie e framework,
                     è ampiamente utilizzato per lo sviluppo web, offrendo una sintassi 
                     chiara e pulita, rendendolo uno strumento ideale per diverse funzionalità.'  
                                />


                    <SkillImage src={imgJava} id='java' alt='java' 
                    description='Java è un linguaggio 
                    di programmazione back-end noto per la sua portabilità e versatilità.
                     Grazie alla Java Virtual Machine (JVM), 
                     può essere eseguito su diverse piattaforme, 
                    rendendolo una scelta popolare per lo sviluppo di applicazioni che richiedono interoperabilità e scalabilità'      />


                    <SkillImage src={ImgSpring} alt='Spirngboot' 
                    description="Spring Boot è come l'amico 
                    fidato che semplifica la tua vita di sviluppatore web Java. Con il suo tocco 
                    elegante di architettura MVC.
                     È praticamente l'assistente personale di lusso del mondo web, 
                     superando i problemi del precedente framework J2EE."   />

                    <SkillImage src={imgLaravel} alt='Laravel' description='Laravel è molto utilizzato dagli 
                    artigiani di PHP, come il sottoscritto. 
                    Laravel è come il barista preferito dei developer PHP. 
                    Prepara le cose con stile, 
                    rendendo il backend un luogo piacevole e accogliente.
                     È il Ferrari tra i framework PHP, veloce, elegante e sempre alla moda.'   />


                    <SkillImage src={imgReact} alt='React'  description='
                     React è una libreria JavaScript per la creazione di interfacce 
                     utente dinamiche e reattive. Affermandosi come uno degli strumenti 
                     preferiti per i Front-end Developer, si distingue per la sua efficienza nel gestire componenti riutilizzabili e per la
                    sua adozione in progetti complessi, come dimostrato dalla struttura di questo sito stesso, che è implementato utilizzando React.
                    In sintesi.
                    React è la rockstar del front-end. Fa cantare e ballare
                     i componenti come se fossero in uno spettacolo dal vivo. 
                     Se il tuo sito web è un concerto, React è la star che fa brillare il palco con la sua presenza.
                     Dopotutto è per questo che ho scelto React per il mio portfolio'       />


                </Row>
              </Col>
       </Container>
        </section>

    )
}

export default Skills
