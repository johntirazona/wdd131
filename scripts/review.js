document.addEventListener("DOMContentLoaded", () => {
  let count = Number(localStorage.getItem("reviewCount")) || 0;
  count++;
  localStorage.setItem("reviewCount", count);

  const counterElement = document.getElementById("reviewCount");
  if (counterElement) {
    counterElement.textContent = count;
  }
});
