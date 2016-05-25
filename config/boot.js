module.exports = app => {
    //app.db.sequelize.sync().done( () => {  });
    app.listen(app.get('port'), () => {
        console.log(`Medidaz executando na porta ${app.get('port')}`);
    });

}

