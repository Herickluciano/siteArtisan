const Categorie = () => {
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
    </header>
    <div className="titre-categ">
        <h1 className="titre-bienvenue">Liste des artisans selon la catégorie!</h1>
    </div>

    <div className="categ-group">
        <div className="categ-person col-lg-3 col-md-3 col-sm-3">
            <a href='/Artisan_1'><img src="image/artisan.png" alt="artisan" className="img-const"></img></a>
            <p>Nom : : Lorem Ipsum</p>
            <p>Note :
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
            </p>
            <p>Spécialité : Lorem Ipsum</p>
            <p>Localisation : Lorem Ipsum</p>
        </div>
        <div className="categ-person col-lg-3 col-md-3 col-sm-3">
            <p><a href='/Artisan_2'><img src="image/aliment3.jpg" alt="alimentation" className="img-const"></img></a></p>
            <p>Nom : </p>
            <p>Note :
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
            </p>
            <p>Spécialité : Lorem Ipsum</p>
            <p>Localisation : Lorem Ipsum</p>
        </div>
        <div className="categ-person col-lg-3 col-md-3 col-sm-3">
            <p><a href='/Artisan_3'><img src="image/construction.jpg" alt="cosrt" className="img-const"></img></a></p>
            <p>Nom : Lorem Ipsum</p>
            <p>Note :
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
            </p>
            <p>Spécialité : Lorem Ipsum</p>
            <p>Localisation: Lorem Ipsum </p>
        </div>
        <div className="categ-person col-lg-3 col-md-3 col-sm-3">
            <p><a href='/Artisan_4'><img src="image/fabrication2.jpg" alt="alimentation" className="img-const"></img></a></p>
            <p>Nom : Lorem Ipsum </p>
            <p>Note :
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
                <img src="/image/etoil.jpg" alt="etoil" className="etoil2"></img>
            </p>
            <p>Spécialité : Lorem Ipsum</p>
            <p>Localisation : Lorem Ipsum</p>
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
export default Categorie;