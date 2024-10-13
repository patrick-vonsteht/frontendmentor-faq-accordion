const faqAccordion = document.querySelector(".faq-accordion")

faqAccordion.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("accordion-header")) {
    const header = evt.target;
    const panel = document.getElementById(header.getAttribute("aria-controls"))

    header.classList.toggle("is-header-expanded")
    panel.classList.toggle("is-panel-expanded")
  }
});