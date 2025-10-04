// Product array
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Smartphone" },
  { id: "p3", name: "Headphones" },
  { id: "p4", name: "Tablet" }
];

// Populate select field
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    let option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
