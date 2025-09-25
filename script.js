AOS.init({
    once: false,
    duration: 800,
});

window.addEventListener('scroll', function() {
    var indicator = document.querySelector('.scroll-indicator');
    if (window.scrollY > 100) {
        indicator.style.opacity = '0';
    } else {
        indicator.style.opacity = '1';
    }
});

class PluspointContact extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <h2 class="section-heading">Get in Touch</h2>
            <p class="lead">We're ready to help you achieve your goals.</p>
            <form>
                <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Your Name" required>
                </div>
                <div class="mb-3">
                    <input type="email" class="form-control" placeholder="Your Email" required>
                </div>
                <div class="mb-3">
                    <textarea class="form-control" rows="5" placeholder="Your Message" required></textarea>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-primary btn-lg">Send Message</button>
                </div>
            </form>
        `;
    }
}
customElements.define('pluspoint-contact', PluspointContact);

document.getElementById('logo-link').addEventListener('click', function(event) {
    event.preventDefault();
    const animatedLogo = document.getElementById('animated-logo');
    animatedLogo.classList.add('active');
    animatedLogo.addEventListener('animationend', () => {
        animatedLogo.classList.remove('active');
    }, { once: true });
});