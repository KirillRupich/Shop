//      слайдер 

let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let m3 = document.querySelector('#m3')

function f1() {
    img1.style.width = "300px"
    img1.style.marginLeft = "0"
    img3.style.width = "0"
    m3.style.width = "0"
    img1.style.marginLeft = "330px"
    img1.style.transition = ".3s"
}
function f2() {
    img1.style.width = "300px"
    img1.style.marginLeft = "10px"
    img2.style.transition = ".3s"
}
function f3() {
    img1.style.marginLeft = "-10px"
    img3.style.width = "300px"
    m3.style.width = "300px"
    img1.style.width = "0"
    img3.style.transition = ".3s"
    m3.style.transition = ".3s"
}

// let card1 = document.querySelector('#card1')
// let ca1 = document.querySelector('#ca1')
// let ca2 = document.querySelector('#ca2')
// let card2 = document.querySelector('#card2')
// let card3 = document.querySelector('#card3')
// let card4 = document.querySelector('#card4')
// let card5 = document.querySelector('#card5')
let cardGroup = document.querySelector('#cardGroup')

// let crPag = document.querySelector('#crPag')

// let crPag = document.querySelector('#crPag')



// пагинация


// function page1(card) {

//     for (let i = 0; i < 3; i++) {
//         card[i].style.display = "flex"        
//     }
//     for (let i = 3; i < 6; i++) {
//         card[i].style.display = "none"        
//     }
// }

// function page2(card) {
    
//     for (let i = 0; i < 3; i++) {
//         card[i].style.display = "none"        
//     }
//     for (let i = 3; i < 6; i++) {
//         card[i].style.display = "flex"        
//     }

// }

// function pagination(params) {
//     var ca = [card1,card2,card3,card4,card5,card6,]

//     switch (params) {
//         case 'ca1':
//             page1(ca)
//             break;
//         case 'ca2':
//             page2(ca)
//             break;
    
//         default:
//             break;
//     }
// }





// обьекты товаров
let footbolka1 = {
    name: "Футболка",
    price: 230 + "грн.",
    code: 3543,
    img: "./footbolki/img1.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card1"><button class="btn" onclick="ff(footbolka1)">смотреть </button><img src="./footbolki/img1.jpeg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka1)">КУПИТЬ</button></div>`,
}
let footbolka2 = {
    name: "Футболка",
    price: 280 + "грн.",
    code: 3523,
    img: "./footbolki/img2.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная футболка для повседневной носки.",
    card:  `<div class="card" id="card2"><button class="btn" onclick="ff(footbolka2)">смотреть </button><img src="./footbolki/img2.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">280 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka2)">КУПИТЬ</button></div>`
}
let footbolka3 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img3.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :`<div class="card" id="card3"><button class="btn" onclick="ff(footbolka3)">смотреть </button><img src="./footbolki/img3.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(footbolka3)">КУПИТЬ</button></div>  `
}
let footbolka4 = {
    name: "Футболка",
    price: 230 + "грн.",
    code: 3543,
    img: "./footbolki/img4.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(footbolka4)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(footbolka4)">КУПИТЬ</button></div>  `
}
let footbolka5 = {
    name: "Футболка",
    price: 280 + "грн.",
    code: 3523,
    img: "./footbolki/img5.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card5"><button class="btn" onclick="ff(footbolka5)">смотреть </button><img src="./footbolki/img5.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">280 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka5)">КУПИТЬ</button></div>`,
}
let footbolka6 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img6.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card6"><button class="btn" onclick="ff(footbolka6)">смотреть </button><img src="./footbolki/img6.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka6)">КУПИТЬ</button></div>`,
}
let footbolka7 = {
    name: "Футболка",
    price: 230 + "грн.",
    code: 3543,
    img: "./footbolki/img7.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :  `<div class="card" id="card7"><button class="btn" onclick="ff(footbolka7)">смотреть </button><img src="./footbolki/img7.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka7)">КУПИТЬ</button></div> `,
}
let footbolka8 = {
    name: "Футболка",
    price: 280 + "грн.",
    code: 3523,
    img: "./footbolki/img8.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная футболка для повседневной носки.",
    card:  `<div class="card" id="card8"><button class="btn" onclick="ff(footbolka8)">смотреть </button><img src="./footbolki/img8.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">280 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka8)">КУПИТЬ</button></div>`,
}
let footbolka9 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img9.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card9"><button class="btn" onclick="ff(footbolka9)">смотреть </button><img src="./footbolki/img9.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka9)">КУПИТЬ</button></div>`,
}
let footbolka10 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img10.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card10"><button class="btn" onclick="ff(footbolka10)">смотреть </button><img src="./footbolki/img10.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka10)">КУПИТЬ</button></div>`,
}
let footbolka11 = {
    name: "Футболка",
    price: 230 + "грн.",
    code: 3543,
    img: "./footbolki/img11.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :  `<div class="card" id="card11"><button class="btn" onclick="ff(footbolka11)">смотреть </button><img src="./footbolki/img11.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka11)">КУПИТЬ</button></div>`,  
}
let footbolka12 = {
    name: "Футболка",
    price: 280 + "грн.",
    code: 3523,
    img: "./footbolki/img12.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная футболка для повседневной носки.",
    card :`<div class="card" id="card12"><button class="btn" onclick="ff(footbolka12)">смотреть </button><img src="./footbolki/img12.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">280 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(footbolka12)">КУПИТЬ</button></div>  `
}
let footbolka13 = {
    name: "Футболка",
    price: 230 + "грн.",
    code: 3533,
    img: "./footbolki/img13.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card13"><button class="btn" onclick="ff(footbolka13)">смотреть </button><img src="./footbolki/img13.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka13)">КУПИТЬ</button></div>`,
}
let footbolka14 = {
    name: "Футболка",
    price: 290 + "грн.",
    code: 3543,
    img: "./footbolki/img14.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card : `<div class="card" id="card14"><button class="btn" onclick="ff(footbolka14)">смотреть </button><img src="./footbolki/img14.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">290 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka14)">КУПИТЬ</button></div>`,
}
let footbolka15 = {
    name: "Футболка",
    price: 200 + "грн.",
    code: 3523,
    img: "./footbolki/img15.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card15"><button class="btn" onclick="ff(footbolka15)">смотреть </button><img src="./footbolki/img15.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">200 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka15)">КУПИТЬ</button></div>`,
}
let footbolka16 = {
    name: "Футболка",
    price: 400 + "грн.",
    code: 3533,
    img: "./footbolki/img16.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card : `<div class="card" id="card16"><button class="btn" onclick="ff(footbolka16)">смотреть </button><img src="./footbolki/img16.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">400 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka16)">КУПИТЬ</button></div>`,
}
let footbolka17 = {
    name: "Футболка",
    price: 300 + "грн.",
    code: 3543,
    img: "./footbolki/img17.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :  `<div class="card" id="card17"><button class="btn" onclick="ff(footbolka17)">смотреть </button><img src="./footbolki/img17.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">300 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka17)">КУПИТЬ</button></div>`,
}
let footbolka18 = {
    name: "Футболка",
    price: 800 + "грн.",
    code: 3523,
    img: "./footbolki/img18.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card18"><button class="btn" onclick="ff(footbolka18)">смотреть </button><img src="./footbolki/img18.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">800 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka18)">КУПИТЬ</button></div>`,
}
let footbolka19 = {
    name: "Футболка",
    price: 290 + "грн.",
    code: 3533,
    img: "./footbolki/img19.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :   `<div class="card" id="card19"><button class="btn" onclick="ff(footbolka19)">смотреть </button><img src="./footbolki/img19.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">290 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka19)">КУПИТЬ</button></div>`,
}
let footbolka20 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img20.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card : `<div class="card" id="card20"><button class="btn" onclick="ff(footbolka20)">смотреть </button><img src="./footbolki/img20.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka20)">КУПИТЬ</button></div>`,
}
let footbolka21 = {
    name: "Футболка",
    price: 230 + "грн.",
    code: 3533,
    img: "./footbolki/img21.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card : `<div class="card" id="card21"><button class="btn" onclick="ff(footbolka21)">смотреть </button><img src="./footbolki/img21.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka21)">КУПИТЬ</button></div>`,
}
let footbolka22 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img22.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card : `<div class="card" id="card22"><button class="btn" onclick="ff(footbolka22)">смотреть </button><img src="./footbolki/img22.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka22)">КУПИТЬ</button></div>`,
}
let footbolka23 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img23.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card :  `<div class="card" id="card23"><button class="btn" onclick="ff(footbolka23)">смотреть </button><img src="./footbolki/img23.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka23)">КУПИТЬ</button></div>`,
}
let footbolka24 = {
    name: "Футболка",
    price: 240 + "грн.",
    code: 3533,
    img: "./footbolki/img24.jpg",
    content: "Мужская футболка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная футболка для повседневной носки.",
    card : `<div class="card" id="card24"><button class="btn" onclick="ff(footbolka24)">смотреть </button><img src="./footbolki/img24.jpg" alt=""><div class="cardContent"><p class="name">Футболка</p><p class="price">240 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(footbolka24)">КУПИТЬ</button></div>`,
}


function pagination(per) {
     
    switch (per) {
        case c2:
            cardGroup.innerHTML += footbolka7.card
            cardGroup.innerHTML += footbolka8.card
            cardGroup.innerHTML += footbolka9.card
            cardGroup.innerHTML += footbolka10.card
            cardGroup.innerHTML += footbolka11.card
            cardGroup.innerHTML += footbolka12.card
            break;
        case c3:
            cardGroup.innerHTML += footbolka13.card
            cardGroup.innerHTML += footbolka14.card
            cardGroup.innerHTML += footbolka15.card
            cardGroup.innerHTML += footbolka16.card
            cardGroup.innerHTML += footbolka17.card
            cardGroup.innerHTML += footbolka18.card
            break;
        case c4:
            cardGroup.innerHTML += footbolka19.card
            cardGroup.innerHTML += footbolka20.card
            cardGroup.innerHTML += footbolka21.card
            cardGroup.innerHTML += footbolka22.card
            cardGroup.innerHTML += footbolka23.card
            cardGroup.innerHTML += footbolka24.card
            break;
    
        default:
            break;
    
   }
}




// let bk = document.querySelector('#bk')
// let def = document.querySelector('def')
// let bt3 = document.querySelector('bt3')



function ff(per) {

    let div = document.createElement('div');
    let cardGroup = document.querySelector('#cardGroup')
    cardGroup.style.display = "none"
    div.innerHTML = `<div class="bigCard">  <img src=" ${per.img}" alt=""> <div class="bigCardContent">   <h1> ${per.name}</h1> <h2>${per.price}</h2> <h3>код товара ${per.code}</h3> <button class="btCard">КУПИТЬ</button> <p class="bigCardHar">${per.content}</p>  <button class="bt3" id="bt3" onclick="ffe()">Назад</button> </div></div>`
    document.body.append(div);
   
}

  // назад с большой карты
  function ffe() {
    window.location.reload()
  }
 
 
//   добавить в покупки

let mas = [
    
]

  function kup(per2) {
    mas.push(per2)
    console.log(per2)
  }



  // показать покупки
  function ff2() {
    cardGroup.style.display = "none"
    
    for (let i = 0; i < mas.length; i++) {
            
        console.log(  mas[i] )     
             
        let div = document.createElement('div');
        let cardGroup = document.querySelector('#cardGroup')

        div.innerHTML = `<div class="bigCard">  
        <img src=" ${mas[i].img}" alt=""> 
        <div class="bigCardContent">   <h1> ${mas[i].name}</h1> <h2>${mas[i].price}</h2> <h3>код товара ${mas[i].code}</h3> <button class="btCard">КУПИТЬ</button> <p class="bigCardHar">${mas[i].content}</p>  <button class="bt3" id="bt3" onclick="ffe()">Назад</button> </div></div>`
            
        cardGroup.style.display = "none"    

        document.body.append(div);
    }
  }





//   


// обьекты товаров
let kurtk1 = {
    name: "Куртка",
    price: 3000 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk1.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card1"><button class="btn" onclick="ff(kurtk1)">смотреть </button><img src="./kurtk1/img1.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">3000 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk1)">КУПИТЬ</button></div>`,
}
let kurtk2 = {
    name: "Куртка",
    price: 2400 + "грн.",
    code: 3523,
    img: "./kurtki/kurtk2.jpeg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Курточка для повседневной носки.",
    card:  `<div class="card" id="card2"><button class="btn" onclick="ff(footbolka2)">смотреть </button><img src="./footbolki/img2.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">2400 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk2)">КУПИТЬ</button></div>`
}
let kurtk3 = {
    name: "Куртка",
    price: 2800 + "грн.",
    code: 3533,
    img: "./kurtki/kurtk3.jpeg",
    content: "Мужская Курточка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Курточка для повседневной носки.",
    card :`<div class="card" id="card3"><button class="btn" onclick="ff(footbolka3)">смотреть </button><img src="./footbolki/img3.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">2800 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk3)">КУПИТЬ</button></div>  `
}
let kurtk4 = {
    name: "Куртка",
    price: 3900 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk4.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(footbolka4)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">3900 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk4)">КУПИТЬ</button></div>  `
}
let kurtk5 = {
    name: "Куртка",
    price: 2700 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk5.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(footbolka4)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">2700 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk5)">КУПИТЬ</button></div>  `
}
let kurtk6 = {
    name: "Куртка",
    price: 2300 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk6.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(footbolka4)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">2300 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk6)">КУПИТЬ</button></div>  `
}
let kurtk7 = {
    name: "Куртка",
    price: 3200 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk7.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card7"><button class="btn" onclick="ff(kurtk7)">смотреть </button><img src="./kurtki/kurtk7.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">3200 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk7)">КУПИТЬ</button></div>`,
}
let kurtk8 = {
    name: "Куртка",
    price: 2800 + "грн.",
    code: 3523,
    img: "./kurtki/kurtk8.jpeg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Курточка для повседневной носки.",
    card: `<div class="card" id="card8"><button class="btn" onclick="ff(kurtk8)">смотреть </button><img src="./kurtki/kurtk8.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">2800 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk8)">КУПИТЬ</button></div>`,
}
let kurtk9 = {
    name: "Куртка",
    price: 240 + "грн.",
    code: 3533,
    img: "./kurtki/kurtk9.jpeg",
    content: "Мужская Курточка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Курточка для повседневной носки.",
    card: `<div class="card" id="card9"><button class="btn" onclick="ff(kurtk9)">смотреть </button><img src="./kurtki/kurtk9.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk9)">КУПИТЬ</button></div>`,
}
let kurtk10 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk10.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card10"><button class="btn" onclick="ff(kurtk10)">смотреть </button><img src="./kurtki/kurtk10.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk10)">КУПИТЬ</button></div>`,
}
let kurtk11 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk11.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card11"><button class="btn" onclick="ff(kurtk11)">смотреть </button><img src="./kurtki/kurtk11.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk11)">КУПИТЬ</button></div>`,
}
let kurtk12 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk12.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card12"><button class="btn" onclick="ff(kurtk12)">смотреть </button><img src="./kurtki/kurtk12.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk12)">КУПИТЬ</button></div>`,
}
let kurtk13 = {
    name: "Куртка",
    price: 30 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk13.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card1"><button class="btn" onclick="ff(kurtk13)">смотреть </button><img src="./kurtki/kurtk13.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk12)">КУПИТЬ</button></div>`,
}
let kurtk14 = {
    name: "Куртка",
    price: 280 + "грн.",
    code: 3523,
    img: "./kurtki/kurtk14.jpeg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Курточка для повседневной носки.",
    card:  `<div class="card" id="card2"><button class="btn" onclick="ff(kurtk14)">смотреть </button><img src="./kurtki/kurtk14.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">280 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk14)">КУПИТЬ</button></div>`
}
let kurtk15 = {
    name: "Куртка",
    price: 240 + "грн.",
    code: 3533,
    img: "./kurtki/kurtk15.jpeg",
    content: "Мужская Курточка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Курточка для повседневной носки.",
    card :`<div class="card" id="card3"><button class="btn" onclick="ff(kurtk15)">смотреть </button><img src="./kurtki/kurtk15.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">240 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk15)">КУПИТЬ</button></div>  `
}
let kurtk16 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk16.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(kurtk16)">смотреть </button><img src="./kurtki/kurtk16.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk16)">КУПИТЬ</button></div>  `
}
let kurtk17 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk17.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(kurtk17)">смотреть </button><img src="./kurtki/kurtk17.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk17)">КУПИТЬ</button></div>  `
}
let kurtk18 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk18.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="ff(kurtk18)">смотреть </button><img src="./kurtki/kurtk18.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(kurtk18)">КУПИТЬ</button></div>  `
}
let kurtk19 = {
    name: "Куртка",
    price: 30 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk19.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card7"><button class="btn" onclick="ff(kurtk19)">смотреть </button><img src="./kurtki/kurtk19.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk19)">КУПИТЬ</button></div>`,
}
let kurtk20 = {
    name: "Куртка",
    price: 280 + "грн.",
    code: 3523,
    img: "./kurtki/kurtk20.jpeg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Курточка для повседневной носки.",
    card: `<div class="card" id="card8"><button class="btn" onclick="ff(kurtk20)">смотреть </button><img src="./kurtki/kurtk20.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk20)">КУПИТЬ</button></div>`,
}
let kurtk21 = {
    name: "Куртка",
    price: 240 + "грн.",
    code: 3533,
    img: "./kurtki/kurtk21.jpeg",
    content: "Мужская Курточка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Курточка для повседневной носки.",
    card: `<div class="card" id="card9"><button class="btn" onclick="ff(kurtk21)">смотреть </button><img src="./kurtki/kurtk21.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk21)">КУПИТЬ</button></div>`,
}
let kurtk22 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk22.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card10"><button class="btn" onclick="ff(kurtk22)">смотреть </button><img src="./kurtki/kurtk22.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk22)">КУПИТЬ</button></div>`,
}
let kurtk23 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk23.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card11"><button class="btn" onclick="ff(kurtk23)">смотреть </button><img src="./kurtki/kurtk23.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk23)">КУПИТЬ</button></div>`,
}
let kurtk24 = {
    name: "Куртка",
    price: 230 + "грн.",
    code: 3543,
    img: "./kurtki/kurtk24.jpeg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Курточка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card12"><button class="btn" onclick="ff(kurtk24)">смотреть </button><img src="./kurtki/kurtk24.jpeg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(kurtk24)">КУПИТЬ</button></div>`,
}



function paginationKurt(per) {

    switch (per) {
        case k2:
          
            cardGroup.innerHTML += kurtk7.card
            cardGroup.innerHTML += kurtk8.card
            cardGroup.innerHTML += kurtk9.card
            cardGroup.innerHTML += kurtk10.card
            cardGroup.innerHTML += kurtk11.card
            cardGroup.innerHTML += kurtk12.card
            break;
        case k3:
            cardGroup.innerHTML += kurtk13.card
            cardGroup.innerHTML += kurtk14.card
            cardGroup.innerHTML += kurtk15.card
            cardGroup.innerHTML += kurtk16.card
            cardGroup.innerHTML += kurtk17.card
            cardGroup.innerHTML += kurtk18.card
            break;
        case k4:
            cardGroup.innerHTML += kurtk19.card
            cardGroup.innerHTML += kurtk20.card
            cardGroup.innerHTML += kurtk21.card
            cardGroup.innerHTML += kurtk22.card
            cardGroup.innerHTML += kurtk23.card
            cardGroup.innerHTML += kurtk24.card
            break;
    
        default:
            break;
    
   }
}


// большая карта
function kurtkife(per) {
console.log("gvhjo")
    let div = document.createElement('div');
    let cardGroup = document.querySelector('#cardGroup')
    cardGroup.style.display = "none"
    div.innerHTML = `<div class="bigCard">  <img src=" ${per.img}" alt=""> <div class="bigCardContent">   <h1> ${per.name}</h1> <h2>${per.price}</h2> <h3>код товара ${per.code}</h3> <button class="btCard">КУПИТЬ</button> <p class="bigCardHar">${per.content}</p>  <button class="bt3" id="bt3" onclick="ffe()">Назад</button> </div></div>`
    document.body.append(div);
   
}


 


  // показать покупки
  function kurtkife2() {
    cardGroup.style.display = "none"
    
    for (let i = 0; i < mas.length; i++) {
            
        console.log(  mas[i] )     
             
        let div = document.createElement('div');
        let cardGroup = document.querySelector('#cardGroup')

        div.innerHTML = `<div class="bigCard">  
        <img src=" ${mas[i].img}" alt=""> 
        <div class="bigCardContent">   <h1> ${mas[i].name}</h1> <h2>${mas[i].price}</h2> <h3>код товара ${mas[i].code}</h3> <button class="btCard">КУПИТЬ</button> <p class="bigCardHar">${mas[i].content}</p>  <button class="bt3" id="bt3" onclick="ffe()">Назад</button> </div></div>`
            
        cardGroup.style.display = "none"    

        document.body.append(div);
    }
  }


  
// обьекты товаров
let sh1 = {
    name: "Штаны",
    price: 3000 + "грн.",
    code: 3543,
    img: "./shtani/sh1.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная футболка для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card1"><button class="btn" onclick="shfe(sh1)">смотреть </button><img src="../shtani/sh1.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">3000 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh1)">КУПИТЬ</button></div>`,
}
let sh2 = {
    name: "Штаны",
    price: 2400 + "грн.",
    code: 3523,
    img: "./shtani/sh2.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Курточка для повседневной носки.",
    card:  `<div class="card" id="card2"><button class="btn" onclick="shfe(sh2)">смотреть </button><img src="./shtani/sh2.jpg" alt=""><div class="cardContent"><p class="name">Курточка</p><p class="price">2400 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh2)">КУПИТЬ</button></div>`
}
let sh3 = {
    name: "Штаны",
    price: 2800 + "грн.",
    code: 3533,
    img: "./shtani/sh3.jpg",
    content: "Мужская Курточка европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Курточка для повседневной носки.",
    card :`<div class="card" id="card3"><button class="btn" onclick="shfe(sh3)">смотреть </button><img src="./footbolki/img3.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">2800 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh3)">КУПИТЬ</button></div>  `
}
let sh4 = {
    name: "Штаны",
    price: 3900 + "грн.",
    code: 3543,
    img: "./shtani/sh4.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="shfe(sh4)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">3900 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh4)">КУПИТЬ</button></div>  `
}
let sh5 = {
    name: "Штаны",
    price: 2700 + "грн.",
    code: 3543,
    img: "./shtani/sh5.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="shfe(sh5)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">2700 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh5)">КУПИТЬ</button></div>  `
}
let sh6 = {
    name: "Штаны",
    price: 2300 + "грн.",
    code: 3543,
    img: "./shtani/sh6.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="shfe(sh6)">смотреть </button><img src="./footbolki/img4.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">2300 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh6)">КУПИТЬ</button></div>  `
}
let sh7 = {
    name: "Штаны",
    price: 3200 + "грн.",
    code: 3543,
    img: "./shtani/sh7.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card7"><button class="btn" onclick="shfe(sh7)">смотреть </button><img src="./shtani/sh7.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">3200 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh7)">КУПИТЬ</button></div>`,
}
let sh8 = {
    name: "Штаны",
    price: 2800 + "грн.",
    code: 3523,
    img: "./shtani/sh8.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Штаны для повседневной носки.",
    card: `<div class="card" id="card8"><button class="btn" onclick="shfe(sh8)">смотреть </button><img src="./shtani/sh8.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">2800 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh8)">КУПИТЬ</button></div>`,
}
let sh9 = {
    name: "Штаны",
    price: 240 + "грн.",
    code: 3533,
    img: "./shtani/sh9.jpg",
    content: "Мужская Штаны европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Штаны для повседневной носки.",
    card: `<div class="card" id="card9"><button class="btn" onclick="shfe(sh9)">смотреть </button><img src="./shtani/sh9.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh9)">КУПИТЬ</button></div>`,
}
let sh10 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh10.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card10"><button class="btn" onclick="shfe(sh10)">смотреть </button><img src="./shtani/sh10.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh10)">КУПИТЬ</button></div>`,
}
let sh11 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh11.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card11"><button class="btn" onclick="shfe(sh11)">смотреть </button><img src="./shtani/sh11.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh11)">КУПИТЬ</button></div>`,
}
let sh12 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh12.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card12"><button class="btn" onclick="shfe(sh12)">смотреть </button><img src="./shtani/sh12.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh12)">КУПИТЬ</button></div>`,
}
let sh13 = {
    name: "Штаны",
    price: 30 + "грн.",
    code: 3543,
    img: "./shtani/sh13.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card1"><button class="btn" onclick="shfe(sh13)">смотреть </button><img src="./shtani/sh13.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh12)">КУПИТЬ</button></div>`,
}
let sh14 = {
    name: "Штаны",
    price: 280 + "грн.",
    code: 3523,
    img: "./shtani/sh14.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Штаны для повседневной носки.",
    card:  `<div class="card" id="card2"><button class="btn" onclick="shfe(sh14)">смотреть </button><img src="./shtani/sh14.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">280 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh14)">КУПИТЬ</button></div>`
}
let sh15 = {
    name: "Штаны",
    price: 240 + "грн.",
    code: 3533,
    img: "./shtani/sh15.jpg",
    content: "Мужская Штаны европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Штаны для повседневной носки.",
    card :`<div class="card" id="card3"><button class="btn" onclick="shfe(sh15)">смотреть </button><img src="./shtani/sh15.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">240 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh15)">КУПИТЬ</button></div>  `
}
let sh16 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh16.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="shfe(sh16)">смотреть </button><img src="./shtani/sh16.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh16)">КУПИТЬ</button></div>  `
}
let sh17 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh17.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="shfe(sh17)">смотреть </button><img src="./shtani/sh17.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh17)">КУПИТЬ</button></div>  `
}
let sh18 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh18.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card :`<div class="card" id="card4"><button class="btn" onclick="shfe(sh18)">смотреть </button><img src="./shtani/sh18.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div>  <p>Хлопок стиль кэжуал</p>   <button class="btCard" onclick="kup(sh18)">КУПИТЬ</button></div>  `
}
let sh19 = {
    name: "Штаны",
    price: 30 + "грн.",
    code: 3543,
    img: "./shtani/sh19.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card7"><button class="btn" onclick="shfe(sh19)">смотреть </button><img src="./shtani/sh19.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh19)">КУПИТЬ</button></div>`,
}
let sh20 = {
    name: "Штаны",
    price: 280 + "грн.",
    code: 3523,
    img: "./shtani/sh20.jpg",
    content: "Дорогая ткань пенье (Турция), состав -  95% хлопок, 5 % эластан. Хорошо сидит по фигуре. Идеальная Штаны для повседневной носки.",
    card: `<div class="card" id="card8"><button class="btn" onclick="shfe(sh20)">смотреть </button><img src="./shtani/sh20.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh20)">КУПИТЬ</button></div>`,
}
let sh21 = {
    name: "Штаны",
    price: 240 + "грн.",
    code: 3533,
    img: "./shtani/sh21.jpg",
    content: "Мужская Штаны европейского качества из 100% хлопка. Плечевой шов усилен планкой, полуприталенный покрой. Идеальная Штаны для повседневной носки.",
    card: `<div class="card" id="card9"><button class="btn" onclick="shfe(sh21)">смотреть </button><img src="./shtani/sh21.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh21)">КУПИТЬ</button></div>`,
}
let sh22 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh22.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card10"><button class="btn" onclick="shfe(sh22)">смотреть </button><img src="./shtani/sh22.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh22)">КУПИТЬ</button></div>`,
}
let sh23 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh23.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card11"><button class="btn" onclick="shfe(sh23)">смотреть </button><img src="./shtani/sh23.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh23)">КУПИТЬ</button></div>`,
}
let sh24 = {
    name: "Штаны",
    price: 230 + "грн.",
    code: 3543,
    img: "./shtani/sh24.jpg",
    content: "Ткань 100% хлопок. Точное соответствие размеру, хорошо сидит по фигуре. Идеальная Штаны для повседневной носки. Хорошо сочетается с джинсами и спортивной одеждой.",
    card: `<div class="card" id="card12"><button class="btn" onclick="shfe(sh24)">смотреть </button><img src="./shtani/sh24.jpg" alt=""><div class="cardContent"><p class="name">Штаны</p><p class="price">230 грн.</p></div><p>Хлопок стиль кэжуал</p><button class="btCard" onclick="kup(sh24)">КУПИТЬ</button></div>`,
}


function paginationSh(per) {

    switch (per) {
        case k2:
          
            cardGroup.innerHTML += sh7.card
            cardGroup.innerHTML += sh8.card
            cardGroup.innerHTML += sh9.card
            cardGroup.innerHTML += sh10.card
            cardGroup.innerHTML += sh11.card
            cardGroup.innerHTML += sh12.card
            break;
        case k3:
            cardGroup.innerHTML += sh13.card
            cardGroup.innerHTML += sh14.card
            cardGroup.innerHTML += sh15.card
            cardGroup.innerHTML += sh16.card
            cardGroup.innerHTML += sh17.card
            cardGroup.innerHTML += sh18.card
            break;
        case k4:
            cardGroup.innerHTML += sh19.card
            cardGroup.innerHTML += sh20.card
            cardGroup.innerHTML += sh21.card
            cardGroup.innerHTML += sh22.card
            cardGroup.innerHTML += sh23.card
            cardGroup.innerHTML += sh24.card
            break;
    
        default:
            break;
    
   }
}



// большая карта
function shfe(per) {
    console.log("gvhjo")
        let div = document.createElement('div');
        let cardGroup = document.querySelector('#cardGroup')
        cardGroup.style.display = "none"
        div.innerHTML = `<div class="bigCard">  <img src=" ${per.img}" alt=""> <div class="bigCardContent">   <h1> ${per.name}</h1> <h2>${per.price}</h2> <h3>код товара ${per.code}</h3> <button class="btCard">КУПИТЬ</button> <p class="bigCardHar">${per.content}</p>  <button class="bt3" id="bt3" onclick="ffe()">Назад</button> </div></div>`
        document.body.append(div);
       
    }
    

// показать покупки
function shfe2() {
    cardGroup.style.display = "none"
    
    for (let i = 0; i < mas.length; i++) {
            
        console.log(  mas[i] )     
             
        let div = document.createElement('div');
        let cardGroup = document.querySelector('#cardGroup')

        div.innerHTML = `<div class="bigCard">  
        <img src=" ${mas[i].img}" alt=""> 
        <div class="bigCardContent">   <h1> ${mas[i].name}</h1> <h2>${mas[i].price}</h2> <h3>код товара ${mas[i].code}</h3> <button class="btCard">КУПИТЬ</button> <p class="bigCardHar">${mas[i].content}</p>  <button class="bt3" id="bt3" onclick="ffe()">Назад</button> </div></div>`
            
        cardGroup.style.display = "none"    

        document.body.append(div);
    }
  }