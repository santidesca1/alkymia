// data/products.js
// Conversión y helpers
const USD_TO_ARS = 1500;
const MARGIN = 1.50;
// Redondea hacia arriba al múltiplo de 1000 más cercano
const toARS = usd => {
  const val = usd * USD_TO_ARS * MARGIN;
  return Math.ceil(val / 1000) * 1000;
};
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// Mapa de imágenes locales ya existentes 
const IMAGES_MAP = {
  // --- AFNAN ---
  "9 am dive": "img/9amDive.webp",
  "9 pm": "img/9pmAfnan.webp",
  "9 pm elixir": "img/9pmElixir.webp",
  "9 pm pour femme": "img/9pmPFemme.webp",
  "9 pm rebel": "img/9pmRebel.webp",
  "supremacy not only": "img/supremacyNOIntense.webp",
  "turathi blue":"img/turathiBlue.webp",

  // --- AL HARAMAIN ---
  "amber oud rouge": "img/amberOudRouge.webp",
  "amber oud gold edition 60 ml": "img/amberOudGE60.webp",
  "amber oud gold edition 120 ml": "img/amberOudGE.webp",
  "l’aventure intense": "img/lAventureIntense.webp",
  "detour noir": "img/detourNoir.webp",
  "private edition": "img/amberOudPE.webp",
  "aqua dubai": "img/amberOudAD.webp",
  "dubai night": "img/dubaiNight.webp",

  // --- ARMAF CDN ---
  "club de nuit intense man 105ml": "img/cdnIntenseMan105.webp",
  "club de nuit intense man 200ml": "img/cdnIntenseMan200.webp",
  "club de nuit iconic": "img/cdnIconicBlue.webp",
  "club de nuit oud parfum": "img/cdnOudParfum.webp",
  "club de nuit precieux": "img/cdnPrecieux.webp",
  "club de nuit milestone": "img/cdnMilestone.webp",
  "club de nuit imperiale": "img/cdnImperiale.webp",
  "club de nuit sillage": "img/cdnSillage.webp",
  "club de nuit maleka": "img/cdnMaleka.webp",
  "club de nuit untold": "img/cdnUntold.webp",
  "club de nuit urban man elixir": "img/cdnUrbanElixir.webp",
  "club de nuit woman": "img/cdnWomen.webp",

  // --- ARMAF Odyssey ---
  "odyssey homme white edition": "img/oHommeWE.webp",
  "odyssey candee": "img/oCandee.webp",
  "odyssey mega": "img/oMega.webp",
  "odyssey spectra": "img/oSpectra.webp",
  "odyssey wild one": "img/oWildOne.webp",
  "odyssey homme black": "img/oHommeB.webp",
  "odyssey aqua": "img/oAqua.webp",
  "odyssey aoud": "img/oAoud.webp",
  "odyssey dubai chocolate": "img/oDubaiChocolate.webp",
  "odyssey tyrant": "img/oTyrant.webp",
  "odyssey limoni": "img/oLimoni.webp",
  "odyssey aristo": "img2/OAristo.webp",

  // --- BHARARA ---
  "bharara onyx": "img/bhararaOnyx.webp",
  "bharara queen": "img/bhararaQueen.webp",
  "bharara king 150 ml": "img/bhararaKing150.webp",
  "bharara king parfum": "img/bhararaKingParfum.webp",
  "bharara rose": "img/bhararaRose.webp",
  "pharaoh remesses ii": "img2/pRamessesII.webp",

  // --- LATTAFA ---
  "fakhar men": "img/fakharMen.webp",
  "khamrah": "img/khamrah.webp",
  "khamrah qahwa": "img/khamrahQahwa.webp",
  "mayar natural intense": "img/mayarIntense.webp",
  "odyssey mandarin sky": "img/oMandarinSky.webp",
  "yara candy": "img/Yara.webp",
  "yara rose": "img/yaraRose.webp",
  "yara tous": "img/yaraTous.webp",
  "yara moi": "img/YaraBlanco.webp",
  "kit yara collection": "img/yaraKitCollection.webp",
  "victoria": "img/victoria.webp",
  "rave now woman": "img/raveNowWomen.webp",
  "qimmah masc": "img/qimmahMasc.webp",
  "pride pisa": "img/pridePisa.webp",
  "nebras": "img/nebras.webp",
  "jean lowe immortal": "img/JLI.webp",
  "ishq al shuyukh": "img/IAS.webp",
  "emaan": "img/emaan.webp",
  "confidential gold": "img/confidentialGold.webp",
  "atlas": "img/atlas.webp",
  "art of nature ii": "img/atn2.webp",
  "ana abiyedh rouge 60ml": "img/anaAbiyedhR60.webp",
  "angham": "img/angham.webp",
  "ana abiyedh 60ml": "img/anaAbiyedh60.webp",
  "sakeena": "img/sakeena.webp",
  "afeef": "img2/afeef.webp",
  "haya": "img2/haya.webp",
  "eclaire": "img2/eclaire.webp",
  "ajwad": "img2/ajwad.webp",
  "his confession": "img2/hisConfession.webp",
  "her confession": "img2/herConfession.webp",
  "the kingdom masc": "img2/theKingdomMasc.webp",
  "the kingdom fem": "img2/theKingdomFem.webp",
  "fakhar fem": "img2/fakharFem.webp",
  "fakhar gold": "img2/fakharGold.webp",
  "fakhar platinum": "img2/fakharPlatinum.webp",
  "mayar cherry": "img2/mayarCherry.webp",
  "hayaati edp": "img2/hayaatiedp.webp",
  "hayaati al maleky": "img2/hayaatiAlMaleky.webp",
  "hayaati florence": "img2/hayaatiFlorence.webp",
  "hayaati gold elixir": "img2/hayaatiGoldElixir.webp",
  "teriaq": "img2/teriaq.webp",
  "teriaq intense": "img2/teriaqIntense.webp",
  "maahir legacy": "img2/maahirLegacy.webp",
  "sehr": "img2/sehr.webp",
  "musamam white": "img2/musamamWhite.webp",
  "ansaan gold": "img2/asaanGold.webp",
  "khamrah dukhan": "img2/khamrahDukhan.webp",
  "qaed al fursan": "img2/QAF.webp",
  "qaed al fursan untamed": "img2/QAFUntamed.webp",
  "qaed al fursan unlimited": "img2/QAFUnlimited.webp",
  "bade'e al oud for glory": "img2/BAOForGlory.webp",
  "bade'e al oud honor & glory": "img2/BAOHonorGlory.webp",
  "bade'e al oud noble blush": "img2/BAONobleBush.webp",
  "bade'e al oud sublime": "img2/BAOSublime.webp",
  "bade'e al oud amethyst": "img2/BAOAmethyst.webp",
  "asad": "img2/asad.webp",
  "asad bourbon": "img2/asadBourbon.webp",
  "asad zanzibar": "img2/asadZanzibar.webp",
  "vintage radio": "img2/vintageRadio.webp",
  "emeer": "img2/emeer.webp",
  "shaheen gold": "img2/shaheenGold.webp",

  // --- MAISON ALHAMBRA ---
  "salvo intense": "img/salvoIntense.webp",
  "la voie": "img/laVoie.webp",
  "your touch amber":            "img/yourTouchAmber.webp",
  "yeah":                        "img/yeah.webp",
  "so candid":                   "img/soCandidEDP.webp",
  "sceptre malachite":           "img/sceptreMalachite.webp",
  "salvo elixir":                "img/salvoElixir.webp",
  "salvo edp":                   "img/salvoEDP.webp",
  "reyna":                       "img/reyna.webp",
  "philos rosso":                "img/philosRosso.webp",
  "philos pura":                 "img/philosPura.webp",
  "philos opus noir":            "img/philosOpusNoir.webp",
  "pacific blue":                "img/pacificBllue.webp",          
  "la vivacite":                 "img/laVivacite.webp",
  "la rouge baroque extreme":    "img/laRougeBaroqueExtreme.webp",
  "la rouge baroque":            "img/laRougeBaroque.webp",
  "jorge di profumo":            "img/jorgeDiProfumo.webp",
  "jorge deep blue":             "img/jorgeDeepBlue.webp",
  "glacier le noir":             "img/glacierLeNoir.webp",
  "glacier bold":                "img/glacierBold.webp",
  "glacier bella":                "img/glacierBella.webp",
  "your touch intense (hombre)": "img/yourTouchIntenseFM.webp",
  "your touch for women":        "img/yourTochFW.webp",
  "delilah pour femme": "img/delilahPourFemme.webp",
  "dark door sport": "img/darkDoorSport.webp",
            
  // --- RASASI ---
  "hawas fire": "img2/hawasFire.webp",
  "hawas masc": "img2/hawasMasc.webp",
  "hawas ice": "img2/hawasIce.webp",
  "hawas elixir": "img2/hawasElixir.webp",

// --- PARIS CORNER ---
  "khair pistachio": "img2/khairPistacho.webp",

// --- ORIENTICA ---
  "amber rouge 80ml": "img2/amberRouge80.webp",
  "amber rouge 150ml": "img2/amberRouge150.webp",

// ----FRENCH AVENUE----
"royal blend nero": "img2/RBNero.webp",
"spectre ghost": "img2/spectreGhost.webp",
"vulcan feu": "img2/vulcanFeu.webp",
"liquid brun": "img2/liquidBrun.webp",
};

//PRECIOS MAYORISTAS
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
  {brand:"Armaf", name:"Odyssey Aristo", usd:45.00},

  // BHARARA
  {brand:"Bharara", name:"Bharara King 150 ml", usd:55.00}, 
  {brand:"Bharara", name:"Bharara King Parfum", usd:60.00}, 
  {brand:"Bharara", name:"Bharara Rose", usd:68.00},
  {brand:"Bharara", name:"Bharara Onyx", usd:48.00},
  {brand:"Bharara", name:"Bharara Queen", usd:50.00},
  {brand:"Bharara", name:"Pharaoh Remesses II", usd:70.00},

  // LATTAFA
  {brand:"Lattafa", name:"Fakhar Men", usd:27.50},
  {brand:"Lattafa", name:"Khamrah", usd:27.50},
  {brand:"Lattafa", name:"Khamrah Qahwa", usd:27.50},
  {brand:"Lattafa", name:"Mayar Natural Intense", usd:25.00},
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
  {brand:"Lattafa", name:"Afeef", usd:36.50},
  {brand:"Lattafa", name:"Haya", usd:27.50},
  {brand:"Lattafa", name:"Eclaire", usd:30.00},
  {brand:"Lattafa", name:"Ajwad", usd:23.00},
  {brand:"Lattafa", name:"His Confession", usd:35.50},
  {brand:"Lattafa", name:"Her Confession", usd:31.50},
  {brand:"Lattafa", name:"The Kingdom Masc", usd:39.00},
  {brand:"Lattafa", name:"The Kingdom Fem", usd:29.00},
  {brand:"Lattafa", name:"Fakhar Fem", usd:29.00},
  {brand:"Lattafa", name:"Fakhar Gold", usd:24.50},
  {brand:"Lattafa", name:"Fakhar Platinum", usd:32.00},
  {brand:"Lattafa", name:"Mayar Cherry", usd:25.00},
  {brand:"Lattafa", name:"Hayaati EDP", usd:25.00},
  {brand:"Lattafa", name:"Hayaati al Maleky", usd:24.00},
  {brand:"Lattafa", name:"Hayaati Florence", usd:22.00},
  {brand:"Lattafa", name:"Hayaati Gold Elixir", usd:20.00},
  {brand:"Lattafa", name:"Teriaq", usd:28.00},
  {brand:"Lattafa", name:"Teriaq Intense", usd:31.50},
  {brand:"Lattafa", name:"Maahir Legacy", usd:25.00},
  {brand:"Lattafa", name:"Sehr", usd:36.00},
  {brand:"Lattafa", name:"Musamam White", usd:42.50},
  {brand:"Lattafa", name:"Ansaan Gold", usd:30.00},
  {brand:"Lattafa", name:"Khamrah Dukhan", usd:26.00},
  {brand:"Lattafa", name:"Qaed Al Fursan", usd:23.00},
  {brand:"Lattafa", name:"Qaed Al Fursan Unlimited", usd:20.00},
  {brand:"Lattafa", name:"Qaed Al Fursan Untamed", usd:23.50},
  {brand:"Lattafa", name:"Bade'e Al Oud for Glory", usd:26.50},
  {brand:"Lattafa", name:"Bade'e Al Oud Honor & Glory", usd:26.00},
  {brand:"Lattafa", name:"Bade'e Al Oud Noble Blush", usd:26.50},
  {brand:"Lattafa", name:"Bade'e Al Oud Sublime", usd:27.50},
  {brand:"Lattafa", name:"Bade'e Al Oud Amethyst", usd:26.50},
  {brand:"Lattafa", name:"Asad", usd:25.00},
  {brand:"Lattafa", name:"Asad Bourbon", usd:30.00},
  {brand:"Lattafa", name:"Asad Zanzibar", usd:22.50},
  {brand:"Lattafa", name:"Vintage Radio", usd:34.00},
  {brand:"Lattafa", name:"Emeer", usd:40.00},
  {brand:"Lattafa", name:"Shaheen Gold", usd:28.50},

  // MAISON ALHAMBRA
  {brand:"Maison Alhambra", name:"Jean Lowe Immortal", usd:28.00},
  {brand:"Maison Alhambra", name:"Salvo Edp", usd:24.00},
  {brand:"Maison Alhambra", name:"Salvo Intense", usd:24.00},
  {brand:"Maison Alhambra", name:"Salvo Elixir", usd:24.00},
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
  {brand:"Maison Alhambra", name:"La Voie", usd:22.50},
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

  // FRENCH AVENUE
  {brand:"French Avenue", name:"Liquid Brun", usd:41.00},
  {brand:"French Avenue", name:"Royal Blend Nero", usd:37.00},
  {brand:"French Avenue", name:"Spectre Ghost", usd:42.00},
  {brand:"French Avenue", name:"Vulcan Feu", usd:45.00},
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
"odyssey aristo": {
  family: "Amaderado especiado",
  top: ["Bergamota", "Limón"],
  mid: ["Lavanda", "Geranio", "Nuez moscada"],
  base: ["Vetiver", "Ámbar", "Maderas", "Musk"]
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
"pharaoh remesses ii": {
  family: "Ambarado especiado",
  top: ["Canela", "Azafrán", "Cardamomo"],
  mid: ["Ámbar", "Madera de oud", "Resinas"],
  base: ["Vainilla", "Cuero", "Maderas preciosas"]
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
"mayar natural intense": {
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

"afeef": {
  family: "Amaderado especiado",
  top: ["Bergamota", "Pimienta"],
  mid: ["Cedro", "Especias"],
  base: ["Maderas", "Ámbar", "Musk"]
},
"haya": {
  family: "Floral frutal",
  top: ["Mandarina", "Pera"],
  mid: ["Rosa", "Jazmín"],
  base: ["Musk", "Ámbar", "Vainilla"]
},
"eclaire": {
  family: "Gourmand avainillado",
  top: ["Caramelo", "Vainilla"],
  mid: ["Praliné", "Canela"],
  base: ["Tonka", "Musk", "Maderas"]
},
"ajwad": {
  family: "Ámbar frutal",
  top: ["Frutos rojos", "Bergamota"],
  mid: ["Rosa", "Jazmín"],
  base: ["Maderas", "Vainilla", "Ámbar"]
},
"his confession": {
  family: "Amaderado aromático",
  top: ["Limón", "Pomelo"],
  mid: ["Lavanda", "Notas verdes"],
  base: ["Maderas", "Musk", "Ámbar"]
},
"her confession": {
  family: "Floral frutal",
  top: ["Frutos rojos", "Mandarina"],
  mid: ["Rosa", "Peonía"],
  base: ["Musk", "Vainilla", "Ámbar"]
},
"the kingdom masc": {
  family: "Amaderado especiado",
  top: ["Toronja", "Pimienta"],
  mid: ["Lavanda", "Salvia"],
  base: ["Maderas", "Ámbar gris"]
},
"the kingdom fem": {
  family: "Floral afrutado",
  top: ["Durazno", "Pera"],
  mid: ["Jazmín", "Rosa"],
  base: ["Vainilla", "Musk"]
},
"fakhar fem": {
  family: "Floral dulce",
  top: ["Mandarina", "Frambuesa"],
  mid: ["Rosa", "Azahar"],
  base: ["Ámbar", "Vainilla", "Musk"]
},
"fakhar gold": {
  family: "Ambarado especiado",
  top: ["Canela", "Bergamota"],
  mid: ["Rosa", "Nuez moscada"],
  base: ["Maderas", "Ámbar", "Vainilla"]
},
"fakhar platinum": {
  family: "Aromático fresco",
  top: ["Limón", "Menta"],
  mid: ["Lavanda", "Geranio"],
  base: ["Ámbar gris", "Maderas"]
},
"mayar cherry": {
  family: "Gourmand frutal",
  top: ["Cereza", "Frambuesa"],
  mid: ["Praliné", "Rosa"],
  base: ["Vainilla", "Musk"]
},
"hayaati edp": {
  family: "Amaderado especiado",
  top: ["Canela", "Azafrán"],
  mid: ["Cedro", "Jazmín"],
  base: ["Maderas", "Ámbar", "Musk"]
},
"hayaati al maleky": {
  family: "Ambarado especiado",
  top: ["Nuez moscada", "Cardamomo"],
  mid: ["Rosa", "Lavanda"],
  base: ["Maderas", "Ámbar"]
},
"hayaati florence": {
  family: "Floral fresco",
  top: ["Bergamota", "Notas verdes"],
  mid: ["Jazmín", "Iris"],
  base: ["Musk", "Ámbar gris"]
},
"hayaati gold elixir": {
  family: "Ámbar especiado",
  top: ["Canela", "Azafrán"],
  mid: ["Jazmín", "Rosa"],
  base: ["Ámbar", "Maderas"]
},
"teriaq": {
  family: "Amaderado dulce",
  top: ["Caramelo", "Mandarina"],
  mid: ["Canela", "Rosa"],
  base: ["Ámbar", "Vainilla", "Maderas"]
},
"teriaq intense": {
  family: "Ámbar gourmand",
  top: ["Caramelo", "Bergamota"],
  mid: ["Jazmín", "Rosa"],
  base: ["Maderas", "Vainilla", "Ámbar"]
},
"maahir legacy": {
  family: "Amaderado especiado",
  top: ["Pimienta negra", "Limón"],
  mid: ["Lavanda", "Rosa"],
  base: ["Maderas", "Ámbar gris"]
},
"sehr": {
  family: "Floral dulce",
  top: ["Cereza", "Mandarina"],
  mid: ["Rosa", "Jazmín"],
  base: ["Vainilla", "Musk", "Ámbar"]
},
"musamam white": {
  family: "Ambarado floral",
  top: ["Azafrán", "Bergamota"],
  mid: ["Rosa", "Jazmín"],
  base: ["Ámbar", "Maderas", "Musk"]
},
"ansaan gold": {
  family: "Ámbar dulce",
  top: ["Cítricos", "Frutas tropicales"],
  mid: ["Rosa", "Azahar"],
  base: ["Ámbar", "Maderas"]
},
"khamrah dukhan": {
  family: "Gourmand ahumado",
  top: ["Canela", "Nuez moscada"],
  mid: ["Dátil", "Praliné"],
  base: ["Vainilla", "Ámbar", "Maderas ahumadas"]
},
"qaed al fursan": {
  family: "Amaderado frutal",
  top: ["Piña", "Manzana"],
  mid: ["Jazmín", "Rosa"],
  base: ["Maderas", "Musk"]
},
"qaed al fursan untamed": {
  family: "Amaderado intenso",
  top: ["Toronja", "Pimienta"],
  mid: ["Lavanda", "Notas marinas"],
  base: ["Maderas", "Ámbar gris"]
},
"qaed al fursan unlimited": {
  family: "Amaderado especiado",
  top: ["Cítricos", "Cardamomo"],
  mid: ["Jazmín", "Geranio"],
  base: ["Maderas", "Ámbar"]
},
"bade'e al oud for glory": {
  family: "Ambarado especiado",
  top: ["Azafrán", "Lavanda"],
  mid: ["Jazmín", "Rosa"],
  base: ["Maderas", "Ámbar", "Oud"]
},
"bade'e al oud honor & glory": {
  family: "Ambarado especiado",
  top: ["Canela", "Azafrán"],
  mid: ["Rosa", "Jazmín"],
  base: ["Oud", "Maderas", "Ámbar"]
},
"bade'e al oud noble blush": {
  family: "Ámbar floral",
  top: ["Toronja", "Frambuesa"],
  mid: ["Rosa", "Iris"],
  base: ["Musk", "Maderas", "Ámbar"]
},
"bade'e al oud sublime": {
  family: "Ámbar dulce",
  top: ["Vainilla", "Frutos rojos"],
  mid: ["Rosa", "Praliné"],
  base: ["Ámbar", "Musk", "Maderas"]
},
"bade'e al oud amethyst": {
  family: "Ámbar especiado",
  top: ["Pimienta rosa", "Bergamota"],
  mid: ["Rosa", "Iris"],
  base: ["Ámbar", "Oud", "Vainilla"]
},
"asad": {
  family: "Ambarado especiado",
  top: ["Bergamota", "Pimienta negra"],
  mid: ["Lavanda", "Cardamomo"],
  base: ["Ámbar", "Maderas"]
},
"asad bourbon": {
  family: "Amaderado dulce",
  top: ["Whisky Bourbon", "Canela"],
  mid: ["Vainilla", "Praliné"],
  base: ["Ámbar", "Maderas"]
},
"asad zanzibar": {
  family: "Amaderado especiado",
  top: ["Cítricos", "Pimienta"],
  mid: ["Lavanda", "Rosa"],
  base: ["Maderas", "Ámbar"]
},
"vintage radio": {
  family: "Ambarado aromático",
  top: ["Bergamota", "Limón"],
  mid: ["Lavanda", "Iris"],
  base: ["Ámbar", "Maderas", "Musk"]
},
"emeer": {
  family: "Ámbar amaderado",
  top: ["Cítricos", "Especias"],
  mid: ["Rosa", "Jazmín"],
  base: ["Maderas", "Ámbar", "Musk"]
},
"shaheen gold": {
  family: "Ambarado especiado",
  top: ["Pimienta negra", "Bergamota"],
  mid: ["Lavanda", "Cardamomo"],
  base: ["Ámbar", "Maderas"]
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

//FRENCH AVENUE
"royal blend nero": {
  family: "Amaderado especiado",
  top: ["Toronja", "Pimienta negra"],
  mid: ["Lavanda", "Geranio"],
  base: ["Cedro", "Patchouli", "Maderas"]
},
"spectre ghost": {
  family: "Aromático fresco",
  top: ["Menta", "Limón"],
  mid: ["Jengibre", "Cardamomo"],
  base: ["Vetiver", "Ámbar gris", "Musk"]
},
"vulcan feu": {
  family: "Ambarado cálido",
  top: ["Naranja", "Especias"],
  mid: ["Ámbar", "Resinas"],
  base: ["Cuero", "Maderas ahumadas", "Incienso"]
},
"liquid brun": {
  family: "Oriental ambarado",
  top: ["Mandarina", "Canela"],
  mid: ["Ámbar", "Vainilla"],
  base: ["Maderas preciosas", "Almizcle", "Cuero"]
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
    family: extra.family || "",                 
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
