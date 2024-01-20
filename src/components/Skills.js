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


const SkillImage = ({
    src, alt, description
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
            {showDescription && <p className='img-description'>{description}</p>}
        </div>
    )
}
function Skills() {
    return (
        <div className='bg-dark'>
                <Row className='d-flex flex-wrap scroll-skills'>

                    <SkillImage src={ImgMySQL} alt='MySQL' 
                    description='MySQL è spesso utilizzato per ottimizzare i database'  />
                    <SkillImage src={ImgJs} alt='Js'
                    description='JavaScript è molto utilizzato '        />
                    <SkillImage src={ImgHtmlCss} alt='HTML CSS' description='Per la struttura base di un sito web'  />
                    <SkillImage src={imgPHP} alt='PHP' 
                    description=' Un ottimo linguaggio per lo sviluppo di siti web 
                    per la gestione del server '  
                                />
                    <SkillImage src={imgJava} alt='java' description='Java è un ottimo linguaggio back-end
                    ed è molto versatile. Diventò famoso grazie alla JVM '         />
                    <SkillImage src={ImgSpring} alt='Spirngboot' description='Spring Boot è un Framework 
                    per costruire siti web con artchitettura MVC, superando il noto J2EE'   />
                    <SkillImage src={imgLaravel} alt='Laravel' description='Laravel è molto utilizzato dagli 
                    artigiani di PHP, come il sottoscritto, lo considero uno dei migliori Framewrok
                    per il backend'   />
                    <SkillImage src={imgReact} alt='React'  description=' Si tratta di uno strumento che esprime tutte le potenzialità di 
                    javascript. Infatti, è uno dei linguaggi preferiti per i Front end developer, 
                    sapevi che questo sito è strutturato con React? '       />

                </Row>
        </div>

    )
}

export default Skills
