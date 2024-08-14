function encrypt() {
    let textUser = document.getElementById('textUser').value;
    
    // Lógica de encriptación personalizada
    let textEncrypted = encryptText(textUser);
    console.log(textEncrypted);

    // Ocultar elementos
    document.getElementById('image').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text2').style.display = 'none';

    // Crear botón de copiar
    const button = document.createElement('button');
    button.textContent = 'copy';
    button.className = 'copied'; 
    button.addEventListener('click', function() {
        copyText(textEncrypted);
    });

    // Crear área de texto con el texto encriptado
    const textarea = document.createElement('textarea');
    textarea.className = 'container_textarea';
    textarea.value = textEncrypted;
    textarea.readOnly = true;

    // Añadir elementos al contenedor
    const container = document.getElementById('replacementContainer');
    container.innerHTML = ''; // Limpiar contenido previo
    container.appendChild(button);
    container.appendChild(textarea);
}

function decrypt() {
    let textUser = document.getElementById('textUser').value;
    
    // Lógica de desencriptación personalizada
    let textDecrypted = decryptText(textUser);
    console.log(textDecrypted);

    // Ocultar elementos
    document.getElementById('image').style.display = 'none';
    document.getElementById('text').style.display = 'none';
    document.getElementById('text2').style.display = 'none';

    // Crear botón de copiar
    const button = document.createElement('button');
    button.textContent = 'copy';
    button.className = 'copied'; 
    button.addEventListener('click', function() {
        copyText(textDecrypted);
    });

    // Crear área de texto con el texto desencriptado
    const textarea = document.createElement('textarea');
    textarea.className = 'container_textarea';
    textarea.value = textDecrypted;
    textarea.readOnly = true;

    // Añadir elementos al contenedor
    const container = document.getElementById('replacementContainer');
    container.innerHTML = ''; // Limpiar contenido previo
    container.appendChild(button);
    container.appendChild(textarea);
}

function encryptText(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        switch(char) {
            case 'a':
                encryptedText += 'ai';
                break;
            case 'e':
                encryptedText += 'enter';
                break;
            case 'i':
                encryptedText += 'imes';
                break;
            case 'o':
                encryptedText += 'ober';
                break;
            case 'u':
                encryptedText += 'ufat';
                break;
            default:
                encryptedText += char;
                break;
        }
    }
    return encryptedText;
}

function decryptText(text) {
    return text
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard');
}
