
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



const sloganH2 = document.querySelector('.appointments-img-text h2');
const sloganP = document.querySelector('.appointments-img-text p');

const slogans = [
  "Ink for the moonstruck.",
  "Madness, made permanent.",
  "Where the moon leaves its mark.",
  "Wear your wild.",
  "Beautifully unhinged. Permanently yours.",
  "Art for the wild at heart.",
  "Let the moon mark you.",
  "Your skin. Our lunacy.",
  "Tattoos for the beautifully strange.",
  "Made under the moon."
];

const smallSlogans = [
  "Driven by the moon. Inked for life.",
  "A lunar pull you can wear.",
  "Moonstruck art, lasting marks.",
  "Where moonlight meets ink.",
  "Consult the moon. Book the artist.",
  "Marked by the moon.",
  "Ink with a lunar pull.",
  "Born of moonlight and wild ideas."
];



if (sloganH2 && sloganP) {
  sloganH2.textContent = slogans[getRandomInt(slogans.length)];
  sloganP.textContent = smallSlogans[getRandomInt(smallSlogans.length)];
}
console.log(
  'h2 text:', JSON.stringify(sloganH2?.textContent),
  'p text:',  JSON.stringify(sloganP?.textContent),
  'h2 rect:', sloganH2?.getBoundingClientRect(),
  'overlay rect:', document.querySelector('.appointments-img-text')?.getBoundingClientRect()
);

