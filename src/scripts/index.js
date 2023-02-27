// Reveal WhatsApp button on scroll

document.addEventListener("scroll", revealWhatsAppButton);
function revealWhatsAppButton() {
    console.log(window.scrollY);
    const floatingWhatsAppButton = document.querySelector(".floatingWhatsAppButton");
    if (window.scrollY > 200) {
        floatingWhatsAppButton.classList.add("active");
        document.removeEventListener("scroll", revealWhatsAppButton);
    }
}

// Reveal divs in Beliefs section

function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el, options)
    })
  }

  function addObserver(el, options) {
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('active')
          observer.unobserve(entry.target)
        }
      })
    }, options)
    observer.observe(el)
  }

  scrollTrigger('.feature', {
    rootMargin: '-200px'
  })