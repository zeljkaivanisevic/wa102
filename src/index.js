import express from 'express';
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
let p1=[]
let p2=[]

app.get('/', (req, res) => res.send('<a href="http://localhost:3000/dodaj">Dodaj broj</a> <br><a href="http://localhost:3000/dohvati">Dohvati brojeve</a>'))
app.get('/dodaj', (req, res) => {
    p1.push(Math.floor(Math.random() * 100)); 
    res.json(p1)
})
app.get('/dohvati',(req, res) => {
    p2.push(p1)
    res.json(p2)
})

app.listen(port, () => console.log(`Slušam na portu ${port}!`))