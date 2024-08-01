function mosavi (){
    let result = document.getElementById("text").value
    let count = result.length
    let operator = result.indexOf("+")+1
    let num1 = +result.slice (0,operator-1)
    let num2 = +result.slice(operator,count)
    document.getElementById("text").value = num1 + num2
}

function sum(){
    let num1= Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("ntm2".value))
    document.getElementById("result").textContent = num1 + num2
}
function tafriq(){
    let num1= Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("ntm2".value))
    document.getElementById("result").textContent = num1 - num2
}
function zarb(){
    let num1= Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("ntm2".value))
    document.getElementById("result").textContent = num1 * num2
}
function taqsim(){
    let num1= Number(document.getElementById("num1").value)
    let num2 = Number(document.getElementById("ntm2".value))
    document.getElementById("result").textContent = num1 / num2
}

switch(operator){
    case"+":
     sum()
     break;
    case"-":
     tafriq()
     break;
    case"*":
     zarb()
     break;
    case"/":
     taqsim()
     break;
    defult:
    alert ("لطفا مقدار صحیح وارد کنید") 
}