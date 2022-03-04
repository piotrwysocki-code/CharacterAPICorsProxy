const axios = require('axios')
const response = require('express')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')

app.use(cors())

app.get('/playerdata/:ign', async (req, res) => {
    try{
        const response = await axios.get("https://maplelegends.com/api/character?name=" + req.params.ign)
       /* console.log(response.data)*/
        res.json(response.data);

    }catch(err){
        console.log(err)
    }
})

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})