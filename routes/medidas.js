module.exports = app => {

    const Medida = app.db.models.medida;
    app.get("/api/medidas", (req, res) => {

        Medida.findAll({}).then(medida => {
            res.json({ medida: medida });
        });
    });

    app.post("/api/medida/search", (req, res) => {
        Medida.findAll({
            where: {
                descricao: {
                    $iLike: '%' + req.body.desc + '%'
                }
            }
        }).then(medida =>{
            res.json({ medida: medida });
        });
    });
};