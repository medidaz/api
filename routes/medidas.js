module.exports = app => {

    const Medida = app.db.models.Medida;

    app.get("/v1/medidas/quantidade", (req, res) => {
        Medida.count().then(count => {
            res.json({ quantidade: count });
        });
    });

    app.get("/v1/medidas", (req, res) => {
        Medida.findAll({}).then(medida => {
            res.json({ medida: medida });
        });
    });

    app.post("/v1/medida/search", (req, res) => {
        Medida.findAll({
            where: {
                descricao: {
                    $iLike: '%' + req.body.desc + '%'
                }
            }
        }).then(medida => {
            res.json({ medida: medida });
        });
    });
};
