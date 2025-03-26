document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
        document.querySelector(".nav-menu").classList.toggle("active");
    }
    document.querySelector(".hamburger").addEventListener("click", toggleMenu);

    // AJAX untuk Form Kontak
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let formData = new FormData(this);
        fetch("contact.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("formMessage").innerText = data.message;
            this.reset();
        })
        .catch(error => console.error("Error:", error));
    });
});
