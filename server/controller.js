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
        console.log("param id =", req.params.id)
        let index = gifs.findIndex(gif => gif.id === +req.params.id)
        gifs.splice(index+1, 1)
        res.status(200).send(gifs)
    },


}