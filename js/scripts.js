// Manejo del formulario de contacto
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Gracias por tu mensaje, ${name}! Te responderé pronto.`);
        document.getElementById("contact-form").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});