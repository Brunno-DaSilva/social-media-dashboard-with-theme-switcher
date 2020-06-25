let lightMode = localStorage.getItem("lightMode");

const lightModeToggle = document.querySelector("#light-mode-toggle");

const enablelightMode = () => {
  document.body.classList.add("lightMode");

  localStorage.setItem("lightMode", "enabled");
};

const disablelightMode = () => {
  document.body.classList.remove("lightMode");

  localStorage.setItem("lightMode", null);
};

if (lightMode === "enabled") {
  enablelightMode();
}

lightModeToggle.addEventListener("click", () => {
  lightMode = localStorage.getItem("lightMode");

  if (lightMode !== "enabled") {
    enablelightMode();
  } else {
    disablelightMode();
  }
});
