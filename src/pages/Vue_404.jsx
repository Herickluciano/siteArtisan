const Vue_404 = () => {
return(
<div>

    <div className="page-00  row shadow p-3 mb-5 bg-body rounded col-lg-8 col-md-8 col-sm-8">
        <h6 className="text-404 text-danger">« La page que vous avez demandé est en cour de realisation … »</h6>
        <a href="/"><button className="btn fw-bold card-text btn-center">Retourne ici</button></a>
        <img src="/image/404.jpeg" alt="vue-404" className="vue-404"></img>
    </div>

</div>
)
}



export default Vue_404;