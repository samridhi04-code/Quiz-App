import React , {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () =>(
    <Fragment>
        <Helmet> <title>Quiz App - Home</title></Helmet>
        <div id="Home">
            <section>
                <div>
                    <span className='mdi mdi-cube-outline mdi-48px'></span>
                </div>
                <h1>Quiz App</h1>
                <div className='play-button-container'>
                    <ul className='list'>
                        <li> <Link className='play-button' to="/play/instructions">Play</Link></li>
                    </ul>
                </div>
                <div className='auth-container'>
                <Link className='auth-buttons' id='login-button' to="/login">Login</Link>
                <Link className='auth-buttons' id='register-button' to="/register">Register</Link>
                </div>
            </section>

        </div>
    </Fragment>
);


export default Home;
