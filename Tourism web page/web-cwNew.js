//  Open and Close cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");
//Open cart
cartIcon.addEventListener("click", () => {
    cart.classList.add("active");
});
//Close cart
closeCart.addEventListener("click", () => {
    cart.classList.remove("active");
});

//Start when the document is ready 
if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded" , start); 

}
else{
    start();
}

function start(){
    addEvents();
}

// Update 
function update(){
    addEvents();
    updateTotal();
    

}

//Add events
function addEvents() {
let cartRemove_button = document.querySelectorAll(".cart-remove");
console.log(cartRemove_button);
cartRemove_button.forEach(buttons => {  
    buttons.addEventListener("click", handle_removeCartItems);
});

//Change item quantity
let cartQuantity_inputs = document.querySelectorAll(".cart-quantity");
cartQuantity_inputs.forEach(input => {
    input.addEventListener("change", handle_changeItemQuantity);
});

 let addCartButton = document.querySelectorAll(".add-cart");
 console.log(addCartButton);
 addCartButton.forEach(buttons => {
    buttons.addEventListener("click", handle_addCartItem);

 });

 //Buy order
 const buy_button = document.querySelector(".buy-button");
 buy_button.addEventListener("click", handle_order);

}

let itemAdded = []

function handle_addCartItem() {
    let packages = this.parentElement;
    let title = packages.querySelector(".package-title").innerHTML;
    let price = packages.querySelector(".package-price").innerHTML;
    let images = packages.querySelector(".package-img").src;
    console.log(title,price, images);

    let newToAdd = {title, price, images};

    //handle items already exit
    if(itemAdded.find(el => el.title == newToAdd.title)){
        alert("this Package is already exist!")
        return;

    }
    else{
        itemAdded.push(newToAdd);
    }

    let cartBoxElement = cartBoxComponents(title, price,images);
    let newNode = document.createElement("div");
    newNode.innerHTML = cartBoxElement;
    const cartContent = cart.querySelector(".cart-content");
    cartContent.appendChild(newNode);

    update();
}

function handle_removeCartItems(){ // remove items in cart
    this.parentElement.remove();
    itemAdded = itemAdded.filter(el => el.title != this.parentElement.querySelector(".cart-package-title").innerHTML);


    update();
}
                                     
function handle_changeItemQuantity(){   // change the quantity in cart
    if ( isNaN(this.value) || this.value < 1){
        this.value = 1;
    }
    this.value= Math.floor(this.value);

    update();
}

function handle_order() {
    if(itemAdded.length <= 0){
        alert("There is no order to place yet.\n Please make an order first.");
        return;
    }
    const cartContent = cart.querySelector(".cart-content");
    cartContent.innerHTML = "";
    alert("Your order is placed successfully.");
    window.location.href = " payment.html";// link to package file
    
    itemAdded = [];

    update();
}



//Update price

function updateTotal() {
    let cartBoxes = document.querySelectorAll(".cart-box");
    const totalElement = cart.querySelector(".total-price");
    var total = 0;
    cartBoxes.forEach(cartBox => {
        var priceElement = cartBox.querySelector(".cart-price");
        var price = parseFloat(priceElement.innerHTML.replace("$", ""));
        var quantity = cartBox.querySelector(".cart-quantity").value;
        total += price * quantity;
    });

    //total = total.toFixed(2);
    total = Math.round(total * 100) / 100;

    totalElement.innerHTML = "$" + total;
}
// export{total}


// HTML  components

function cartBoxComponents(title, price, images) {
    return ` <div class="cart-box">
                <img src=${images} alt="" class="package-img">
    
                 <div class="detail-box">
                    <div class="cart-package-title">${title}</div>
                    <div class="cart-price">${price}</div>
                 <input type="number" value="1" class="cart-quantity">
                </div>
                <i class='bx bxs-trash-alt cart-remove'></i>
            </div>`; 
}






