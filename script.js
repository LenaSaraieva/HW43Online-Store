const categoriesContainer = document.querySelector('.categories');
const productsContainer = document.querySelector('.products');
const productInfoContainer = document.querySelector('.product-info');
const productName = document.getElementById('product-name');
const buyButton = document.querySelector('.buy-button');
const myPurchasesButton = document.querySelector('.purchase-button');
const myPurchasesContainer = document.querySelector('.my-purchases');
const purchaseList = document.getElementById('purchase-list');
const purchasesDetailsContainer = document.querySelector('.purchases-details');
const purchaseDetailsList = document.getElementById('purchase-details-list');
const myOrdersButton = document.querySelector('.my-orders-button');

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
    productName.textContent = `Product: ${product}`;
    productInfoContainer.classList.remove('d-none');
    buyButton.addEventListener('click', () => purchaseProduct(product));
}


function getRandomDate() {
    const currentDate = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 365); 
    const randomDate = new Date(currentDate.getTime() - randomDaysAgo * 24 * 60 * 60 * 1000);
    return randomDate.toLocaleDateString();
}

function purchaseProduct(product) {
    const date = getRandomDate();
    const price = Math.floor(Math.random() * 100) + 1; 
    savePurchaseToStorage(product, date, price);
    alert(`You have purchased: ${product}`);
    productInfoContainer.classList.add('d-none');
    displayPurchases();
}


 function loadPurchaseFromStorage() {
    const purchaseInStorage = JSON.parse(localStorage.getItem('purchases'));
    return purchaseInStorage;
 }

 function savePurchaseToStorage(product, date, price) {
    const purchases = loadPurchaseFromStorage();
    purchases.push({product, date, price});
    localStorage.setItem('purchases', JSON.stringify(purchases));
}

 function displayPurchases() {
    const purchases = loadPurchaseFromStorage();
    purchaseList.innerHTML = '';
 }



 function showPurchasesDetails(purchase) {
    purchasesDetailsContainer.innerHTML = 'Purchase Details: product: ${purchase.product} price: ${purchase.price} date: ${purchase.date}';
    purchasesDetailsContainer.style.display = 'block';
 }

 myPurchasesButton.addEventListener('click', () => {
    categoriesContainer.style.display = 'none';
    productsContainer.style.display = 'none';
    myPurchasesContainer.style.display = 'block';
    displayPurchases();
 });
generateCategories();
