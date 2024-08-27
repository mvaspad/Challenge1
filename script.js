const textArea = document.querySelector(".text-area");
const message = document.querySelector(".message");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncrypt(){
    const textEncrypt = encrypt(textArea.value)
    message.value = textEncrypt
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function encrypt(stringEncrypt){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncrypt = stringEncrypt.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncrypt.includes(matrizCodigo[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncrypt
}


function btnDecrypt(){
    const textDecrypt = decrypt(textArea.value)
    message.value = textDecrypt
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function decrypt(stringDecrypt){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringDecrypt = stringDecrypt.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDecrypt.includes(matrizCodigo[i][0])){
            stringDecrypt = stringDecrypt.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringDecrypt
}

function copyText(){
    var textbox = document.getElementById("result");

    navigator.clipboard.writeText(textbox.value)
        .then(() => {
            // Success feedback
            alert("Text copied: " + textbox.value);
        })
        .catch(err => {
            // Error feedback
            console.error("Failed to copy text: ", err);
        });
}