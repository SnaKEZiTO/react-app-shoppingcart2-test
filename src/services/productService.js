const products = [
    {
        id: "0",
        name: "First Product",
        price: "24.99",
        image: "https://d2iiahg0ip5afn.cloudfront.net/media/keep-it-cool-cold-brew/images/497340947.keepitcool-flask-coldbrew-coffee-front.jpg",
        stock: 5
    },
    {
        id: "1",
        name: "Second Product",
        price: "18.99",
        image: "https://images-na.ssl-images-amazon.com/images/I/81tVH%2ByDryL._SY355_.jpg",
        stock: 0
    },
    {
        id: "2",
        name: "Third Product",
        price: "9.50",
        image: "https://www.coffee-mate.com/sites/default/files/styles/medium_rectangle/public/files/products/product-1810737.png",
        stock: 6
    },
    {
        id: "3",
        name: "Fourth Product",
        price: "19.49",
        image: "https://www.ocado.com/productImages/345/345231011_0_640x640.jpg?identifier=642f00374a44b40d3f09893705502728",
        stock: 3
    },
    {
        id: "4",
        name: "Fifth Product",
        price: "10.00",
        image:
            "https://cdn.shopify.com/s/files/1/2603/1874/products/US_48oz_ColdBrew_Black_White_420185_Render_V1_6b7bee07-c785-4867-9f36-3de29ee4c1ed_1400x1400.jpg?v=1520388925",
        stock: 7
    }
];

export function getProducts() {
    return products;
}

export function saveProduct(product) {
    if (!product.id) {
        //NEW PRODUCT
        product.id = fakeId();

        products.push(product);
        return;
    }

    //EXISTING PRODUCT
    const productInDb = products.find(p => p.id === product.id);
    const index = products.indexOf(productInDb);
    products[index] = product;
}

export function getProductById(productId) {
    const product = products.find(product => product.id === productId);

    return product;
}

function fakeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

export default {
    getProducts
};
