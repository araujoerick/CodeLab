const icons = document.querySelectorAll(".icon");

function icon(e) {
  e.onclick = () => {
    e.classList.toggle("filled");
  };
}

icons.forEach(icon);
