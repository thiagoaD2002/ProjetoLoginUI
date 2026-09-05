import AnimaInput from "../pgHome.js";

const animaInput = new AnimaInput()


class VerificaSenha{
    constructor(){
        this.inputSenha = document.querySelector(".senha")
        this.inputRepSenha = document.querySelector(".repSenha")
        this.btnConfirmar = document.querySelector(".btnConfirmar")
        this.msgErroSenha = document.querySelector(".msgErroSenha")
        this.condicoes = document.querySelectorAll(".condicoes")

        this.eventoBtn()    
        this.verificaDigitacao()
    }

    eventoBtn(){
        this.btnConfirmar.addEventListener("click",() => this.verificacoes())
    }

    verificaDigitacao(){
        this.inputSenha.addEventListener("input",()=>{

            const senha = this.inputSenha.value
            const qtdValida = this.verificaQtd(senha)
            const verificaCaracteres = this.verificaCaracteres(senha)
            const verificaNum = this.verifiacNum(senha)
            const verificaMaiscula = this.verificaMaiscula(senha)

            this.condicoes[0].style.color = qtdValida ? '#60519B' : 'tomato'
            this.condicoes[1].style.color = verificaCaracteres ? '#60519B' : 'tomato'
            this.condicoes[2].style.color = verificaNum ? '#60519B' : 'tomato'
            this.condicoes[3].style.color = verificaMaiscula ? '#60519B' : 'tomato'
        })
    }

    verificacoes(){
        const senha = this.inputSenha.value
        const repSenha = this.inputRepSenha.value
        const condicoes = this.condicoes 
        const msgErroRepSenha = document.querySelector(".msgErroRepSenha")
        let flag = false

        if(this.verificaQtd(senha) && this.verificaCaracteres(senha) && this.verifiacNum(senha) && this.verificaMaiscula(senha) && senha === repSenha){
            this.msgErroSenha.style.display = 'none'
            flag = true

        } 
        else{
            this.msgErroSenha.style.display = 'block'
        }

        if(repSenha != senha && flag == false){
            msgErroRepSenha.style.display = 'block'
            flag = false
        } 
        else{
            msgErroRepSenha.style.display = 'none'
        }

        
    }

    verificaQtd(senha){
       return senha.length >= 8 && senha.length <= 20
    }
    verificaCaracteres(senha){
        return /[.@#$%*&!]/.test(senha)
    }
    verifiacNum(senha){
        return /\d/.test(senha)
    }
    verificaMaiscula(senha){
        return /[A-Z]/.test(senha) && /[a-z]/.test(senha)
    }
}

const v1 = new VerificaSenha()

export default VerificaSenha