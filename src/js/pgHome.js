class AnimaInput{
    constructor(){
        this.inputsForm = document.querySelectorAll(".inputs")
        
        this.capturaInput(this.inputsForm)
    }


    capturaInput(inputsForm){
        inputsForm.forEach((el)=>{
           el.addEventListener('click', () => {
            el.classList.remove('pulaInput')
            void el.offsetWidth
            el.classList.add('pulaInput')
           })
        })
    }
}

const a1 = new AnimaInput()

