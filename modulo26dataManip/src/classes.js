class Animal {

    constructor(especie){
        this.especie = especie
    }

    comer( ) {
        console.log(this.especie + ' come carne' + ' e')
    }

    dormir( ){
        console.log(this.especie + ' dorme')
    }

    acorda( ){
        console.log(this.especie + ' acorda')
    }
}

class Lobo extends Animal { 
    comer( ) {
        console.log(this.especie + ' come carne' + ' e')
    }
}



export default Lobo