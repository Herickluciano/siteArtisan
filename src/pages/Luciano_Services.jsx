
const Luciano_Services = () => {
    return(
        <div>
            <div className="entete col-lg-12 col-md-12 col-sm-12">   
            <img src="https://github.com/Herickluciano/portfolio/blob/main/public/images/banner.jpg?raw=true" className="couv-2 col-lg-12 col-md-12 col-sm-12" alt="couverture"></img>
            </div> 
            <div className="cardForm container row shadow p-3 mb-5 bg-body rounded col-lg-12 col-md-12 col-sm-12">
            <h5 className="card-title text-center fw-bold">Mon offre de services</h5>
            <p className="card-text text-center">Voici les prestation sur lesquelles je peur intevenir.</p>
            <hr className="line"></hr>
           <div className="col-sm-4 col-md-4 col-md-4 ">
            <div className="carddetail">
            <div className="card-body border border-1">
            <img src="https://github.com/Herickluciano/portfolio-app/blob/main/public/img/pince.png?raw=true" className="recherche" alt="pince"></img>
            <h5 className="card-title text-center fw-bold">UX Design</h5>
            <p className="card-text col-lg-12 col-md-12 col-sm-12">Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes.
            Vous obtenez alors un text.</p>
            </div>
            </div>
            </div>
            <div className="col-sm-4 col-md-4 col-md-4 ">
            <div className="carddetail">
            <div className="card-body border border-1">
            <img src="https://github.com/Herickluciano/portfolio-app/blob/main/public/img/developper.png?raw=true" className="recherche" alt="developpeur"></img>
            <h5 className="card-title text-center fw-bold">Developpeur Web</h5>
            <p className="card-text col-lg-12 col-md-12 col-sm-12">Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes.
            Vous obtenez alors un text.</p>
            </div>
            </div>
            </div>
            <div className="col-sm-4 col-md-4 col-md-4 ">
            <div className="carddetail">
            <div className="card-body border border-1">
            <img src="https://github.com/Herickluciano/portfolio-app/blob/main/public/img/recherche.png?raw=true" className="recherche" alt="recherche"></img>
            <h5 className="card-title text-center fw-bold">Referencement</h5>
            <p className="card-text col-lg-12 col-md-12 col-sm-12">Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes.
            Vous obtenez alors un text.</p>
            </div>
            </div>
            </div>
           </div>  
           
           <footer className=" foot">
           <div className="card-group">
           <div className="card">
           <div className="card-footer">
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
           <a href="/"> <img src="https://github.com/Herickluciano/portfolio-app/blob/main/public/img/face.png?raw=true" alt="facebook" className="sociaux"></img></a>
          <a href="/"> <img src="https://github.com/Herickluciano/portfolio-app/blob/main/public/img/github.png?raw=true" alt="github"className="sociaux" ></img></a>
          <a href="/"> <img src="https://github.com/Herickluciano/portfolio-app/blob/main/public/img/twitter.png?raw=true" alt="twitter" className="sociaux"></img></a>
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
           <h5 className="card-text">mes realisations effectuer</h5>
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
           </footer>
        </div>
    )
}



export default Luciano_Services;