// data/products.js
// Conversión y helpers
const USD_TO_ARS = 1350;
const MARGIN = 1.40;
// Redondea hacia arriba al múltiplo de 1000 más cercano
const toARS = usd => {
  const val = usd * USD_TO_ARS * MARGIN;
  return Math.ceil(val / 1000) * 1000;
};
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Mapa de imágenes locales ya existentes (carpeta /img)
const IMAGES_MAP = {
  // --- AFNAN ---
  "9 am dive": "img/9amDrive.jpg",
  "9 pm": "img/9pmAfnan.jpg",
  "9 pm elixir": "img/9pmElixir.jpg",
  "9 pm pour femme": "img/9pmPFemme.jpg",
  "9 pm rebel": "img/9pmRebel.jpg",
  "supremacy not only": "img/supremacyNOIntense.jpg",
  "turathi blue":"img/turathiBlue.jpg",

  // --- AL HARAMAIN ---
  "amber oud rouge": "img/amberOudRouge.jpg",
  "amber oud gold edition 60 ml": "img/amberOudGE60.jpg",
  "amber oud gold edition 120 ml": "img/amberOudGE.jpg",
  "l’aventure intense": "img/lAventureIntense.jpg",
  "detour noir": "img/detourNoir.jpg",
  "private edition": "img/amberOudPE.jpg",
  "aqua dubai": "img/amberOudAD.jpg",
  "dubai night": "img/dubaiNight.jpg",

  // --- ARMAF CDN ---
  "club de nuit intense man 105ml": "img/cdnIntenseMan105.jpg",
  "club de nuit intense man 200ml": "img/cdnIntenseMan200.jpg",
  "club de nuit iconic": "img/cdnIconicBlue.jpg",
  "club de nuit oud parfum": "img/cdnOudParfum.jpg",
  "club de nuit precieux": "img/cdnPrecieux.jpg",
  "club de nuit milestone": "img/cdnMilestone.jpg",
  "club de nuit imperiale": "img/cdnImperiale.jpg",
  "club de nuit sillage": "img/cdnSillage.jpg",
  "club de nuit maleka": "img/cdnMaleka.jpg",
  "club de nuit untold": "img/cdnUntold.jpg",
  "club de nuit urban man elixir": "img/cdnUrbanElixir.jpg",
  "club de nuit woman": "img/cdnWomen.jpg",

  // --- ARMAF Odyssey ---
  "odyssey homme white edition": "img/oHommeWE.jpg",
  "odyssey candee": "img/oCandee.jpg",
  "odyssey mega": "img/oMega.jpg",
  "odyssey spectra": "img/oSpectra.jpg",
  "odyssey wild one": "img/oWildOne.jpg",
  "odyssey homme black": "img/oHommeB.jpg",
  "odyssey aqua": "img/oAqua.jpg",
  "odyssey aoud": "img/oAoud.jpg",
  "odyssey dubai chocolate": "img/oDubaiChocolate.jpg",
  "odyssey tyrant": "img/oTyrant.jpg",
  "odyssey limoni": "img/oLimoni.jpg",

  // --- BHARARA ---
  "bharara onyx": "img/bhararaOnyx.jpg",
  "bharara queen": "img/bhararaQueen.jpg",
  "bharara king parfum 150 ml": "img/bhararaKing150.jpg",
  "bharara king parfum 100 ml": "img/bhararaKingParfum.jpg",
  "bharara rose": "img/bhararaRose.jpg",

  // --- LATTAFA ---
  "fakhar men": "img/fakharMen.jpg",
  "khamrah": "img/khamrah.jpg",
  "khamrah qahwa": "img/khamrahQahwa.jpg",
  "mayar intense": "img/mayarIntense.jpg",
  "odyssey mandarin sky": "img/oMandarinSky.jpg",
  "yara": "img/Yara.jpg",
  "yara rose": "img/yaraRose.jpg",
  "yara tous": "img/yaraTous.jpg",
  "yara moi": "img/YaraBlanco.jpg",
  "kit yara collection": "img/yaraKitCollection.jpg",
  "victoria": "img/victoria.jpg",
  "rave now woman": "img/raveNowWomen.jpg",
  "qimmah masc": "img/qimmahMasc.jpg",
  "pride pisa": "img/pridePisa.jpg",
  "nebras": "img/nebras.jpg",
  "jean lowe immortal": "img/JLI.jpg",
  "ishq al shuyukh": "img/IAS.jpg",
  "emaan": "img/emaan.jpg",
  "confidential gold": "img/confidentialGold.jpg",
  "atlas": "img/atlas.jpg",
  "art of nature ii": "img/atn2.jpg",
  "ana abiyedh rouge 60ml": "img/anaAbiyedhR60.jpg",
  "angham": "img/angham.jpg",
  "ana abiyedh 60ml": "img/anaAbiyedh60.jpg",
  "sakeena": "img/sakeena.jpg",

  // --- MAISON ALHAMBRA ---
  "salvo intense": "img/salvoIntense.jpg",
  "la voie": "img/laVoie.jpg",

  // --- RASASI ---
  "hawas fire": "img/hawasFire.jpg"
};

// === LISTA RAW (costo USD). Podés seguir agregando en el mismo formato.
const RAW = [
  // AFNAN
  {brand:"Afnan", name:"Turathi Blue", usd:34.00},
  {brand:"Afnan", name:"9 pm", usd:30.50},
  {brand:"Afnan", name:"9 am Dive", usd:33.50},
  {brand:"Afnan", name:"9 pm Pour Femme", usd:32.00},
  {brand:"Afnan", name:"9 pm Rebel", usd:32.00},
  {brand:"Afnan", name:"9 pm Elixir", usd:41.50},
  {brand:"Afnan", name:"Supremacy Not Only", usd:48.00},

  // AL HARAMAIN
  {brand:"Al Haramain", name:"Aqua Dubai", usd:46.00},
  {brand:"Al Haramain", name:"Dubai Night", usd:46.00},
  {brand:"Al Haramain", name:"Private Edition", usd:45.00},
  {brand:"Al Haramain", name:"Amber Oud Gold Edition 120 ml", usd:45.00},
  {brand:"Al Haramain", name:"Amber Oud Gold Edition 60 ml", usd:36.00},
  {brand:"Al Haramain", name:"L’Aventure Intense", usd:33.00},
  {brand:"Al Haramain", name:"Detour Noir", usd:30.00},

  // ARMAF (CDN + Odyssey + otros)
  {brand:"Armaf", name:"Club De Nuit Intense Man 105ml", usd:39.00},
  {brand:"Armaf", name:"Club De Nuit Intense Man 200ml", usd:52.00},
  {brand:"Armaf", name:"Club De Nuit Urban Man Elixir", usd:35.00},
  {brand:"Armaf", name:"Club De Nuit Woman", usd:29.00},
  {brand:"Armaf", name:"Club De Nuit Iconic", usd:41.00},
  {brand:"Armaf", name:"Club De Nuit Oud Parfum", usd:52.00},
  {brand:"Armaf", name:"Club De Nuit Precieux", usd:46.50},
  {brand:"Armaf", name:"Club De Nuit Milestone", usd:38.00},
  {brand:"Armaf", name:"Club De Nuit Imperiale", usd:38.00},
  {brand:"Armaf", name:"Club De Nuit Sillage", usd:40.00},
  {brand:"Armaf", name:"Club De Nuit Untold", usd:44.00},
  {brand:"Armaf", name:"Club De Nuit Maleka", usd:44.00},
  {brand:"Armaf", name:"Odyssey Mandarin Sky", usd:30.00},
  {brand:"Armaf", name:"Odyssey Homme White Edition", usd:27.50},
  {brand:"Armaf", name:"Odyssey Candee", usd:27.00},
  {brand:"Armaf", name:"Odyssey Mega", usd:27.00},
  {brand:"Armaf", name:"Odyssey Spectra", usd:27.00},
  {brand:"Armaf", name:"Odyssey Limoni", usd:27.00},
  {brand:"Armaf", name:"Odyssey Homme Black", usd:27.00},
  {brand:"Armaf", name:"Odyssey Aqua", usd:27.00},
  {brand:"Armaf", name:"Odyssey Tyrant", usd:30.00},
  {brand:"Armaf", name:"Odyssey Aoud", usd:30.50},
  {brand:"Armaf", name:"Odyssey Wild One", usd:32.00},
  {brand:"Armaf", name:"Odyssey Dubai Chocolate", usd:35.00},

  // BHARARA
  {brand:"Bharara", name:"Bharara King Parfum 150 ml", usd:60.00},
  {brand:"Bharara", name:"Bharara King Parfum 100 ml", usd:68.00},
  {brand:"Bharara", name:"Bharara Rose", usd:48.00},
  {brand:"Bharara", name:"Bharara Onyx", usd:48.00},
  {brand:"Bharara", name:"Bharara Queen", usd:58.00},

  // LATTAFA
  {brand:"Lattafa", name:"Fakhar Men", usd:27.50},
  {brand:"Lattafa", name:"Khamrah", usd:27.50},
  {brand:"Lattafa", name:"Khamrah Qahwa", usd:27.50},
  {brand:"Lattafa", name:"Mayar Intense", usd:24.00},
  {brand:"Lattafa", name:"Yara", usd:28.00},
  {brand:"Lattafa", name:"Yara Rose", usd:28.00},
  {brand:"Lattafa", name:"Yara Tous", usd:28.00},
  {brand:"Lattafa", name:"Yara Moi", usd:28.00},
  {brand:"Lattafa", name:"Kit Yara Collection", usd:42.00},
  // Base ampliada (sin imagen por ahora)
  {brand:"Lattafa", name:"Nebras", usd:36.00},
  {brand:"Lattafa", name:"Angham", usd:30.00},
  {brand:"Lattafa", name:"Emaan", usd:25.00},
  {brand:"Lattafa", name:"Art Of Nature II", usd:24.50},
  {brand:"Lattafa", name:"Confidential Gold", usd:21.50},
  {brand:"Lattafa", name:"Pride Pisa", usd:31.00},
  {brand:"Lattafa", name:"Rave Now Woman", usd:23.00},
  {brand:"Lattafa", name:"Ana Abiyedh Rouge 60ml", usd:23.00},
  {brand:"Lattafa", name:"Ana Abiyedh 60ml", usd:21.50},
  {brand:"Lattafa", name:"Ishq Al Shuyukh", usd:29.00},
  {brand:"Lattafa", name:"Qimmah masc", usd:22.00},
  {brand:"Lattafa", name:"Sakeena", usd:46.50},
  {brand:"Lattafa", name:"Atlas", usd:36.00},
  {brand:"Lattafa", name:"Victoria", usd:31.00},
  {brand:"Lattafa", name:"Jean Lowe Immortal", usd:22.50},

  // MAISON ALHAMBRA
  {brand:"Maison Alhambra", name:"Salvo Edp", usd:24.00},
  {brand:"Maison Alhambra", name:"Salvo Intense", usd:24.00},
  {brand:"Maison Alhambra", name:"Salvo Elixir", usd:24.00},
  {brand:"Maison Alhambra", name:"La Voie", usd:22.50},
  {brand:"Maison Alhambra", name:"La Rouge Baroque", usd:24.00},
  {brand:"Maison Alhambra", name:"La Rouge Baroque Extreme", usd:24.00},
  {brand:"Maison Alhambra", name:"Delilah Pour Femme", usd:24.00},
  {brand:"Maison Alhambra", name:"Yeah", usd:24.00},
  {brand:"Maison Alhambra", name:"Reyna", usd:24.00},
  {brand:"Maison Alhambra", name:"So Candid", usd:22.50},
  {brand:"Maison Alhambra", name:"Your Touch Intense (hombre)", usd:23.00},
  {brand:"Maison Alhambra", name:"Your Touch Amber", usd:23.00},
  {brand:"Maison Alhambra", name:"Your Touch for Women", usd:19.50},
  {brand:"Maison Alhambra", name:"Glacier Bella", usd:23.00},
  {brand:"Maison Alhambra", name:"Glacier Le Noir", usd:23.00},
  {brand:"Maison Alhambra", name:"Glacier Bold", usd:26.00},
  {brand:"Maison Alhambra", name:"Philos Opus Noir", usd:24.00},
  {brand:"Maison Alhambra", name:"Philos Pura", usd:25.00},
  {brand:"Maison Alhambra", name:"Philos Rosso", usd:23.00},
  {brand:"Maison Alhambra", name:"Dark Door Sport", usd:22.00},
  {brand:"Maison Alhambra", name:"Pacific Blue", usd:23.00},
  {brand:"Maison Alhambra", name:"Sceptre Malachite", usd:29.50},
  {brand:"Maison Alhambra", name:"La Vivacite", usd:24.00},
  {brand:"Maison Alhambra", name:"Jorge Di Profumo", usd:24.00},
  {brand:"Maison Alhambra", name:"Jorge Deep Blue", usd:24.00},

  // ORIENTICA
  {brand:"Orientica", name:"Amber Rouge 150ML", usd:63.00},
  {brand:"Orientica", name:"Amber Rouge 80ML", usd:45.00},

  // PARIS CORNER
  {brand:"Paris Corner", name:"Khair Pistachio", usd:35.00},

  // RASASI
  {brand:"Rasasi", name:"Hawas Masc", usd:30.00},
  {brand:"Rasasi", name:"Hawas Ice", usd:31.50},
  {brand:"Rasasi", name:"Hawas Elixir", usd:35.00},
  {brand:"Rasasi", name:"Hawas Fire", usd:32.00},
];

// Construcción del catálogo final
window.PRODUCTS = RAW.map(r => {
  const key = `${r.name}`.toLowerCase().trim();
  const image = IMAGES_MAP[key] || "";
  return {
    id: slug(`${r.brand} ${r.name}`),
    name: r.name,
    brand: r.brand,
    family: "Por definir",
    gender: "Unisex",
    concentration: "EDP",
    price_ars: toARS(r.usd),
    notesTop: [], notesMid: [], notesBase: [],
    image,
    tags: []
  };
});