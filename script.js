const categories=[
  ["🕶️","Luxury Sunglasses"],["👛","Premium Wallets"],["🧿","Bracelets"],["⌚","Luxury Watches"],
  ["💍","Rings"],["👜","Crossbody Bags"],["👔","Belts"],["🧢","Premium Caps"],
  ["👟","Premium Sneakers"],["🎒","Backpacks"],["🧳","Travel Accessories"],["🧴","Grooming & Lifestyle"]
];

const products=[
 {name:"Classic Gold Watch",price:49.99,cat:"Luxury Watches",icon:"⌚",new:true,rating:4.9,reviews:32},
 {name:"Elegant Pearl Necklace",price:29.99,cat:"Bracelets",icon:"◯",new:true,rating:4.8,reviews:18},
 {name:"Urban Black Sunglasses",price:24.99,cat:"Luxury Sunglasses",icon:"🕶️",new:false,rating:4.7,reviews:27},
 {name:"Signature Gold Bracelet",price:19.99,cat:"Bracelets",icon:"◉",new:false,rating:4.9,reviews:21},
 {name:"Classic Pearl Earrings",price:22.99,cat:"Grooming & Lifestyle",icon:"✦",new:false,rating:4.6,reviews:14},
 {name:"Golden Ring Set",price:34.99,cat:"Rings",icon:"💍",new:true,rating:4.8,reviews:19},
 {name:"Leather Bracelet",price:17.99,cat:"Bracelets",icon:"◎",new:false,rating:4.6,reviews:11},
 {name:"Minimal Pendant",price:26.99,cat:"Rings",icon:"♢",new:false,rating:4.8,reviews:24},
 {name:"Executive Leather Wallet",price:32.99,cat:"Premium Wallets",icon:"👛",new:true,rating:4.9,reviews:36},
 {name:"Metro Crossbody Bag",price:44.99,cat:"Crossbody Bags",icon:"👜",new:true,rating:4.8,reviews:22},
 {name:"Essential Leather Belt",price:21.99,cat:"Belts",icon:"👔",new:false,rating:4.7,reviews:17},
 {name:"Classic Premium Cap",price:18.99,cat:"Premium Caps",icon:"🧢",new:true,rating:4.6,reviews:13},
 {name:"Street Runner Sneaker",price:59.99,cat:"Premium Sneakers",icon:"👟",new:true,rating:4.9,reviews:41},
 {name:"Daily Carry Backpack",price:54.99,cat:"Backpacks",icon:"🎒",new:false,rating:4.8,reviews:29},
 {name:"Travel Organizer Set",price:27.99,cat:"Travel Accessories",icon:"🧳",new:true,rating:4.7,reviews:15},
 {name:"Premium Grooming Kit",price:23.99,cat:"Grooming & Lifestyle",icon:"🧴",new:false,rating:4.8,reviews:20}
];

let cart=JSON.parse(localStorage.getItem("aa_cart")||"[]");
let wishlist=JSON.parse(localStorage.getItem("aa_wishlist")||"[]");
let activeFilter="All", searchTerm="", visibleCount=8, discount=0;

const $=id=>document.getElementById(id);
const productsEl=$("products");

function save(){localStorage.setItem("aa_cart",JSON.stringify(cart));localStorage.setItem("aa_wishlist",JSON.stringify(wishlist))}
function showToast(msg){$("toast").textContent=msg;$("toast").classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>$("toast").classList.remove("show"),2600)}
function renderCategories(){
 $("categoriesGrid").innerHTML=categories.map(([icon,name])=>`<button class="category-card" onclick="setFilter('${name}')"><span>${icon}</span><strong>${name}</strong><small>Explore collection →</small></button>`).join("");
}
function renderFilters(){
 const names=["All","New Arrivals",...categories.map(c=>c[1])];
 $("filterChips").innerHTML=names.map(n=>`<button class="${activeFilter===n?"active":""}" onclick="setFilter('${n}')">${n}</button>`).join("");
}
function filteredProducts(){
 let list=products.filter(p=>{
   const matchFilter=activeFilter==="All"||(activeFilter==="New Arrivals"?p.new:p.cat===activeFilter);
   const q=(p.name+" "+p.cat).toLowerCase().includes(searchTerm.toLowerCase());
   return matchFilter&&q;
 });
 const sort=$("sortSelect").value;
 if(sort==="low")list.sort((a,b)=>a.price-b.price);
 if(sort==="high")list.sort((a,b)=>b.price-a.price);
 if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
 if(sort==="newest")list.sort((a,b)=>Number(b.new)-Number(a.new));
 return list;
}
function renderProducts(){
 const list=filteredProducts(), shown=list.slice(0,visibleCount);
 productsEl.innerHTML=shown.length?shown.map(p=>{
  const i=products.indexOf(p), wished=wishlist.includes(i);
  return `<article class="product">
   ${p.new?'<span class="badge">NEW</span>':''}<button class="wish ${wished?"selected":""}" onclick="toggleWish(${i})">${wished?"♥":"♡"}</button>
   <button class="product-img" onclick="openProduct(${i})">${p.icon}</button>
   <div class="product-cat">${p.cat}</div><h3>${p.name}</h3>
   <div class="price">$${p.price.toFixed(2)}</div><div class="stars">★★★★★ <span>(${p.reviews})</span></div>
   <button class="add" onclick="addToCart(${i})">🛒 ADD TO CART</button>
  </article>`}).join(""):"<div class='empty-state'>No products found. Try another search or category.</div>";
 $("loadMore").style.display=shown.length<list.length?"block":"none";
}
function setFilter(name){
 activeFilter=name;searchTerm="";$("searchInput").value="";visibleCount=8;renderFilters();renderProducts();
 document.querySelector("#shop").scrollIntoView({behavior:"smooth"});
}
function toggleWish(i){wishlist.includes(i)?wishlist=wishlist.filter(x=>x!==i):wishlist.push(i);save();updateCounts();renderProducts();showToast(wishlist.includes(i)?"Added to wishlist":"Removed from wishlist")}
function addToCart(i){cart.push(products[i]);save();updateCart();openCart();showToast("Added to cart")}
function removeItem(i){cart.splice(i,1);save();updateCart()}
function changeQty(i,delta){if(!cart[i])return;cart[i].qty=(cart[i].qty||1)+delta;if(cart[i].qty<1)cart.splice(i,1);save();updateCart()}
function cartTotal(){return cart.reduce((s,p)=>s+p.price*(p.qty||1),0)}
function updateCounts(){$("cartCount").textContent=cart.reduce((s,p)=>s+(p.qty||1),0);$("wishCount").textContent=wishlist.length}
function updateCart(){
 const items=$("cartItems");
 items.innerHTML=cart.length?cart.map((p,i)=>`<div class="cart-row"><span class="cart-icon">${p.icon}</span><div class="cart-info"><strong>${p.name}</strong><small>$${p.price.toFixed(2)}</small><div class="qty"><button onclick="changeQty(${i},-1)">−</button><span>${p.qty||1}</span><button onclick="changeQty(${i},1)">+</button></div></div><button class="remove" onclick="removeItem(${i})">×</button></div>`).join(""):"<div class='empty-cart'>Your cart is empty.<br><small>Add something you love from the collection.</small></div>";
 const subtotal=cartTotal(), total=Math.max(0,subtotal-discount);
 $("total").textContent=total.toFixed(2);
 const left=Math.max(0,50-subtotal);
 $("shippingProgress").innerHTML=left?`Add <strong>$${left.toFixed(2)}</strong> more for FREE shipping.`:`🎉 <strong>You unlocked FREE shipping!</strong>`;
 updateCounts();
}
function openCart(){$("cartPanel").classList.add("open");$("overlay").classList.add("show")}
function closeCart(){$("cartPanel").classList.remove("open");if(!document.querySelector(".modal.open"))$("overlay").classList.remove("show")}
function applyCoupon(){const code=$("couponInput").value.trim().toUpperCase();if(code==="WELCOME20"){discount=cartTotal()*.20;showToast("20% discount applied!")}else{discount=0;showToast("Invalid coupon code")}updateCart()}
function copyCoupon(){navigator.clipboard?.writeText("WELCOME20");$("couponInput").value="WELCOME20";showToast("Coupon WELCOME20 copied")}
function openCheckout(){
 if(!cart.length){showToast("Your cart is empty");return}
 $("checkoutSummary").innerHTML=`<div class="summary-line"><span>Items</span><strong>${$("cartCount").textContent}</strong></div><div class="summary-line"><span>Total</span><strong>$${Math.max(0,cartTotal()-discount).toFixed(2)}</strong></div>`;
 $("checkoutModal").classList.add("open");$("overlay").classList.add("show");closeCart();
}
function closeModal(id){$(id).classList.remove("open");if(!document.querySelector(".modal.open"))$("overlay").classList.remove("show")}
function openProduct(i){
 const p=products[i];
 $("productDetail").innerHTML=`<div class="detail-icon">${p.icon}</div><div class="product-cat">${p.cat}</div><h2>${p.name}</h2><div class="stars">★★★★★ <span>${p.rating} (${p.reviews} reviews)</span></div><h3 class="detail-price">$${p.price.toFixed(2)}</h3><p>Curated for a polished everyday look. Add this piece to your collection and pair it with your favorite essentials.</p><button class="checkout" onclick="addToCart(${i});closeModal('productModal')">ADD TO CART</button>`;
 $("productModal").classList.add("open");$("overlay").classList.add("show");
}
function trackOrder(){
 const id=$("trackInput").value.trim().toUpperCase();
 if(!id){showToast("Enter an order ID");return}
 $("trackResult").innerHTML=`<div class="tracking"><strong>${id}</strong><div class="track-step done">✓ Order placed</div><div class="track-step active">● Order confirmed</div><div class="track-step">○ Packed</div><div class="track-step">○ Shipped</div><div class="track-step">○ Delivered</div></div>`;
}
$("searchBtn").onclick=()=>{$("searchbar").classList.toggle("open");$("searchInput").focus()};
$("searchInput").oninput=e=>{searchTerm=e.target.value;visibleCount=8;renderProducts();renderSuggestions()};
$("clearSearch").onclick=()=>{$("searchInput").value="";searchTerm="";renderProducts();renderSuggestions()};
function renderSuggestions(){
 const q=$("searchInput").value.trim().toLowerCase();
 if(!q){$("suggestions").innerHTML="";return}
 const found=products.filter(p=>(p.name+" "+p.cat).toLowerCase().includes(q)).slice(0,5);
 $("suggestions").innerHTML=found.map(p=>`<button onclick="openProduct(${products.indexOf(p)})">${p.icon} ${p.name}</button>`).join("")||"<small>No matches found</small>";
}
$("sortSelect").onchange=()=>{visibleCount=8;renderProducts()};
$("loadMore").onclick=()=>{visibleCount+=8;renderProducts()};
$("cartBtn").onclick=openCart;$("closeCart").onclick=closeCart;$("overlay").onclick=()=>{closeCart();document.querySelectorAll(".modal").forEach(m=>m.classList.remove("open"));$("overlay").classList.remove("show")};
$("wishlistBtn").onclick=()=>{$("viewWishlist").click()};
$("viewWishlist").onclick=()=>{activeFilter="All";searchTerm="";$("searchInput").value="";const old=filteredProducts;const list=wishlist.map(i=>products[i]).filter(Boolean);productsEl.innerHTML=list.length?list.map(p=>{const i=products.indexOf(p);return `<article class="product"><button class="wish selected" onclick="toggleWish(${i})">♥</button><button class="product-img" onclick="openProduct(${i})">${p.icon}</button><div class="product-cat">${p.cat}</div><h3>${p.name}</h3><div class="price">$${p.price.toFixed(2)}</div><div class="stars">★★★★★ <span>(${p.reviews})</span></div><button class="add" onclick="addToCart(${i})">🛒 ADD TO CART</button></article>`}).join(""):"<div class='empty-state'>Your wishlist is empty.</div>";$("loadMore").style.display="none";document.querySelector("#shop").scrollIntoView({behavior:"smooth"})};
$("themeBtn").onclick=()=>{document.body.classList.toggle("dark");localStorage.setItem("aa_dark",document.body.classList.contains("dark"))};
if(localStorage.getItem("aa_dark")==="true")document.body.classList.add("dark");
$("newsletter").onsubmit=e=>{e.preventDefault();showToast("Thanks for subscribing!");e.target.reset()};
$("checkoutForm").onsubmit=e=>{
 e.preventDefault();const id="AA-"+Math.floor(100000+Math.random()*900000);
 localStorage.setItem("aa_last_order",id);cart=[];discount=0;save();updateCart();closeModal("checkoutModal");
 $("trackInput").value=id;$("trackResult").innerHTML=`<div class="success">Order placed! Your order ID is <strong>${id}</strong>.</div>`;
 $("trackingModal").classList.add("open");$("overlay").classList.add("show");
};
document.querySelector(".menu").onclick=()=>document.querySelector("nav").classList.toggle("open");

renderCategories();renderFilters();renderProducts();updateCart();
