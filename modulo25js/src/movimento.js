class Movimento { 
    constructor(banco = 'padrao', nome ='', saldo = 0 ) {
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
        this.movimento = []
    }

    novoMovimento(... movimento) {
        movimento.forEach( 
            lancamento => this.movimento.push (lancamento)
        )
    }

    resumo( ){ 
        let valorAtualizado = 0
        let tipo = ''
        // const regex = new RegExp('x', 'gi')

        this.movimento.forEach(lancamento => {
            // lancamento.banco.replace (/x$/i, 'Y')

            if (!lancamento.nome.match (/imposto/)){ //isso filtra os impostos devido a ! no inicio
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '}
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimento('banco X','salario', 10000)
const m02 = new Movimento('banco Y','comissao', 1000)
const m03 = new Movimento('banco Z','imposto', -2000)

const registro01 = new Registro ( 01,11,2022)
registro01.novoMovimento(m01, m02, m03)
console.log (" saldo atual de: " + registro01.resumo( ))

const movimentacoesGerais = [m01,m02,m03]

movimentacoesGerais.map ( elemento => 
    console.log (elemento.banco.length)
)

