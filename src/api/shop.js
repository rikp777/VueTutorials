const _products = [
    {"id": 1, "title": "IPad 4 Mini", "price": 500.01, "quantity": 2},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "quantity": 10},
    {"id": 3, "title": "Charli XCX -Sucker CD", "price": 500.01, "quantity": 0},
];

export default {
    getProducts(cb) {
        setTimeout(() => cb(_products),1000)
    },

    buyProducts(products, cb, errorCb){
        setTimeout(() => {
            (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJs') > -1)
                ? cb()
                : errorCb()
        }, 100)
    }
}