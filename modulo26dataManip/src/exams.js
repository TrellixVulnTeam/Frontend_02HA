import months from './months.js' 


    //Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 30
})

console.log(filteredMonths)

let toPrint = ''

    //Lista meses
filteredMonths.forEach( month => {
    toPrint += month.month + ', ' 
});

    /*  
    * for ( let c = 0; c < filteredMonths.length; c++){}
    */

    //array comun
let meses = [30, 30, 30] 

    // Reduce - função com todos itens do array que devolve valor único
let sumMonthDays = filteredMonths.reduce ( ( prev, next) =>{
    // console.log( prev.days + next.days)

    return {days: prev.days + next.days}
}) 

   /*  Map - função em array de retorno individual (cada valor)
    * 
    *  let years = months.map ( (month => {
    *  return month.days * 10
    *  }))
    */

    // console.log(sumMonthDays)
document.getElementById ('main').innerHTML = toPrint + '<br> Soma dos Dias' + sumMonthDays.days + '<br> Em 10 anos: ' + years + ' dias'