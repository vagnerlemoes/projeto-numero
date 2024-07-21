const randomNumber = Math.floor(Math.random() * 1000) + 1;
console.log("Número Aleatório:", randomNumber); 

function verificarChute() {
    
    const chute = document.getElementById("chuteInput").value;
    const messageElement = document.getElementById("message");

    
    if (chute === "") {
        messageElement.textContent = "Por favor, insira um número!";
        messageElement.style.color = "red";
        return;
    }

    
    const chuteNumero = Number(chute);

    if (chuteNumero > randomNumber) {
        messageElement.textContent = "Tente um número menor!";
        messageElement.style.color = "orange";
        document.getElementById("chuteInput").value = "";
    } else if (chuteNumero < randomNumber) {
        messageElement.textContent = "Tente um número maior!";
        messageElement.style.color = "orange";
        document.getElementById("chuteInput").value = "";
    } else {
        messageElement.textContent = "Parabéns! Você acertou o número secreto";
        messageElement.style.color = "green";
        alert("Acertou!!!\n Você é bom mesmo");
        
    }
}





