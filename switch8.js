var a ,b 
a = prompt("Введите номер дня")
b = prompt("Введите номер месяца")
a = a - 1
if (a = 0) {
    b = b - 1
}
else if (b = 0){
    b = 12
}
if (b = 1,3,5,7,8,10,12){
    a = 31
}
else if (b = 4,6,9,11){
    a = 30
}
else if (b = 2){
    a = 28
}
alert('Дата : ' + a + "," + b)