// let n=parseInt(prompt("ingrese un numero:"));
// let contador=0;
// for(let x=1; x<=n;x++){
//     if(n%x==0){
//         contador+=1
//     }
// }
// if(contador==2){
//     alert(`el numero ${n} es primo`)
// }else{
//     alert(`el numero ${n} no es primo`)
// }


function invertir(n){
    let invertido=n.split('')
    invertido=n.toReversed()
    if(n==invertido){
        alert(`el numero ${n} es palindromo`)
    }else{
        alert(`el numero ${n} no es palindromo`)
    }

}

invertir('121')