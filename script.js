const products=[
{id:"noir-classic-sunglasses",name:"Noir Classic Sunglasses",price:1490,category:"sunglasses",badge:"BESTSELLER",rating:4.9,reviews:48,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=90",desc:"Classic black-frame sunglasses with a clean, versatile silhouette for everyday premium style."},
{id:"gold-frame-aviator",name:"Gold Frame Aviator",price:1690,category:"sunglasses",badge:"NEW",rating:4.8,reviews:31,image:"https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=900&q=90",desc:"A refined aviator-inspired frame with a polished gold-tone finish and timeless appeal."},
{id:"executive-leather-wallet",name:"Executive Leather Wallet",price:1290,category:"wallets",badge:"",rating:4.9,reviews:42,image:"https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=90",desc:"A sleek everyday wallet with a refined leather look and practical card-and-cash layout."},
{id:"slim-carbon-wallet",name:"Slim Carbon Wallet",price:1190,category:"wallets",badge:"NEW",rating:4.7,reviews:25,image:"https://images.unsplash.com/photo-1628149453141-1b5b7b6a1c1d?auto=format&fit=crop&w=900&q=90",desc:"A compact modern wallet designed for a clean pocket profile and everyday convenience."},
{id:"imperial-gold-bracelet",name:"Imperial Gold Bracelet",price:990,category:"bracelets",badge:"",rating:4.8,reviews:37,image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=90",desc:"A polished bracelet with a minimal luxury feel that works alone or layered."},
{id:"black-steel-bracelet",name:"Black Steel Bracelet",price:890,category:"bracelets",badge:"",rating:4.7,reviews:29,image:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=90",desc:"A dark, understated bracelet with a contemporary finish for smart casual looks."},
{id:"royal-gold-chronograph",name:"Royal Gold Chronograph",price:3490,category:"watches",badge:"BESTSELLER",rating:4.9,reviews:61,image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=90",desc:"A statement gold-tone watch inspired by classic luxury proportions and formal styling."},
{id:"midnight-steel-watch",name:"Midnight Steel Watch",price:2990,category:"watches",badge:"NEW",rating:4.8,reviews:44,image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=90",desc:"A sophisticated steel watch with a dark dial and versatile day-to-night character."},
{id:"classic-minimal-watch",name:"Classic Minimal Watch",price:2490,category:"watches",badge:"",rating:4.7,reviews:33,image:"https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=900&q=90",desc:"A clean minimalist watch designed to pair effortlessly with both casual and formal outfits."},
{id:"sterling-signet-ring",name:"Sterling Signet Ring",price:790,category:"rings",badge:"",rating:4.8,reviews:22,image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=90",desc:"A bold signet-inspired ring with a clean profile and polished premium appearance."},
{id:"minimal-black-ring",name:"Minimal Black Ring",price:690,category:"rings",badge:"NEW",rating:4.7,reviews:18,image:"https://images.unsplash.com/photo-1598560912005-59a0c7c5c0c3?auto=format&fit=crop&w=900&q=90",desc:"A minimalist dark ring made for understated everyday styling."},
{id:"urban-leather-crossbody",name:"Urban Leather Crossbody",price:1890,category:"crossbody-bags",badge:"BESTSELLER",rating:4.9,reviews:36,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=90",desc:"A compact crossbody silhouette with a premium leather-inspired finish for daily essentials."},
{id:"premium-mini-crossbody",name:"Premium Mini Crossbody",price:1690,category:"crossbody-bags",badge:"",rating:4.8,reviews:27,image:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=90",desc:"A polished mini bag designed for phones, cards and everyday essentials."},
{id:"executive-leather-belt",name:"Executive Leather Belt",price:1090,category:"belts",badge:"",rating:4.8,reviews:24,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=90",desc:"A classic belt aesthetic designed to complement smart and semi-formal outfits."},
{id:"classic-black-belt",name:"Classic Black Belt",price:990,category:"belts",badge:"",rating:4.7,reviews:21,image:"https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=90",desc:"A versatile black belt with a clean buckle profile for everyday wear."},
{id:"signature-black-cap",name:"Signature Black Cap",price:790,category:"caps",badge:"NEW",rating:4.8,reviews:30,image:"https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=90",desc:"A clean premium-style cap with a timeless black finish and easy everyday appeal."},
{id:"premium-beige-cap",name:"Premium Beige Cap",price:790,category:"caps",badge:"",rating:4.7,reviews:19,image:"https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=900&q=90",desc:"A neutral beige cap designed to complement relaxed and street-inspired outfits."},
{id:"oud-royale-fragrance",name:"Oud Royale Fragrance",price:1990,category:"fragrance",badge:"BESTSELLER",rating:4.9,reviews:53,image:"https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=90",desc:"A rich fragrance presentation inspired by warm woods, amber and elegant evening styling."},
{id:"noir-intense-fragrance",name:"Noir Intense Fragrance",price:1790,category:"fragrance",badge:"NEW",rating:4.8,reviews:39,image:"https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=90",desc:"A sophisticated fragrance profile with a dark, modern presentation for day or night."},
{id:"golden-amber-fragrance",name:"Golden Amber Fragrance",price:1890,category:"fragrance",badge:"",rating:4.8,reviews:34,image:"https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=900&q=90",desc:"A warm amber-inspired fragrance presentation with an elegant golden aesthetic."}
];

let cart=JSON.parse(localStorage.getItem("adeeb_cart")||"[]");
function saveCart(){localStorage.setItem("adeeb_cart",JSON.stringify(cart))}
function money(n){return new Intl.NumberFormat("en-BD",{style:"currency",currency:"BDT",maximumFractionDigits:0}).format(Number(n))}
function productById(id){return products.find(p=>p.id===id)}
function cartQty(){return cart.reduce((s,i)=>s+i.qty,0)}
function cartTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}
function addToCart(id,qty=1){const p=productById(id);if(!p)return;const existing=cart.find(i=>i.id===id);if(existing)existing.qty+=qty;else cart.push({...p,qty});saveCart();updateCartUI();openCart()}
function changeQty(id,delta){const item=cart.find(i=>i.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI()}
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI()}
function updateCartUI(){
 document.querySelectorAll("#cartCount").forEach(e=>e.textContent=cartQty());
 const list=document.getElementById("cartItems");if(!list)return;
 list.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt="${i.name}"><div class="cart-info"><a href="product.html?id=${i.id}">${i.name}</a><strong>${money(i.price)}</strong><div class="qty"><button onclick="changeQty('${i.id}',-1)">−</button><span>${i.qty}</span><button onclick="changeQty('${i.id}',1)">+</button><button class="remove" onclick="removeFromCart('${i.id}')">Remove</button></div></div></div>`).join(""):`<div class="empty-cart"><div>♡</div><h3>Your bag is empty</h3><p>Discover something you'll love.</p><a href="shop.html" class="primary-btn">SHOP PRODUCTS</a></div>`;
 const total=document.getElementById("cartTotal");if(total)total.textContent=money(cartTotal());
}
function openCart(){const d=document.getElementById("cartDrawer"),o=document.getElementById("overlay");if(d)d.classList.add("open");if(o)o.classList.add("show")}
function closeCart(){document.getElementById("cartDrawer")?.classList.remove("open");document.getElementById("overlay")?.classList.remove("show")}
function setupGlobal(){
 updateCartUI();
 document.getElementById("cartBtn")?.addEventListener("click",openCart);
 document.getElementById("closeCart")?.addEventListener("click",closeCart);
 document.getElementById("overlay")?.addEventListener("click",closeCart);
 document.getElementById("menuBtn")?.addEventListener("click",()=>document.getElementById("mobileNav")?.classList.toggle("open"));
 document.querySelectorAll(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mobileNav")?.classList.remove("open")));
 document.getElementById("searchToggle")?.addEventListener("click",()=>{document.getElementById("searchBar")?.classList.toggle("show");setTimeout(()=>document.getElementById("searchInput")?.focus(),50)});
 document.getElementById("searchClose")?.addEventListener("click",()=>document.getElementById("searchBar")?.classList.remove("show"));
 const searchInput=document.getElementById("searchInput");
 if(searchInput){
  searchInput.addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();if(document.getElementById("shopProducts"))renderShop(q,currentFilter);showSearchSuggestions(q)});
  searchInput.addEventListener("keydown",e=>{if(e.key==="Enter"){const q=searchInput.value.trim();if(q)location.href=`shop.html?q=${encodeURIComponent(q)}`}});
 }
 document.getElementById("newsletter")?.addEventListener("submit",e=>{e.preventDefault();e.target.innerHTML="<p class='success'>You're on the list ✦</p>"});
}
function card(p){return `<article class="product-card"><a class="product-image" href="product.html?id=${p.id}">${p.badge?`<span class="badge">${p.badge}</span>`:""}<img loading="lazy" src="${p.image}" alt="${p.name}"><button class="heart" onclick="event.preventDefault();alert('Added to wishlist')">♡</button></a><div class="product-meta"><p class="category">${p.category.replaceAll("-"," ")}</p><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><div class="product-bottom"><strong>${money(p.price)}</strong><span class="stars">★★★★★ <small>(${p.reviews})</small></span></div><button class="add-btn" onclick="addToCart('${p.id}')">ADD TO BAG <span>+</span></button></div></article>`}
function renderFeatured(filter="all"){const el=document.getElementById("featuredProducts");if(el)el.innerHTML=products.filter(p=>filter==="all"||p.category===filter).slice(0,4).map(card).join("")}
let currentFilter="all";
function renderShop(q="",filter=currentFilter){
 let list=products.filter(p=>(filter==="all"||p.category===filter)&&(!q||`${p.name} ${p.category}`.toLowerCase().includes(q)));
 const sort=document.getElementById("sortSelect")?.value;
 if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 const el=document.getElementById("shopProducts");if(el)el.innerHTML=list.map(card).join("")||"<div class='no-results'>No products found. Try another search.</div>";
 const c=document.getElementById("resultCount");if(c)c.textContent=`${list.length} product${list.length!==1?"s":""}`;
}
function initHome(){setupGlobal();renderFeatured();document.querySelectorAll(".pill").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderFeatured(b.dataset.filter)}))}
function showSearchSuggestions(q){
 const box=document.getElementById("searchSuggestions");if(!box)return;if(!q){box.innerHTML="";box.classList.remove("show");return}
 const matches=products.filter(p=>`${p.name} ${p.category}`.toLowerCase().includes(q)).slice(0,5);
 box.innerHTML=matches.length?matches.map(p=>`<a href="product.html?id=${p.id}"><img src="${p.image}" alt=""><span><b>${p.name}</b><small>${p.category.replaceAll("-"," ")} · ${money(p.price)}</small></span></a>`).join(""):"<div class='search-empty'>No matching products</div>";box.classList.add("show")
}
function initShopPage(){
 setupGlobal();const params=new URLSearchParams(location.search);currentFilter=params.get("category")||"all";
 document.querySelectorAll(".filter").forEach(b=>{b.classList.toggle("active",b.dataset.filter===currentFilter);b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");currentFilter=b.dataset.filter;renderShop(document.getElementById("searchInput")?.value||"",currentFilter)})});
 document.getElementById("sortSelect")?.addEventListener("change",()=>renderShop(document.getElementById("searchInput")?.value||"",currentFilter));
 document.getElementById("filterToggle")?.addEventListener("click",()=>document.querySelector(".filters")?.classList.toggle("mobile-open"));
 renderShop(params.get("q")||"",currentFilter);const si=document.getElementById("searchInput");if(si){si.value=params.get("q")||"";showSearchSuggestions(si.value.toLowerCase().trim())}
}
function initProductPage(){
 setupGlobal();const id=new URLSearchParams(location.search).get("id")||products[0].id;const p=productById(id)||products[0];
 document.title=`${p.name} | Adeeb Accessories`;document.getElementById("crumb").textContent=p.name;
 document.getElementById("productDetail").innerHTML=`<div class="detail-image"><img src="${p.image}" alt="${p.name}">${p.badge?`<span class="badge">${p.badge}</span>`:""}</div><div class="detail-copy"><p class="category">${p.category.replaceAll("-"," ")}</p><h1>${p.name}</h1><div class="detail-rating"><span class="stars">★★★★★</span> <span>${p.rating} · ${p.reviews} reviews</span></div><div class="detail-price">${money(p.price)}</div><p class="detail-desc">${p.desc}</p><div class="quantity"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div><button class="primary-btn full" id="detailAdd">ADD TO BAG →</button><div class="product-perks"><div>◇ <span><b>Premium quality</b><small>Selected with care</small></span></div><div>↩ <span><b>Easy returns</b><small>30-day return policy</small></span></div><div>♢ <span><b>Secure checkout</b><small>Your details stay protected</small></span></div></div></div>`;
 let q=1;document.getElementById("minus").onclick=()=>{q=Math.max(1,q-1);document.getElementById("qty").textContent=q};document.getElementById("plus").onclick=()=>{q++;document.getElementById("qty").textContent=q};document.getElementById("detailAdd").onclick=()=>addToCart(p.id,q)
}
function initCheckout(){
 const items=document.getElementById("checkoutItems");if(!items)return;if(!cart.length){items.innerHTML="<p>Your cart is empty. <a href='shop.html'>Shop now →</a></p>";return}
 items.innerHTML=cart.map(i=>`<div class="summary-item"><span>${i.name} × ${i.qty}</span><strong>${money(i.price*i.qty)}</strong></div>`).join("");document.getElementById("checkoutTotal").textContent=money(cartTotal());
 document.getElementById("checkoutForm")?.addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const orderId="AD"+Date.now().toString().slice(-8);localStorage.setItem("adeeb_last_order",JSON.stringify({orderId,...data,items:cart,total:cartTotal(),date:new Date().toISOString()}));cart=[];saveCart();document.querySelector(".checkout-wrap").innerHTML=`<div class="order-success"><div class="success-icon">✓</div><p class="eyebrow">ORDER RECEIVED</p><h1>Thank you, ${data.firstName}.</h1><p>Your order <strong>#${orderId}</strong> has been recorded. We'll contact you at ${data.phone} to confirm delivery and payment.</p><a class="primary-btn" href="index.html">CONTINUE SHOPPING →</a></div>`})
}
function initAccount(){
 const tabs=document.querySelectorAll(".tab"),login=document.getElementById("loginForm"),signup=document.getElementById("signupForm"),msg=document.getElementById("accountMessage");if(!tabs.length||!login||!signup)return;
 tabs.forEach(t=>t.onclick=()=>{tabs.forEach(x=>x.classList.remove("active"));t.classList.add("active");const sign=t.dataset.tab==="signup";login.classList.toggle("hidden",sign);signup.classList.toggle("hidden",!sign);msg.innerHTML=""});
 signup.onsubmit=e=>{e.preventDefault();localStorage.setItem("adeeb_user",JSON.stringify({name:signupName.value,email:signupEmail.value,password:signupPassword.value}));msg.innerHTML="<p class='success'>Account created on this device. You can now sign in.</p>";e.target.reset()};
 login.onsubmit=e=>{e.preventDefault();const u=JSON.parse(localStorage.getItem("adeeb_user")||"null");if(u&&u.email===loginEmail.value&&u.password===loginPassword.value)msg.innerHTML=`<p class='success'>Welcome back, ${u.name}! ✦</p>`;else msg.innerHTML="<p class='error'>Account not found or password is incorrect.</p>"}
}
document.addEventListener("DOMContentLoaded",()=>{if(document.getElementById("featuredProducts"))initHome()});
