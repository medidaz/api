module.exports = app => {

    const Fonte = app.db.models.Fonte;

    app.get("/v1/fontes/quantidade", (req, res) => {
        Fonte.count().then(count => {
            res.json({ quantidade: count });
        });
    });

    app.get("/v1/fontes", (req, res) => {

        Fonte.findAll({}).then(fonte => {
            res.json({ fonte: fonte });
        });
    });

    app.post("/v1/fonte/search", (req, res) => {
        Fonte.findAll({
            where: {
                descricao: {
                    $iLike: '%' + req.body.desc + '%'
                }
            }
        }).then(fonte => {
            res.json({ fonte: fonte });
        });
    });
};
