const productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

//const addToCartButtons = document.getElementsByClassName

const addToCartButtons = document.querySelectorAll(".add-to_cart");
//console.log(addToCartButtons);

for (let i = 0; i < addToCartButtons.length; i++){
	addToCartButtons[i].addEventListener("click", function(){
		let prevProductsCount = + productsCountEl.textContent;
		productsCountEl.textContent = prevProductsCount + 1;
		//productsCountEl.textContent = +productsCountEl.textContent + 1;
	})
}

//let like = document.getElementById("likes");
//var like = document.querySelectorAll(".likes");








/*let like = document.querySelectorAll(".likes");
const listItems = document.querySelectorAll('.likes'); 
listItems.forEach(like => { like.addEventListener('click', () => { like.classList.toggle('alt-background'); }); });*/










/*let clicks = +localStorage.getItem('clicks');



Array.prototype.forEach.call(like, function (b) {

    var d = 0,

        c = window.getComputedStyle ? getComputedStyle(b, "") : b.currentStyle,
        v = window.getComputedStyle ? getComputedStyle(b, "") : b.currentStyle,

        c = c.backgroundColor;
        v = v.backgroundImage;
    b.onclick = function (a) {

        a = a || window.event;

        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;

        b.style.backgroundColor = (d ^= 1) ? "#2c71b8" : c;
        b.style.backgroundImage = (d ^= 1) ? "url('images/icon (7).png')" : v;


    }

});



//alert(like.length);
/*for (let i = 0; i < like.length; i++){
	like[i].addEventListener("click", function(){
    if ( like[i].style.backgroundImage == "url('images/icon5.png')" && like[i].style.backgroundColor == 'rgba(255,255,255,0)'){
    	like[i].style.backgroundColor = '';
    	like[i].style.backgroundImage = "";
    } else {
    	like[i].style.backgroundImage = "url('images/icon (7).png')";
    	like[i].style.backgroundColor = '#2c71b8';
    }
	})
})}*/

/*like.onclick = function() {
    localStorage.setItem('clicks', ++clicks);
    if (clicks & 1){
    	like.style.backgroundImage = "url('images/icon (7).png')";
    	like.style.backgroundColor = '#2c71b8';
    } else {
    	like.style.backgroundImage = "url('images/icon5.png')";
    	like.style.backgroundColor = 'rgba(255,255,255,0)';
    }
};*/


/*addToCartButtons.addEventListener ( 'click', function (){//работает только с const addToCartButtons = document.querySelectorAll(".add-to_cart")[0];
	alert("hello");
});
addToCartButtons.addEventListener ( 'click', function (){
	alert("helloy");
})*/



const likeButtons = document.querySelectorAll(".likes");
console.log(likeButtons);
for (let i = 0; i<likeButtons.length; i++){
	likeButtons[i].addEventListener("click", function(){
		/*if (likeButtons[i].classList.contains("liked")){
			likeButtons[i].classList.remove("liked");
		} else {
			likeButtons[i].classList.add("liked");
		}*/
		likeButtons[i].classList.toggle("liked");
        console.log("liked");
	} )
}
$('.slider-block').slick({
	dots:true,
})




// let incrementBtn = document.querySelectorAll('.increment-btn');
// let decrementBtn = document.querySelectorAll('.decrement-btn');
// let quantityInput = document.querySelectorAll('.product_quantity input');

// console.log(incrementBtn.length);
// console.log(decrementBtn.length);
// console.log(quantityInput.length);

// for(let i=0; i<incrementBtn.length; i++){
// 	let currenctValue = [];
// 	currenctValue[i] = +quantityInput[i].value;
// if(currenctValue[i] <= 1) {
//     decrementBtn[i].disabled = true;
//     decrementBtn[i].classList.add("btn2");
//     decrementBtn[i].classList.remove("btn");
// } else {
//     decrementBtn[i].disabled = false;
//     decrementBtn[i].classList.add("btn");
//     decrementBtn[i].classList.remove("btn2");
// }
// incrementBtn[i].addEventListener("click",function() {
//     let currenctValue = [];
// 	currenctValue[i] = +quantityInput[i].value;
//     let nextValue = [];
//     nextValue[i] = currenctValue[i] + 1;
//     quantityInput[i].value = nextValue[i];
//     if(nextValue[i] <= 1) {
//         decrementBtn[i].disabled = true;
//         decrementBtn[i].classList.add("btn2");
//         decrementBtn[i].classList.remove("btn");
//     } else {
//         decrementBtn[i].disabled = false;
//         decrementBtn[i].classList.add("btn");
//         decrementBtn[i].classList.remove("btn2");
//         if (nextValue[i] >= 5){
//         	incrementBtn[i].disabled = true; 
//         	incrementBtn[i].classList.add("btn2");
//         	incrementBtn[i].classList.remove("btn");        
//         }
//         else {
//         	incrementBtn[i].disabled = false;
//         	incrementBtn[i].classList.add("btn");
//         	incrementBtn[i].classList.remove("btn2"); 

//         }
//     }
// })

// decrementBtn[i].addEventListener("click",function() {
//     let currenctValue = [];
// 	currenctValue[i] = +quantityInput[i].value;
//     let nextValue = [];
//     nextValue[i] = currenctValue[i] - 1;
//     quantityInput[i].value = nextValue[i];
//     if(nextValue[i] <= 1) {
//         decrementBtn[i].disabled = true;
//         decrementBtn[i].classList.add("btn2");
//         decrementBtn[i].classList.remove("btn");
//     } else {
//         decrementBtn[i].disabled = false;
//         decrementBtn[i].classList.add("btn");
//         decrementBtn[i].classList.remove("btn2");
//         if (nextValue[i] >= 5){
//         	incrementBtn[i].disabled = true;
//         	incrementBtn[i].classList.add("btn2");
//         	incrementBtn[i].classList.remove("btn"); 
//         }
//         else {
//         	incrementBtn[i].disabled = false;
//         	incrementBtn[i].classList.add("btn");
//         	incrementBtn[i].classList.remove("btn2"); 

//         }
//     }
// })

// }



let decrementBtn = document.querySelectorAll('.decrement-btn');
let incrementBtn = document.querySelectorAll('.increment-btn');
let productQuantity = document.querySelectorAll('.product_quantity input');
let minCount = 1;
let maxCount = 5;

// function toggleButtonState(count, incrementBtn, decrementBtn) {
//     decrementBtn.disabled = count <= minCount;
//     incrementBtn.disabled = count >= maxCount;
// }


// for (let i = 0; i < incrementBtn.length; i++) {
//     incrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount + 1;
//         productQuantity[i].value = nextCount;
//         toggleButtonState(nextCount, incrementBtn[i], decrementBtn[i])
//     })    
// }

// for (let i = 0; i < decrementBtn.length; i++) {
//     decrementBtn[i].addEventListener("click",function () {
//         let currentCount = +productQuantity[i].value; 
//         let nextCount = currentCount - 1;
//         productQuantity[i].value = nextCount;

//         toggleButtonState(nextCount, incrementBtn[i], decrementBtn[i])
//     })    
// }

// for (let i = 0; i < productQuantity.length; i++){
//     let currentCount = +productQuantity[i].value;
//     toggleButtonState(currentCount, incrementBtn[i], decrementBtn[i])
// }


//OOP  

function Counter(incrementButton, decrementButton, inputField, minCount = 1, maxCount = 5){
    this.domRefs = {
        incrementButton,
        decrementButton,
        inputField
    }
    console.log(this);

    this.toggleButtonState = function() {
        let count = this.domRefs.inputField.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount
        if(count >= maxCount) {
          this.domRefs.incrementButton.style.backgroundColor = 'rgba(255,255,255,0.25)';
          this.domRefs.decrementButton.style.backgroundColor = 'rgba(255,255,255,0)';   
        }
         if(count <= minCount) {
          this.domRefs.decrementButton.style.backgroundColor = 'rgba(255,255,255,0.25)';
          this.domRefs.incrementButton.style.backgroundColor = 'rgba(255,255,255,0)';  
        }
        if (count > minCount && count < maxCount) {
          this.domRefs.decrementButton.style.backgroundColor = 'rgba(255,255,255,0)';
          this.domRefs.incrementButton.style.backgroundColor = 'rgba(255,255,255,0)';
        }
    }

    this.toggleButtonState()

    this.increment = function() {
        let currentCount = +this.domRefs.inputField.value; 
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount) 
    }

    this.decrement = function() {
        let currentCount = +this.domRefs.inputField.value; 
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState(nextCount) 
    }

    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));
}

// const counter1 = new Counter(incrementBtn[0], decrementBtn[0], productQuantity[0]);
// const counter2 = new Counter(incrementBtn[1], decrementBtn[1], productQuantity[1]);

console.log(incrementBtn.length);


for (let i = 0; i < incrementBtn.length; i++) {
    let counter = [];
    counter[i] =  new Counter(incrementBtn[i], decrementBtn[i], productQuantity[i])
}








$('select').selectric();

//modal
let moreDetailsButtons = document.querySelectorAll(".details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailsButtons.forEach(function(item){
    item.addEventListener("click", openModal
    //     function() {
    //     modal.classList.add("show");
    //     modal.classList.remove("hide");
    // }
    )
})

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        closeModal();
    }
})

function openModalByScroll() {
    if (window.pageYOffset >= document.documentElement.scrollHeight/2) {
        openModal();
        window.removeEventListener('scroll', openModalByScroll);
    }
}
window.addEventListener('scroll', openModalByScroll);

console.log(window.pageYOffset);
console.log(document.documentElement.scrollHeight);






