module.exports = app => {
    app.get("/", (req, res) => res.json({ status: "Medidaz API v1" }));   
};