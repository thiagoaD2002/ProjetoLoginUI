

class AnimaInput{
    constructor(){
        this.inputsForm = document.querySelectorAll(".inputs")
        
        this.capturaInput(this.inputsForm)
    }


    capturaInput(inputsForm){
        inputsForm.forEach((el)=>{
           el.addEventListener('focus',() => this.pulaInput(el))
        })
    }

    pulaInput(el){
        el.classList.remove('pulaInput')
        void el.offsetWidth
        el.classList.add('pulaInput')
    }
}

const a1 = new AnimaInput()

export default AnimaInput

class RemoveBtn{
    constructor(){
        const btnEntrar = document.querySelector(".btnEntrar")
        btnEntrar.addEventListener("click",(evt)=>{
            evt.preventDefault()

            window.location.href = './pagLogou.html'
        })
    }
}

const r1 = new RemoveBtn()
