import './styles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import animation from './animation.json';

export function Congratulations() {
    
    return (
        <div id="congratulations">
            <main>
                <div id="animation">
                    <div id="message">
                        <h3>Seu formulário foi enviado com sucesso!</h3>
                        <p> Fique de olho no seu e-mail para próximas notícias <br/>
                        -Equipe JobsNet</p>                        
                    </div>
                    <Lottie animationData={animation} />
                    <br/>
                    <div id="link">
                        <Link to="/"> ⇽ Tela inicial</Link>
                    </div>                    
                </div>
                
            </main>
        </div>

    );
}


