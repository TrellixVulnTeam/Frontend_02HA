const user01 = new Object ( )
    user01.name = "Aaa",
    user01.idade = "20",
    user01.peso = "80",
    user01.altura = "1.70"
    user01.cor = "azul"
    user01.operatingSystem = "windows"
    user01.cpf = "12345-678"

const user02 = new Object ( )
    user02.name = "Bbb",
    user02.idade = "22",
    user02.peso = "80",
    user02.altura = "1.80"
    user02.cor = "verde"
    user02.operatingSystem = "mac"
    user02.cpf = "987-65432"

const car01 = new Object ( )
    car01["marca"] = "fiat"
    car01.cor = "preto"

const car02 = new Object ( )
    car02["marca"] = "ford"
    car02.cor = "branco"

// console.log(Object.keys(user01))
// console.log(Object.values(user01))

// console.log(Object.keys(user02))
// console.log(Object.values(user02))

console.log(Object.entries(user01))
console.log(Object.entries(user02))

user01.idade = user01.idade + 1

console.log(Object.entries(user01))

Object.defineProperty(user01, 'cpf',{
    enumerable:true,
    writable: false,
    value:'123.456.789-10',    
})

console.log(Object.entries(user01))

console.log(user01)

const empresa = "EBAC"

user01.empresa = empresa // o primeiro é referente a propriedade do user01 e o segundo é referente a variável definida acima
user02.empresa = 'DaGoog'

console.log(user01) 
console.log(user02)

user01.filhos = {
    filho01 : "Ccc",
    filho02 : "Ddd"
}

console.log(user01)

console.log(Object.entries(user01.filhos)) // sub-objeto do primeiro objeto
