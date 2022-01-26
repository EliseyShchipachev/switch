var a,b
b = prompt("Введите номер действия")
a = prompt("Введите значение ")
switch(b){
    case "1" : alert(" a = " + a)
    case "2" : alert(" c = " + a*Math.sqrt(2))
    case "3" : alert(" h = " + (a*Math.sqrt(2))/2)
    case "4" : alert(" S = " + (a*Math.sqrt(2)*(a*Math.sqrt(2)/2))/2)
    break
    default: alert("Ошибка")
}