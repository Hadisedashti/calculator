function mosavi (){
    let result = document.getElementById("text").value
    let count = result.length
    let operator = result.indexOf("*")+1
    let num1 = +result.slice (0,operator-1)
    let num2 = +result.slice(operator,count)
    document.getElementById("text").value = num1 * num2
}