// data/products.js
// Conversión y helpers
const USD_TO_ARS = 1460;
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
  "yara candy": "img/Yara.jpg",
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
  "your touch amber":            "img/yourTouchAmber.jpg",
  "yeah":                        "img/yeah.jpg",
  "so candid":                   "img/soCandidEDP.jpg",
  "sceptre malachite":           "img/sceptreMalachite.jpg",
  "salvo elixir":                "img/salvoElixir.jpg",
  "salvo edp":                   "img/salvoEDP.jpg",
  "reyna":                       "img/reyna.jpg",
  "philos rosso":                "img/philosRosso.jpg",
  "philos pura":                 "img/philosPura.jpg",
  "philos opus noir":            "img/philosOpusNoir.jpg",
  "pacific blue":                "img/pacificBllue.jpg",          
  "la vivacite":                 "img/laVivacite.jpg",
  "la rouge baroque extreme":    "img/laRougeBaroqueExtreme.jpg",
  "la rouge baroque":            "img/laRougeBaroque.jpg",
  "jorge di profumo":            "img/jorgeDiProfumo.jpg",
  "jorge deep blue":             "img/jorgeDeepBlue.jpg",
  "glacier le noir":             "img/glacierLeNoir.jpg",
  "glacier bold":                "img/glacierBold.jpg",
  "glacier bella":                "img/glacierBella.jpg",
  "your touch intense (hombre)": "img/yourTouchIntenseFM.jpg",
  "your touch for women":        "img/yourTochFW.jpg",
  "delilah pour femme": "img/delilahPourFemme.jpg",
  "dark door sport": "img/darkDoorSport.jpg",
            
  // --- RASASI ---
  "hawas fire": "img2/hawasFire.jpg",
  "hawas masc": "img2/hawasMasc.jpg",
  "hawas ice": "img2/hawasIce.jpg",
  "hawas elixir": "img2/hawasElixir.jpg",

// --- PARIS CORNER ---
  "khair pistachio": "img2/khairPistacho.jpg",

// --- ORIENTICA ---
  "amber rouge 80ml": "img2/amberRouge80.jpg",
  "amber rouge 150ml": "img2/amberRouge150.jpg",

};

// === LISTA RAW (costo USD). Podés seguir agregando en el mismo formato.
const RAW = [
  // AFNAN
  {brand:"Afnan", name:"Turathi Blue", usd:34.00},
  {brand:"Afnan", name:"9 pm", usd:30.50},
  {brand:"Afnan", name:"9 am Dive", usd:32.00},
  {brand:"Afnan", name:"9 pm Pour Femme", usd:32.00},
  {brand:"Afnan", name:"9 pm Rebel", usd:36.00},
  {brand:"Afnan", name:"9 pm Elixir", usd:41.50},
  {brand:"Afnan", name:"Supremacy Not Only", usd:48.00},

  // AL HARAMAIN
  {brand:"Al Haramain", name:"Aqua Dubai", usd:46.00},
  {brand:"Al Haramain", name:"Dubai Night", usd:46.00},
  {brand:"Al Haramain", name:"Private Edition", usd:46.00},
  {brand:"Al Haramain", name:"Amber Oud Gold Edition 120 ml", usd:45.00},
  {brand:"Al Haramain", name:"Amber Oud Gold Edition 60 ml", usd:38.00},
  {brand:"Al Haramain", name:"L’Aventure Intense", usd:33.00},
  {brand:"Al Haramain", name:"Detour Noir", usd:26.00},

  // ARMAF (CDN + Odyssey + otros)
  {brand:"Armaf", name:"Club De Nuit Intense Man 105ml", usd:32.50},
  {brand:"Armaf", name:"Club De Nuit Intense Man 200ml", usd:49.00},
  {brand:"Armaf", name:"Club De Nuit Urban Man Elixir", usd:35.00},
  {brand:"Armaf", name:"Club De Nuit Woman", usd:29.00},
  {brand:"Armaf", name:"Club De Nuit Iconic", usd:41.00},
  {brand:"Armaf", name:"Club De Nuit Oud Parfum", usd:52.00},
  {brand:"Armaf", name:"Club De Nuit Precieux", usd:46.50},
  {brand:"Armaf", name:"Club De Nuit Milestone", usd:34.00},
  {brand:"Armaf", name:"Club De Nuit Imperiale", usd:38.00},
  {brand:"Armaf", name:"Club De Nuit Sillage", usd:38.50},
  {brand:"Armaf", name:"Club De Nuit Untold", usd:44.00},
  {brand:"Armaf", name:"Club De Nuit Maleka", usd:42.00},
  {brand:"Armaf", name:"Odyssey Mandarin Sky", usd:30.00},
  {brand:"Armaf", name:"Odyssey Homme White Edition", usd:27.50},
  {brand:"Armaf", name:"Odyssey Candee", usd:27.50},
  {brand:"Armaf", name:"Odyssey Mega", usd:27.00},
  {brand:"Armaf", name:"Odyssey Spectra", usd:27.00},
  {brand:"Armaf", name:"Odyssey Limoni", usd:27.00},
  {brand:"Armaf", name:"Odyssey Homme Black", usd:28.50},
  {brand:"Armaf", name:"Odyssey Aqua", usd:27.00},
  {brand:"Armaf", name:"Odyssey Tyrant", usd:35.00},
  {brand:"Armaf", name:"Odyssey Aoud", usd:30.50},
  {brand:"Armaf", name:"Odyssey Wild One", usd:27.00},
  {brand:"Armaf", name:"Odyssey Dubai Chocolate", usd:35.00},

  // BHARARA
  {brand:"Bharara", name:"Bharara King Parfum 150 ml", usd:55.00},
  {brand:"Bharara", name:"Bharara King Parfum 100 ml", usd:60.00},
  {brand:"Bharara", name:"Bharara Rose", usd:68.00},
  {brand:"Bharara", name:"Bharara Onyx", usd:48.00},
  {brand:"Bharara", name:"Bharara Queen", usd:50.00},

  // LATTAFA
  {brand:"Lattafa", name:"Fakhar Men", usd:27.50},
  {brand:"Lattafa", name:"Khamrah", usd:27.50},
  {brand:"Lattafa", name:"Khamrah Qahwa", usd:27.50},
  {brand:"Lattafa", name:"Mayar Intense", usd:25.00},
  {brand:"Lattafa", name:"Yara Candy", usd:28.50},
  {brand:"Lattafa", name:"Yara Rose", usd:28.00},
  {brand:"Lattafa", name:"Yara Tous", usd:24.00},
  {brand:"Lattafa", name:"Yara Moi", usd:27.00},
  {brand:"Lattafa", name:"Kit Yara Collection", usd:36.00},
  {brand:"Lattafa", name:"Nebras", usd:36.00},
  {brand:"Lattafa", name:"Angham", usd:30.00},
  {brand:"Lattafa", name:"Emaan", usd:25.00},
  {brand:"Lattafa", name:"Art Of Nature II", usd:34.50},
  {brand:"Lattafa", name:"Confidential Gold", usd:21.50},
  {brand:"Lattafa", name:"Pride Pisa", usd:44.00},
  {brand:"Lattafa", name:"Rave Now Woman", usd:23.00},
  {brand:"Lattafa", name:"Ana Abiyedh Rouge 60ml", usd:21.50},
  {brand:"Lattafa", name:"Ana Abiyedh 60ml", usd:21.50},
  {brand:"Lattafa", name:"Ishq Al Shuyukh", usd:29.50},
  {brand:"Lattafa", name:"Qimmah masc", usd:22.00},
  {brand:"Lattafa", name:"Sakeena", usd:26.50},
  {brand:"Lattafa", name:"Atlas", usd:44.00},
  {brand:"Lattafa", name:"Victoria", usd:31.00},

  // MAISON ALHAMBRA
  {brand:"Maison Alhambra", name:"Jean Lowe Immortal", usd:28.00},
  {brand:"Maison Alhambra", name:"Salvo Edp", usd:24.00},
  {brand:"Maison Alhambra", name:"Salvo Intense", usd:24.00},
  {brand:"Maison Alhambra", name:"Salvo Elixir", usd:24.00},
  {brand:"Maison Alhambra", name:"La Voie", usd:22.50},
  {brand:"Maison Alhambra", name:"La Rouge Baroque", usd:22.00},
  {brand:"Maison Alhambra", name:"La Rouge Baroque Extreme", usd:24.00},
  {brand:"Maison Alhambra", name:"Delilah Pour Femme", usd:24.00},
  {brand:"Maison Alhambra", name:"Yeah", usd:24.00},
  {brand:"Maison Alhambra", name:"Reyna", usd:21.00},
  {brand:"Maison Alhambra", name:"So Candid", usd:22.50},
  {brand:"Maison Alhambra", name:"Your Touch Intense (hombre)", usd:23.00},
  {brand:"Maison Alhambra", name:"Your Touch Amber", usd:23.00},
  {brand:"Maison Alhambra", name:"Your Touch for Women", usd:19.50},
  {brand:"Maison Alhambra", name:"Glacier Bella", usd:23.00},
  {brand:"Maison Alhambra", name:"Glacier Le Noir", usd:23.00},
  {brand:"Maison Alhambra", name:"Glacier Bold", usd:26.00},
  {brand:"Maison Alhambra", name:"Philos Opus Noir", usd:20.00},
  {brand:"Maison Alhambra", name:"Philos Pura", usd:25.00},
  {brand:"Maison Alhambra", name:"Philos Rosso", usd:22.00},
  {brand:"Maison Alhambra", name:"Dark Door Sport", usd:22.00},
  {brand:"Maison Alhambra", name:"Pacific Blue", usd:23.00},
  {brand:"Maison Alhambra", name:"Sceptre Malachite", usd:29.50},
  {brand:"Maison Alhambra", name:"La Vivacite", usd:24.00},
  {brand:"Maison Alhambra", name:"Jorge Di Profumo", usd:24.00},
  {brand:"Maison Alhambra", name:"Jorge Deep Blue", usd:24.00},

  // ORIENTICA
  {brand:"Orientica", name:"Amber Rouge 150ML", usd:63.00},
  {brand:"Orientica", name:"Amber Rouge 80ML", usd:52.00},

  // PARIS CORNER
  {brand:"Paris Corner", name:"Khair Pistachio", usd:35.00},

  // RASASI
  {brand:"Rasasi", name:"Hawas Masc", usd:26.00},
  {brand:"Rasasi", name:"Hawas Ice", usd:31.50},
  {brand:"Rasasi", name:"Hawas Elixir", usd:35.00},
  {brand:"Rasasi", name:"Hawas Fire", usd:32.00},
];

// Notas por perfume 
const NOTES = {
// --- AFNAN ---
"turathi blue": {
  family: "Aromático amaderado",
  top:  ["Toronja", "Bergamota", "Jengibre"],
  mid:  ["Incienso", "Lavanda", "Geranio"],
  base: ["Cedro", "Sándalo", "Ambroxan", "Musk"]
},
"9 pm": {
  family: "Ámbar vainilla",
  top:  ["Manzana", "Canela", "Lavanda", "Bergamota"],
  mid:  ["Azahar", "Lirio de los valles"],
  base: ["Vainilla", "Haba tonka", "Ámbar", "Patchouli"]
},
"9 am dive": {
  family: "Aromático acuático",
  top:  ["Limón", "Menta", "Jengibre"],
  mid:  ["Lavanda", "Geranio", "Notas marinas"],
  base: ["Ambroxan", "Cedro", "Musk"]
},
"9 pm pour femme": {
  family: "Floral gourmand",
  top:  ["Mandarina", "Frambuesa", "Pera"],
  mid:  ["Jazmín", "Rosa", "Peonía"],
  base: ["Vainilla", "Praliné", "Sándalo", "Musk"]
},
"9 pm rebel": {
  family: "Oriental especiado",
  top:  ["Cardamomo", "Pimienta rosa", "Bergamota"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Vainilla", "Ámbar", "Maderas", "Haba tonka"]
},
"9 pm elixir": {
  family: "Ámbar especiado",
  top:  ["Bergamota", "Manzana", "Canela"],
  mid:  ["Lavanda", "Cardamomo", "Azahar"],
  base: ["Vainilla", "Patchouli", "Ámbar", "Maderas"]
},
"supremacy not only": {
  family: "Chipre frutal",
  top:  ["Piña", "Bergamota", "Grosella negra", "Manzana"],
  mid:  ["Abedul", "Jazmín", "Rosa", "Patchouli"],
  base: ["Musk", "Musgo de roble", "Ámbar gris", "Vainilla"]
},
 // --- AL HARAMAIN ---
"amber oud gold edition 120 ml": {
  family: "Ámbar vainilla",
  top:  ["Bergamota", "Notas verdes"],
  mid:  ["Jazmín", "Sándalo", "Maderas"],
  base: ["Vainilla", "Ámbar", "Musk"]
},
"amber oud gold edition 60 ml": {
  family: "Ámbar vainilla",
  top:  ["Bergamota", "Notas verdes"],
  mid:  ["Jazmín", "Sándalo", "Maderas"],
  base: ["Vainilla", "Ámbar", "Musk"]
},
"amber oud rouge": {
  family: "Ámbar floral",
  top:  ["Azafrán", "Naranja"],
  mid:  ["Jazmín", "Notas ambarinas"],
  base: ["Resinas", "Maderas claras", "Ámbar gris"]
},
"l’aventure intense": {
  family: "Chipre frutal",
  top:  ["Limón", "Bergamota"],
  mid:  ["Jazmín", "Notas amaderadas"],
  base: ["Musk", "Pachuli", "Ámbar"]
},
"detour noir": {
  family: "Oriental especiado",
  top:  ["Bergamota", "Ciprés"],
  mid:  ["Cardamomo", "Lavanda", "Geranio"],
  base: ["Vainilla", "Vetiver", "Ambroxan"]
},
"aqua dubai": {
  family: "Aromático acuático",
  top:  ["Menta", "Limón", "Notas marinas"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ambroxan", "Maderas", "Musk"]
},
"private edition": {
  family: "Amaderado especiado",
  top:  ["Canela", "Cardamomo"],
  mid:  ["Lavanda", "Cedro"],
  base: ["Ámbar", "Maderas", "Vainilla"]
},
"dubai night": {
  family: "Oriental especiado",
  top:  ["Pimienta rosa", "Pomelo"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ámbar gris", "Vetiver", "Maderas oscuras"]
},
  // --- ARMAF ---
"club de nuit intense man 105ml": {
  family: "Chipre frutal",
  top:  ["Limón", "Piña", "Bergamota", "Grosella negra", "Manzana"],
  mid:  ["Abedul", "Jazmín", "Rosa"],
  base: ["Musk", "Ámbar gris", "Vainilla", "Patchouli"]
},
"club de nuit intense man 200ml": {
  family: "Chipre frutal",
  top:  ["Limón", "Piña", "Bergamota", "Grosella negra", "Manzana"],
  mid:  ["Abedul", "Jazmín", "Rosa"],
  base: ["Musk", "Ámbar gris", "Vainilla", "Patchouli"]
},
"club de nuit iconic": {
  family: "Aromático especiado",
  top:  ["Toronja", "Menta", "Limón"],
  mid:  ["Jengibre", "Nuez moscada", "Lavanda"],
  base: ["Incienso", "Cedro", "Patchouli"]
},
"club de nuit oud parfum": {
  family: "Amaderado oriental",
  top:  ["Azafrán", "Rosa"],
  mid:  ["Maderas de oud", "Ámbar"],
  base: ["Vainilla", "Resinas", "Musk"]
},
"club de nuit precieux": {
  family: "Floral frutal",
  top:  ["Durazno", "Grosella negra"],
  mid:  ["Jazmín", "Rosa"],
  base: ["Maderas blancas", "Musk", "Vainilla"]
},
"club de nuit milestone": {
  family: "Acuático floral",
  top:  ["Frutas marinas", "Grosella negra"],
  mid:  ["Violeta", "Sándalo"],
  base: ["Almizcle blanco", "Ambroxan", "Vetiver"]
},
"club de nuit imperiale": {
  family: "Oriental floral",
  top:  ["Lichi", "Nuez moscada", "Bergamota"],
  mid:  ["Peonía", "Almizcle", "Rosa turca"],
  base: ["Cashmeran", "Vainilla", "Incienso"]
},
"club de nuit sillage": {
  family: "Floral almizclado",
  top:  ["Bergamota", "Limón", "Violeta", "Jengibre"],
  mid:  ["Rosa", "Jazmín", "Iris"],
  base: ["Ambroxan", "Maderas", "Musk", "Cedro"]
},
"club de nuit maleka": {
  family: "Ámbar floral",
  top:  ["Mandarina", "Frambuesa"],
  mid:  ["Rosa", "Iris", "Jazmín"],
  base: ["Vainilla", "Ámbar gris", "Musk"]
},
"club de nuit untold": {
  family: "Chipre floral",
  top:  ["Rosa", "Azafrán"],
  mid:  ["Jazmín", "Notas amaderadas"],
  base: ["Ámbar gris", "Musk"]
},
"club de nuit urban man elixir": {
  family: "Aromático especiado",
  top:  ["Bergamota", "Pimienta rosa"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ambroxan", "Maderas", "Patchouli"]
},
"club de nuit woman": {
  family: "Floral frutal",
  top:  ["Naranja", "Durazno", "Toronja"],
  mid:  ["Rosa", "Jazmín", "Lichi"],
  base: ["Vainilla", "Vetiver", "Musk"]
},

// --- ARMAF Odyssey ---
"odyssey mandarin sky": {
  family: "Frutal gourmand",
  top:  ["Mandarina", "Frutos rojos"],
  mid:  ["Caramelo", "Canela"],
  base: ["Vainilla", "Ámbar", "Musk"]
},
"odyssey homme white edition": {
  family: "Aromático especiado",
  top:  ["Pomelo", "Bergamota"],
  mid:  ["Lavanda", "Cardamomo"],
  base: ["Vainilla", "Maderas", "Ámbar"]
},
"odyssey candee": {
  family: "Dulce gourmand",
  top:  ["Caramelo", "Algodón de azúcar"],
  mid:  ["Frutas confitadas"],
  base: ["Vainilla", "Musk"]
},
"odyssey mega": {
  family: "Aromático fresco",
  top:  ["Bergamota", "Toronja"],
  mid:  ["Lavanda", "Especias suaves"],
  base: ["Maderas claras", "Musk"]
},
"odyssey spectra": {
  family: "Cítrico aromático",
  top:  ["Limón", "Mandarina"],
  mid:  ["Notas marinas", "Geranio"],
  base: ["Ambroxan", "Maderas", "Musk"]
},
"odyssey limoni": {
  family: "Cítrico aromático",
  top:  ["Limón siciliano", "Toronja"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Cedro", "Vetiver", "Musk"]
},
"odyssey homme black": {
  family: "Amaderado especiado",
  top:  ["Pimienta negra", "Pomelo"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Cedro", "Ámbar", "Musk"]
},
"odyssey aqua": {
  family: "Aromático acuático",
  top:  ["Limón", "Notas marinas"],
  mid:  ["Lavanda", "Menta"],
  base: ["Ambroxan", "Cedro", "Musk"]
},
"odyssey tyrant": {
  family: "Amaderado especiado",
  top:  ["Naranja amarga", "Pimienta"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Vetiver", "Ámbar gris", "Maderas"]
},
"odyssey aoud": {
  family: "Amaderado oriental",
  top:  ["Azafrán", "Frambuesa"],
  mid:  ["Rosa", "Oud"],
  base: ["Ambar gris", "Musk", "Resinas"]
},
"odyssey wild one": {
  family: "Frutal especiado",
  top:  ["Manzana roja", "Canela"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Vainilla", "Maderas", "Musk"]
},
"odyssey dubai chocolate": {
  family: "Gourmand dulce",
  top:  ["Chocolate", "Cacao"],
  mid:  ["Praliné", "Caramelo"],
  base: ["Vainilla", "Ámbar", "Musk"]
},
// --- BHARARA ---
"bharara king parfum 150 ml": {
  family: "Ámbar especiado",
  top:  ["Canela", "Cardamomo", "Pomelo"],
  mid:  ["Lavanda", "Praliné"],
  base: ["Vainilla", "Ámbar", "Maderas"]
},
"bharara king parfum 100 ml": {
  family: "Ámbar especiado",
  top:  ["Canela", "Cardamomo", "Pomelo"],
  mid:  ["Lavanda", "Praliné"],
  base: ["Vainilla", "Ámbar", "Maderas"]
},
"bharara rose": {
  family: "Floral frutal",
  top:  ["Mandarina", "Frambuesa"],
  mid:  ["Rosa", "Iris", "Jazmín"],
  base: ["Vainilla", "Ámbar gris", "Musk"]
},
"bharara onyx": {
  family: "Amaderado aromático",
  top:  ["Bergamota", "Pimienta negra"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Cedro", "Vetiver", "Ámbar"]
},
"bharara queen": {
  family: "Ámbar floral",
  top:  ["Durazno", "Frambuesa"],
  mid:  ["Rosa", "Jazmín"],
  base: ["Vainilla", "Musk", "Ámbar"]
},

// --- LATTAFA ---
"fakhar men": {
  family: "Aromático especiado",
  top:  ["Limón", "Jengibre"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Maderas", "Musk", "Ámbar"]
},
"khamrah": {
  family: "Gourmand especiado",
  top:  ["Canela", "Nuez moscada"],
  mid:  ["Praliné", "Dátil", "Mahón"],
  base: ["Vainilla", "Amberwood", "Haba tonka"]
},
"khamrah qahwa": {
  family: "Gourmand café",
  top:  ["Café", "Especias cálidas"],
  mid:  ["Praliné", "Caramelo"],
  base: ["Vainilla", "Ámbar", "Musk"]
},
"mayar intense": {
  family: "Floral gourmand",
  top:  ["Frutos rojos", "Mandarina"],
  mid:  ["Orquídea", "Jazmín"],
  base: ["Vainilla", "Sándalo", "Musk"]
},
"yara": {
  family: "Floral gourmand",
  top:  ["Mandarina", "Heliotropo"],
  mid:  ["Orquídea", "Gourmand"],
  base: ["Vainilla", "Sándalo", "Musk"]
},
"yara rose": {
  family: "Floral afrutado",
  top:  ["Frambuesa", "Toronja"],
  mid:  ["Rosa", "Iris"],
  base: ["Musk", "Sándalo", "Ámbar"]
},
"yara tous": {
  family: "Floral dulce",
  top:  ["Durazno", "Heliotropo"],
  mid:  ["Jazmín", "Rosa"],
  base: ["Vainilla", "Musk", "Sándalo"]
},
"yara moi": {
  family: "Ámbar floral",
  top:  ["Mandarina", "Grosella"],
  mid:  ["Jazmín", "Orquídea"],
  base: ["Ámbar", "Musk", "Vainilla"]
},
"kit yara collection": {
  family: "Floral gourmand",
  top:  ["Frutos rojos", "Mandarina"],
  mid:  ["Jazmín", "Orquídea"],
  base: ["Vainilla", "Musk", "Sándalo"]
},
"nebras": {
  family: "Gourmand dulce",
  top:  ["Cereza", "Frambuesa"],
  mid:  ["Praliné", "Caramelo"],
  base: ["Vainilla", "Musk"]
},
"emaan": {
  family: "Floral fresco",
  top:  ["Limón", "Mandarina"],
  mid:  ["Jazmín", "Rosa"],
  base: ["Musk", "Sándalo"]
},
"victoria": {
  family: "Floral frutal",
  top:  ["Manzana", "Pera"],
  mid:  ["Rosa", "Freesia"],
  base: ["Musk", "Vainilla"]
},
"afeef": {
  family: "Amaderado aromático",
  top:  ["Limón", "Pomelo"],
  mid:  ["Lavanda", "Jazmín"],
  base: ["Maderas", "Musk", "Ámbar"]
},
"haya": {
  family: "Floral frutal",
  top:  ["Frutas tropicales"],
  mid:  ["Rosa", "Iris"],
  base: ["Musk", "Vainilla"]
},
"eclaire": {
  family: "Dulce gourmand",
  top:  ["Caramelo", "Avellana"],
  mid:  ["Praliné", "Chocolate"],
  base: ["Vainilla", "Musk"]
},
"ajwad": {
  family: "Dulce frutal",
  top:  ["Frutos rojos"],
  mid:  ["Rosa", "Jazmín"],
  base: ["Vainilla", "Ámbar", "Musk"]
},
"his confession": {
  family: "Ámbar especiado",
  top:  ["Canela", "Cardamomo"],
  mid:  ["Rosa", "Incienso"],
  base: ["Ámbar", "Maderas", "Musk"]
},
"her confession": {
  family: "Floral oriental",
  top:  ["Durazno", "Mandarina"],
  mid:  ["Rosa", "Iris"],
  base: ["Ámbar", "Musk", "Vainilla"]
},
"the kingdom masc": {
  family: "Amaderado especiado",
  top:  ["Bergamota", "Manzana"],
  mid:  ["Cedro", "Lavanda"],
  base: ["Ámbar", "Musk", "Pachulí"]
},
"the kingdom fem": {
  family: "Floral afrutado",
  top:  ["Mandarina", "Frambuesa"],
  mid:  ["Rosa", "Iris"],
  base: ["Vainilla", "Sándalo"]
},
"fakhar fem": {
  family: "Floral gourmand",
  top:  ["Frutos rojos", "Mandarina"],
  mid:  ["Rosa", "Jazmín"],
  base: ["Vainilla", "Musk"]
},
"fakhar platinum": {
  family: "Amaderado especiado",
  top:  ["Cardamomo", "Pomelo"],
  mid:  ["Lavanda", "Jazmín"],
  base: ["Maderas", "Musk", "Ámbar"]
},
"fakhar gold": {
  family: "Dulce especiado",
  top:  ["Manzana", "Canela"],
  mid:  ["Cedro", "Lavanda"],
  base: ["Ámbar", "Vainilla"]
},
"art of nature ii": {
  family: "Aromático cítrico",
  top:  ["Limón", "Pomelo"],
  mid:  ["Menta", "Jengibre"],
  base: ["Musk", "Vetiver"]
},
"confidential gold": {
  family: "Ámbar especiado",
  top:  ["Canela", "Nuez moscada"],
  mid:  ["Rosa", "Jazmín"],
  base: ["Ámbar", "Maderas", "Vainilla"]
},
"pride pisa": {
  family: "Floral especiado",
  top:  ["Bergamota", "Mandarina"],
  mid:  ["Rosa", "Iris"],
  base: ["Musk", "Vainilla"]
},
"rave now woman": {
  family: "Floral frutal",
  top:  ["Pera", "Frambuesa"],
  mid:  ["Rosa", "Iris"],
  base: ["Musk", "Ámbar"]
},
"ana abiyedh rouge": {
  family: "Ámbar especiado",
  top:  ["Azafrán"],
  mid:  ["Jazmín"],
  base: ["Ámbar gris", "Maderas"]
},
"ana abiyedh": {
  family: "Ámbar amaderado",
  top:  ["Cardamomo", "Pomelo"],
  mid:  ["Iris", "Geranio"],
  base: ["Ámbar", "Musk"]
},
"ishq al shuyukh": {
  family: "Dulce especiado",
  top:  ["Caramelo", "Nuez moscada"],
  mid:  ["Praliné", "Canela"],
  base: ["Vainilla", "Ámbar"]
},
"qimmah masc": {
  family: "Amaderado especiado",
  top:  ["Bergamota", "Manzana"],
  mid:  ["Rosa", "Lavanda"],
  base: ["Ámbar", "Musk"]
},
"sakeena": {
  family: "Ámbar dulce",
  top:  ["Caramelo", "Frutas"],
  mid:  ["Praliné", "Flor blanca"],
  base: ["Vainilla", "Musk", "Ámbar"]
},
"atlas": {
  family: "Amaderado especiado",
  top:  ["Pomelo", "Especias"],
  mid:  ["Lavanda", "Cedro"],
  base: ["Ámbar", "Musk"]
},
"jean lowe immortal": {
  family: "Ámbar fougère",
  top:  ["Bergamota", "Limón"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Vetiver", "Musk"]
},
"yara candy": {
  family: "Floral frutal dulce",
  top:  ["Frutos rojos", "Mandarina"],
  mid:  ["Orquídea", "Jazmín"],
  base: ["Vainilla", "Sándalo", "Musk"]
},
"ana abiyedh 60ml": {
  family: "Amaderado almizclado",
  top:  ["Cardamomo", "Pomelo"],
  mid:  ["Geranio", "Iris"],
  base: ["Ámbar", "Maderas", "Musk"]
},
"ana abiyedh rouge 60ml": {
  family: "Ámbar especiado",
  top:  ["Azafrán"],
  mid:  ["Jazmín"],
  base: ["Ámbar gris", "Maderas ambaradas"]
},
"angham": {
  family: "Floral oriental",
  top:  ["Pera", "Frambuesa"],
  mid:  ["Rosa", "Iris", "Jazmín"],
  base: ["Vainilla", "Ámbar", "Musk"]
},

// --- MAISON ALHAMBRA ---
"salvo intense": {
  family: "Aromático amaderado",
  top:  ["Bergamota", "Pimienta"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ambroxan", "Cedro", "Ládano"]
},
"salvo edp": {
  family: "Aromático fresco",
  top:  ["Bergamota", "Toronja"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ambroxan", "Vetiver", "Musk"]
},
"salvo elixir": {
  family: "Amaderado especiado",
  top:  ["Canela", "Cardamomo"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ámbar", "Vainilla", "Musk"]
},
"la voie": {
  family: "Aromático herbal",
  top:  ["Bergamota", "Menta"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Cedro", "Vetiver", "Musk"]
},
"la rouge baroque": {
  family: "Ámbar floral",
  top:  ["Azafrán", "Naranja amarga"],
  mid:  ["Jazmín", "Amberwood"],
  base: ["Resinas", "Ámbar gris", "Cedro"]
},
"la rouge baroque extreme": {
  family: "Ámbar floral",
  top:  ["Azafrán", "Almendra amarga"],
  mid:  ["Jazmín", "Amberwood"],
  base: ["Resinas", "Ámbar", "Musk", "Cedro"]
},
"delilah pour femme": {
  family: "Floral afrutado",
  top:  ["Lichi", "Ruibarbo", "Bergamota"],
  mid:  ["Rosa turca", "Peonía", "Vainilla ligera"],
  base: ["Cashmeran", "Musk", "Incienso"]
},
"yeah": {
  family: "Aromático amaderado",
  top:  ["Bergamota", "Manzana", "Jengibre"],
  mid:  ["Salvia", "Geranio", "Enebro"],
  base: ["Amberwood", "Cedro", "Haba tonka"]
},
"reyna": {
  family: "Floral gourmand",
  top:  ["Pera", "Bergamota"],
  mid:  ["Rosa", "Jazmín", "Flor de azahar"],
  base: ["Vainilla", "Musk", "Ámbar"]
},
"so candid": {
  family: "Floral blanco",
  top:  ["Frambuesa", "Naranja"],
  mid:  ["Tuberosa", "Jazmín", "Azahar"],
  base: ["Leche", "Vainilla", "Musk"]
},
"your touch intense (hombre)": {
  family: "Aromático amaderado",
  top:  ["Bergamota", "Cardamomo"],
  mid:  ["Lavanda", "Geranio", "Salvia"],
  base: ["Ambroxan", "Cedro", "Haba tonka"]
},
"your touch amber": {
  family: "Ámbar especiado",
  top:  ["Cardamomo", "Canela"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ámbar", "Vainilla", "Musk"]
},
"your touch for women": {
  family: "Floral dulce",
  top:  ["Pera", "Bergamota"],
  mid:  ["Rosa", "Jazmín"],
  base: ["Vainilla", "Musk", "Sándalo"]
},
"glacier bella": {
  family: "Floral fresco",
  top:  ["Limón", "Pera"],
  mid:  ["Peonía", "Jazmín"],
  base: ["Musk", "Cedro"]
},
"glacier le noir": {
  family: "Amaderado aromático",
  top:  ["Pimienta negra", "Lavanda"],
  mid:  ["Geranio", "Salvia"],
  base: ["Cedro", "Patchouli", "Haba tonka"]
},
"glacier bold": {
  family: "Cítrico acuático",
  top:  ["Pomelo", "Mandarina"],
  mid:  ["Notas marinas", "Lavanda"],
  base: ["Ambroxan", "Maderas claras", "Musk"]
},
"philos opus noir": {
  family: "Ambarado especiado",
  top:  ["Pimienta", "Bergamota"],
  mid:  ["Incienso", "Cuero suave"],
  base: ["Ámbar", "Maderas oscuras", "Musk"]
},
"philos pura": {
  family: "Cítrico almizclado",
  top:  ["Bergamota", "Neroli"],
  mid:  ["Flor blanca", "Té"],
  base: ["Musk", "Ámbar claro"]
},
"philos rosso": {
  family: "Ámbar floral",
  top:  ["Frambuesa", "Cítricos"],
  mid:  ["Rosa", "Jazmín"],
  base: ["Vainilla", "Musk", "Ámbar"]
},
"dark door sport": {
  family: "Aromático fresco",
  top:  ["Pomelo", "Menta", "Jengibre"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Cedro", "Vetiver", "Musk"]
},
"pacific blue": {
  family: "Acuático aromático",
  top:  ["Bergamota", "Notas marinas"],
  mid:  ["Romero", "Ciprés"],
  base: ["Ambroxan", "Patchouli", "Musk"]
},
"sceptre malachite": {
  family: "Verde amaderado",
  top:  ["Menta", "Albahaca"],
  mid:  ["Hoja de violeta", "Salvia"],
  base: ["Vetiver", "Musgo de roble", "Cedro"]
},
"la vivacite": {
  family: "Cítrico floral",
  top:  ["Bergamota", "Neroli"],
  mid:  ["Jazmín", "Flor de azahar"],
  base: ["Musk", "Cedro", "Ámbar"]
},
"jorge di profumo": {
  family: "Aromático marino",
  top:  ["Bergamota", "Notas marinas"],
  mid:  ["Incienso", "Romero"],
  base: ["Patchouli", "Ámbar gris", "Maderas"]
},
"jorge deep blue": {
  family: "Aromático acuático",
  top:  ["Mandarina verde", "Bergamota"],
  mid:  ["Ciprés", "Lavandin", "Romero"],
  base: ["Ambroxan", "Patchouli", "Musk"]
},

// --- RASASI ---
"hawas masc": {
  family: "Aromático acuático",
  top:  ["Manzana verde", "Bergamota", "Canela", "Limón"],
  mid:  ["Ciruela", "Cardamomo", "Azahar"],
  base: ["Ámbar gris", "Musk", "Driftwood", "Patchouli"]
},
"hawas ice": {
  family: "Aromático fresco",
  top:  ["Bergamota", "Pomelo", "Menta"],
  mid:  ["Lavanda", "Cardamomo", "Notas acuáticas"],
  base: ["Ámbar gris", "Vetiver", "Maderas claras"]
},
"hawas elixir": {
  family: "Ámbar especiado",
  top:  ["Pimienta negra", "Canela"],
  mid:  ["Lavanda", "Geranio"],
  base: ["Ámbar", "Vainilla", "Maderas orientales"]
},
"hawas fire": {
  family: "Oriental especiado",
  top:  ["Bergamota", "Pimienta rosa"],
  mid:  ["Lavanda", "Incienso"],
  base: ["Ámbar gris", "Maderas", "Resinas balsámicas"]
},

// --- ORIENTICA ---
"amber rouge 150ml": {
  family: "Ámbar floral",
  top:  ["Azafrán", "Naranja amarga"],
  mid:  ["Jazmín", "Amberwood"],
  base: ["Resinas", "Maderas claras", "Ámbar gris"]
},
"amber rouge 80ml": {
  family: "Ámbar floral",
  top:  ["Azafrán", "Naranja amarga"],
  mid:  ["Jazmín", "Amberwood"],
  base: ["Resinas", "Maderas claras", "Ámbar gris"]
},

// --- PARIS CORNER ---
"khair pistachio": {
  family: "Gourmand dulce",
  top:  ["Pistacho", "Cardamomo", "Bergamota"],
  mid:  ["Magnolia", "Ylang-ylang"],
  base: ["Vainilla", "Ámbar", "Musk"]
},


};

window.PRODUCTS = RAW.map(r => {
  const key = `${r.name}`.toLowerCase().trim();
  const image = IMAGES_MAP[key] || "";

  const extra = NOTES[key] || {};
  return {
    id: slug(`${r.brand} ${r.name}`),
    name: r.name,
    brand: r.brand,
    family: extra.family || "",                 // familia real si la definiste
    gender: "Unisex",
    concentration: "EDP",
    price_ars: toARS(r.usd),
    notesTop: extra.top || [],
    notesMid: extra.mid || [],
    notesBase: extra.base || [],
    image,
    tags: []
  };
});
