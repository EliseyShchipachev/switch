var a,b
b = prompt("Введите номер действия")
a = prompt("Введите значение ")
switch(b){
    case "1" : alert(" a = " + a)
    case "2" : alert(" R1 = " + (a*Math.sqrt(3))/6)
    case "3" : alert(" R2 = " + (a*Math.sqrt(3)/6)*2)
    case "4" : alert(" S = " + (a*Math.pow(2,2)*a*Math.sqrt(3)/4))
    break
    default: alert("Ошибка")
}