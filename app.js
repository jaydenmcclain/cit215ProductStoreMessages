var products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"Oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];

function eleMaker(itm){
    let that = this;
   this.ele = document.createElement("div");
   this.color=itm.color
   this.name = document.createElement("h3");
  this.price = document.createElement("h3");
  this.image = document.createElement("img");
  this.image.src = itm.image;
  this.name.innerHTML = "Name: "+itm.name;
  this.price.innerHTML= "Price: $"+itm.price;
  this.image.classList.add('productImg')
  this.ele.appendChild(this.image);
  this.ele.appendChild(this.name);
  this.ele.appendChild(this.price);
  this.ele.classList.add('product');
  this.ele.addEventListener("click", function (){
        that.pop();
    })
  document.body.appendChild(this.ele);
}

eleMaker.prototype.pop = function () {
    this.ele.style.borderColor= "red"
}

for(let i=0; i<products.length; i++){
    let box = new eleMaker(products[i]);
}