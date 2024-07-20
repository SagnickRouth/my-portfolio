import LogoTitle from '../../assets/images/logo-s.png'
import {useState} from 'react';
import {Link} from 'react-router-dom'
import Logo from './Logo'
import './index.scss';
const Home = () => {
    const [letterClass, settleClass] = useState('text-animate')
    const nameArray = ['a','g','n','i','c','k']
    const jobArray = ['f','u','l','l',' ','s','t','a','c','k',' ','d','e','v','e','l','o','p','e','r']
    
    return (
        <div className="container home-page">
            <div className= "text-zone">
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt="developer" />
                agnick
                <br/>
                Full Stack Developer
                </h1>
                <h2>
                    Frontend Developer
                </h2>
                <Link to ="/contact" className= 'flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>

        </div>

    ); 
}

export default Home