module.exports = app => {

    const Fonte = app.db.models.Fonte;
    app.get("/api/fonte", (req, res) => {

        Fonte.findAll({}).then(fonte => {
            res.json({ fonte: fonte });
        });
    });

    app.post("/api/fonte/search", (req, res) => {
        Fonte.findAll({
            where: {
                descricao: {
                    $iLike: '%' + req.body.desc + '%'
                }
            }
        }).then(fonte =>{
            res.json({ fonte: fonte });
        });
    });
};