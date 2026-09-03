class AnimaInput{
    constructor(){
        this.inputsForm = document.querySelectorAll(".inputs")
        
        this.capturaInput(this.inputsForm)
    }


    capturaInput(inputsForm){
        inputsForm.forEach((el)=>{
           el.addEventListener('click',() => this.pulaInput(el))
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