const resultado = FizzBuzz('cvn');
console.log(resultado)

function FizzBuzz(valor){
    if (typeof(valor) !== 'number')
        return 'Nao é um numero'
    else if(valor % 3 === 0)
        return 'Fizz'
    else if (valor % 5 === 0)
        return 'Buzz'
    else if (valor % 3  === 0 && valor % 5 === 0)
        return 'FizzBuzz'
    else if (valor % 3  !== 0 || valor % 5 !== 0)
        return valor
    }