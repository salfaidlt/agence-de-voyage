document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: "Ênvoyé!",
        text: "Merci pour votre message! Nous vous contacterons bientôt.",
        icon: "success" 
    });
    this.reset();
});
