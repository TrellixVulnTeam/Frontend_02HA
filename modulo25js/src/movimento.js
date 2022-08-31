class Movimento { 
    constructor(banco = 'padrao', nome ='TED', saldo = 0 ) {
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo

    }
}

class Registro  {
    constructor (dia, mes, ano ) {
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.Movimento = []
    }

    novoMovimento(... movimento) {
        movimento.forEach( 
            lancamento => this.movimento.push (lancamento)
        )
    }

    resumo( ){ 
        let valorAtualizado = 0
        this.movimento.forEach(lancamento => {
            valorAtualizado += lancamento.valor
        })
        return valorAtualizado
    }
}

const m01 = new Movimento('banco AAA','salario', 10000)
const m02 = new Movimento('banco AAA','comissao', 1000)
const m03 = new Movimento('banco AAA','imposto', -2000)

const registro01 = new Registro ( 01,11,2022)
registro01.novoMovimento(m01, m02, m03)
console.log (registro01.resumo( ))