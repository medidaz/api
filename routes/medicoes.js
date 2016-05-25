module.exports = app => {

    const Medicoes = app.db.models.medicoes;
    app.get("/api/medicoes/alimento/:id", (req, res) => {
        Medicoes.findAll({
            where: { 
                descricao: req.params.id
            }
        }).then(medicoes => {
            res.json({ medicoes: medicoes });
        });
    });
};