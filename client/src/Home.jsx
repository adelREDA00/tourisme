import React from 'react'
import { useState,useEffect } from 'react';
import about from "./assets/plane.jpg"
import logo from "./assets/HOUSE.svg"
import { Icon } from '@iconify/react';
import Card from './comp/Card.jsx';
import axios from 'axios';
import Aform from './comp/Aform.jsx';
import Sform from './comp/Sform.jsx';
import { Link } from 'react-router-dom';


const Home = () => {


  const [isActive, setIsActive] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);


  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  
  const toggleBtn = (e) => {

    if(e.currentTarget.dataset.userId == "1" ){
      setIsActiveBtn(true)
    }else{
      setIsActiveBtn(false)
    }
    // setIsActiveBtn(!isActive);
  };

  const [data, setData] = useState([]);
 // Fetch data from your API endpoint
 const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/flight'); 
    setData(response.data); // Set the retrieved data in the state
  } catch (error) {
    console.error('Error fetching data:', error.response.data);
  }
};


const handlePostSuccess = () => {
  fetchData(); // Refetch data after successful POST
};

  useEffect(() => {
    fetchData(); // Invoke the fetchData function when the component mounts
  }, []); // Empty dependency array means this effect runs only once (on mount)
console.log(data);
  return (
    <body id="top">
        <header className="header" data-header>
          <div className="container">

            <a href="#" className="logo">
              <img className="L" src={logo} alt="" />
              Avia
            </a>
       
            <nav className={`navbar container ${isActive ? 'active' : '' }`} data-navbar>
              <ul className="navbar-list">

                <li>
                  <a href="#" className="navbar-link" data-nav-link>Accueil</a>
                </li>

                <li>
                  <a href="#vl" className="navbar-link" data-nav-link>Vols</a>
                </li>

                <li>
                  <a href="#p" className="navbar-link" data-nav-link>À propos</a>
                </li>

                <li>
                  <a href="#c" className="navbar-link" data-nav-link>Contact</a>
                </li>

              </ul>
            </nav>

            <Link className="btn btn-secondary" to={`/register`} >
            Inscription
            </Link>

            

            <button onClick={toggleMenu} className="nav-toggle-btn" aria-label="Toggle menu" data-nav-toggler>
              {/* <ion-icon name="menu-outline" aria-hidden="true" className="menu-icon"></ion-icon>
      <ion-icon name="close-outline" aria-hidden="true" className="close-icon"></ion-icon> */}
          
            
            {isActive ? <Icon icon="line-md:menu-to-close-transition" />  :      <Icon icon="ion:menu-outline" /> }
            </button>

          </div>
        </header>





        <main>
          <article className="article">



            <section className="section hero" aria-label="hero">
              <div className="container">

                <div className="hero-bg">
                  <div className="hero-content">

                    <h1 className="h1 hero-title">
                      Nous vous aiderons à trouver votre <span className="span"> merveilleuse </span> maison
                    </h1>

                    <p className="hero-text">
                      Une excellente plateforme pour acheter, vendre et louer vos biens immobiliers sans agent ni commission.
                    </p>

                  </div>
                </div>

                <div className="hero-form-wrapper">
                  <div className="form-tab">

                    <button onClick={toggleBtn} className= {`tab-btn ${isActiveBtn ? 'active' : '' }`}    data-user-id="1" >Acheter</button>
                    <button onClick={toggleBtn}  className=  {`tab-btn ${isActiveBtn ? '' : 'active' }`}    data-user-id="2"><Icon icon="ion:add-outline" /> Add</button>
                    {/* <button className="tab-btn" data-tab-btn>Louer</button> */}

                  </div>

                  {isActiveBtn ? <Sform /> : <Aform handlePostSuccess={handlePostSuccess} />}
                </div>

              </div>
            </section>



            <section id='vl' className="section property" aria-label="property">
              <div className="container">

                <h2 className="h2 section-title">Découvrez nos Vols Disponibles </h2>

                <p className="section-text">
                Parcourez notre sélection de vols proposés par diverses compagnies aériennes
                </p>

                <ul className="property-list">

                

                  {data.slice().reverse().map((item,index) => (
                     <Card  fdata={item}  key={index}/>
                   ))}

                </ul>

              </div>
            </section>



            <section className="section about" aria-label="about">
              <div className="container">

                <div className="about-banner img-holder" style={{ width: '600px', height: '700px' }}>
                  <img src={about} width="600" height="700" loading="lazy" alt="about banner"
                    className="img-cover" />

                  {/* <button className="play-btn" aria-label="play video">
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                
                  </button> */}
                </div>

                <div className="about-content">

                  <h2 className="h2 section-title">Efficacité. Transparence. Contrôle.
                  </h2>

                  <p className="section-text">
                  Une plateforme en ligne spécialisée dans la réservation et l'achat de billets d'avion. Elle offre aux utilisateurs la possibilité de rechercher, comparer et réserver des vols vers différentes destinations. Cette plateforme propose une gamme de compagnies aériennes, d'horaires de vol et de tarifs, offrant ainsi aux voyageurs la flexibilité de choisir le vol qui correspond le mieux à leurs besoins et préférences
                  </p>

                  <a href="#" className="btn btn-primary">Learn More</a>

                </div>

              </div>
            </section>






            <section id='p' className="section service" aria-label="service">
              <div className="container">

                <h2 className="h2 section-title">Comment ça fonctionne ?</h2>

                <p className="section-text">
                En quelques étapes simples, réservez vos billets d'avion rapidement et facilement avec notre plateforme dédiée aux voyages !
                </p>

                <ul className="service-list">

                  <li>
                    <div className="service-card">

                      <div className="card-icon">
                      <Icon className='test' icon="material-symbols-light:search" />
                      </div>

                      <h3 className="h3 card-title">Recherche et Sélection</h3>

                      <p className="card-text">
                      Les utilisateurs saisissent leur destination, leurs dates de voyage et leurs préférences. La plateforme affiche une liste de vols disponibles avec différentes options de compagnies aériennes, d'horaires et de tarifs.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="service-card">

                      <div className="card-icon">
                      <Icon className='test' icon="pajamas:comparison" />
                      </div>

                      <h3 className="h3 card-title">Comparaison et Réservation</h3>

                      <p className="card-text">
                      Les voyageurs comparent les détails des vols, y compris les tarifs, les horaires et les options de sièges. Ils sélectionnent le vol qui correspond le mieux à leurs besoins, puis procèdent à la réservation en fournissant les informations nécessaires et en effectuant le paiement.
                      </p>

                    </div>
                  </li>

                  <li>
                    <div className="service-card">

                      <div className="card-icon">
                      <Icon className='test' icon="icon-park-outline:buy" />
                      </div>

                      <h3 className="h3 card-title">Confirmation et Itinéraire </h3>

                      <p className="card-text">
                      Une fois la réservation effectuée, les utilisateurs reçoivent une confirmation par e-mail avec leur itinéraire détaillé, comprenant les informations sur le vol, les horaires de départ et d'arrivée, ainsi que d'autres détails pertinents pour leur voyage.
                      </p>

                    </div>
                  </li>

                </ul>

              </div>
            </section>












            <section id='c' className="section contact" aria-label="contact">
              <div className="container">

                <h2 className="h2 section-title">Have Question ? Get in touch!</h2>

                <p className="section-text">
                réservez vos billets d'avion rapidement et facilement
                </p>

                <button className="btn btn-primary">
                  <ion-icon name="call-outline"></ion-icon>

                  <span className="span">Contact us</span>
                </button>

              </div>
            </section>




            <section className="newsletter" aria-label="newsletter">
              <div className="container">

                <div className="wrapper">
                  <h2 className="h2 section-title">Subscribe to Newsletter!</h2>

                  <p className="section-text">Subscribe to get latest updates and information.</p>
                </div>

                <form action="" className="newsletter-form">
                  <input type="email" name="email_address" placeholder="Enter your email :" aria-label="Enter your email"
                    required className="email-field" />

                  <button type="submit" className="btn btn-secondary">Subscribe</button>
                </form>

              </div>
            </section>

          </article>
        </main>





        <footer className="footer">

          <div className="footer-top">
            <div className="container">

              <div className="footer-brand">

                <a href="#" className="logo">
                  <ion-icon name="business-outline"></ion-icon> Avia
                </a>

                <p className="footer-text">
                  {/*  */}

                  Taki eddin 
                </p>

              </div>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">About us</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Services</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Pricing</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Blog</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Login</span>
                  </a>
                </li>

              </ul>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Useful Links</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Terms of Services</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Privacy Policy</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Listing</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    <ion-icon name="chevron-forward"></ion-icon>

                    <span className="span">Contact</span>
                  </a>
                </li>

              </ul>

              <ul className="footer-list">

                <li>
                  <p className="footer-list-title">Contact Details</p>
                </li>

                <li className="footer-item">
                  <ion-icon name="location-outline"></ion-icon>

                  <address className="address">
                    DZ<br />
                    tlemcen 13,<br />

                    <a href="#" className="address-link">View on Google map</a>
                  </address>
                </li>

                <li className="footer-item">
                  <ion-icon name="mail-outline"></ion-icon>

                  <a href="mailto:contact@example.com" className="footer-link">contact@example.com</a>
                </li>

                <li className="footer-item">
                  {/* <ion-icon name="call-outline"></ion-icon> */}

                  <a href="tel:+152534468854" className="footer-link">+152 534-468-854</a>
                </li>

              </ul>

            </div>
          </div>


          <div className="footer-bottom">
            <div className="container">

              <p className="copyright">
                &copy; 2022 Realvine. All Right Reserved by <a href="#" className="copyright-link">Toumi Reda</a>.
              </p>

              <ul className="social-list">

                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-facebook"></ion-icon> */}
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-instagram"></ion-icon> */}
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-twitter"></ion-icon> */}
                  </a>
                </li>

                <li>
                  <a href="#" className="social-link">
                    {/* <ion-icon name="logo-linkedin"></ion-icon> */}
                  </a>
                </li>

              </ul>

            </div>
          </div>

        </footer>





{/* 
        <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
          <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
        </a> */}






    </body>
  )
}

export default Home