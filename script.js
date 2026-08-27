const products=[
{name:"Classic Gold Watch",price:49.99,icon:"⌚",new:true,rating:32},
{name:"Elegant Necklace",price:29.99,icon:"◯",new:true,rating:18},
{name:"Stylish Sunglasses",price:24.99,icon:"⌁",new:false,rating:27},
{name:"Luxury Bracelet",price:19.99,icon:"◉",new:false,rating:21},
{name:"Pearl Earrings",price:22.99,icon:"✦",new:false,rating:14},
{name:"Golden Ring Set",price:34.99,icon:"◯",new:true,rating:19},
{name:"Leather Bracelet",price:17.99,icon:"◎",new:false,rating:11},
{name:"Minimal Pendant",price:26.99,icon:"♢",new:false,rating:24}
];
let cart=[];
const productsEl=document.getElementById("products");
function renderProducts(){
 productsEl.innerHTML=products.map((p,i)=>`<article class="product">
 ${p.new?'<span class="badge">NEW</span>':''}
 <div class="product-img">${p.icon}</div>
 <h3>${p.name}</h3><div class="price">$${p.price.toFixed(2)}</div>
 <div class="stars">★★★★★ <span style="color:#333">(${p.rating})</span></div>
 <button class="add" onclick="addToCart(${i})">🛒 ADD TO CART</button></article>`).join("");
}
function addToCart(i){cart.push(products[i]);updateCart();document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show")}
function updateCart(){
 document.getElementById("cartCount").textContent=cart.length;
 document.getElementById("cartItems").innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span>${p.name}<br><small>$${p.price.toFixed(2)}</small></span><button onclick="removeItem(${i})">×</button></div>`).join(""):"<p>Your cart is empty.</p>";
 document.getElementById("total").textContent=cart.reduce((s,p)=>s+p.price,0).toFixed(2);
}
function removeItem(i){cart.splice(i,1);updateCart()}
function closeCart(){document.getElementById("cartPanel").classList.remove("open");document.getElementById("overlay").classList.remove("show")}
document.getElementById("cartBtn").onclick=()=>{document.getElementById("cartPanel").classList.add("open");document.getElementById("overlay").classList.add("show")};
document.getElementById("closeCart").onclick=closeCart;document.getElementById("overlay").onclick=closeCart;
document.querySelector(".menu").onclick=()=>document.querySelector("nav").classList.toggle("open");
document.getElementById("newsletter").onsubmit=e=>{e.preventDefault();alert("Thanks for subscribing!");e.target.reset()};
function scrollToShop(){document.getElementById("shop").scrollIntoView()}
renderProducts();updateCart();
