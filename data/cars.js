// data/cars.js
export const cars = [
  // ----- Original 6 (unchanged) -----
  {
    id: 'lambo-huracan',
    name: 'Lamborghini Huracán EVO',
    brand: 'lamborghini',
    gearbox: 'automatic',
    price: 2999, // AED/day
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Huracan%20Evo%20IMG%202924.jpg?width=1600',
  },
  {
    id: 'ferrari-f8',
    name: 'Ferrari F8 Tributo',
    brand: 'ferrari',
    gearbox: 'automatic',
    price: 3299,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Ferrari%20F8%20Tributo.jpg?width=1600',
  },
  {
    id: 'mercedes-sclass',
    name: 'Mercedes-Benz S-Class (W223)',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 1090,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20W223%20IMG%206663.jpg?width=1600',
  },
  {
    id: 'bmw-m4',
    name: 'BMW M4 Competition (G82)',
    brand: 'bmw',
    gearbox: 'automatic',
    price: 1290,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/2024%20BMW%20M4%20(G82)%20Competition%20IMG%209367.jpg?width=1600',
  },
  {
    id: 'audi-r8',
    name: 'Audi R8 V10',
    brand: 'audi',
    gearbox: 'automatic',
    price: 2190,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Audi-R8-V10-Front.jpg?width=1600',
  },
  {
    id: 'audi-a3',
    name: 'Audi A3 (8Y)',
    brand: 'audi',
    gearbox: 'automatic',
    price: 390,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Audi%20A3%208Y%20IMG%201008.jpg?width=1600',
  },

  // ----- Added batch 1 (kept as-is per your request) -----
  {
    id: 'toyota-corolla',
    name: 'Toyota Corolla',
    brand: 'toyota',
    gearbox: 'automatic',
    price: 200,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Toyota%20Corolla%20SE%20front%20view%20(United%20States).jpg?width=1600',
  },
  {
    id: 'nissan-sunny',
    name: 'Nissan Sunny',
    brand: 'nissan',
    gearbox: 'automatic',
    price: 180,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/1999-2000%20Nissan%20Sunny%20(B14)%201.6%20Super%20Saloon%20Sedan%20(08-06-2018)%2004.jpg?width=1600',
  },
  {
    id: 'kia-picanto',
    name: 'Kia Picanto',
    brand: 'kia',
    gearbox: 'automatic',
    price: 170,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/2017%20Kia%20Picanto%201%201.0%20Front.jpg?width=1600',
  },
  {
    id: 'hyundai-accent',
    name: 'Hyundai Accent',
    brand: 'hyundai',
    gearbox: 'automatic',
    price: 190,
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/'06-'11%20Hyundai%20Accent%20Sedan.jpg?width=1600",
  },
  {
    id: 'mitsubishi-attrage',
    name: 'Mitsubishi Attrage',
    brand: 'mitsubishi',
    gearbox: 'automatic',
    price: 185,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/2019%20Mitsubishi%20Attrage%20GTS-LTD.jpg?width=1600',
  },
  {
    id: 'chevrolet-spark',
    name: 'Chevrolet Spark',
    brand: 'chevrolet',
    gearbox: 'automatic',
    price: 175,
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Spark%20(14289431163).jpg?width=1600',
  },

  // --- Newly added (with verified image URLs) ---
  {
    id: 'suzuki-swift', name: 'Suzuki Swift', brand: 'suzuki', gearbox: 'automatic', price: 180,
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Suzuki_SWIFT_XG_%28ZC72S%29_front.JPG'
  },

  {
    id: 'honda-city', name: 'Honda City', brand: 'honda', gearbox: 'automatic', price: 190,
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/2019_Honda_City_E_%28Indonesia%29_front_view.jpg'
  },

  {
    id: 'toyota-yaris', name: 'Toyota Yaris', brand: 'toyota', gearbox: 'automatic', price: 200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/2018_Toyota_Yaris_LE%2C_Front_Right%2C_09-19-2021.jpg'
  },

  {
    id: 'hyundai-elantra', name: 'Hyundai Elantra', brand: 'hyundai', gearbox: 'automatic', price: 210,
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/2017_Hyundai_Elantra_US_front1.jpg'
  },

  {
    id: 'toyota-camry', name: 'Toyota Camry', brand: 'toyota', gearbox: 'automatic', price: 250,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/2018_Toyota_Camry_XLE_front_3.16.18.jpg'
  },

  {
    id: 'nissan-altima', name: 'Nissan Altima', brand: 'nissan', gearbox: 'automatic', price: 240,
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/2019_Nissan_Altima_front_12.24.18.jpg'
  },

  {
    id: 'hyundai-sonata', name: 'Hyundai Sonata', brand: 'hyundai', gearbox: 'automatic', price: 260,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Hyundai_Sonata_2017_Sedans_Front.jpg'
  },

  {
    id: 'honda-accord', name: 'Honda Accord', brand: 'honda', gearbox: 'automatic', price: 270,
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/2018_Honda_Accord_front_3.29.18.jpg'
  },

  {
    id: 'kia-k5', name: 'Kia K5', brand: 'kia', gearbox: 'automatic', price: 280,
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/2021_Kia_K5_GT-Line%2C_front_left.jpg'
  },

  {
    id: 'mazda-6', name: 'Mazda 6', brand: 'mazda', gearbox: 'automatic', price: 260,
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/2018_Mazda_6_sedan_front_4.2.18.jpg'
  },

  {
    id: 'chevrolet-malibu', name: 'Chevrolet Malibu', brand: 'chevrolet', gearbox: 'automatic', price: 270,
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/2019_Chevrolet_Malibu_LT_1.5L%2C_front_8.25.19.jpg'
  },
// --- Added (Volkswagen Passat → Mercedes-Benz S-Class) with relevant, tested Pexels links ---
{
  id: 'vw-passat',
  name: 'Volkswagen Passat',
  brand: 'volkswagen',
  gearbox: 'automatic',
  price: 280,
  image:
    'https://images.pexels.com/photos/11490480/pexels-photo-11490480.jpeg?auto=compress&cs=tinysrgb&w=1600',
},
{
  id: 'mercedes-sclass-2',
  name: 'Mercedes-Benz S-Class',
  brand: 'mercedes',
  gearbox: 'automatic',
  price: 1200,
  image:
    'https://images.pexels.com/photos/18369291/pexels-photo-18369291.jpeg?auto=compress&cs=tinysrgb&w=1600',
},
];
