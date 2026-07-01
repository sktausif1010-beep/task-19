const services = [
    {
        name: "Dry Cleaning",
        price: 999,
        image: "dry-cleaning.jpg"
    },
    {
        name: "Leather Cleaning",
        price: 1499,
        image: "leather-cleaning.jpg"
    },
    {
        name: "stain Removal",
        price: 799,
        image: "stain-removal.jpg"
    },
    {
        name: "wedding Dress Cleaning",
        price: 899,
        image: "wedding-dress.jpg"
    },
];

let currentIndex = 0;
let cart = [];
let total = 0;

const serviceImage = document.getElementById("serviceImage");
const serviceName = document.getElementById("serviceName");
const servicePrice = document.getElementById("servicePrice");

const addBtn = document.getElementById("addBtn");
const skipBtn = document.getElementById("skipBtn");

const cartItems = document.getElementById("cartItems");
const totalAmount = document.getElementById("totalAmount");

const cartBtn = document.getElementById("cartBtn");
const bookBtn = document.getElementById("bookBtn");

const bookingForm = document.getElementById("bookingForm");

function loadService() {
    const service = services[currentIndex];

    serviceImage.src = service.image;
    serviceName.textContent = service.name;
    servicePrice.textContent = service.price;
}

function updateCart() {

    if (cart.length === 0) {
        cartItems.innerHTML =
            `<p class="empty-message">No Items Added</p>`;
    } else {

        cartItems.innerHTML = "";

        cart.forEach(item => {

            cartItems.innerHTML += `
                <div class="cart-item">
                    <span>${item.name}</span>
                    <strong>₹${item.price}</strong>
                </div>
            `;

        });

    }

    totalAmount.textContent = total;

}

addBtn.addEventListener("click", () => {

    const item = services[currentIndex];

    cart.push(item);

    total += item.price;

    updateCart();

});

skipBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= services.length) {
        currentIndex = 0;
    }

    loadService();

});

cartBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Please add at least one service.");
    } else {
        alert("Items successfully added to cart.");
    }

});

bookBtn.addEventListener("click", () => {

    if (cart.length === 0) {
        alert("Please add services before booking.");
        return;
    }

    document
        .querySelector(".booking-form")
        .scrollIntoView({
            behavior: "smooth"
        });

});

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    if (cart.length === 0) {
        alert("No services selected.");
        return;
    }

    alert(
        `Booking Successful!\n\nThank You ${name}\n\nTotal Amount: ₹${total}`
    );

    bookingForm.reset();

    cart = [];
    total = 0;

    updateCart();

});

loadService();
