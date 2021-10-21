import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const boxMaiuscula = document.querySelector('.chk-maiusculas');
const boxMinuscula = document.querySelector('.chk-minusculas');
const boxNum = document.querySelector('.chk-numeros');
const boxSimb = document.querySelector('.chk-simbolos');
const btn = document.querySelector('.gerar-senha');

export default () =>{
    btn.addEventListener('click', () =>{
        senhaGerada.innerHTML = gera();
    })
}


const gera = () =>{
    const senha = geraSenha(
        qtdCaracteres.value,
        boxMaiuscula.checked,
        boxMinuscula.checked,
        boxNum.checked,
        boxSimb.checked
    );

    return senha || 'Nada selecionado';
}