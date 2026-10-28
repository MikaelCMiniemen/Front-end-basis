const appointmentDateInput = document.querySelector('.appointment-date-input');
const appointmentTimeInput = document.querySelector('.appointment-time-input');
const appointmentArtistInput = document.querySelector('.appointment-artist-select');
const appointmentNameInput = document.querySelector('.appointment-name-input');
const appointmentEmailInput = document.querySelector('.appointment-email-input');
const form = document.querySelector('.appointment-planner-form');

function setInvalid(el, isInvalid) {
  el.classList.toggle('invalid-input', isInvalid);
}

function checkEmptyFields() {
if (appointmentsMain){
  setInvalid(appointmentDateInput,   appointmentDateInput.value === '');
  setInvalid(appointmentTimeInput,   appointmentTimeInput.value === '');
  setInvalid(appointmentArtistInput, appointmentArtistInput.value === 'invalid');
  setInvalid(appointmentNameInput,   appointmentNameInput.value.trim() === '');
  setInvalid(appointmentEmailInput,  !appointmentEmailInput.value.includes('@'));
}
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkEmptyFields();
});