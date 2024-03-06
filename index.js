const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const app = express()
const cors = require('cors')
const axios = require('axios')
// const dotnet = require('dotnet')

// dotnet.config({path: path.join(__dirname, 'config', '.env')})

app.use(cors())
app.use(express.static('public'))
app.engine('.hbs', exphbs.engine({extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', '.hbs');

app.get('/', (req,res)=>{
    res.render('index.hbs')
})

// Anime Details
// /about/slug
app.get('/about/:slug', async(req,res)=>{
    try {
        const response = await axios.get(`${process.env.BASE_URL}/details/category/${req.params.slug}`)
        const data = response.data
        res.render('about', {
            data
        })
    } catch (error) {
        res.json({error: error})
    }
})


// Latest Subbed
// /latestsubbed
app.get('/latestsubbed', async(req,res) =>{
    const response = await axios.get(`${process.env.BASE_URL}/home/`)
    const data = response.data
    res.status(200).send(data)
})

// Trending Anime
// /trending/month
// /trending/week
// /trending/all
app.get('/trending/:timeline', async(req,res)=>{
    const response = await axios.get(`${process.env.BASE_URL}/trending/?timeline=${req.params.timeline}`)
    const data = response.data

    data.forEach((item) => {
        item.slug = item.url.replace('/category/','')
        item.url = ''
    });
    await Promise.all(
        data.map(async (item) => {
            // Getting the number of Seaons
            const seasonsData = await axios.get(`${process.env.BASE_URL}/seasons/${item.slug}`);
            item.id = seasonsData.data.seasons[0][1];
            return item
        })

    );
    res.render('trending', {
        data
    })
})

// Getting Episodes of a Season
// /slug/id
app.get('/:slug/:id', async (req,res)=>{
    try {
        const episodes = await axios.get(`${process.env.BASE_URL}/episodes/${req.params.slug}/${req.params.id}`);
        const slug = req.params.slug;
        const data = episodes.data.map(([ep_id, name])=> ({ep_id, name, slug}))
        res.render('episodes', {
            data
        })
    } catch (error) {
        res.status(400).json({error: error})
    }
})

// Getting the Episode Source
// Episode = ep_id
// /source/one-piece/ep_id
app.get('/source/:slug/:ep_id', async (req,res)=>{
    try {
        const source = await axios.get(`${process.env.BASE_URL}/source/${req.params.slug}/${req.params.ep_id}`)
        const data = source.data
        res.render('stream', {
            data
        })
    } catch (error) {
        res.status(400).json({error: error})
    }
})

// app.get('/', async(req,res)=>{
//     const source = await axios.get(`${process.env.BASE_URL}/source/`)
//     const data = source.data.map(([id, name])=> ({id, name}))
    
//     res.send(data)
// })

app.listen(process.env.PORT, ()=>console.log('Server running...'))
