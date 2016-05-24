module.exports = app => {

    const Alimento = app.db.models.Alimento;
    app.get("/api/alimentos", (req, res) => {

        Alimento.findAll({}).then(alimentos => {
            res.json({ alimentos: alimentos });
        });
    })

        .post("/api/alimento/search/:param", (req, res) => {
            Alimento.findAll({
                    where: { 
                        $iLike: '%param'
                    }
                });

        });
};