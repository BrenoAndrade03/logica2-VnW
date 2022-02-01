let idade=19;
if (idade>=18){
    console.log("Você é maior de idade")
}

let souHumano= true;
if(idade>=18 && souHumano== true){
    console.log("Você já pode trabalhar!")
}

let janeiro= false;
let dezembro= true;
if(janeiro==true && dezembro== false){
    console.log("Você faz aniverssário no primeiro mês do ano.")
}else{
    console.log("Você faz aniverssário no fim do ano.")
}

let nome= "Breno";
if(nome.substring(0,1)=='R'){
    console.log("Seu nome começa com R")
}else{
    console.log("Seu nome não começa com R")
}

let sobreNome= "Pereira"
if(sobreNome.length >=6 || sobreNome.substring(0,1)=='E'){
    console.log("Seu sobrenome é interessante! Ele começa com E ou tem 6 letras.")
}