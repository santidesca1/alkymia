// app.js
const $ = s => document.querySelector(s);
const PHONE = "543513646356"; // sin + ni espacios

const state = { brand:"", family:"", priceBand:"", sort:"name-asc", search:"" };


function money(n){ return n.toLocaleString("es-AR"); }
function unique(list, key){ return [...new Set(list.map(o=>o[key]).filter(Boolean))].sort(); }

function fillFilters(){
  const brands = unique(PRODUCTS, "brand");
  const families = unique(PRODUCTS, "family");
  for(const b of brands) $("#fBrand").insertAdjacentHTML("beforeend", `<option>${b}</option>`);
  for(const f of families) $("#fFamily").insertAdjacentHTML("beforeend", `<option>${f}</option>`);
}

function card(p){
  const notes = [...(p.notesTop||[]),...(p.notesMid||[]),...(p.notesBase||[])].slice(0,5).join(", ");
  const imgTag = p.image ? `<img src="${p.image}" alt="${p.name} — ${p.brand}" loading="lazy" decoding="async">` : "";

  return `
 <article class="card" id="${p.id}" data-sku="${p.id}">
    <div class="card__img">${imgTag}</div>
    <div class="card__body">
      <h3>${p.name}</h3>
      <div class="sub">${p.brand}</div>
      <p class="notes">${notes}</p>
      <div class="meta"><span>$ ${money(p.price_ars)} ARS</span><span class="badge">${p.family}</span></div>
      <div class="cta-row">
        <input type="number" class="qty" value="1" min="1" aria-label="Cantidad">
        <button class="buy-btn btn btn--gold"
          data-name="${p.name}" data-brand="${p.brand}" data-price="${p.price_ars}"
          data-size="${p.concentration}" data-notes="${notes.replace(/\"/g,'')}">
          Comprar
        </button>
        <button class="ghost" onclick="verNotas('${p.id}')">Notas</button>
      </div>
    </div>
  </article>`;
}

function norm(s){
  return (s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // sin tildes
    .replace(/[^a-z0-9]+/g, "");                      // sin espacios ni símbolos
}

function filterProducts(){
  return window.PRODUCTS
    .filter(p=>{
      if(state.brand && p.brand!==state.brand) return false;
      if(state.family && p.family!==state.family) return false;
          if(state.priceBand){
        const v = p.price_ars;
        if(state.priceBand==="1" && !(v<=40000)) return false;
        if(state.priceBand==="2" && !(v>40000 && v<=60000)) return false;
        if(state.priceBand==="3" && !(v>60000)) return false;
      }

      if(state.search){
        const q = norm(state.search);
        const hay = norm([
          p.name, p.brand, p.family, p.gender, p.concentration,
          (p.notesTop||[]).join(" "),
          (p.notesMid||[]).join(" "),
          (p.notesBase||[]).join(" "),
          (p.tags||[]).join(" ")
        ].join(" "));
        if(!hay.includes(q)) return false;
      }
      return true;
    })
    .sort((a,b)=>{
      switch(state.sort){
        case "price-asc":  return a.price_ars - b.price_ars;
        case "price-desc": return b.price_ars - a.price_ars;
        case "brand-asc":  return a.brand.localeCompare(b.brand);
        default:           return a.name.localeCompare(b.name);
      }
    });
  }

function render(){ $("#grid").innerHTML = filterProducts().map(card).join(""); }

function scrollToCatalogTop(){
  const el = document.getElementById("catalogo") || document.body;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function bind(){
  $("#fBrand").onchange  = e=>{ state.brand = e.target.value;  render(); scrollToCatalogTop(); };
  $("#fFamily").onchange = e=>{ state.family = e.target.value; render(); scrollToCatalogTop(); };
  $("#fPrice").onchange  = e=>{ state.priceBand = e.target.value; render(); scrollToCatalogTop(); };
  $("#fSort").onchange   = e=>{ state.sort = e.target.value;    render(); scrollToCatalogTop(); };

  const debounce = (fn, ms=200) => {
    let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), ms); };
  };

  $("#fSearch").oninput = debounce(e=>{
    state.search = e.target.value;
    render();
    scrollToCatalogTop();
  }, 200);

  // Enter en el buscador = subir al inicio y “cerrar” el input
  $("#fSearch").addEventListener("keydown", ev=>{
    if(ev.key === "Enter"){
      ev.preventDefault();
      scrollToCatalogTop();
      ev.target.blur();
    }
  });

}

 // WhatsApp automático
document.addEventListener("click", e => {
  const btn = e.target.closest(".buy-btn");
  if (!btn) return;
  const card = btn.closest(".card");
  const qty = Math.max(1, parseInt(card.querySelector(".qty")?.value || "1", 10));
  const name = btn.dataset.name;
  const brand = btn.dataset.brand;
  const price = Number(btn.dataset.price);
  const size = btn.dataset.size;
  const notes = btn.dataset.notes || "";
  const msg = [
    "Hola AL KYMIA, quiero comprar:",
    `• ${name} (${size}) x${qty}`,
    `• Marca: ${brand}`,
    `• Precio: $${price.toLocaleString("es-AR")} ARS`,
    notes ? `Notas: ${notes}` : null,
    "",
    "Mi nombre: ______",
    "Envío a: ______",
    "Forma de pago: ______"
  ].filter(Boolean).join("\n");

  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
});


window.verNotas = function(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  alert(`${p.name}\n\nSalida: ${p.notesTop?.join(", ")}\nCorazón: ${p.notesMid?.join(", ")}\nFondo: ${p.notesBase?.join(", ")}`);
};

// Init
fillFilters();
bind();
render();

// Lightbox sobre imágenes (espera a que exista el HTML del lightbox)
document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lightbox-img");
  const lbCap = document.getElementById("lightbox-caption");
  const close = lb.querySelector(".close");

  document.addEventListener("click", e => {
    const img = e.target.closest(".card__img img, .masonry img");
    if(!img) return;
    lbImg.src = img.src;
    lbCap.textContent = img.alt || "";
    lb.style.display = "flex";
  });

  close.onclick = () => lb.style.display = "none";
  lb.onclick = e => { if(e.target === lb) lb.style.display = "none"; };
});

// Recomendador dinámico usando notas
window.recomendar = function(){
  const pref = document.getElementById('q1').value.toLowerCase();   // dulce | especiado | fresco
  const uso  = document.getElementById('q2').value.toLowerCase();   // diario | nocturno | evento

  const prefKeys = {
    dulce:    ["vainilla","tonka","ámbar","caramelo","miel","pralin"],
    especiado:["canela","pimienta","cardamomo","clavo","incienso","azafrán","jengibre"],
    fresco:   ["bergamota","limón","menta","lavanda","marino","acuático","verde","cítrico"]
  };
  const usoBoost = {
    diario:   ["fresco","bergamota","limón","lavanda","verde","acuático"],
    nocturno: ["ámbar","oud","vainilla","especiado","incienso","tabaco"],
    evento:   ["intense","elixir","parfum","extrait","royal","prestige"]
  };

  const keysPref = prefKeys[pref] || [];
  const keysUso  = usoBoost[uso]  || [];

  function score(p){
    const txt = [
      p.name,
      ...(p.notesTop||[]), ...(p.notesMid||[]), ...(p.notesBase||[])
    ].join(" ").toLowerCase();

    let s = 0;
    for(const k of keysPref) if(txt.includes(k)) s += 3;
    for(const k of keysUso)  if(txt.includes(k)) s += 2;
    return s;
  }

  const ranked = PRODUCTS
    .map(p => ({ p, s: score(p) }))
    .filter(r => r.s > 0)
    .sort((a,b) => b.s - a.s || a.p.price_ars - b.p.price_ars)
    .slice(0,5)
    .map(r => `• <a href="#${r.p.id}">${r.p.name}</a> — $${r.p.price_ars.toLocaleString('es-AR')} ARS`)
    .join("<br>");

  document.getElementById("resultado").innerHTML =
    ranked || "No tengo suficiente info con esa combinación. Probá otra opción.";
};



