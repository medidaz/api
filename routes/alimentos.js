module.exports = app => {

    const Alimento = app.db.models.Alimento;
    app.get("/v1/alimentos/quantidade", (req, res) => {
        Alimento.count().then(count => {
            res.json({ quantidade: count });
        });
    });    
    
    app.get("/v1/alimentos", (req, res) => {

        Alimento.findAll({}).then(alimentos => {
            res.json({ alimentos: alimentos });
        });
    });

    app.post("/v1/alimento/search", (req, res) => {
        Alimento.findAll({
            where: {
                descricao: {
                    $iLike: '%' + req.body.desc + '%'
                }
            }
        }).then(alimentos =>{
            res.json({ alimentos: alimentos });
        });
    });

    app.get("/v1/alimento/:id", (req, res) => {
        Alimento.findAll({
            include: [{ all: true, nested: true }],
            where: {
                id: req.params.id
            }
        }).then(alimento => {
            res.json({ alimento: alimento });
        });
    });
};