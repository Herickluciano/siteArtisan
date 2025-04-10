
const Luciano_Mentions_legal1 = () => {
    return(
        
        <div>
        <div className="entete col-lg-12 col-md-12 col-sm-12">   
        <img src="images/banner.jpg" className="couv-2 col-lg-12 col-md-12 col-sm-12" alt="couverture"></img>
        <div className="position-relative bottom-0 start-0">
        
        </div>
        </div> 
        <div className="cardForm container row shadow p-3 mb-5 bg-body rounded col-lg-12 col-md-12 col-sm-12">
        <h5 className="card-title text-center fw-bold">Mention legales</h5>
        <hr className="line"></hr>
        <select class="form-select" aria-label="Default select example">
        <option selected>Editeur de site</option>
        <option value="1">40 Rue Laure Douchess</option>
        <option value="1">00000 Lyon France</option>
        <option value="1">00 00 00 00 00</option>
        <option value="1">johndoe@gmail.com</option>
        </select>
        <select class="form-select" aria-label="Default select example">
        <option selected>Hebergeur</option>
        <option value="1">Alwaysdata</option>
        <option value="2">91 Rue du Faubourg Saint-Honore 75008 Paris</option>
        <option value="3"><a href="www.alwaysdata.com">www.alwaysdata.com</a></option>
        </select>
        <select class="form-select" aria-label="Default select example">
        <option selected>Crdedit</option>
        <option value="1">Se site a ete realise  par John Dae etudiant au <a href="https://clienti.cef-farma.com/">Centre Europeen de Formation</a></option>
        <option value="2">Lorem Ipsum est un générateur de faux textes aléatoires</option>
        <option value="3">Lorem Ipsum est un générateur de faux textes aléatoires</option>
        </select>
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



export default Luciano_Mentions_legal1;