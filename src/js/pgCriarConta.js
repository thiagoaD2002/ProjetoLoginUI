class animaIcon{
    constructor(){
        this.inputs = document.querySelectorAll(".inputs")

        this.animaBotao()
    }

    animaBotao(){
       this.inputs.forEach((el,index)=>{
        el.addEventListener("click",()=>{
            const img = el.previousElementSibling
            img.classList.remove('animaIcon')
            void img.offsetWidth
            img.classList.add("animaIcon")
        })
       })
    }
}

const a1 = new animaIcon()