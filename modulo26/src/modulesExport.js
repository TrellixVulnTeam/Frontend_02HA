// named exports - para quando voce nomeia cada export

export let cores = [ ]
export function getName ( ) { }
export class Animais { }

// lista de exports

export { cores, Animais, getName}

// strict mode - todos exports ficam automaticamente em modo estrito

export default getCars ( ) 
// export default getCars -  só pode 1 export default por arquivo 