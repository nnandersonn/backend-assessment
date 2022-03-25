const { type } = require("express/lib/response")
const gifs = require(`./db.json`)
let globalID = 4

module.exports = {

    getGifs: (req,res)=>{
        res.status(200).send(gifs)
        
    },

    addGif: (req,res)=>{
        let {title, gifURL} = req.body
        let newGIF = {
            id: globalID,
            title: title,
            gifURL: gifURL
        }
        gifs.push(newGIF)
        res.status(200).send(gifs)
        globalID++
    },

    editGif: (req,res)=>{

    },

    deleteGif: (req,res)=>{

    },


}