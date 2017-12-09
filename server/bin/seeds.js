const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vapes', {useMongoClient: true});
const Product = require('../models/Product');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const bcryptSalt = 10;
const salt = bcrypt.genSaltSync(bcryptSalt);

const password = '1234';
const encryptedPass = bcrypt.hashSync(password, salt);
const users = [
  {
    username: 'Angel',
    password: encryptedPass,
    role: 'admin'
  },
  {
    username: 'Clementina',
    password: encryptedPass,
    role: 'admin'
  },
]
const products = [
    {
        brand: 'IJOY',
        model: 'Captain PD270',
        type:{
        category: 'Mod',
        subcategory: 'Electronic',
        },
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512488009/ijoy-captain-pd270-box-mod-black-01_ljwekw.jpg',
        description: 'IJOY Captain PD270 BOX MODde Ijoy está alimentado por dos baterias 20700 y es compatible con las baterias 18650 gracias al adaptador para baterias 18650(viene incluido). Se trata de un dispositivo de alta calidad con una potencia de salida máxima de 234W',
        price: 62.95,
      },
      {
        brand: 'ASMODUS',
        model: 'Minikin V2',
        category: 'Mod',
        subcategory: 'Electronic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512488359/ASMKN2-4_ll48x1.jpg',
        description: 'Nuevo Minikin 2, potenciado por el chip GX-180-HT con las mismas funcionalidades de ahorro de batería de las versiones anteriores pero ahora con 180W de potencia y pantalla táctil!',
        price: 89.95,
      },
      {
        brand: 'DOTMOD',
        model: 'Dotbox',
        category: 'Mod',
        subcategory: 'Electronic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512488789/dotmod-dotbox-75w-by-dotmod_x1dsna.jpg',
        description: 'Esta mod elegante incorpora el microprocesador patentado de dotmod que elimina la carga lenta, los problemas de confiabilidad y el aumento lento de potencia que se encuentran en otros procesadores.Nuestro potente y eficiente conjunto de chips es muy superior a otros y garantiza el más alto rendimiento, fiabilidad y funcionalidad en el mercado.',
        price: 164.95,
      },
      {
        brand: 'LOST VAPE',
        model: 'Prism',
        category: 'Mod',
        subcategory: 'Electronic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512549043/N0I1NzlGNTRFNjdENTU5RTBGOTI6ZjE2ZGM5Zjg0MzQ3ZWQ4MjUxNzk4ZTZhOWNjYTUxZTk6Ojo6OjA_oouqzr.jpg',
        description: 'El Prism 250W Box Mod es el primer dispositivo producito por Modefined. Funcionando con 3 baterias 18650 es capaz de encenderse al instante y conseguir una potencia máxima de 250w.',
        price: 54.95,
      },
      {
        brand: 'SMOK',
        model: 'Alien',
        category: 'Mod',
        subcategory: 'Electronic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512489329/Alien_Mod_by_SMOK_Rainbow__30322.1488862868.1280.1280_kgw2jd.jpg',
        description: 'Smok Alien 220W, un mod con un diseño deportivo muy bonito, gran pantalla OLED, 220W de potencia, y funcionamiento con 2 baterías 18650 (no incluidas, se recomienda el uso de baterías con protección de descarga de 30A o superior)',
        price: 59.95,
      },
      {
        brand: 'ARMAGEDDON',
        model: 'Box Mod BF',
        category: 'Mod',
        subcategory: 'Mechanic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512490187/856642489311_ia2c3k.jpg',
        description: 'Los astros se han alineado para que Armageddon MFG nos traiga este espectacular Mod BF diseñado al detalle. Con los contactos de plata conseguiremos una gran conductividad y si estabas buscando un mod bf , este es para ti!',
        price: 89.95,
      },
      {
        brand: 'ONTECH RD',
        model: 'Icarus',
        category: 'Mod',
        subcategory: 'Mechanic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512491422/icarus-style-bf-squonk-mechanical-box-mod-orange-aluminum-8ml-1-x-18650_bi7nwk.jpg',
        description: 'Ontech RD nos presenta una versión más atractiva y mejorada del Icarus BF Mod. Icarus V2 es un mod hecho de aluminio anodizado con una tapa trasera fija y un cabezal de acero y latón con garantia de por vida.',
        price: 190.00,
      },
      {
        brand: 'GEEKVAPE',
        model: 'Athena',
        category: 'Mod',
        subcategory: 'Mechanic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512492779/Geekvape-Athena-Squonk-Mod_1024x_dggwvl.jpg',
        description: 'Athena Squonk Box Mod está formado por un mod mecánico bf con una botella de silicona con 6.5ml de capacidad. Athena fue diseñado para ser compacto, ligero y potente.',
        price: 42.95,
      },
      {
        brand: 'COILART',
        model: 'Azeroth',
        category: 'Mod',
        subcategory: 'Mechanic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512550374/azeroth_squonk_mod_1_ccq8ih.jpg',
        description: 'Azeroth Squonk Mod de CoilArt es un mod brillante y compacto, que funciona con 1 bateria 18650, 20700 o 21700 y la botella que incorpora tiene una capacidad de líquido de 7ml para brindarte una excelente experiencia de vapeo.',
        price: 53.95,
      },
      {
        brand: 'MOON ROOKS',
        model: 'Onestriker Rocks',
        category: 'Mod',
        subcategory: 'Mechanic',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512493871/IMG_8791_hgyqox.jpg',
        description: 'Onestriker Rocks V1.5 de Moon Rocks Mod es un mod BF pequeño y compacto con el que te quedarás más que satisfecho. Es un mod BF que sin duda vale la pena probar.',
        price: 159.95,
      },
      {
        brand: 'SMOK',
        model: 'TFV12',
        category: 'Ato',
        subcategory: 'Claromizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512494380/1512001802109148127_dbbe5d.jpg',
        description: 'Este kit incluye tres resistencias de la gama nueva de smok: las Prince Q4, X6 y T10,  con todas obtendremos grandes nubes de vapor y un sabor magnífico.',
        price: 36.60,
      },
      {
        brand: 'Eleaf',
        model: 'Ijust S',
        category: 'Ato',
        subcategory: 'Claromizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512494509/Eleaf_20iJust_20S_20Atomizer_20-_204ml_20Silver_20_1_hkilt1.jpg',
        description: 'iJust S, nueva evolución de la serie de atomizadores iJust con 24.5mm de diámetro, 4ml de capacidad de líquido y cómodo rellenado por la parte superior del atomizador.',
        price: 17.95,
      },
      {
        brand: 'JOYETECH',
        model: 'Cubis PRO',
        category: 'Ato',
        subcategory: 'Claromizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512495398/cubis-pro-atomizer-04_f6ljyc.jpg',
        description: 'Joyetech Cubis PRO, nueva versión del atomizador cubis con un mayor rendimiento gracias a su incremento en la entrada de aire, pudiendo así llegar al nicho de mercado de los usuarios más avanzados.',
        price: 20.95,
      },
      {
        brand: 'ASPIRE',
        model: 'Athos Tank',
        category: 'Ato',
        subcategory: 'Claromizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512495519/aspire_athos_sub-ohm_tank_black_2_nogfpt.jpg',
        description: 'Presentamos el nuevo Athos Tank de Aspire , una bestia para todos aquellos que buscan nubes densas y un gran sabor. Incorpora un sistema de llenado por la parte superior junto con un flujo de aire inferior ajustable.',
        price: 32.95,
      },
      {
        brand: 'UWELL',
        model: 'Crown 3',
        category: 'Ato',
        subcategory: 'Claromizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512495643/UWCR3M-9_bawxpx.jpg',
        description: 'Uwell Crown 3 es la versión más nueva del  famoso tanque Crown de Uwell. Este tanque cuenta  con una capacidad de líquido de 5 ml, sistema de llenado superior, y un innovador sistema de resistencias "comerciales".',
        price: 31.95,
      },
      {
        brand: 'CUSTOM VAPES',
        model: 'Goon 1.5',
        category: 'Ato',
        subcategory: 'Atomizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512495905/goon-15-style-rda-rebuildable-dripping-atomizer-w-bf-pin-black-stainless-steel-24mm-diameter_kufwjo.jpg',
        description: 'El nuevo Goon v1.5 RDA es una actualización del RDA más vendido de 2016 el original Goon RDA. Los diseñadores originales 528 Custom y Blue Eyed Goon han lanzado ahora la Versión 1.5 mejorando el diseño original.',
        price: 51.95,
      },
      {
        brand: 'ARMAGEDDON',
        model: 'Apocalypse Gen 2',
        category: 'Ato',
        subcategory: 'Atomizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512496414/DSC_1986-Edit__37957.1500508134_hkwwwj.jpg',
        description: 'Este Apocalypse Gen 2 RDA está teniendo gran aceptación en el mercado y es que está diseñado para soportar cualquier tipo de resistencia, disponiendo de unos postes con unas abrazaderas ultra resistentes, aptos para sujetar cualquier tipo de coil y resistir en el tiempo.',
        price: 51.95,
      },
      {
        brand: 'AUGVAPE',
        model: 'Druga RDA',
        category: 'Ato',
        subcategory: 'Atomizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512496690/authentic-augvape-druga-rda-rebuildable-dripping-atomizer-green-stainless-steel-24mm-diameter_l0i4tm.jpg',
        description: 'DRUGA RDA es el primer atomizador que utiliza CSS (Clamp Snag System) para que tengamos una fácil colocación de las resistencias en los postes con lo que permite colocar mayor variedad de resistencias.',
        price: 30.95,
      },
      {
        brand: 'DESIRE',
        model: 'Rabies',
        category: 'Ato',
        subcategory: 'Atomizer',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512496921/desire_20rabies_20rda_20atomizer6b2b5e35_lt4oiz.png',
        description: 'Aquí está Rabies RDA de Desire , un atomizador con un deck espacioso para la colocación de todo tipo de resistencias en especial para las resistencias complejas de clapton.Podremos además ajustar el flujo de aire, el cual se encuentra en el lateral.El Rabies RDA se adapta a la necesidad de cualquier persona.',
        price: 31.50,
      },
      {
        brand: 'RELOAD VAPOR USA',
        model: 'Reload',
        category: 'Ato',
        subcategory: 'Atomizer',
        image: 'http://metrovaperz.gr/images/stories/virtuemart/product/reloadblack-1000x1000.png',
        description: 'El Reload RDA es un innovador e intuitivo RDA, con un deck basado en el kennedy rda al que se le han introducido diversas mejoras para conseguir un sabor de los líquidos si cabe mejor, una entrada de aire con posibilidad de regulación en single y dual coil, mayor espacio para alojar algodón, un deck con 4 postes, y 4 entradas de aire interiores.',
        price: 79.95,
      },
      {
        brand: 'KING CREST',
        model: 'Don Juan Reserve',
        category: 'E-liquid',
        subcategory: '3mg',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512547579/don-juan-reserve-kings-crest-60ml_lbjlcr.jpg',
        description: 'Galleta  de chocolate graham, coronado con una cucharada de crema dulce batida con vainilla y un ligero toque de coco.',
        price: 24.95,
      },
      {
        brand: 'FANTASI',
        model: 'Orange Fantasi',
        category: 'E-liquid',
        subcategory: '0mg',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512547799/fantasi-orange-ice2_umx6rb.jpg',
        description: 'Refrescante sabor a naranja fresca y recien cogida del árbol, inspirado en el famoso refresco de naranja.',
        price: 22.95,
      },
      {
        brand: 'THE ART',
        model: 'Dragonfly',
        category: 'E-liquid',
        subcategory: '0mg',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512548332/dragonfly-the-ark-custom-eliquid-flavor-series-70ml_vpuasn.jpg',
        description: 'Pastel con base de bizcocho emborrachado en limonada, relleno de dulce merengue al limón recubierto con ralladura de limón confitado.',
        price: 30.00,
      },
      {
        brand: 'THE ART',
        model: 'Pinguin',
        category: 'E-liquid',
        subcategory: '3mg',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512548614/penguin-the-ark-eliquids-3mg_uyq1au.jpg',
        description: 'Tradicional sabor a ositos de gominola con acabado frutal que te transportara de inmediato  a tus mejores momentos de la infancia.',
        price: 30.00,
      },
      {
        brand: 'DINNER LADY',
        model: 'Lemon Tart',
        category: 'E-liquid',
        subcategory: '0mg',
        image: 'https://res.cloudinary.com/dhhgusvci/image/upload/v1512548819/Dinner-Lady-Lemon-Tart-60ml_jdp5er.png',
        description: 'Intensa cuajada de limón rematada con un pegajoso merengue , todo acunado por una fina corteza de pastelería.',
        price: 24.95,
      },
];

Product.create(products, (err, products) => {
    if (err){ throw(err) }
    console.log("Success", products);
    mongoose.connection.close();
  })

  User.create(users, (err, users) => {
    if (err){ throw(err) }
    console.log("Success", users);
    mongoose.connection.close();
  })

//   vapes.collection.drop();
//   vapes.create(info, (err, docs) => {
//     if (err) {
//       throw err;
//     }
//     docs.forEach((info) => {
//       console.log(info.name);
//     });
//     mongoose.connection.close();
//   });
