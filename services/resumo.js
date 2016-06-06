module.exports = app => {

    resume: () => {
        const Alimento = app.db.models.Alimento;
        const Fonte = app.db.models.Fonte;
        const Medida = app.db.models.Medida;
        const Medicao = app.db.models.Medicao;

        const resumo = {};

        Alimento.findAll({
          attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'id']]
        }).then(alimentos =>{
            resumo.qtd_alimentos = alimentos;
        });

        Fonte.findAll({
          attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'id']]
      }).then(fontes =>{
            resumo.qtd_fontes = fontes;
        });

        Medida.findAll({
          attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'medidas']]
        }).then(medidas =>{
            resumo.qtd_medidas = medidas;
        });

        Medicao.findAll({
          attributes: [[sequelize.fn('COUNT', sequelize.col('id')), 'id']]
        }).then(medicoes =>{
            resumo.qtd_medicoes = medicoes;
        });

        return resumo;
    }
}
