function validate() {
    let password1 = document.getElementById("pwd1").value;
    let password2 = document.getElementById("pwd2").value;
    let name1 = document.getElementById("Name").value;
    if (name1 == "") {
        document.querySelector("#Message").innerHTML = "*Введите свое имя";
        return false;
    } else if (!isNaN(name1)) {
        document.querySelector("#Message").innerHTML = "*Можно ввести только символы";
        return false;
    } else if (password1 == "") {
        document.querySelector("#Password").innerHTML = "*Вы забыли ввести пароль";
        return false;
    } else if (password2 == "") {
        document.querySelector("#Password-confirm").innerHTML = "*Вы забыли подтвердить пароль";
        return false;
    } else if (password1.length < 8) {
        document.querySelector("#Password").innerHTML = "*Пароль должен быть длиной больше 8";
        return false;
    } else if (password1.length > 10) {
        document.querySelector("#Password").innerHTML = "*Пароль должен быть длиной меньше 10 ";
        return false;
    } else if (password1 != password2) {
        document.querySelector("#Password-confirm").innerHTML = "*Пароль не совпадает";
        return false;
    } else {
        alert("Пароль был успешно создан");
        document.write("Поздравляю! Вы зарегестрированы на нашем сайте!");
    }
}

function RememberTheUser(RememberToCheck) {
    if (RememberToCheck.checked) {
        document.querySelector("#submit").disabled = false;
    } else {
        document.querySelector("#submit").disabled = true;
    }
}