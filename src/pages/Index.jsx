const Index = () => {
return(
<div>
    <header className="header-body">
        <div className='btn_group'>
            <div className="dropdown btn2">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Type de services</a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href='Luciano_Contact.jsx'>Particulier</a></li>
                    <li><a className="dropdown-item" href="#">Proffessionnel</a></li>
                </ul>
            </div>
            <div className="dropdown ">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Demander un devis</a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href='Luciano_Contact.jsx'>Particulier</a></li>
                    <li><a className="dropdown-item" href="#">Proffessionnel</a></li>
                </ul>
            </div>
        </div>
        <nav className='navbar navbar-expand-lg '>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src='/image/logo.png' alt='logo' className="logo col-lg-4 col-md-4 col-sm-4"></img></a>
                <div className="navBar">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="menu-bar ">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a href='/' className='nav-link active card-text' aria-current="page">Acceuil</a>
                                <a href='/Categorie' className='nav-link active card-text'>Choisir un artisan</a>
                                <a href='/FicheArtisan' className='nav-link active card-text'>Nos artisans</a>
                                <a href='/Vue_404' className='nav-link active card-text'>404</a>
                                <a href='/Contact' className='nav-link active card-text'>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div className="entete col-lg-12 col-md-12 col-sm-12">
            <img src="/image/couv_1.jpg" className="couv col-lg-6 col-md-6 col-sm-6" alt="couverture"></img>
            <div className="position-relative bottom-0 start-0">
                <h1 className="affiche  col-lg-6 col-md-6 col-sm-6 text-center">Mettez en <br />avant votre identite </h1>
            </div>
            <div className="text_couv col-lg-6 col-md-6 col-sm-6">
                <h1 className="text_couv2">Decouvrer nos offres</h1>
                <div className='france'>
                    <h6>France_Contact : +33 (0)4 26 73 40 00</h6>
                </div>
                <div className="lesboutons">
                    <div className="rech-2">
                        <form className="">
                            <input type="text" placeholder="Rechercher un artisan" className="text-input-2 text-info"></input>
                            <button type="submit" className="btn-rech-2"><img src="/image/chercher.png" className="rechercher"></img></button>
                        </form>
                    </div>
                    <div className="tout-btn">
                        <a href="FicheArtisan"><button className="btn card-text">Batiment</button></a>
                        <a href="FicheArtisan"><button className="btn  card-text">Services</button></a>
                        <a href="FicheArtisan"><button className="btn  card-text">Fabrication</button></a>
                        <a href="FicheArtisan"><button className="btn  card-text">Alimentation</button></a>
                    </div>
                    <span className="text_couv3 text-danger">satisfaction apportee en 48h...</span>
                </div>
            </div>
        </div>
        <div className="rech">
            <form className="">
                <input type="text" placeholder="Rechercher un artisan" className="text-input"></input>
                <button type="submit" className="btn-rech"><img src="/image/chercher.png" className="rechercher"></img></button>
            </form>
        </div>
    </header>

    <div className="cardForm">
        <div className="corp-bienvenu">
            <div className="bienvenue-group">
                <div className="resp-bien">
                    <h1 className="titre-bienvenue">Plateforme des artisans et services!</h1>
                    <div className="bienvenu">
                        <p className="text-bienvenu col-lg-4 col-md-4 col-sm-4">Lorem Ipsum est un générateur de faux textes aléatoires. fredt Vous choisissez le nombre de paragraphes, de mots ou de listes. Vous ferder.</p>
                        <a className="navbar-brand" href="/"><img src='/image/logo.png' alt='logo' className="logo2 col-lg-4 col-md-4 col-sm-4"></img></a>
                    </div>
                </div>
                <div className="detail-bienvenu">
                    <div className="resp-titre detail-1 col-lg-4 col-md-4 col-sm-4">
                        <strong className="resp-titre">Des experts a votre service</strong>
                        <p className="resp-titre-1 text-detail-1 col-lg-7 col-md-7 col-sm-7">Lorem Ipsum est. fredt choisissez de paragraphes, de mots ou de listes hyu .</p>
                        <a href="/Contact" className="btn-detail resp-titre"><button className="btn  card-text">Voir plus -»</button></a>
                    </div>
                    <div className="resp-avis detail-1 col-lg-4 col-md-4 col-sm-4">
                        <strong>Avis des clients <br /><span><img src="/image/etoil.jpg" alt="etoil" className="etoil"></img></span> <span>9,3</span> <span className="petit">/10</span> <span>|</span> 265 avis</strong>
                    </div>
                    <div className="resp-titre-bien detail-1 col-lg-4 col-md-4 col-sm-4">
                        <strong className="resp-text-bien">Pour le particulier et le proffessionnel</strong>
                        <p className=" text-detail-2 col-lg-11 col-md-11 col-sm-11">Lorem Ipsum est. buy huior ghetru joikl hui bhu be fredt choisissez de paragraphes, de mots ou de listes hyu ipcert buiytr bghu.</p>
                        <a href="/Contact" className="btn-detai resp-titre-btn"><button className=" btn  card-text">Voir plus -»</button></a>
                    </div>
                </div>
            </div>
            <div className="image-group">
                <h2 className="titre-image">Galerie artisans et services!</h2>
                <div className="detail-image">
                    <div className="detail-1 resp-img-1 col-lg-4 col-md-4 col-sm-4">
                        <a href='/FicheArtisan'><img src="image/construction.jpg" alt="construction" className="img-const"></img></a>
                        <p className="text-img-1 fw-bold text-light">Batiment</p>
                    </div>
                    <div className="detail-1 resp-img-2 col-lg-4 col-md-4 col-sm-4">
                        <a href='/FicheArtisan'><img src="image/service_2.jpg" alt="service" className="img-const"></img></a>
                        <p className="text-img-1 fw-bold text-light">Services</p>
                    </div>
                    <div className="detail-1 resp-img-3 col-lg-4 col-md-4 col-sm-4">
                        <a href='/FicheArtisan'><img src="image/fabrication2.jpg" alt="fabrication" className="img-const"></img></a>
                        <p className="text-img-1 fw-bold text-light">Fabrication</p>
                    </div>
                    <div className="detail-1 resp-img-4 col-lg-4 col-md-4 col-sm-4">
                        <a href='/FicheArtisan'><img src="image/aliment3.jpg" alt="alimentation" className="img-const"></img></a>
                        <p className="text-img-1 fw-bold text-light">Alimentation</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="info">
        <div className="detail-1 col-lg-4 col-md-4 col-sm-4">
            <p className="text-detail-info col-lg-10 col-md-10 col-sm-10 text-light">Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset, Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum, quae per multas difficilisque causas adfore iam sperabatur, non ut mos est principibus, quorum diffusa potestas localibus subinde medetur aerumnis, disponi quicquam statuit vel ex provinciis alimenta transferri conterminis, sed consularem Syriae.</p>
        </div>
        <div className="detail-1 col-lg-4 col-md-4 col-sm-4">
            <img src="/image/triangle.webp" alt="triange" className="triangle"></img>
        </div>
        <div className="detail-1 col-lg-4 col-md-4 col-sm-4">
            <p className="text-detail-info resp-titre-nul col-lg-10 col-md-10 col-sm-10 text-light">Post haec Gallus Hierapolim profecturus ut expeditioni specie tenus adesset, Antiochensi plebi suppliciter obsecranti ut inediae dispelleret metum, quae per multas difficilisque causas adfore iam sperabatur, non ut mos est principibus, quorum diffusa potestas localibus subinde medetur aerumnis, disponi quicquam statuit vel ex provinciis alimenta transferri conterminis, sed consularem Syriae.</p>
            <a href="/FicheArtisan" className="btn-detai-info"><button className="btn  card-text">Consulter nos offres -»</button></a>
        </div>
    </div>

    <footer className="foot-body ">
        <di className="titre-group">
            <div className="resp-foot-1 titre-foot">
                <h6 className="info-foot4">Politique d'utilisation</h6>
                <ul>
                    <il className="detail-foot1"><a href='/Mentionlegale' className='nav-link  card-text' aria-current="page">Mention legale</a></il>
                    <il className="detail-foot1"> <a href='/Politique' className='nav-link  card-text'>Donnees personnelles</a></il>
                    <il className="detail-foot1"><a href='/Accessibilite' className='nav-link  card-text'>Accessibilite</a></il>
                    <il className="detail-foot1"><a href='/Cookis' className='nav-link  card-text'>Cookis</a></il>
                </ul>
            </div>

            <div className="resp-foot-2 titre-foot">
                <h6 className="info-foot3">Menu</h6>
                <ul>
                    <il className="detail-foot"><a href='/' className='nav-link  card-text' aria-current="page">Acceuil</a></il>
                    <il className="detail-foot"> <a href='/Categorie' className='nav-link  card-text'>Choisir un artisan</a></il>
                    <il className="detail-foot"><a href='/FicheArtisan' className='nav-link  card-text'>Nos artisans</a></il>
                    <il className="detail-foot"><a href='/Vue_404' className='nav-link  card-text'>404</a></il>
                    <li className="detail-foot"><a href='/Contact' className='nav-link  card-text'>Contact</a></li>
                </ul>
            </div>

            <div className="resp-foot-3 titre-foot">
                <h6 className="info-foot2">Suiver nous</h6>
                <ul className="socio">
                    <li><a href="/"><img src="/image/facebook.png" alt="facebook" className="sociaux"></img></a></li>
                    <li><a href="/"><img src="/image/linkedin.png" alt="linkedin" className="sociaux"></img></a></li>
                    <li><a href="/"><img src="/image/youtube.png" alt="youtube" className="sociaux"></img></a></li>
                    <li><a href="/"><img src="/image/instagram.png" alt="insta" className="sociaux"></img></a></li>
                </ul>
                <a href="/Contact" className="btn-foot"><button className="btn card-text">Faite votre demande -»</button></a>
            </div>

            <div className="resp-foot-4 titre-foot">
                <h6 className="info-foot">Adresse de Lyon</h6>
                <ul className="adresse-foot">
                    <il>101 cours Charlemagne </il>
                    <il>CS 20033</il>
                    <il>69269 LYON CEDEX 02 </il>
                    <il>France</il>
                    <il>+33 (0)4 26 73 40 00</il>
                </ul>
            </div>
        </di>
    </footer>

</div>
)
}
export default Index;