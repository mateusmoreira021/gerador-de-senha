const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumero = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;{}[]^~!@#$%()*';
const geraSimobolo = () => simbolos[rand(0, simbolos.length)];



export default function geraSenha(qtd, maiuscula, minuscula, numero, simbolo){
    const senhaArr = [];
    qtd = Number(qtd);

    for(let i = 0; i < qtd; i++){
        maiuscula && senhaArr.push(geraMaiuscula());
        minuscula && senhaArr.push(geraMinuscula());
        numero && senhaArr.push(geraNumero());
        simbolo && senhaArr.push(geraSimobolo());
    }

    return senhaArr.join('').slice(0, qtd);
}
