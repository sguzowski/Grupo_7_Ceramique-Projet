function isLoguedMiddleware(req,res,next){
    if(req.session.usuarioLogueado){
        return res.redirect('user-detail'); //deberia ir a la pagina del perfil
    }
    next();
}

module.exports = isLoguedMiddleware;
