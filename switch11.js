var C,N1,N2
C = prompt("Введите направление робота")
N1 = prompt("Введите команду")
N2 = prompt("Введите команду")
switch(Number(C)){
    case -1: alert("Поворот направо")
    break
    case 0: alert("Продолжать движение")
    break
    case 1: alert("Поворот налево")
    break
    default: alert("Ошибка")
}
switch(N1){
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
switch(N2){
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