window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);

  document.querySelector(".se_mere").addEventListener("click", toggleMere);
}

function toggleMenu() {
  console.log("toggleMenu");
  document.querySelector("#menu").classList.toggle("hidden");

  let erSkjult = document.querySelector("#menu").classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#menuknap").textContent = "☰";
  } else {
    document.querySelector("#menuknap").textContent = "✖";
  }
}

function toggleMere() {
  console.log("toggleMere");
  document.querySelector(".se_mere_wrapper").classList.toggle("hidden_2");

  let erSkjult = document
    .querySelector(".se_mere_wrapper")
    .classList.contains("hidden_2");

  if (erSkjult == true) {
    document.querySelector(".se_mere").textContent = ">";
  } else {
    document.querySelector(".se_mere").textContent = "<";
  }
}
