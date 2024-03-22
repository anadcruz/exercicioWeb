function displayDate() {
    
    var agora = new Date();
    var hora = agora.getHours();
    var minutos = agora.getMinutes();
    


    var horaDisplay = document.getElementById("horaDisplay");
    horaDisplay.textContent = "Hora atual: " ;
}
function showAlert() {
    alert("Olá!");
}
