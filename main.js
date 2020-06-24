console.log("Ciao Bella");

let lightMode = localStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#light-mode-toggle");

const enablelightMode = () => {
  // 1. Add the class to the body
  document.body.classList.add("lightMode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", "enabled");
};

const disablelightMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove("lightMode");
  // 2. Update lightMode in localStorage
  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enablelightMode();
}

lightModeToggle.addEventListener("click", () => {
  // get their lightMode setting
  lightMode = localStorage.getItem("lightMode");

  // if it not current enabled, enable it
  if (lightMode !== "enabled") {
    enablelightMode();
    // if it has been enabled, turn it off
  } else {
    disablelightMode();
  }
});
