
//Trabalhando com comandos condicionais

let mediaFinal: number = 8.5; 
if(mediaFinal == 10){
    console.log("Resultado excelente!");    
}else if(mediaFinal > 8){
    console.log("Parabéns!");    
}else if(mediaFinal >= 7){
    console.log("Aprovado!");    
}else{
    console.log("vamos estudar mais!");    
} 

let podeVotar: string;
let idade: number = 17;
podeVotar = (idade < 16) ? "Muito jovem para votar":"já pode votar";
console.log(podeVotar);



//Trabalhando com comandos iterativos

let vetor :number[] = [ 7, 5, 10, 20, 30, 40, 2, 1, 1];
let maior: number;

//forma 1: percorrendo um vetor através dos índices dele
let n = vetor.length;
maior = vetor[0];
for (let i = 1; i < n; i++) {
    if(vetor[i]>maior){
        maior = vetor[i];
    }
}
console.log ("Forma 01: O maior elemento do vetor é:" + maior);

//forma 2: percorrendo os elementos do vetor  duas versões do comando “for”
maior = vetor[0];
for (var val of vetor) {
    if(val > maior){
        maior = val;
    }  
}
console.log ("Forma 02: O maior elemento do vetor é:" + maior);

//exemplo com as duas versões do comando while
let vetorw :number[] = [ 7, 5, 40, 20, 70, 50, 2, 1, 1];
let maiorw: number;
let i: number;
let tam:number = vetorw.length;
//forma 1: teste é realizado antes de entrar no bloco de comandos
i = 0;
maiorw = vetorw[0];
while(i<tam){
    if(vetorw[i]>maiorw){
        maiorw = vetorw[i];
    }
    i++;
}
console.log ("Forma 01: O maior elemento do vetor é:" + maiorw);

//forma 2: teste é realizado depois de entrar no bloco de comandos
i = 0;
tam = vetorw.length;
maiorw = vetorw[0];
do{
    if(vetorw[i]>maiorw){
        maiorw = vetorw[i];
    }
    i++;
}while(i<tam);
console.log ("Forma 02: O maior elemento do vetor é:" + maiorw);