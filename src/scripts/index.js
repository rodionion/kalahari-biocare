document.addEventListener("scroll", revealWhatsAppButton);

function revealWhatsAppButton() {
    console.log(window.scrollY);
    const floatingWhatsAppButton = document.querySelector(".floatingWhatsAppButton");
    if (window.scrollY > 200) {
        floatingWhatsAppButton.classList.add("active");
        document.removeEventListener("scroll", revealWhatsAppButton);
    }
}