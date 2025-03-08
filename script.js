let cart = [];
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeModal = document.querySelector('.close');
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const productId = product.dataset.id;
        const productName = product.querySelector('h3').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        
 
        cart.push({ id: productId, name: productName, price: productPrice });
        

        updateCart();
    });
});


function updateCart() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const count = cart.length;
    cartCount.textContent = count;
    cartTotal.textContent = total.toFixed(2);
}
cartButton.addEventListener('click', () => {
    cartModal.style.display = 'block';
    displayCartItems();
});
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
function displayCartItems() {
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)} Rs`;
        cartItemsList.appendChild(li);
    });
}
document.getElementById('checkoutButton').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    console.log('Cart:', cart);
});
