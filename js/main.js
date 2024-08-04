document.addEventListener("DOMContentLoaded", function () {
  var downloadBtn = document.getElementById("downloadBtn");

  downloadBtn.addEventListener("click", function () {
    var element = document.querySelector(".container");
    var options = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(element).set(options).save();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Список классов, к элементам с которыми нужно добавить эффект
  var classesToRipple = ["box"];

  classesToRipple.forEach(function (className) {
    var elements = document.querySelectorAll("." + className);
    elements.forEach(function (element) {
      element.classList.add("material-ripple");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Восстановление данных из localStorage
  var editableElements = document.querySelectorAll("[contenteditable]");
  editableElements.forEach(function (el) {
    var savedContent = localStorage.getItem(el.id);
    if (savedContent) {
      el.innerHTML = savedContent;
    }
  });

  // Сохранение данных в localStorage
  editableElements.forEach(function (el) {
    el.addEventListener("input", function () {
      localStorage.setItem(el.id, el.innerHTML);
    });
  });
});
