const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productsInfoContainer = document.querySelector('.product-info');
const productName = document.getElementById('product-name'); 
const buyButton = document.querySelector('.buy-button');
const orderFormContainer = document.querySelector('.order-form-container');
const orderInfoContainer = document.querySelector('.order-info-container');
const confirmOrderButton = document.querySelector('.confirm-order-button');

const categoriesExample = [
    { id: 1, name: 'Clothes', products: ['Dresses', 'Tops', 'Jeans', 'Skirts'] },
    { id: 2, name: 'Shoes', products: ['Boots', 'Loafers', 'Sneakers', 'Ballet flats'] },
    { id: 3, name: 'Accessories', products: ['Belts', 'Gloves', 'Necklaces', 'Rings'] }
];

function generateCategories() {
    categoriesExample.forEach(category => {
        const categoryButton = document.createElement('button');
        categoryButton.textContent = category.name;
        categoryButton.addEventListener('click', () => showProducts(category.products));
        categoriesContainer.appendChild(categoryButton);
    });
}

function showProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = product;
        productItem.addEventListener('click', () => showProductInfo(product));
        productsContainer.appendChild(productItem);
    });
}

function showProductInfo(product) {
    productName.textContent = 'Product: ${product}';
    productsInfoContainer.style.display = 'block';
    buyButton.addEventListener('click', () => {
        purchaseProduct(product);
        showOrderForm();
    });
}

function purchaseProduct(product) {
    alert(`You have purchased: ${product}`);
    productsInfoContainer.style.display = 'none';
}

function showOrderForm() {
    orderFormContainer.style.display = 'block';
}

function confirmOrder() {
    const fullName = document.getElementById('fullName').value;
    const city = document.getElementById('city').value;
    const delivery = document.getElementById('delivery').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const quantity = document.getElementById('quantity').value;
    const comment = document.getElementById('comment').value;
   
    if(fullName && city && delivery && paymentMethod && quantity) {
        showOrderInfo(fullName, city, delivery, paymentMethod, quantity);
    } else {
        alert("Please, fill in the form.");
    }
}

confirmOrderButton.addEventListener('click', () => {
    confirmOrder();
}); 

function showOrderInfo(fullName, city, delivery, paymentMethod, quantity) {
    orderFormContainer.style.display = 'none';
}


generateCategories();