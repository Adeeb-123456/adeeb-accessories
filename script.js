const products=[
{id:"gold-watch",name:"Classic Gold Watch",price:49.99,category:"watches",badge:"NEW",rating:4.9,reviews:32,image:"https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=85",desc:"A refined gold-tone watch with a clean dial and timeless silhouette."},
{id:"gold-necklace",name:"Elegant Gold Necklace",price:29.99,category:"jewelry",badge:"NEW",rating:4.8,reviews:18,image:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",desc:"A delicate necklace designed to add a polished touch without overpowering your look."},
{id:"black-sunglasses",name:"Sleek Black Sunglasses",price:24.99,category:"sunglasses",badge:"",rating:4.9,reviews:27,image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85",desc:"Classic black frames with a modern profile for effortless everyday style."},
{id:"gold-bracelet",name:"Luxury Gold Bracelet",price:19.99,category:"bracelets",badge:"",rating:4.8,reviews:21,image:"https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",desc:"A minimalist gold bracelet that layers beautifully with your favorite pieces."},
{id:"pearl-earrings",name:"Pearl Drop Earrings",price:22.99,category:"jewelry",badge:"",rating:4.7,reviews:14,image:"https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",desc:"Elegant pearl-inspired earrings made for celebrations and everyday refinement."},
{id:"gold-ring-set",name:"Golden Ring Set",price:34.99,category:"jewelry",badge:"NEW",rating:4.9,reviews:19,image:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",desc:"A versatile set of slim rings with a warm gold finish."},
{id:"leather-bracelet",name:"Leather & Gold Bracelet",price:17.99,category:"bracelets",badge:"",rating:4.6,reviews:11,image:"https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=85",desc:"Textured leather paired with a subtle metal accent for a relaxed premium look."},
{id:"minimal-pendant",name:"Minimal Pendant",price:26.99,category:"jewelry",badge:"",rating:4.8,reviews:24,image:"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",desc:"A simple pendant with a refined finish that works from day to night."}
];

let cart=JSON.parse(localStorage.getItem("adeeb_cart")||"[]");

function saveCart(){localStorage.setItem("adeeb_cart",JSON.stringify(cart))}
function money(n){return Number(n).toFixed(2)}
function productById(id){return products.find(p=>p.id===id)}
function cartQty(){return cart.reduce((s,i)=>s+i.qty,0)}
function cartTotal(){return cart.reduce((s,i)=>s+i.price*i.qty,0)}

function addToCart(id,qty=1){const p=productById(id);if(!p)return;const existing=cart.find(i=>i.id===id);if(existing)existing.qty+=qty;else cart.push({...p,qty});saveCart();updateCartUI();openCart()}
function changeQty(id,delta){const item=cart.find(i=>i.id===id);if(!item)return;item.qty+=delta;if(item.qty<=0)cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI()}
function removeFromCart(id){cart=cart.filter(i=>i.id!==id);saveCart();updateCartUI()}
function updateCartUI(){
 document.querySelectorAll("#cartCount").forEach(e=>e.textContent=cartQty());
 const list=document.getElementById("cartItems"); if(!list)return;
 list.innerHTML=cart.length?cart.map(i=>`<div class="cart-item"><img src="${i.image}" alt=""><div class="cart-info"><a href="product.html?id=${i.id}">${i.name}</a><strong>$${money(i.price)}</strong><div class="qty"><button onclick="changeQty('${i.id}',-1)">−</button><span>${i.qty}</span><button onclick="changeQty('${i.id}',1)">+</button><button class="remove" onclick="removeFromCart('${i.id}')">Remove</button></div></div></div>`).join(""):`<div class="empty-cart"><div>♡</div><h3>Your bag is empty</h3><p>Discover something you'll love.</p><a href="shop.html" class="primary-btn">SHOP PRODUCTS</a></div>`;
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
 document.getElementById("searchToggle")?.addEventListener("click",()=>document.getElementById("searchBar")?.classList.toggle("show"));
 document.getElementById("searchClose")?.addEventListener("click",()=>document.getElementById("searchBar")?.classList.remove("show"));
 const searchInput=document.getElementById("searchInput");
 if(searchInput){
   searchInput.addEventListener("input",e=>{
     const q=e.target.value.toLowerCase().trim();
     if(document.getElementById("shopProducts")) renderShop(q,currentFilter);
     showSearchSuggestions(q);
   });
   searchInput.addEventListener("keydown",e=>{
     if(e.key==="Enter"){
       const q=searchInput.value.trim();
       if(q) location.href=`shop.html?q=${encodeURIComponent(q)}`;
     }
   });
 }
 document.getElementById("searchToggle")?.addEventListener("click",()=>setTimeout(()=>document.getElementById("searchInput")?.focus(),50));
 document.getElementById("newsletter")?.addEventListener("submit",e=>{e.preventDefault();e.target.innerHTML="<p class='success'>You're on the list ✦</p>"});
}
function card(p){return `<article class="product-card"><a class="product-image" href="product.html?id=${p.id}">${p.badge?`<span class="badge">${p.badge}</span>`:""}<img loading="lazy" src="${p.image}" alt="${p.name}"><button class="heart" onclick="event.preventDefault();alert('Added to wishlist')">♡</button></a><div class="product-meta"><p class="category">${p.category}</p><h3><a href="product.html?id=${p.id}">${p.name}</a></h3><div class="product-bottom"><strong>$${money(p.price)}</strong><span class="stars">★★★★★ <small>(${p.reviews})</small></span></div><button class="add-btn" onclick="addToCart('${p.id}')">ADD TO BAG <span>+</span></button></div></article>`}
function renderFeatured(filter="all"){const el=document.getElementById("featuredProducts");if(el)el.innerHTML=products.filter(p=>filter==="all"||p.category===filter).slice(0,4).map(card).join("")}
let currentFilter="all";
function renderShop(q="",filter=currentFilter){
 let list=products.filter(p=>(filter==="all"||p.category===filter)&&(!q||`${p.name} ${p.category}`.toLowerCase().includes(q)));
 const sort=document.getElementById("sortSelect")?.value;
 if(sort==="low")list.sort((a,b)=>a.price-b.price);if(sort==="high")list.sort((a,b)=>b.price-a.price);if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
 document.getElementById("shopProducts").innerHTML=list.map(card).join("")||"<div class='no-results'>No products found. Try another search.</div>";
 const c=document.getElementById("resultCount");if(c)c.textContent=`${list.length} product${list.length!==1?"s":""}`;
}
function initHome(){
 setupGlobal();renderFeatured();
 document.querySelectorAll(".pill").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".pill").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderFeatured(b.dataset.filter)}));
}
function showSearchSuggestions(q){
 const box=document.getElementById("searchSuggestions"); if(!box)return;
 if(!q){box.innerHTML="";box.classList.remove("show");return;}
 const matches=products.filter(p=>`${p.name} ${p.category}`.toLowerCase().includes(q)).slice(0,5);
 box.innerHTML=matches.length?matches.map(p=>`<a href="product.html?id=${p.id}"><img src="${p.image}" alt=""><span><b>${p.name}</b><small>${p.category} · $${money(p.price)}</small></span></a>`).join(""):"<div class='search-empty'>No matching products</div>";
 box.classList.add("show");
}
function initShopPage(){
 setupGlobal();
 const params=new URLSearchParams(location.search);currentFilter=params.get("category")||"all";
 document.querySelectorAll(".filter").forEach(b=>{b.classList.toggle("active",b.dataset.filter===currentFilter);b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");currentFilter=b.dataset.filter;renderShop(document.getElementById("searchInput")?.value||"",currentFilter)})});
 document.getElementById("sortSelect")?.addEventListener("change",()=>renderShop(document.getElementById("searchInput")?.value||"",currentFilter));
 document.getElementById("filterToggle")?.addEventListener("click",()=>document.querySelector(".filters")?.classList.toggle("mobile-open"));
 renderShop(params.get("q")||"",currentFilter);
 const si=document.getElementById("searchInput"); if(si){si.value=params.get("q")||""; showSearchSuggestions(si.value.toLowerCase().trim());}
}
function initProductPage(){
 setupGlobal();const id=new URLSearchParams(location.search).get("id")||products[0].id;const p=productById(id)||products[0];
 document.title=`${p.name} | Adeeb Accessories`;document.getElementById("crumb").textContent=p.name;
 document.getElementById("productDetail").innerHTML=`<div class="detail-image"><img src="${p.image}" alt="${p.name}">${p.badge?`<span class="badge">${p.badge}</span>`:""}</div><div class="detail-copy"><p class="category">${p.category}</p><h1>${p.name}</h1><div class="detail-rating"><span class="stars">★★★★★</span> <span>${p.rating} · ${p.reviews} reviews</span></div><div class="detail-price">$${money(p.price)}</div><p class="detail-desc">${p.desc}</p><div class="quantity"><button id="minus">−</button><span id="qty">1</span><button id="plus">+</button></div><button class="primary-btn full" id="detailAdd">ADD TO BAG →</button><div class="product-perks"><div>◇ <span><b>Premium quality</b><small>Selected with care</small></span></div><div>↩ <span><b>Easy returns</b><small>30-day return policy</small></span></div><div>♢ <span><b>Secure checkout</b><small>Your details stay protected</small></span></div></div></div>`;
 let q=1;document.getElementById("minus").onclick=()=>{q=Math.max(1,q-1);document.getElementById("qty").textContent=q};document.getElementById("plus").onclick=()=>{q++;document.getElementById("qty").textContent=q};document.getElementById("detailAdd").onclick=()=>addToCart(p.id,q);
}
function initCheckout(){
 const items=document.getElementById("checkoutItems");if(!cart.length){items.innerHTML="<p>Your cart is empty. <a href='shop.html'>Shop now →</a></p>";return}
 items.innerHTML=cart.map(i=>`<div class="summary-item"><span>${i.name} × ${i.qty}</span><strong>$${money(i.price*i.qty)}</strong></div>`).join("");document.getElementById("checkoutTotal").textContent=money(cartTotal());
 document.getElementById("checkoutForm").addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));const orderId="AD"+Date.now().toString().slice(-8);localStorage.setItem("adeeb_last_order",JSON.stringify({orderId,...data,items:cart,total:cartTotal(),date:new Date().toISOString()}));cart=[];saveCart();document.querySelector(".checkout-wrap").innerHTML=`<div class="order-success"><div class="success-icon">✓</div><p class="eyebrow">ORDER RECEIVED</p><h1>Thank you, ${data.firstName}.</h1><p>Your order <strong>#${orderId}</strong> has been recorded. We'll contact you at ${data.phone} to confirm delivery and payment.</p><a class="primary-btn" href="index.html">CONTINUE SHOPPING →</a></div>`});
}
function initAccount(){
 const tabs=document.querySelectorAll(".tab"),login=document.getElementById("loginForm"),signup=document.getElementById("signupForm"),msg=document.getElementById("accountMessage");
 tabs.forEach(t=>t.onclick=()=>{tabs.forEach(x=>x.classList.remove("active"));t.classList.add("active");const sign=t.dataset.tab==="signup";login.classList.toggle("hidden",sign);signup.classList.toggle("hidden",!sign);msg.innerHTML=""});
 signup.onsubmit=e=>{e.preventDefault();localStorage.setItem("adeeb_user",JSON.stringify({name:signupName.value,email:signupEmail.value,password:signupPassword.value}));msg.innerHTML="<p class='success'>Account created on this device. You can now sign in.</p>";e.target.reset()};
 login.onsubmit=e=>{e.preventDefault();const u=JSON.parse(localStorage.getItem("adeeb_user")||"null");if(u&&u.email===loginEmail.value&&u.password===loginPassword.value)msg.innerHTML=`<p class='success'>Welcome back, ${u.name}! ✦</p>`;else msg.innerHTML="<p class='error'>Account not found or password is incorrect.</p>"};
}
document.addEventListener("DOMContentLoaded",()=>{if(document.getElementById("featuredProducts"))initHome();});


/* Premium universal product search */
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('#searchInput, [data-search-input]');
  const cards = [...document.querySelectorAll('.product-card')];
  if (!searchInput || !cards.length) return;
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = !q || text.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    const count = document.querySelector('[data-search-count]');
    if (count) count.textContent = `${shown} product${shown === 1 ? '' : 's'} found`;
  });
});
