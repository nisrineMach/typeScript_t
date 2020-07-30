let a: number = 453

function isPair(nombre: number): boolean{
    return nombre % 2 === 0 
}


function salut(t: Array<string>) : Array<string>{
    let out=[]
    for(let item of t){
        out.push('Salut'+item)
    } 
    return out
}
salut(['aze','aze','aze'])
console.log(isPair(a))