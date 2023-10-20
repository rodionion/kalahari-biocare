import "../styles/style-global.css";
import "../styles/style-about.css";
import "../styles/style-blog.css";
import "../styles/style-contact.css";
import "../styles/style-product.css";
import "../styles/style-products-general.css";
import "../styles/style-products-specific.css";
import "../styles/style-index.css";
import "../graphics/logo.png"

// 	------------------------------
// 	Header
// 	------------------------------



class header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = 
        `
        <header>

            <!-- Header Logo -->
            <a href="./index.html">
                <img id="logo" src="./logo.png" alt="kalahari-biocare-logo"></a>

            <!-- Header hamburger icon -->
            <input type="checkbox" id="hamburger-checkbox">
            <label id="hamburger" for="hamburger-checkbox">
                <span class="hamburgerLine" id="hamburgerLine-1"></span>
                <span class="hamburgerLine" id="hamburgerLine-2"></span>
                <span class="hamburgerLine" id="hamburgerLine-3"></span>
            </label>

            <!-- Header menu links -->
            <nav id="headerMenu">
                <ul>
                    <li><a class="headerMenu-link" href="./products.html">Products</a></li>
                    <li><a class="headerMenu-link" href="./contact.html">Contact</a></li>
                    <li><a class="headerMenu-link" href="./about.html">About</a></li>
                    <li><a class="headerMenu-link" href="./blog.html">Blog</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define("header-component", header);

// Reveal header on scroll down
// const headerElement = document.querySelector("header");
// document.addEventListener("scroll", 
//     () => headerElement.classList.add("headerAfterScroll"), 
//     { once: true });