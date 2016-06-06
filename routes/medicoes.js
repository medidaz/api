module.exports = app => {

    const Medicao = app.db.models.Medicao;
    
     app.get("/v1/medicoes/quantidade", (req, res) => {
        Medicao.count().then(count => {
            res.json({ quantidade: count });
        });
    });    
    
    app.get("/v1/medicoes", (req, res) => {

        Medicao.findAll({include: [{ all: true, nested: true }]}).then(medicoes => {
            res.json({ medicoes: medicoes });
        });
    });
    
    app.get("/v1/medicoes/alimento/:id", (req, res) => {
        Medicao.findAll({
            include: [{ all: true, nested: true }],
            where: {
                alimento_id: req.params.id
            }
        }).then(medicoes => {
            res.json({ medicoes: medicoes });
        });
    });
};
