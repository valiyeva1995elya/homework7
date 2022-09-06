let a = +prompt("ширина");
let b = +prompt("длина");
function value(a, b){
    if (a == false || b == false){
        alert(a*a || b*b)
    }else{ 
        alert(a*b)
    }
}
value(a, b)



let min = +prompt("min");
let max = +prompt("max");
let numbers = [];
for(let i = min; i < max + 1; i++){
    numbers.push(i)
}

console.log(numbers)
let result = numbers.find (function num(numbers){
    let b = 0;
    let c;
    for ( let i = 1; i <= numbers/2; i++){
        c = numbers%i;
        if (c === 0){
            b += i;
        }
    }
    if (numbers === b){
        alert(numbers + " - совершенное число")

    }
})


