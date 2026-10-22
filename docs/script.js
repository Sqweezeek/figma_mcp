const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");
const bagCount = document.querySelector(".bag-count");
const bagButton = document.querySelector(".bag-button");
const feedback = document.querySelector(".cart-feedback");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
  navigation?.classList.toggle("is-open", !isOpen);
});

let itemsInBag = 0;
document.querySelectorAll(".quick-add").forEach((button) => {
  button.addEventListener("click", () => {
    itemsInBag += 1;
    if (bagCount) bagCount.textContent = String(itemsInBag);
    bagButton?.setAttribute("aria-label", `Shopping bag, ${itemsInBag} item${itemsInBag === 1 ? "" : "s"}`);
    if (feedback) feedback.textContent = `${button.dataset.product} added to your bag.`;
  });
});
