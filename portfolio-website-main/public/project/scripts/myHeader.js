const categoryBtn = document.querySelector(".category-btn");
const sideNav = document.querySelector(".side-nav");

const categoryMenu = document.createElement("div");

categoryMenu.className = "category-menu";

categoryMenu.innerHTML = `
  <div class="menu-item"> Automotive</div>
  <div class="menu-item"> Appliances</div>
  <div class="menu-item"> Women's Clothing</div>
  <div class="menu-item"> Men's Clothing</div>
  <div class="menu-item"> Toys & Games</div>
  <div class="menu-item"> Furniture</div>
  <div class="menu-item"> Beauty & Health</div>
  <div class="menu-item"> Shoes</div>
  <div class="menu-item"> Hair Extensions & Wigs</div>
  <div class="menu-item"> Pet Supplies</div>
  <div class="menu-item"> Electronics</div>
  <div class="menu-item"> Cell Phones & Accessories</div>
`;

sideNav.appendChild(categoryMenu);

categoryBtn.addEventListener("mouseenter", () => {
  categoryMenu.style.display = "block";
}
);

sideNav.addEventListener("mouseleave", () => {
  categoryMenu.style.display = "none";
});