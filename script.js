let n1 = +prompt("son kriting");
while (isNaN(n1) || n1 == 0) {
    n1 = +prompt('bu yerga son kritish kerak')
}

for (let i = 0; i < n1; i++) {

}


function name1() {
    let operations = ['+', '-', '*', '/', '%'];
    let index = Math.floor(Math.random() * operations.length);
    let n1 = Math.ceil(Math.random()*10)
    let n2 = Math.ceil(Math.random()*10)

    let a = +prompt(`${n1} ${operations[index]}  ${n2}`)

    if(operations[index] == '+'){
        result = n1 + n2
        if (result == a) {
            console.log('sizning javob togri' + a);
        }else{
            console.log('sizning javob notogri' + a + 'togri javob'+ result);
        }
    }else if (operations[index] == '-'){
        result = n1 + n2
        if (result == a) {
            console.log('sizning javob togri ' + a);
        }else{
            console.log('sizning javob notogri ' + a + ' togri javob '+ result);
        }
    }else if (operations[index] == '*'){
        result = n1 * n2
        if (result == a) {
            console.log('sizning javob togri ' + a);
        }else{
            console.log('sizning javob notogri ' + a + ' togri javob '+ result);
        }
    }else if (operations[index] == '/'){
        result = n1 / n2
        if (result == a) {
            console.log('sizning javob togri ' + a);
        }else{
            console.log('sizning javob notogri ' + a + ' togri javob '+ result);
        }
    }else if (operations[index] == '%'){
        result = n1 % n2
        if (result == a) {
            console.log('sizning javob togri ' + a);
        }else{
            console.log('sizning javob notogri ' + a + ' togri javob '+ result);
        }
    }

}
name1()
