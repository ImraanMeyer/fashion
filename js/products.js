// function Product(img, title, price, details) {
//     this.img = img;
//     this.title = title;
//     this.price = price;
//     this.details = details;
// }

// // first product
// let bag = new Product("accesory-bag.jpg" , "Leather Shoulder Bag", "R600", "If you always in a rush easily sling on this convenient leather bag. The simply designed bag carries everything you will need in its one compartment keeping it safe with its zip closing. ");

// // second product
// let jersey = new Product("grey-white-knitted-jerseys.jpg", "Assorted Knitted Jerseys", "R400", "Looking to give this New Wave knitted pullover a new home? You can without breaking the bank. Own the look and keep warm every time the temperature drops.")


// let title   = document.getElementById("title");
//     img     = document.getElementById("img-container");
//     price   = document.getElementById("price");
//     details = document.getElementById("details"); 

// // first product
// title.innerHTML = bag.title;
// img.innerHTML = '<img src="images/' + bag.img + '">'; 
// price.innerHTML = bag.price;
// details.innerHTML = bag.details;

// // second product
// title[1].innerHTML = jersey.title;
// img[1].innerHTML = '<img src="images/' + jersey.img + '">'; 
// price[1].innerHTML = jersey.price;
// details[1].innerHTML = jersey.details;


let shop = {
    products: [
        // product 1 == [0]
        {
            "name"      : "Leather Shoulder Bag",
            "price"     : "R600",
            "img"       : "<img src='images/accesory-bag.jpg'> <p class='new-item'>new</p>",
            "details"   : "If you always in a rush easily sling on this convenient leather bag. The simply designed bag                  carries everything you will need in its one compartment keeping it safe with its zip closing. "
        },
        // product 2 == [1]
        {
            "name"      : "Assorted Knitted Jerseys",
            "price"     : "R400",
            "img"       : "<img src='images/grey-white-knitted-jerseys.jpg'>",
            "details"   : "Looking to give this new knitted pullover a new home? You can without breaking the bank. Own                  the look and keep warm every time the temperature drops."
        },
        // product 3 == [2]
        {
            "name"      : "Assorted Knitted Jerseys",
            "price"     : "R400",
            "img"       : "<img src='images/suit.jpg'>",
            "details"   : "Looking for lorem10"
        },  
        // product 4 == [3]
        {
            "name"      : "Bird Eye Suit",
            "price"     : "R1800",
            "img"       : "<img src='images/formal-collection.jpg'> <section class='sale-overlay'>SALE</section>",
            "details"   : "A full suit + a free shirt",
        },
        // product 5 == [4]
        {
            "name"      : "Blue",
            "price"     : "R1800",
            "img"       : "<img src='images/woman-in-blue.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 6 == [5]
        {
            "name"      : "Watch set",
            "price"     : "R1800",
            "img"       : "<img src='images/watch-box-set.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 7 == [6]
        {
            "name"      : "Test",
            "price"     : "R1800",
            "img"       : "<img src='images/women-collection.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 8 == [7]
        {
            "name"      : "Test 2 U",
            "price"     : "R1800",
            "img"       : "<img src='images/happy-socks.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 9 == [8]
        {
            "name"      : "Pg 3 Blue",
            "price"     : "R1800",
            "img"       : "<img src='images/woman-in-blue.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 10 == [9]
        {
            "name"      : "Watch set",
            "price"     : "R1800",
            "img"       : "<img src='images/watch-box-set.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 11 == [10]
        {
            "name"      : "Test",
            "price"     : "R1800",
            "img"       : "<img src='images/women-collection.jpg'>",
            "details"   : "A full suit + a free shirt",
        },
        // product 12 == [11]
        {
            "name"      : "Test 2 U",
            "price"     : "R1800",
            "img"       : "<img src='images/men.jpg'>",
            "details"   : "A full suit + a free shirt",
        }
]};

let title   = document.querySelectorAll("#title");
    img     = document.querySelectorAll("#container-img");
    price   = document.querySelectorAll("#price");
    details = document.querySelectorAll("#details");
    
    
    title[0].innerHTML     = shop.products[0].name;
        img[0].innerHTML      = shop.products[0].img;
            price[0].innerHTML     = shop.products[0].price;
                details[0].innerHTML   = shop.products[0].details;
    
    title[1].innerHTML  = shop.products[1].name;
        img[1].innerHTML       = shop.products[1].img;
            price[1].innerHTML     = shop.products[1].price;
                details[1].innerHTML   = shop.products[1].details;

    title[2].innerHTML  = shop.products[2].name;
        img[2].innerHTML       = shop.products[2].img;
            price[2].innerHTML     = shop.products[2].price;
                details[2].innerHTML   = shop.products[2].details;

    title[3].innerHTML  = shop.products[3].name;
        img[3].innerHTML       = shop.products[3].img;
            price[3].innerHTML     = shop.products[3].price;
                details[3].innerHTML   = shop.products[3].details;

    title[4].innerHTML  = shop.products[4].name;
        img[4].innerHTML       = shop.products[4].img;
            price[4].innerHTML     = shop.products[4].price;
                details[4].innerHTML   = shop.products[4].details;
    

    title[5].innerHTML  = shop.products[5].name;
        img[5].innerHTML       = shop.products[5].img;
            price[5].innerHTML     = shop.products[5].price;
                details[5].innerHTML   = shop.products[5].details;


    title[6].innerHTML  = shop.products[6].name;
        img[6].innerHTML       = shop.products[6].img;
            price[6].innerHTML     = shop.products[6].price;
                details[6].innerHTML   = shop.products[6].details;


    title[7].innerHTML  = shop.products[7].name;
            img[7].innerHTML       = shop.products[7].img;
                price[7].innerHTML     = shop.products[7].price;

                
    title[8].innerHTML  = shop.products[8].name;
            img[8].innerHTML       = shop.products[8].img;
                price[8].innerHTML     = shop.products[8].price;
                    details[8].innerHTML   = shop.products[8].details;
    
                    
    title[9].innerHTML  = shop.products[9].name;
        img[9].innerHTML       = shop.products[9].img;
            price[9].innerHTML     = shop.products[9].price;
                details[9].innerHTML   = shop.products[9].details;


    title[10].innerHTML  = shop.products[10].name;
        img[10].innerHTML       = shop.products[10].img;
            price[10].innerHTML     = shop.products[10].price;
                details[10].innerHTML   = shop.products[10].details;


    title[11].innerHTML  = shop.products[11].name;
            img[11].innerHTML       = shop.products[11].img;
                price[11].innerHTML     = shop.products[11].price;

                

    
