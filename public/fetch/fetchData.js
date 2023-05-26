const urlGetAllCards="https://db.ygoprodeck.com/api/v7/cardinfo.php"
//const urlGetFname="https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=Dark Magician"
const urlGetTypeCard=""
const urlGetAtkCard=""
const urlGetDefCard=""
const urlGetLevelCard=""
//const getCardId=`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${}`

const options = {
	method: 'GET',	
};

export const getAllCards = async () =>{
    try{
        const response= await fetch(urlGetAllCards,options)
        const result= await response.json()
        //console.log(result)
        return result
    }
    catch(error)
    {
        console.error(error)
    }
}

export const getAllCardsFname = async (urlGetFname) =>{
    try{
        const response= await fetch(urlGetFname,options)
        const result= await response.json()
        return result 
    }
    catch(error)
    {
        console.error(error)
    }
}
export const getTypeCard = async () =>{
    try{
        const response= await fetch(urlGetTypeCard,options)
        const result= await response.json()
        return result 
    }
    catch(error)
    {
        console.error(error)
    }
}
export const getAtkCard = async () =>{
    try{
        const response= await fetch(urlGetAtkCard,options)
        const result= await response.json()
        return result 
    }
    catch(error)
    {
        console.error(error)
    }
}
export const getDefCard = async () =>{
    try{
        const response= await fetch(urlGetDefCard,options)
        const result= await response.json()
        return result  
    }
    catch(error)
    {
        console.error(error)
    }
}
export const getLevelCard = async () =>{
    try{
        const response= await fetch(urlGetLevelCard,options)
        const result= await response.json()
        return result  
    }
    catch(error)
    {
        console.error(error)
    }
}
export const getIdCard = async (urlId) =>{
    try{
        const response= await fetch(urlId,options)
        const result= await response.json()
        return result  
    }
    catch(error)
    {
        console.error(error)
    }
}



