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

    orderProduct(){
        console.log('Ordering.......')
        console.log(this.item)
        alert('This is a prank.... There is no order and we have no right to place an order')
        alert('Like i said it is a prank.... Don\'t try to arrest me')
        alert('i dey forget you  don\'t know me')
    }

    render(){
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>Total: \$${0}</h2>
        <button>Order Now</button>
        `;
        const orderButton = cartEl.querySelector('button')
        orderButton.addEventListener('click', this.orderProduct.bind(this))
        cartEl.className = 'cart';
        this.totalOutput = cartEl.querySelector('h2');
        return cartEl;
    }
}


class ProductList{
    products = [
        new ProductItem(
            'Rools-Royce',
            'https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/black-badge-ghost-2021/page-properties/Twin-Card-BB_RR21_RR21_Product_Page.jpg',
            'New New not fake inh',
            408000
        ),
        new ProductItem(
            'Ferrari 488',
            'https://cdn.carbuzz.com/gallery-images/840x560/341000/300/341322.jpg',
            'Not made in China',
            284700
        ),
        new ProductItem(
            'Lotus Evija',
            'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5e201ad5da6d38000629b534%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D1000%26cropY1%3D50%26cropY2%3D612',
            'Electric',
            503450
        ),
        new ProductItem(
            'Nio Ep9',
            'https://i2.wp.com/www.thesupercarblog.com/wp-content/uploads/2016/11/NextEV-Nio-EP9-Electric-Supercar-2.jpg?resize=1000%2C600&ssl=1',
            'The revolution',
            85000
        ),
        new ProductItem(
            'Lucid Motor',
            'https://cdn.jdpower.com/JDPA_Lucid%20Air%20Electric%20Car%20Front%20View.jpg',
            'The Skyrocket',
            102000
        ),
        new ProductItem(
            'Tesla Cybertruck',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2022-tesla-cyber-truck-mmp-1-1579127142.jpg?crop=0.946xw:0.804xh;0.0369xw,0.131xh&resize=1200:*',
            'If you wanna go in the moon',
            200000
        ),
        new ProductItem(
            'Tesla Model X',
            'https://thedriven.io/wp-content/uploads/2021/08/tesla-model-x.jpg',
            'For my dear Laurana Just one in stock',
            0
        ),
         
        new ProductItem(
            'Ford',
            'https://cdn.arstechnica.net/wp-content/uploads/2021/01/Mach-E-1-800x600.jpg',
            'Do you get money',
            76800
        ),
        new ProductItem(
            'McLaren 720s',
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2018_McLaren_720S_V8_S-A_4.0.jpg/1200px-2018_McLaren_720S_V8_S-A_4.0.jpg',
            'For the big boys',
            800000,

        ),
        new ProductItem(
            'Bugatti Aventador',
            'https://cdn.motor1.com/images/mgl/6MGkl/s1/4x3/bugatti-chiron-pur-sport.webp',
            'For the big boys',
            2000000,

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
