const accHeader = document.querySelectorAll(".accordion__item-header");

accHeader.forEach((header) => {
  header.addEventListener("click", (e) => {
    const activeHeader = document.querySelector(
      ".accordion__item-header.active"
    );

    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.toggle("active");
      activeHeader.nextElementSibling.style.maxHeight = 0;
    }

    header.classList.toggle("active");
    const accBody = header.nextElementSibling;

    if (header.classList.contains("active")) {
      accBody.style.maxHeight = accBody.scrollHeight + "px";
    } else {
      accBody.style.maxHeight = 0;
    }
  });
});
