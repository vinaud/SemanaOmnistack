import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import {FiArrowLeft} from 'react-icons/fi';
import {Link} from 'react-router-dom';

export default function NewIncident()
{
    return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be the Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolvê-lo</p>
                <Link className ="back-link" to="/profile"> <FiArrowLeft size={16} color = "#e02041"/> Voltar para Home</Link>
            </section>

            <form>
                <input placeholder="Título do caso"/>
                <textarea placeholder="Descrição"/>
                <input placeholder="Valor em reais"/>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}