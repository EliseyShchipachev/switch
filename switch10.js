var C,N
C = prompt("Введите направление робота")
N = prompt("Введите команду")
switch(Number(C)){
    case -1: alert("Поворот направо")
    break
    case 0: alert("Продолжать движение")
    break
    case 1: alert("Поворот налево")
    break
    default: alert("Ошибка")
}
switch(N){
    case"С": alert("Север")
    break
    case"З": alert("Запад")
    break
    case"Ю": alert("Юг")
    break
    case"В": alert("Восток")
    break
    default: alert("Ошибка")
}