
// Array of jet objects  each jet is stored as an object with its data
const jets = [
  { name: "F-14 Tomcat",         img: "f14.png",     page: "f14.html",  speed: 2.34, gen: 4 },
  { name: "F/A-18 Super Hornet", img: "f18.jpg",     page: "f18.html",  speed: 1.8,  gen: 4 },
  { name: "F-22 Raptor",         img: "f22.jpg",     page: "F22.html",  speed: 2.25, gen: 5 },
  { name: "F-35 Lightning II",   img: "f35II.jpg",   page: "f35.html",  speed: 1.6,  gen: 5 },
  { name: "Su-57 Felon",         img: "su57.jpg",    page: "su57.html", speed: 2.0,  gen: 5 },
  { name: "Su-27 Flanker",       img: "su27.jpg",    page: "su27.html", speed: 2.35, gen: 4 },
  { name: "Su-35 Super Flanker", img: "su35.jpg",    page: "su35.html", speed: 2.25, gen: 4 },
  { name: "JAS-39 Gripen",       img: "jas39.jpg",   page: "jas39.html",speed: 2.0,  gen: 4 },
  { name: "J-20 Mighty Dragon",  img: "j20.jpg",     page: "j20.html",  speed: 2.0,  gen: 5 },
  { name: "Eurofighter Typhoon", img: "ef.png",      page: "eu.html",   speed: 2.0,  gen: 4 },
];

// Grab the container where the cards go
const container = document.querySelector(".home-jet-container");

// Clear any hardcoded cards we're generating them with JS now
container.innerHTML = "";

// Loop through every jet in the array and build a card for each one
for (let i = 0; i < jets.length; i++) {
  const jet = jets[i];

  // Conditional: if the jet is Gen 5, give it a special gold border to stand out
  const isGenFive = jet.gen === 5;
  const cardStyle = isGenFive
    ? 'style="border: 2px solid #ff7b00; box-shadow: 0 0 18px rgba(255,123,0,0.3);"'
    : '';

  // Conditional: jets faster than Mach 2 get a speed badge
  let badge = "";
  if (jet.speed >= 2.25) { //so if its over this speed it gets the effetct
    badge = `<span class="speed-badge">MACH ${jet.speed}</span>`;
  }

  // Build the card HTML and add it to the container
  container.innerHTML += `
    <a href="${jet.page}" class="jet-card-home" ${cardStyle}> 
      ${badge}
      <img src="${jet.img}" alt="${jet.name}">
      <h3>${jet.name}</h3>
    </a>
  `;
}
