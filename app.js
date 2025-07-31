//importo express nel progetto 
const express = require('express');
const app = express();
const port = 3000;

//attivo l'ascolto alla porta 3000 
app.listen(port, () => {
    console.log(`In ascolto alla porta ${port}`)
})

//attivo la rotta "/" 
app.get('/', (req, res) => {
    res.send("Server del mio blog")
})