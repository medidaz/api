module.exports = app => {

    const Alimento = app.db.models.Alimento;
    app.get("/api/alimentos", (req, res) => {

        Alimento.findAll({}).then(alimentos => {
            res.json({ alimentos: alimentos });
        });
    });

    app.post("/api/alimento/search", (req, res) => {
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
};