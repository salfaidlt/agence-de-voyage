document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: "Envoyé!",
        text: "Merci pour votre message! Nous vous contacterons bientôt.",
        icon: "success" 
    });
    this.reset();
});
