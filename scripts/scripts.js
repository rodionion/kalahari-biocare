// URL Prefix. Added in resourse URLs (like images)
// for pages other than index.html. 
// Because those are located in a separate folder, so
// relative paths to resourses are different


// 	------------------------------
// 	Header
// 	------------------------------

class header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {

        // This is used to automatically insert the right URL prefix depending on the relative resourse position. 
        // E. g. index.html was located in the root folder ./ , but other pages were in the pages folder ./pages.
        // This required dynamic prefixing. 
        // All of the pages were moved in the root, so no need in the prefixes.

        let urlPrefix = "./";

        // const htmlFileName = 
        //     window.location.pathname.slice(1);

        // if (htmlFileName.includes("blog")) urlPrefix = "../"

        // if (htmlFileName == "index.html") 
        //     urlPrefix = "./"; else 
        //     urlPrefix = "../";


        this.innerHTML = 
        `
        <header>

            <!-- Header Logo -->

            <a href="https://drwatsondental.com">
                <img id="logo" src="${urlPrefix}graphics/logo.png" alt="kalahari-biocare-logo"></a>

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

                    <li><a class="headerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/products.html">Products</a></li>

                    <li><a class="headerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/contact.html">Contact</a></li>

                    <li><a class="headerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/about.html">About</a></li>

                    <li><a class="headerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/blog.html">Blog</a></li>

                    
            
                </ul>
            
            </nav>
            
        </header>
        `;
    }
}

/*

<li><a class="headerMenu-link" href="https://kalaharibiocare.com/contact">Contact</a></li>

                    <li><a class="headerMenu-link" href="https://kalaharibiocare.com/about">About</a></li>

                    <li><a class="headerMenu-link" href="https://kalaharibiocare.com/blog">Blog</a></li>

*/

customElements.define("header-component", header);

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

        // This is used to automatically insert the right URL prefix depending on the relative resourse position. 
        // E. g. index.html was located in the root folder ./ , but other pages were in the pages folder ./pages.
        // This required dynamic prefixing. 
        // All of the pages were moved in the root, so no need in the prefixes.

        let urlPrefix = "./";

        // const htmlFileName = 
        //     window.location.pathname.slice(1);

        // if (htmlFileName.includes("blog")) urlPrefix = "../"

        // if (htmlFileName == "index.html")
        //     urlPrefix = "./"; else
        //     urlPrefix = "../";

        this.innerHTML = `
        <footer>

        <div id="footer">

            <div id="footer-contacts">

                    <p><a class="footer-contactText" href="tel:+260977521516"><img class="contactIcon" src="${urlPrefix}graphics/phone.png"> +260 977521516</a></p>

                    <p><img class="contactIcon" src="${urlPrefix}graphics/map.png">PO Box 51386, Ridgeway, Lusaka, Zambia</p>

                    <a href="https://wa.me/260977521516/"><img class="socialMedia" src="${urlPrefix}graphics/whatsapp.png"></a>

                    <a href="https://facebook.com/kalaharibiocare/"><img class="socialMedia" src="${urlPrefix}graphics/facebook.png"></a>

                    <a href="https://instagram.com/kalaharibiocare/"><img class="socialMedia" src="${urlPrefix}graphics/instagram.png"></a>
            
            </div>
            
            <nav id="footerMenu">

                <ul>

                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/">Home</a></li>

                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/about">About</a></li>

                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/contact">Contact</a></li>

                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/products">Products</a></li>
                
                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/blog">Blog</a></li>

                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/privacy">Privacy</a></li>

                    <li><a class="footerMenu-link" href="https://rodionlee.github.io/kalahari-biocare/terms">Terms</a></li>

                </ul>
            
            </nav>

            
            <p id="footer-copyright">
            Copyright © ${currentYear} Kalahari Biocare
            </p>
            
        </div>

    </footer>
        `;
    }
}

customElements.define("footer-component", footer);