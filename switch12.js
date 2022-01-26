var a,b
a = prompt("Введите номер действия")
b = prompt("Введите значение ")
switch(a){
    case "1" : alert(" R = " + b)
    case "2" : alert(" D = " + 2*b)
    case "3" : alert(" L = " + 2*3,14*b)
    case "4" : alert(" S = " + Math.pow(b,2)*3,14)
    break
    default: alert("Ошибка")
}