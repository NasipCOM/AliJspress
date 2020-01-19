document.addEventListener('DOMContentLoaded', () => {



    // function card(){
    //     //можно использовать везде
    // }

    // const cardGoods = function(){
    //     //используется только после
    // }

    // const cardGoods1 = () => {
    //     //используется только после
    // }

    const cartBtn = document.getElementById('cart');
    const goodsWrapper = document.querySelector('.goods-wrapper');
    const cart = document.querySelector('.cart');





    const createCardGoods = (id, title, price, img) => {

        const card = document.createElement('div');
        card.className = 'card-wrapper col-12 col-md-6 col-lg-4 col-xl-3 pb-3';
        card.innerHTML = `<div class="card">
									<div class="card-img-wrapper">
										<img class="card-img-top" src="${img}" alt="">
										<button class="card-add-wishlist" data-goods-id="${id}"></button>
									</div>
									<div class="card-body justify-content-between">
										<a href="#" class="card-title">${title}</a>
										<div class="card-price">${price} ₽</div>
										<div>
											<button class="card-add-cart">Добавить в корзину</button>
										</div>
									</div>
                                </div>`
                                
    return card;
    }
    // goodsWrapper.append(createCardGoods(1, "Дартс", 2000, "img/temp/Archer.jpg"));
    // goodsWrapper.append(createCardGoods(2, "Фламинго", 3000, "img/temp/Flamingo.jpg"));
    // goodsWrapper.append(createCardGoods(3, "Носки", 3000, "img/temp/Socks.jpg"));


    const openCart = () => {
        cart.style.display = 'flex';
    };

    const closeCart = (event) => {
        window.onkeydown = function( event ) {
            if ( event.keyCode == 27 ) {
                cart.style.display = 'none';
            }
        };
        const target = event.target;

        if(target === cart || target.className === "cart-close"){
            cart.style.display = 'none';
        }
    };

  

    const renderCard = items =>{
        items.map((item) => {
            goodsWrapper.append(createCardGoods(item.id, item.title, item.price, item.imgMin));
        })
    }


    const extraFilter = (item) =>{
        item.sort(() => Math.random() - 0.5) //чтобы был рандом нужно сделать отрицательным - 0.5
        return item;                         
    }
    const getGoods = (handler, filter) => {
        fetch('db/db.json')
        .then(response => response.json())
        .then(filter)
        .then(handler);

    }
    
    getGoods(renderCard, extraFilter)

    cartBtn.addEventListener('click', openCart);
    cart.addEventListener('click', closeCart)


});