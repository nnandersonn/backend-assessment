// const { response } = require("express")

// const { response } = require("express")


const tellMyFortuneButton = document.getElementById("tell-my-fortune")
const getGifsButton = document.getElementById("get-inspired-button")
const gifArea = document.getElementById("gifs")
const addGifButton = document.getElementById("add-gif")
const htmlBody = document.querySelector("body")



tellMyFortuneButton.addEventListener("click", ()=>{
    axios.get('http://localhost:4000/api/fortune')
        .then(function(response){

            const fortune = response.data
            alert(fortune)
        })
})

getGifsButton.addEventListener("click", ()=>{
    axios.get('http://localhost:4000/api/gifs')
        .then(response =>{
            console.log(response.data)
            const gifHolder = document.createElement('div')
            gifArea.innerHTML = ``

            for(let i = 0; i < response.data.length; i++){
                const gifCard = document.createElement('div')
                gifCard.innerHTML = `<h3>${response.data[i].title}</h3> <img src=${response.data[i].gifURL} width="500"> <br> <button onclick="deleteGif(${i})">Delete Gif</button>`
                gifHolder.appendChild(gifCard)
            }

            gifArea.appendChild(gifHolder)
        })
})

function submitHandler(event){
    event.preventDefault()
    let title = document.getElementById("gif-title").value
    let gifURL = document.getElementById("gif-url").value
    
    console.log("title", title, "gif url", gifURL)

    let newGif = {title, gifURL}
    axios.post('http://localhost:4000/api/gifs', newGif)
        .then(response =>{
            const gifHolder = document.createElement('div')
            gifArea.innerHTML = ``

            for(let i = 0; i < response.data.length; i++){
                const gifCard = document.createElement('div')
                gifCard.innerHTML = `<h3>${response.data[i].title}</h3> <img src=${response.data[i].gifURL} width="500"> <br> <button onclick="deleteGif(${i})">Delete Gif</button>`
                gifHolder.appendChild(gifCard)
            }

            gifArea.appendChild(gifHolder)
        })
}

addGifButton.addEventListener("click", submitHandler)

function deleteGif(id){
    // console.log("deleteGif id is ", id)
    axios.delete(`http://localhost:4000/api/gifs/${id}`)
        .then(response => {
            console.log(response.data)
            const gifHolder = document.createElement('div')
            gifArea.innerHTML = ``

            for(let i = 0; i < response.data.length; i++){
                const gifCard = document.createElement('div')
                gifCard.innerHTML = `<h3>${response.data[i].title}</h3> <img src=${response.data[i].gifURL} width="500"> <br> <button onclick="deleteGif(${i})">Delete Gif</button>`
                gifHolder.appendChild(gifCard)
            }

            gifArea.appendChild(gifHolder)
        })
}