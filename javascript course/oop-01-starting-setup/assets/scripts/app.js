class ProductItem{
    title = 'DEFAULT';
    ImageUrl;
    description;
    price;

    constructor(title, img, desc, price){
        this.title = title;
        this.ImageUrl = img;
        this.description = desc;
        this.price = price;
    }

}



class ProductItemList{
    constructor(product){
        this.product = product;
    }

    addToCart(){
        App.addProduct(this.product);
    }

    render(){
        const prodEle = document.createElement('li')
        prodEle.className = 'product-item'
        prodEle.innerHTML=`
        <div>
            <img src="${this.product.ImageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>\$${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
        `;
        const addButton = prodEle.querySelector('button');
        addButton
        addButton.addEventListener('click', this.addToCart.bind(this));
        return prodEle;
    }
}


class ShoppingCart {
    item=[];


    get totalAmount(){
        const sum = this.item.reduce((prev, currItem)=>{
            return prev+currItem.price;
        }, 0)
        return sum;
    }
    

    addProduct(product){
        this.item.push(product);
        this.totalOutput.innerHTML= `<h2>Total: \$${this.totalAmount}</h2>`;
    }

    render(){
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}


class ProductList{
    products = [
        new ProductItem(
            'McLaren 720s',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/1200px-2018_McLaren_720S_V8_S-A_4.0.jpg',
            'For the big boys',
            12000000,

        ),
        new ProductItem(
            'Bugatti Aventador',
            'https://cdn.motor1.com/images/mgl/6MGkl/s1/4x3/bugatti-chiron-pur-sport.webp',
            'For the big boys',
            20000000,

        )
        
    ];

    constructor(){};

    render(){
    
        const prodList = document.createElement('ul')
        prodList.className = 'product-list'

        for(const prod of this.products){
            const productItem = new ProductItemList(prod);
            prodList.append(productItem.render());

        }

        return prodList;
    }
}

class Shop{
    render(){
        const renderHook = document.getElementById('app');
        this.cart = new ShoppingCart();
        renderHook.append(this.cart.render());
        const productList = new ProductList();
        renderHook.append(productList.render());
    }
}

class App{
    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
    }
    static addProduct(product){
        this.cart.addProduct(product);
    }
}

App.init()
