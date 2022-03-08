// for
for (let i = 0; i < 5; i++){
    if(i%2 !== 0){
        console.log('impar: ',i)
    }
    else{
        console.log('par: ', i)
    }
}

//while

let i = 5;

while (i >= 1){
    if(i%2 !== 0){
        console.log('impar: ',i)
    }
    else{
        console.log('par: ', i)
    }
    i--;
}


// do while

i = 0

do {
    console.log('digitando')
    i++;
} while (i < 10)

// for..in

const pessoa = {
    nome: 'gabriel',
    idade: 25
};

//key
for(let chave in pessoa){
    console.log(pessoa[chave])
}

// for..of
const cores = ['Azul', 'Vermelho', 'roza']

for(let cor of cores){
    console.log(cor)
}