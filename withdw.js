// input slider values shows text content //

const rng = document.querySelector("#rng_pp");

rng.addEventListener("input", function() {
  price.style.color = "#CB0856";
  price.textContent = rng.value + "$";
});

const rng_tw = document.querySelector("#inp_p");

rng_tw.addEventListener("input", function() {
  price_tw.style.color = "#CB0856";
  price_tw.textContent = rng_tw.value + "$";
});

const rng_thr = document.querySelector("#wis_inp");

rng_thr.addEventListener("input", function() {
  price_thr.style.color = "#CB0856";
  price_thr.textContent = rng_thr.value + "$";
});