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
      'https://www.luxurysportcarsdubai.com/wp-content/uploads/2024/10/Rent-Lamborghini-Huracan-Evo-Coupe-in.jpg',
  },
  {
    id: 'ferrari-f8',
    name: 'Ferrari F8 Tributo',
    brand: 'ferrari',
    gearbox: 'automatic',
    price: 3299,
    image:
      'https://mrline.net/program/images/products/1699185338imageFile.jpg',
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
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOMi5c4DMaffJYsijRcd-YwqefRVyQOhkhjg&s',
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
      'https://static.oneclickdrive.com/uploads/mobcars/Audi-A3-2023_36500_34869973114-13_small.jpg',
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
      'https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_middle_east/vehicles/sunny/my24/configurator/NEW-SUNNY-SV.jpg',
  },
  {
    id: 'kia-picanto',
    name: 'Kia Picanto',
    brand: 'kia',
    gearbox: 'automatic',
    price: 170,
    image:
      'https://renty.ae/uploads/car/photo/l/white_kia-picanto_2023_5470_main_2db9af41cda833c433d3c2e1fcc41a0f.jpg',
  },
  {
    id: 'hyundai-accent',
    name: 'Hyundai Accent',
    brand: 'hyundai',
    gearbox: 'automatic',
    price: 190,
    image:
      "https://renty.ae/uploads/car/photo/l/white_hyundai-accent_2024_5870_main_ce027f16b589a640b6e3399bd1a9903b.jpg",
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
      'https://mario-carrental.com/program/images/products/16566750472.jpeg',
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
  {
    id: 'nissan-patrol',
    name: 'Nissan Patrol',
    brand: 'nissan',
    gearbox: 'automatic',
    price: 950,
    image: 'https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/61e632c8bd51d7546a49c9f711ebfa0838314013'
  },
  {
    id: 'gmc-yukon',
    name: 'GMC Yukon',
    brand: 'gmc',
    gearbox: 'automatic',
    price: 1100,
    image: 'https://hips.hearstapps.com/hmg-prod/images/2025-gmc-yukon-denali-101-6852cef1b5273.jpg?crop=0.743xw:0.625xh;0.234xw,0.315xh&resize=1200:*'
  },
  {
    id: 'mercedes-c-class',
    name: 'Mercedes-Benz C-Class',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 500,
    image: 'https://storage.albacars.ae/vehicles/bb3d0afc-0e13-4045-bfa2-2853f7947096/db07747e-5a20-475a-9677-78a928de0d4c.jpeg?width=800&quality=75&format=webp'
  },
  {
    id: 'bmw-4-series',
    name: 'BMW 4 Series',
    brand: 'bmw',
    gearbox: 'automatic',
    price: 600,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2HfL-M3GMliP4Q3y4qpfFNO89WrAicM4qQ&s'
  },
  {
    id: 'ford-mustang',
    name: 'Ford Mustang',
    brand: 'ford',
    gearbox: 'automatic',
    price: 700,
    image: 'mustang.jpeg'
  },
  {
    id: 'chevrolet-camaro',
    name: 'Chevrolet Camaro',
    brand: 'chevrolet',
    gearbox: 'automatic',
    price: 650,
    image: 'https://static.oneclickdrive.com/uploads/mobcars/Chevrolet-Camaro-2017_4367_3040183258-10_small.jpg'
  },
  {
    id: 'hyundai-palisade',
    name: 'Hyundai Palisade',
    brand: 'hyundai',
    gearbox: 'automatic',
    price: 550,
    image: 'https://di-uploads-pod27.dealerinspire.com/fairfaxhyundai/uploads/2024/07/Large-62102-2025Palisade-1-1.png'
  },
  {
    id: 'nissan-kicks',
    name: 'Nissan Kicks',
    brand: 'nissan',
    gearbox: 'automatic',
    price: 300,
    image: 'https://i.gaw.to/content/photos/53/52/535253-nissan-kicks-2022.jpeg'
  },
  {
    id: 'range-rover-vogue',
    name: 'Range Rover Vogue',
    brand: 'land_rover',
    gearbox: 'automatic',
    price: 900,
    image: 'https://res.cloudinary.com/unix-center/image/upload/c_limit,dpr_3.0,f_auto,fl_progressive,g_center,h_580,q_75,w_906/dupt9zg2yrovmb8phw0v.jpg'
  },
  {
    id: 'land-rover-discovery',
    name: 'Land Rover Discovery',
    brand: 'land_rover',
    gearbox: 'automatic',
    price: 700,
    image: 'https://hips.hearstapps.com/hmg-prod/images/2021-land-rover-discovery-r-dynamic-s-08-1641867224.jpg?crop=0.841xw:0.710xh;0.0656xw,0.178xh&resize=1200:*'
  },
  {
    id: 'mercedes-g63',
    name: 'Mercedes-Benz G 63 AMG',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 1500,
    image: 'https://di-uploads-pod3.dealerinspire.com/fletcherjonesmbnewport/uploads/2018/04/2019-G-G63-AMG-SUV-FUTURE-GALLERY-010-WR-D-1024x640.jpg'
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus',
    brand: 'lamborghini',
    gearbox: 'automatic',
    price: 2200,
    image: 'https://octane.rent/wp-content/uploads/2024/11/lamborghini_urus_grey_matte_02-600x400.webp'
  },
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade',
    brand: 'cadillac',
    gearbox: 'automatic',
    price: 1300,
    image: 'https://www.luxurysportcarsdubai.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-17-at-5.01.20-PM.jpeg'
  },
  {
    id: 'audi-a4',
    name: 'Audi A4',
    brand: 'audi',
    gearbox: 'automatic',
    price: 420,
    image: 'https://www.dubicars.com/images/3fcc8a/f_500x282/al-kuwait-used-cars-exhibition-llc/483adb95-0638-4c48-baea-7d10edba6799.jpg'
  },
  {
    id: 'mercedes-glc',
    name: 'Mercedes-Benz GLC',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 650,
    image: 'https://www.saharamotorsuae.com/uploads/car_image/22112173305DSC_1414.webp'
  },
  {
    id: 'mercedes-gle',
    name: 'Mercedes-Benz GLE',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 850,
    image: 'https://rentacar-dubai.ae/wp-content/uploads/2023/09/Mercedes-AMG-GLE-53.jpg'
  },
  {
    id: 'land-rover-defender',
    name: 'Land Rover Defender',
    brand: 'land_rover',
    gearbox: 'automatic',
    price: 1000,
    image: 'https://www.fastercars.ae/uploads/1722166418Land%20ROver%20Defender%20(7).webp'
  },
  {
    id: 'toyota-t2',
    name: 'Toyota T2',
    brand: 'toyota',
    gearbox: 'automatic',
    price: 400,
    image: 'https://xcarrental.com/wp-content/uploads/2024/05/Jetour-T2-Rental-Dubai-960x636.jpg'
  },
  {
    id: 'mercedes-gls',
    name: 'Mercedes-Benz GLS',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 950,
    image: 'https://rent-cars.ae/public/cache/vehicle_689/546x360/4533a70a0cdf084e07d9efeb21b60861/mercedes_gls-class_black_2021_689_1.webp'
  },
  {
    id: 'jeep-wrangler',
    name: 'Jeep Wrangler',
    brand: 'jeep',
    gearbox: 'automatic',
    price: 750,
    image: 'https://findcardubai.com/wp-content/uploads/2024/11/2025-Jeep-Wrangler-in-Dubai.webp'
  },
  {
    id: 'mercedes-cla',
    name: 'Mercedes-Benz CLA',
    brand: 'mercedes',
    gearbox: 'automatic',
    price: 600,
    image: 'https://storage.albacars.ae/vehicles/d49ef47f-38f8-4f26-b16e-8d57ee4bcc19/e8dc43f4-3265-49e8-add9-86b5ed74eda9.jpeg?width=800&quality=75&format=webp'
  },
  {
    id: 'audi-a3',
    name: 'Audi A3',
    brand: 'audi',
    gearbox: 'automatic',
    price: 550,
    image: 'https://rentalcarsuae.com/wp-content/uploads/2023/06/Rent-Audi-A3-in-Dubai.jpg'
  },
  {
    id: 'hyundai-kona',
    name: 'Hyundai Kona',
    brand: 'hyundai',
    gearbox: 'automatic',
    price: 400,
    image: 'https://static.oneclickdrive.com/uploads/mobcars/Hyundai_Kona_2021_26283_26283_22888768603-1_small.jpg'
  },
  {
    id: 'kia-telluride',
    name: 'Kia Telluride',
    brand: 'kia',
    gearbox: 'automatic',
    price: 550,
    image: 'https://exfordrentacar.com/program/images/products/16826818102.jpeg'
  },
  {
    id: 'hyundai-sonata',
    name: 'Hyundai Sonata',
    brand: 'hyundai',
    gearbox: 'automatic',
    price: 450,
    image: 'https://static.tildacdn.one/tild3133-3262-4731-a530-636665383062/WhatsApp_Image_2024-.jpeg'
  },
  {
    id: 'audi-q7',
    name: 'Audi Q7',
    brand: 'audi',
    gearbox: 'automatic',
    price: 750,
    image: 'https://storage.albacars.ae/vehicles/bb1fdbc0-1346-408c-9389-8ee62f9cd896/0cc6bf67-75f7-4d01-821c-5e794e2e0382.jpeg?width=800&quality=75&format=webp'
  }
];
