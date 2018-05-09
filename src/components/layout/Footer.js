import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from './index.scss';



class FooterCopyright extends Component {
    render() {
        return (
            <div className={styles.copyright}>
                <p>© 2018 Copyright Text </p>
            </div>
        );
    }
}

function Logo() {
    return(
        <div className={styles.col3}>
            <h2 className="logo"><Link to='/'> SITE</Link></h2>
        </div>
    );
}

function GetStarted() {
    return(
        <div className={styles.col2}>
            <h5>Get started</h5>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><a href="/">Sign up</a></li>
                <li><a href="/">Downloads</a></li>
            </ul>
        </div>
    );
}

function AboutUs() {
    return(
        <div className={styles.col2}>
            <h5>About us</h5>
            <ul>
                <li><Link to='/about'>Company Information</Link></li>
                <li><Link to='/contact'>Contact us</Link></li>
                <li><a href="/">Reviews</a></li>
            </ul>
        </div>
    );
}

function Support() {
    return(
        <div className={styles.col2}>
            <h5>Support</h5>
            <ul>
                <li><a href="/">FAQ</a></li>
                <li><a href="/">Help desk</a></li>
                <li><a href="/">Forums</a></li>
            </ul>
        </div>
    );
}

function ButtonContactUs() {
    return (<button type="button" className="btn btn-default">Contact us</button>);
}

const Gadget = () => (
    <div>
        <FontAwesomeIcon icon="check-square"/>
        <FontAwesomeIcon icon="rocket"/>
        <FontAwesomeIcon icon={["fab", "facebook"]}/>
        <FontAwesomeIcon icon={["fab", "google"]}/>
    </div>
)

function ContactUs() {
    return(
        <div className={styles.col3}>
            <FontAwesomeIcon icon={["fab", "apple"]} />
            <Gadget />
            <ButtonContactUs/>
        </div>
    );
}

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <Logo/>
                <GetStarted/>
                <AboutUs/>
                <Support/>
                <ContactUs/>
                <FooterCopyright/>
            </footer>
        );
    }
}
