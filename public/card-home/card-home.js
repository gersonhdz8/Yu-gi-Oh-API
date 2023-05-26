class MonsterCard extends HTMLElement{
    constructor()
    {
        super();
        let shadow= this.attachShadow({mode: 'open'})
        
        this.divCard= document.createElement("div")
        this.divCard.innerHTML=`<div class="w-screen h-screen ">        
        <div class="bg-fondoCarta bg-cover bg-clip-border bg-no-repeat w-max h-max rounded-xl m-3 relative grid grid-cols-1 justify-items-center hover:scale-105 transition-all ease-linear ">
            <div class="grid justify-items-start ">
                <p class="text-white pt-7 text-clip text-center px-2 h-max mb-2 w-56 font-bold">Mago Oscuro </p>
            </div>
            <div class="grid items-center justify-start place-items-start">
                <img src="https://images.ygoprodeck.com/images/cards/46986414.jpg" class="w-36 h-52 self-start">
            </div>
            <div class="grid items-center place-items-center justify-center w-full">
                <div class="grid grid-cols-2 text-white w-full items-center justify-items-center gap-10 align-middle place-content-center mb-5 p-2 text-sm font-serif">
                    <div>
                        <p>ATK 2500</p>
                    </div>
                    <div>
                        <p>DEF 2100</p>
                    </div>
                </div>                
            </div>           
        </div>   
    </div>`
    shadow.appendChild(this.divCard)
    }
}

customElements.define("monster-card", MonsterCard);