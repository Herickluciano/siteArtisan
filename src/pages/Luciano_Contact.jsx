
const Luciano_Contact = () => {
    return(
        <div>
            
            <div className="cardForm container row shadow p-3 mb-5 bg-body rounded col-lg-12 col-md-12 col-sm-12">
            <h5 className="card-title text-center fw-bold">Contact</h5>
            <p className="card-text text-center">Merci de me contacter en vue d'un entretien ou d'collaboration future, merci de remplir le formulaire de contact</p>
            <hr className="line"></hr>
            <div className="col-sm-8 col-md-6 col-md-6 ">
            <div className="carddetail">
            <div className="card-body">
            <h5 className="card-title text-start fw-bold">Formulaire de contact</h5>
            <hr className="line"></hr>

            <form method="" action="">
            <div className="nom-prenom">
            <div className="full">
            <input type="text"  placeholder="Votre Nom" className="rounded-2"></input>
            </div>
            </div>

            <div className="full">
            <input type="text" placeholder="Votre adresse e-mail" className="rounded-2"></input>
            </div>

            <div className="full">
            <input type="text"  placeholder="Votre numero de Téléphone" className="rounded-2"></input>
            </div>
            <div className="full">
            <input type="text"  placeholder="Votre Sujet" className="rounded-2"></input>
            </div>

            <div className="full">
            <textarea type="text" placeholder="Message" ></textarea>
            </div>

            <div className="submit">
            <input className="send-btn fw-bold rounded-2 btn-info"  type="submit"  value="Envoyer"></input>
            </div>

           </form>
            </div>
            </div>
            </div>

            <div className="col-sm-6 col-md-6 col-sm-6 ">
            <div className="carddetail">
            <div className="card-body">
            <h5 className="card-title text-start fw-bold">Mes coordonnees</h5>
            <hr className="line"></hr>
            <div className="card-adresse">
           <div className="card-body">
            <div className="card-deplacer-3">
           <ul >
           <li className="card-title fw-bold">John Doe</li>
            <li className="card-text" ><a href=""><img src="img/route-24.png" alt="rue" className="route-24"></img></a>40 Rue Laure Diebol</li>
            <li className="card-text"><a href=""> <img src="img/location-24.png" alt="localisation" className="locale-24"></img></a>69009 Lyon France</li>
            <li className="card-text"><a href=""> <img src="img/telephone-24.png" alt="telephone" className="telephone-24"></img></a>10 2'0 30 40 50</li>
            <li className="card-text"><a href=""> <img src="img/mail-24.png" alt="mail" className="mail-24"></img></a>johndoe@gmail.com</li>
           </ul>
           </div>
           </div>
           </div>
            <div className="competence">
            
            <div id="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7870.775233290362!2d4.789366415929852!3d45.77641527175094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon%2C%20France!5e0!3m2!1sfr!2sit!4v1743681960218!5m2!1sfr!2sit" className=" map col-lg-12 col-md-8 col-sm-8" width="600" height="450" >
                </iframe></div>

            
            </div>
            </div>
            </div>
            </div>
           </div>  
           
           <footer className=" foot">
           <div className="card-group">
           <div className="card">
           <div className="card-body">
            <div className="card-deplacer">
            <h5 className="card-title">John Doe</h5>
            <ul>
            <li className="card-text">40 Rue Laure Douchess</li>
            <li className="card-text">00000 Lyon France</li>
            <li className="card-text">00 00 00 00 00</li>
            <li className="card-text">johndoe@gmail.com</li>
           </ul>
           </div>
           <div className="reseau">
          <a href=""> <img src="img/face.png" alt="facebook" className="sociaux"></img></a>
          <a href=""> <img src="img/github.png" alt="github"className="sociaux" ></img></a>
          <a href=""> <img src="img/twitter.png" alt="twitter" className="sociaux"></img></a>
           </div>
           </div>
           </div>
           <div className="card">
           <div className="card-body">
           <div className="card-deplacer-2">
           <h5 className="card-title">Liens Utiles</h5>
           <ul >
            <li className="card-text"><a href="#">Acceuil</a></li>
            <li className="card-text"><a href="#">Services</a></li>
            <li className="card-text"><a href="#">Portfolio</a></li>
            <li className="card-text"><a href="#">Mes contactes</a></li>
            <li className="card-text"><a href="#">Mention legale</a></li>
           </ul>
           </div>
           </div>
           </div>
           <div className="card">
           <div className="card-body">
            <div className="card-deplacer-3">
           <h5 className="card-text">mes realisations</h5>
           <ul >
            <li className="card-text" >Fast food</li>
            <li className="card-text">Creation sites web</li>
            <li className="card-text">Creation App</li>
            <li className="card-text">Seo</li>
            <li className="card-text">Creation logiciel</li>
            <li className="card-text">Base de Donnee</li>
           </ul>
           </div>
           </div>
           </div>
            </div>
            <span className="propriete">vvvvvvvvvvvv</span>
           </footer>
        </div>
    )
}



export default Luciano_Contact;