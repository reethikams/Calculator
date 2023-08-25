function calculation(sign) {
    num1 = parseInt(document.getElementById('num1').value);
    num2 = parseInt(document.getElementById('num2').value);
    total = document.getElementById('tot');
    if (sign == 'add') {
        total.value = parseInt(num1) + parseInt(num2);
    } else if (sign == 'sub') {
        if (num1 > num2) {
            total.value = parseInt(num1) - parseInt(num2);
        }
        else {
            total.value = parseInt(num2) - parseInt(num1);
        }
    }
    else if (sign == 'multi') {
        total.value = parseInt(num1) * parseInt(num2);
    } else if (sign == 'divi') {
        if (num1 > num2) {
            total.value = parseInt(num1) / parseInt(num2);
        }
        else {
            total.value = parseInt(num2) / parseInt(num1);
        }
    }
}