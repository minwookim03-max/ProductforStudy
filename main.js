const storageKey = "preferred-theme";
const toggleButton = document.getElementById("theme-toggle");

function getStoredTheme() {
  const storedTheme = window.localStorage.getItem(storageKey);
  return storedTheme === "dark" ? "dark" : "light";
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  toggleButton.textContent =
    theme === "dark" ? "Switch to white mode" : "Switch to dark mode";
  toggleButton.setAttribute("aria-label", toggleButton.textContent);
}

applyTheme(getStoredTheme());

toggleButton.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
  window.localStorage.setItem(storageKey, nextTheme);
  applyTheme(nextTheme);
});
