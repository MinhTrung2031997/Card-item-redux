

var initialState = [{
        id: 1,
        name: 'Iphone 7 Plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114114/iphone-8-plus-256gb-gold-400x460.png',
        description: 'Sản phẩm do Apple sản xuất.',
        price: 500,
        inventory: 15,
        rating: 4
    },
    {
        id: 2,
        name: 'Samsung Galaxy S7',
        image: 'https://cdn.tgdd.vn/Products/Images/42/200388/samsung-galaxy-a30-32gb-400x460.png',
        description: 'Sản phẩm do Samsung sản xuất.',
        price: 400,
        inventory: 20,
        rating: 3
    },
    {
        id: 3,
        name: 'Oppo F1s',
        image: 'https://cdn.tgdd.vn/Products/Images/42/165189/oppo-find-x-1-400x460-400x460.png',
        description: 'Sản phẩm do China sản xuất.',
        price: 370,
        inventory: 15,
        rating: 5
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}


export default products;