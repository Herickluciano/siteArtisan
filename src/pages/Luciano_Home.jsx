
const Luciano_Home = () => {
    return(
        <div>
            <div className="entete col-lg-12 col-md-12 col-sm-12">   
            <img src="img/hero-bg.jpg" className="couv col-lg-12 col-md-12 col-sm-12" alt="couverture"></img>
            <div className="position-relative bottom-0 start-0">
            <h1 className="affiche  col-lg-6 col-md-6 col-sm-6 text-center">Bonjour, je suis John DOE developpeur full stack</h1>
            <button className="btn fw-bold card-text">En Savoire plus</button>
            </div>
            </div> 
            <div className="cardForm container row shadow p-3 mb-5 bg-body rounded col-lg-12 col-md-12 col-sm-12">
            <div className="col-sm-8 col-md-6 col-md-6 ">
            <div className="carddetail">
            <div className="card-body">
            <h5 className="card-title text-start fw-bold">A propos</h5>
            <hr className="line"></hr>
            <img src="images/john-doe-about.jpg" className="col-lg-12 col-md-8 col-sm-8" alt="john"></img>
            <p className="card-text col-lg-12 col-md-12 col-sm-12">Lorem Ipsum est un générateur de faux textes aléatoires. Vous choisissez le nombre de paragraphes, de mots ou de listes.
            Vous obtenez alors un texte aléatoire que vous pourrez ensuite utiliser librement dans vos maquettes.
            exte généré est du pseudo latin et peut donner l'impression d'être du vrai.</p>
            </div>
            </div>
            </div>

            <div className="col-sm-6 col-md-6 col-sm-6 ">
            <div className="carddetail">
            <div className="card-body">
            <h5 className="card-title text-start fw-bold">Mes Competences</h5>
            <hr className="line"></hr>
            <div className="competence">
            <div className="detailComp">
            <h5 className="card-title text-start ">HTML 90%</h5>
            <div className="progress">
            <div className="style-1 progress-bar progress-bar-striped bg-danger" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="detailComp">
            <h5 className="card-title text-start ">CSS3 80%</h5>
            <div className="progress">
            <div className="style-2 progress-bar progress-bar-striped bg-info" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="detailComp">
            <h5 className="card-title text-start ">JAVASCRIPT 70%</h5>
            <div className="progress">
            <div className="style-3 progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="detailComp">
            <h5 className="card-title text-start ">PHP 60%</h5>
            <div className="progress">
            <div className="style-4 progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
            <div className="detailComp">
            <h5 className="card-title text-start ">REACT 50%</h5>
            <div className="progress">
            <div className="style-5 progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            </div>
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
export default Luciano_Home;
  