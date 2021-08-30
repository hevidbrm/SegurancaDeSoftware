var code;

function createCaptcha() {
    //Limpa primeiro o conteudo do captcha
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //O codigo abaixo não permite a repetição de caracteres
        var index = Math.floor(Math.random() * charsArray.length + 1); //busca o próximo caractere do array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //Guarda o captcha para que possa validar voce possa salvar isso em algum lugar
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // Adiciona o canvas ao elemento body
}

function validateCaptcha() {
    event.preventDefault();
    debugger
    if (document.getElementById("cpatchaTextBox").value == code) {
        alert("Captcha Valido!")
    } else {
        alert("Captcha Invalido! Tente novamente.");
        createCaptcha();
    }
}