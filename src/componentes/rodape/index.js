import React from 'react';
import './style.css';


export default function Rodape(){
    return(
        <footer id='contatos'>
            <div>
                <h3>REDES SOCIAIS</h3>
                    <figure>
                        <img src='assets/tt.png' alt='Twitter'/>

                        <figcaption>
                        <a  href='https://twitter.com/NailsonRocha_'         target='blank'>Twitter </a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src='assets/telegram.png' alt='Telegram'/>

                        <figcaption>
                        <a  href='https://t.me/theNailsonRocha'  target='blank'>Telegram</a>
                        </figcaption>
                    </figure>
                    <figure>
                        <img src='assets/whatsapp.png' alt='Whatsapp'/>

                        <figcaption>
                        <a  href='https://api.whatsapp.com/send/?phone=5574999977325&text=Eu%20sou%20Nailson%20Rocha!%20Seja%20bem-vindo!' target='blank'>whatsapp</a>
                        </figcaption>
                    </figure>
            </div>
            <div>
                <h3>QUEM SOU</h3>
                <figure>
                    <img src='assets/repositorio.png' alt='Repositorio'/>

                    <figcaption>
                    <a  href='#repositorios' >Repositórios</a>
                    </figcaption>
                </figure>
                <figure>
                    <img src='assets/in.png' alt='Linkedin'/>

                    <figcaption>
                    <a  href='https://www.linkedin.com/in/nailson-rocha-a2b993246/' target='blank'>Linkedin</a>
                    </figcaption>
                </figure>
            </div>
            <div>
                <h3>CONTATOS</h3>
                <figure>
                    <img src='assets/telefone.png' alt='Telefone'/>

                    <figcaption>
                        74 99997-7325
                    </figcaption>
                </figure>
                <figure>
                    <img src='assets/email.png' alt='Email'/>

                    <figcaption>
                        <a href="mailto:nailsonrochaoficial@gmail.com">Email</a>
                    </figcaption>
                </figure>
            </div>
        </footer>
       
    );
}