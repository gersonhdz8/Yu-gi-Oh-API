import * as apiCard from "./fetchData.js"

let sectionCard=document.getElementById("sectionCard")
let sectionCard1=document.getElementById("sectionCard1")
let sectionCard2=document.getElementById("sectionCard2")
let sectionMain=document.getElementById("sectionMain")
let sectionModal=document.getElementById("sectionModal")
let cards=document.getElementsByClassName("containerCard")
let modalCard=document.getElementById("modalCard")
let nombreCarta=document.getElementById("nombreCarta")
let atributo=document.getElementById("atributo")
let level=document.getElementById("level")
let descripcion=document.getElementById("descripcion")
let atk=document.getElementById("atk")
let def=document.getElementById("def")
let buscador=document.getElementById("buscador")
let btnBuscador=document.getElementById("btnBuscador")
let stats=document.getElementById("stats")
let levelDiv=document.getElementById("levelDiv")
let modalInfo=document.getElementById("modalInfo")

let modalVideo=document.getElementById("modalVideo")


sectionModal.addEventListener("click",cerrarModal)
btnBuscador.addEventListener("click",searchCards)

sectionModal.style.display="none"
modalVideo.style.display="none"


function modalVideoTurnOff()
{
    modalVideo.style.display="none"
    modalInfo.style.opacity="1"
}
function cerrarModal()
{
    sectionModal.style.display="none"
    sectionMain.style.display="flex" 
}
async function clickCard(event)
{
    const card= event.target
    const idCard = card.id
    let urlVideo=`videosYugioh/${idCard}.mp4`

    if(card.id==46986414 || card.id==38517737 || card.id==74677422 || card.id==38033121 || card.id==10000020 )
    {
        sectionModal.style.display="none"
        sectionMain.style.display="none"
        modalInfo.style.opacity="0" 
        modalVideo.innerHTML=`<video id="video" src="${urlVideo}"></video>`
        let video=document.getElementById("video")
        video.addEventListener("ended", modalVideoTurnOff)
        modalVideo.style.display="flex"
        video.play();
    }
    console.log(card.id)
    sectionModal.style.display="flex"
    sectionMain.style.display="none"

    const urlId=`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${idCard}` 
    let result= await apiCard.getIdCard(urlId)
    console.log(result)

    let cardType=result.data[0].type
    if(cardType!="Spell Card" && cardType!="Trap Card")
    {
        let cardName=result.data[0].name
        let cardAtk=result.data[0].atk
        let cardDef=result.data[0].def
        let cardAttribute=result.data[0].attribute
        let cardLevel=result.data[0].level
        let cardDescription=result.data[0].desc
        let cardType=result.data[0].type
        let cardImg=result.data[0].card_images[0].image_url
        let cardId=result.data[0].id

        stats.style.display="flex"
        levelDiv.style.display="flex"

        modalCard.innerHTML=`<img id="modal-${cardId}" src="${cardImg}" class=" rounded-xl" >`
        nombreCarta.innerHTML=cardName
        atributo.innerHTML=cardAttribute
        level.innerHTML=cardLevel 
        descripcion.innerHTML=cardDescription 
        atk.innerHTML=cardAtk 
        def.innerHTML=cardDef 

    }
    else
    {
        let cardName=result.data[0].name        
        let cardDescription=result.data[0].desc
        let cardType=result.data[0].type
        let cardImg=result.data[0].card_images[0].image_url

        modalCard.innerHTML=`<img src="${cardImg}" class="rounded-xl w-full h-full" >`
        nombreCarta.innerHTML=cardName       
        descripcion.innerHTML=cardDescription
        atributo.innerHTML=cardType
        stats.style.display="none"
        levelDiv.style.display="none"

    }   
    
    
}
async function getAllCards()
{
    let result= await apiCard.getAllCards();    
    console.log(result.data.length);    
    for (let i=0; i<24; i++)
    {
        let imgCard = result.data[i].card_images[0].image_url_small
        let idCard= result.data[i].id
        //console.log(imgCard);
        if(i>=8 && i<=15)
        {
            let sectionCards=`<div id="${idCard}" class="flex justiy-items-center justify-center items-center">
            <div id="${idCard}" class="containerCard">
            <!-- Card -->
                <div id="${idCard}" class="bg-[url('images\fondoCarta.jpg')] bg-cover bg-clip-border bg-no-repeat w-44 h-64 rounded-xl  relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear hover:cursor-pointer">            
                    <div id="${idCard}" class="grid items-center justify-center">
                        <img id="${idCard}" src="${imgCard}" class="w-36 h-52">
                    </div>                 
                </div>    
            </div>
            </div> `
            sectionCard.innerHTML+=sectionCards
        }
        else if(i>=15 && i<=24)
        {
            let sectionCards=`<div id="${idCard}" class="flex justiy-items-center justify-center items-center">
            <div id="${idCard}" class="containerCard">
            <!-- Card -->
                <div id="${idCard}" class="bg-[url('images\fondoCarta.jpg')] bg-cover bg-clip-border bg-no-repeat w-44 h-64 rounded-xl  relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear hover:cursor-pointer">            
                    <div id="${idCard}" class="grid items-center justify-center">
                        <img id="${idCard}" src="${imgCard}" class="w-36 h-52">
                    </div>                 
                </div>    
            </div>
            </div> `
            sectionCard1.innerHTML+=sectionCards
        }
        else
        {
            let sectionCards=`<div id="${idCard}" class="flex justiy-items-center justify-center items-center">
            <div id="${idCard}" class="containerCard">
            <!-- Card -->
                <div id="${idCard}" class="bg-[url('images\fondoCarta.jpg')] bg-cover bg-clip-border bg-no-repeat w-44 h-64 rounded-xl  relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear hover:cursor-pointer">            
                    <div id="${idCard}" class="grid items-center justify-center">
                        <img id="${idCard}" src="${imgCard}" class="w-36 h-52">
                    </div>                 
                </div>    
            </div>
            </div> `
            sectionCard2.innerHTML+=sectionCards
        }        
    }
    for (let i=0; i<cards.length; i++)
    {
        cards[i].addEventListener("click", clickCard)        
    }   
    
}
async function searchCards()
{
    let urlId=buscador.value   
    const urlGetFname=`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${urlId}`
    let result= await apiCard.getAllCardsFname(urlGetFname); 
    console.log(result.data.length);       
    
    sectionCard.innerHTML=""
    sectionCard1.innerHTML=""
    sectionCard2.innerHTML=""

    //let numPages=parseFloat(result.data.length/24)
    //console.log(numPages)
    let index=0
    if(result.data.length > 24)
    {
        index=24
    }
    else
    {
        index=result.data.length
    }

    for (let i=0; i<index; i++)
    {
        let imgCard = result.data[i].card_images[0].image_url_small
        let idCard= result.data[i].id
        
        if(i>=8 && i<=15)
        {
            let sectionCard=`<div id="${idCard}" class="flex justiy-items-center justify-center items-center">
            <div id="${idCard}" class="containerCard">
            <!-- Card -->
                <div id="${idCard}" class="bg-[url('images\fondoCarta.jpg')] bg-cover bg-clip-border bg-no-repeat w-44 h-64 rounded-xl  relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear hover:cursor-pointer">            
                    <div id="${idCard}" class="grid items-center justify-center">
                        <img id="${idCard}" src="${imgCard}" class="w-36 h-52">
                    </div>                 
                </div>    
            </div>
            </div> `
            sectionCard1.innerHTML+=sectionCard
        }
        else if(i>=15 && i<=24)
        {
            sectionCard2.innerHTML+=`<div id="${idCard}" class="flex justiy-items-center justify-center items-center">
            <div id="${idCard}" class="containerCard">
            <!-- Card -->
                <div id="${idCard}" class="bg-[url('images\fondoCarta.jpg.jpg')] bg-cover bg-clip-border bg-no-repeat w-44 h-64 rounded-xl  relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear hover:cursor-pointer">            
                    <div id="${idCard}" class="grid items-center justify-center">
                        <img id="${idCard}" src="${imgCard}" class="w-36 h-52">
                    </div>                 
                </div>    
            </div>
            </div> `
        }
        else
        {
            sectionCard.innerHTML+=`<div id="${idCard}" class="flex justiy-items-center justify-center items-center">
            <div id="${idCard}" class="containerCard">
            <!-- Card -->
                <div id="${idCard}" class="bg-[url('images\fondoCarta.jpg')] bg-cover bg-clip-border bg-no-repeat w-44 h-64 rounded-xl  relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear hover:cursor-pointer">            
                    <div id="${idCard}" class="grid items-center justify-center">
                        <img id="${idCard}" src="${imgCard}" class="w-36 h-52">
                    </div>                 
                </div>    
            </div>
            </div> `
        } 
        //console.log(i)
    }
    for (let i=0; i<cards.length; i++)
    {
        cards[i].addEventListener("click", clickCard)        
    }
}

getAllCards()









