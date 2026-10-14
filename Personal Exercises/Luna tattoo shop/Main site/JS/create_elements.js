// SELECT EVERY MAIN
const main = document.querySelector('main');

// CREATE FOOTER VAR
const footer = document.createElement('footer');
footer.innerHTML += `

        <div class="footer-div">
          <p class="footer-txt">
            Custom, fine-line en blackwork tattoos door Luna.
          </p>
          <h3 class="footer-h-bottom">LUNATIC TATTOOS</h3>
        </div>
        <div class="footer-div">
          <h3 class="footer-h-top">BOEKEN</h3>
          <p class="footer-txt">
            Enkel op afspraak. Boek via lunatic.tattoos@gmail.
          </p>
        </div>
        <div class="footer-div footer-div-right">
          <p class="footer-txt">
            Volg voor flash designs, genezen werk en updates uit de studio.
          </p>
          <h3 class="footer-h-bottom">@LUNATICTATTOOS</h3>
        </div>
        <div class="footer-div footer-div-right">
          <h3 class="footer-h-top">CONTACT</h3>
          <p class="footer-txt">
            Leuven · lunatic.tattoos@gmail.com · © 2026 Lunatic Tattoos <br />
            Alle rechten voorbehouden.
          </p>
        </div>

`;
// APPEND FOOTER TO MAIN
main.appendChild(footer);

// SELECT HEADER VAR
const hdr = document.querySelector('header');
// CREATE HEADER CONTENT
hdr.innerHTML += `


      <div class="logo-div">
        <img
          class="logo-icon"
          src="IMAGES/Lunatic-tattoos-logo.png"
          alt="Logo Lunatic Tattoos"
        />
        <h1 class="title">LUNATIC TATTOOS</h1>
      </div>
      <nav>
        <ul class="nav-ul">
          <li class="nav-link"><a class="home-link" href="index.html">HOME</a></li>
          <li class="nav-link">
            <a class="appointments-link" href="appointments.html">APPOINTMENTS</a>
          </li>
          <li class="nav-link"><a class="contact-link" href="contact.html">CONTACT</a></li>
        </ul>
      </nav>
      <div class="login-div">
        <button class="login-btn ">LOG IN</button>
      </div>
`;
// SELECT NAV LI ELEMENTS
const homeLink = document.querySelector('.home-link');
const appointmentsLink = document.querySelector('.appointments-link');
const contactLink = document.querySelector('.contact-link');

// SELECT MAINS
const homeMain = document.querySelector('.main-home');
const appointmentsMain = document.querySelector('.main-appointments');
const contactMain = document.querySelector('.main-contact');

if (homeMain) {
  homeLink.classList.add('page-focus');
} else if (appointmentsMain) {
  appointmentsLink.classList.add('page-focus');
} else if (contactMain) {
  contactLink.classList.add('page-focus');
}
