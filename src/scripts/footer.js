import "../graphics/phone.png";
import "../graphics/map.png";
import "../graphics/whatsapp.png";
import "../graphics/facebook.png";
import "../graphics/instagram.png";

// 	------------------------------
// 	Footer
// 	------------------------------

// 	Footer copyright text with auto year update. 
//  Embedded in <p> at the bottom of the footer

const currentYear = new Date().getFullYear();

class footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div id="footer-contacts">
                <p><a class="footer-contactText" href="tel:+260977521516"><img class="contactIcon" src="./phone.png"> +260 977521516</a></p>
                <p><img class="contactIcon" src="./map.png">PO Box 51386, Ridgeway, Lusaka, Zambia</p>
                <a href="https://wa.me/260977521516/"><img class="socialMedia" src="./whatsapp.png"></a>
                <a href="https://facebook.com/kalaharibiocare/"><img class="socialMedia" src="./facebook.png"></a>
                <a href="https://instagram.com/kalaharibiocare/"><img class="socialMedia" src="./instagram.png"></a>
            </div>
            <nav id="footerMenu">
                <ul>
                    <li><a class="footerMenu-link" href="./index.html">Home</a></li>
                    <li><a class="footerMenu-link" href="./about.html">About</a></li>
                    <li><a class="footerMenu-link" href="./contact.html">Contact</a></li>
                    <li><a class="footerMenu-link" href="./products.html">Products</a></li>
                    <li><a class="footerMenu-link" href="./blog.html">Blog</a></li>
                    <li><a class="footerMenu-link" href="./privacy.html">Privacy</a></li>
                    <li><a class="footerMenu-link" href="./terms.html">Terms</a></li>
                </ul>
            </nav>
            <p id="footer-copyright">
                Copyright © ${currentYear} Kalahari Biocare
            </p>
        </footer>
        `;
    }
}

customElements.define("footer-component", footer);