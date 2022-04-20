class Product {
    constructor(product, category, quantity, price) {
        this.product = product;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
    }
}

let products = [];
let cart = [];

document.addEventListener('DOMContentLoaded', function() {
    let jsonProduct = localStorage.getItem('products');
    let jsonCart = localStorage.getItem('cart');
    if(jsonProduct !== null) {
        products = JSON.parse(jsonProduct);
    }
    if(jsonCart !== null) {
        cart = JSON.parse(jsonCart);
    }

    myCart();
    if(document.location.pathname === '/admin.html'){
        viewProduct();
        addProduct();
    } else if(document.location.pathname === '/index.html') {
        cardsProduct();
    } else if(document.location.pathname === '/cart.html') {
        cartDetail();
    }
    
})

// All Page

function myCart() {
    let mycart = document.querySelector('#mycart span');
    mycart.innerText = cart.length;
}

// Cart Page

function cartDetail() {
    let lista = document.querySelector('#cartProduct ul');
    let total = 0;
    cart.forEach(ele => { 
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerText = ele.product + ' (' + ele.category + ')';
        let span = document.createElement('span');
        span.className = 'badge bg-primary rounded-pill';
        span.innerText = '€ ' + ele.price;
        li.appendChild(span);
        lista.appendChild(li);
        total += Number.parseFloat(ele.price);
    })
    document.querySelector('#cartProduct h3').innerText = 'Tot. ' + total
}

// User Page

function cardsProduct() {
    let div = document.querySelector('#cardProduct div');
    div.innerHTML = '';
    products.forEach((ele,i) => {
        let cardCol = document.createElement('div');
        cardCol.className = 'col';
        let card = document.createElement('div');
        card.className = 'card h-100';
        let img = document.createElement('img');
        img.className = 'card-img-top';
        img.setAttribute('src', 'img/product-placeholder.png');
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        let title = document.createElement('h5');
        title.className = 'card-title';
        title.innerText = ele.product;
        let category = document.createElement('p');
        category.className = 'card-text';
        category.innerText = 'Category: ' + ele.product;
        let price = document.createElement('p');
        price.className = 'card-text text-end';
        price.innerHTML = '<strong>Price: ' + ele.price + '</strong>';
        let action = document.createElement('p');
        action.className = 'card-text';
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.className = 'btn btn-warning mx-auto w-100';
        btn.innerText = 'Add to Cart';
        btn.addEventListener('click', () => { addToCart(ele) })
        action.appendChild(btn);
        cardBody.appendChild(title);
        cardBody.appendChild(category);
        cardBody.appendChild(price);
        cardBody.appendChild(action);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardCol.appendChild(card);
        /*cardCol.innerHTML = `<div class="card h-100">
                            <img src="img/product-placeholder.png" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${ele.product}</h5>
                                <p class="card-text">Category: ${ele.category}</p>
                                <p class="card-text text-end"><strong>Price: ${ele.price}</strong></p>
                                <p class="card-text"><button type="button" class="btn btn-warning mx-auto w-100" onClick="addToCart(${i})">Add to Cart</button></p>
                            </div>
                        </div>` */
        div.appendChild(cardCol);
    })
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    myCart();
}

// Admin Page

function addProduct() {
    const button = document.querySelector('#formProduct button');
    button.addEventListener('click', function() {
        const input = document.querySelectorAll('#formProduct input');
        if(input[0].value.trim() !== '' && input[1].value.trim() !== '' && input[2].value.trim() !== '' && input[3].value.trim() !== '') {
            products.push(new Product(input[0].value, input[1].value, input[2].value, input[3].value));
            input[0].value = '';
            input[1].value = '';
            input[2].value = '';
            input[3].value = '';
            localStorage.setItem('products', JSON.stringify(products));
        }
        viewProduct();
    })
}

function viewProduct() {
    let table = document.querySelector('#tableProduct tbody');
    table.innerHTML = '';
    products.forEach((ele, i) => {
        let tr = document.createElement('tr');
        tr.innerHTML = `<th scope="row">${i+1}</th>
                        <td>${ele.product}</td>
                        <td>${ele.category}</td>
                        <td>${ele.quantity}</td>
                        <td>${ele.price}</td>
                        <td><button type="button" class="btn btn-danger btn-sm" onClick="removeProduct(${i})"><i class="bi bi-trash3"></i></button></td>`;
        table.appendChild(tr);
    })
}

function removeProduct(index) {
    let productDelete = products.splice(index, 1);
    let pd = cart.findIndex(ele => ele.product === productDelete[0].product);
    if(pd !== undefined) {
        console.log(pd);
        cart.splice(pd, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        myCart();
    }
    localStorage.setItem('products', JSON.stringify(products));
    viewProduct();
}