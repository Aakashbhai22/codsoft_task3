let str = "";
const buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            if (isNaN(str[str.length - 1])) {
                //for handling multiple operands
                str = str.substring(0, str.length - 1);
            }
            str = str.replace(/X/g, '*').replace(/÷/g, '/');
            str = eval(str).toString();
        }
        else if (e.target.innerHTML == "AC") {
            str = "";
        }
        else if (e.target.innerHTML == "DEL") {
            str = str.substring(0, str.length - 1);
        }
        else if (isNaN(str[str.length - 1]) && isNaN(e.target.innerHTML)) {
            str = str.substring(0, str.length - 1) + e.target.innerHTML;
        }
        else {
            str = str + e.target.innerHTML;
        }

        document.querySelector('input').value = str;
    })
})
