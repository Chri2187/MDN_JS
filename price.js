
let total = 0;

let products = [
                'Underpants:6.99',
                'Socks:5.99',
                'T-shirt:14.99',
                'Trousers:31.99',
                'Shoes:23.99'];


for (let i = 0; i < products.length; i++) {

    let pointerIndex = products[i].indexOf(':');
    let productName = products[i].slice(0, pointerIndex);
    let productPrice = products[i].slice(pointerIndex + 1);
    

    let newPrice = Number(productPrice);
    

    // number 5
    let itemText = `${productName} - $ ${newPrice}`;

    console.log(itemText);

    
}

