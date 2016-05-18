module.exports = app =>{
    
    const Alimentos = app.db.models.Alimentos;
    
    app.get("/alimentos", (req, res)=>{
        
        Alimentos.findAll({}).then( alimentos => {
            res.json({alimentos:alimentos});            
        } );
    });
};