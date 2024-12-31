import express from 'express'
import createHomePageTemplate from './views/index.js';

//create assets
const app = express();
app.use(express.urlencoded({extended: false}))

//static assets
app.use(express.static('public'))

//routes
app.get('/', (req, res) => {
    res.send(createHomePageTemplate());
})

//listen to port
app.listen(3000, () => {
    console.log("listening at port 3000")
})