import controles from './controles'

// filter
const filteredPreco = controles.filter( (precos)=> {
    return controles.precos=== 250

})
console.log(filteredPreco)
let toPrint = ''


/*  forEach
*    filteredControles.forEach( marca => {
*       toPrint += marca 
*   });
*/

/*  Reduce - função com todos itens do array que devolve valor único
*   let sumMonthDays = filteredMonths.reduce ( ( prev, next) =>{    
*   return {days: prev.days + next.days}
*   }) 
*/

/*  Map - função em array de retorno individual (cada valor)
*   let years = months.map ( (month => {
*   return month.days * 10
*   }))
*/
