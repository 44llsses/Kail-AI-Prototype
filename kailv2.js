// Text content change to touch //

const conv = document.querySelector("#conv_t"
);

function  actcv() {
  conv.textContent = "230.208 d";
}

conv.addEventListener("click", actcv);

const nwfc = document.querySelector("#show_csh");
let cash = 50000;
let months = ["Sep", "Aug", "Jul" ];
let spends = [15000, 5000, 5000];
let count = 0;

// If + count to remove numbers //

function newtxt() {
  nwfc.textContent = "No cash";
  cash -= spends[0];
  if (cash > 0000) {
  console.log(nwfc.textContent = months[count] + ": " + cash + "$ ");
  }
  count++;
}

nwfc.addEventListener("click", newtxt)
