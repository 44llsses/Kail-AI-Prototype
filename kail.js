// Interaction events and classes on the header section //

const colormix = document.querySelector("h1");

function newclr() {
  colormix.classList.toggle("add_nwc");
}

colormix.addEventListener("click", newclr);

const anim1 = document.querySelector("#code_log");

function anmact() {
  anim1.style.color = "#F14B17";
  anim1.textContent = "Code </>";
  anim1.classList.add("showanim");
}

anim1.addEventListener("click", anmact);

const anim2 = document.querySelector("#businss_log");

function newtx() {
  anim2.style.color = "#F14B17";
  anim2.textContent = "Businness %";
  anim2.classList.add("showanim2");
}

anim2.addEventListener("click", newtx)

const anim3 = document.querySelector("#econommy_log");

function newsc() {
  anim3.style.color = "#FFE519";
  anim3.textContent = "Success $";
  anim3.classList.add("showanim3");
}

anim3.addEventListener("click", newsc);


// Dinamyc displays on the first container //

const typgrid = document.querySelector(".intcont");

function addgrd() {
  typgrid.classList.toggle("gridadd_");
}

typgrid.addEventListener("dblclick", addgrd);

const typflx = document.querySelector(".xinfo_ds");

function addflx() {
  typflx.classList.toggle("flxadd_");
}

typflx.addEventListener("dblclick", addflx);