module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send("teste"));

    app.post('/atendimentos', (req, res) => { 
        console.log(req.body);
        res.send("post")}
    
    );

}