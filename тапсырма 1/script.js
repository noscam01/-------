let num1 = +prompt("num 1")
let num2 = +prompt("num 2")
let tanba = prompt("tanba")
function calculator(a, b, c){
    if(c === '+'){
        return a + b
    } else if(c === ' -'){
        return c - b
    } else if(c === '*'){
        return a * b
    }else if(a / b){
        return a / b
    }
}
alert(calculator(num1, num2, tanba))





