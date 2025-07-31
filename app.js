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

//Creiamo un array dove inserire una lista di almeno 5 post,
//per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

const posts = [{
        titolo: "I ragazzi di Claudio Ranieri battono il Bari e tornano in Serie A dopo un anno",
        contenuto: "È il Cagliari la terza squadra promossa in Serie A TIM: dopo Frosinone e Genoa, i sardi staccano il pass per il massimo campionato all’ultimo respiro grazie al gol decisivo di Leonardo Pavoletti che al 94’ fa impazzire di gioia i 1147 tifosi ospiti. ",
        immagine: "./img/squadra.jpeg",
        tags: ["sport", "calcio", "serie a", "serie b"]
    },
    {
        titolo: "Bandiera Cagliari Calcio",
        contenuto: "Bandiera di Cagliari Calcio, la versione ufficiale proposta è stata adottata nel 2015. La squadra calcistica di Caglia del presidente Tommaso Giulini, allenata da Massimo Rastelli è stata fondata nel 1920. La bandiera è partito di blu e rosso, al centro della bandiera è presente o stemma di Cagliari Calcio, nel 4° cantone è presente lo scudo d'Italia con in parte la scritta 1969 / 70 Campioni d 'Italia",
        immagine: "./img/squadra.jpeg",
        tags: ["cagliari", "calcio", "serie a", "bandiera"]
    },
    {
        titolo: "EYE Cagliari Maglia Home Ufficiale 2024 / 25",
        contenuto: "Maglie eccezionali: mio figlio ne va pazzo! Facciamo un ordine al mese, servizio clienti ottimo; c'è stato un piccolo disguido, risolto nel migliore dei modi in tempi brevissimi: consigliatissimo",
        immagine: "./img/maglia.webp",
        tags: ["cagliari", "maglia", "serie a"]
    },
    {
        titolo: "INTERVISTA | Yerry Mina dopo il rinnovo",
        contenuto: "Questo rinnovo significa molto per me, è un grande segnale di fiducia da parte del Club, di tutta la dirigenza e di ogni singola persona che vi lavora. Sin dal primo momento ho sentito un appoggio fantastico, vogliamo continuare a crescere insieme, migliorare, affrontare nuove sfide. Mi lego al Cagliari perché sin dal primo giorno le sensazioni sono state ottime: per me, mia moglie, i miei figli, i tifosi che ci sostengono quando le cose vanno bene ma anche nei momenti meno felici",
        immagine: "./img/mina.jpg",
        tags: ["mina", "cagliari", "maglia", "serie a"]
    },
    {
        titolo: "Fabio Pisacane è il nuovo allenatore del Cagliari",
        contenuto: "Il Cagliari Calcio è lieto di annunciare di aver affidato la conduzione tecnica della prima squadra a Fabio Pisacane: l’allenatore ha firmato un contratto che lo lega al Club rossoblù sino al 30 giugno 2026 con rinnovo automatico per un’ulteriore stagione al verificarsi di determinate condizioni sportive",
        immagine: "./img/pisacane.jpg",
        tags: ["mina", "cagliari", "maglia", "serie a"]
    }
];

//attivo la rotta "/bacheca" che restituisce i posts 
app.get('/bacheca', (req, res) => {
    res.json(posts);
});

// utilizzo use di express per permettere l'acesso alla cartella public
app.use(express.static('public'));