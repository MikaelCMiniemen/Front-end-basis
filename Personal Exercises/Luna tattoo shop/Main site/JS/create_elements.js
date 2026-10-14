// SELECT EVERY MAIN
const main = document.querySelector('main')

// CREATE FOOTER VAR
const footer = document.createElement('footer')
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

`
// APPEND FOOTER TO MAIN
main.appendChild(footer)

// SELECT HEADER VAR
const hdr = document.querySelector('header')
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
          <li class="nav-link"><a class="hover-y-up" href="#">HOME</a></li>
          <li class="nav-link">
            <a class="hover-y-up" href="#">APPOINTMENTS</a>
          </li>
          <li class="nav-link"><a class="hover-y-up" href="#">CONTACT</a></li>
        </ul>
      </nav>
      <div class="login-div">
        <button class="login-btn hover-y-up">LOG IN</button>
      </div>
`

