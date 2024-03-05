require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'GPU', sortOrder: 10},
    {name: 'CPU', sortOrder: 20},
    {name: 'PCB', sortOrder: 30},
    {name: 'RAM', sortOrder: 40},
    {name: 'COOLING', sortOrder: 50},
    {name: 'PSU', sortOrder: 60},
    {name: 'CASE', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'GeForce RTX 4090', image: '/img/nvidia.jpg', category: categories[0], price: 1599.00},
    {name: 'GeForce RTX 4080', image: '/img/nvidia.jpg', category: categories[0], price: 1399.00},
    {name: 'GeForce RTX 4070', image: '/img/nvidia.jpg', category: categories[0], price: 549.00},
    {name: 'GeForce RTX 4060', image: '/img/nvidia.jpg', category: categories[0], price: 299.99},
    {name: 'GeForce RTX 3090', image: '/img/nvidia.jpg', category: categories[0], price: 1490.00},
    {name: 'GeForce RTX 3080 Ti', image: '/img/nvidia.jpg', category: categories[0], price: 1258.98},
    {name: 'GeForce RTX 3080', image: '/img/nvidia.jpg', category: categories[0], price: 911.48},
    {name: 'GeForce RTX 3070 Ti', image: '/img/nvidia.jpg', category: categories[0], price: 864.99},
    {name: 'GeForce RTX 3070', image: '/img/nvidia.jpg', category: categories[0], price: 529.99},
    {name: 'GeForce RTX 3060 Ti', image: '/img/nvidia.jpg', category: categories[0], price: 429.99},
    {name: 'AMD Radeon RX 7900 XTX', image: '/img/amd.jpg', category: categories[0], price: 999.00},
    {name: 'AMD Radeon RX 7900 XT', image: '/img/amd.jpg', category: categories[0], price: 749.00},
    {name: 'AMD Radeon RX 7800 XT', image: '/img/amd.jpg', category: categories[0], price: 499.00},
    {name: 'AMD Radeon RX 7700 XT', image: '/img/amd.jpg', category: categories[0], price: 324.99},
    {name: 'AMD Radeon RX 7600 XT', image: '/img/amd.jpg', category: categories[0], price: 484.99},
    {name: 'AMD Radeon RX 7600', image: '/img/amd.jpg', category: categories[0], price: 269.00},
    {name: 'AMD Ryzen Threadripper PRO 7995WX', image: '/img/THR.png', category: categories[1], price: 9999.99},
    {name: 'AMD Ryzen Threadripper PRO 5995WX', image: '/img/THR.png', category: categories[1], price: 7051.99},
    {name: 'AMD Ryzen Threadripper PRO 5975WX', image: '/img/THR.png', category: categories[1], price: 3299.00},
    {name: 'AMD Ryzen Threadripper 3990X', image: '/img/THR.png', category: categories[1], price: 4255.00},
    {name: 'AMD Ryzen Threadripper 3970X', image: '/img/THR.png', category: categories[1], price: 1900.99},
    {name: 'Intel Xeon w9-3495X Processor', image: '/img/xeon.png', category: categories[1], price: 6129.00},
    {name: 'Intel Xeon w7-2495X Processor', image: '/img/xeon.png', category: categories[1], price: 2130.00},
    {name: 'Intel Core i9 processor 14900K', image: '/img/intel.png', category: categories[1], price: 671.99},
    {name: 'Intel Core i9 processor 14900KF', image: '/img/intel.png', category: categories[1], price: 574.00},
    {name: 'Intel Core i9-13900KS Processor', image: '/img/intel.png', category: categories[1], price: 639.99},
    {name: 'Gigabyte X670 Aorus Elite AX', image: '/img/GB.png', category: categories[2], price: 249.99},
    {name: 'Asus TUF Gaming B650-Plus WiFi', image: '/img/asus.png', category: categories[2], price: 210.00},
    {name: 'Asus ROG Crosshair VIII Dark Hero', image: '/img/asus.png', category: categories[2], price: 302.00},
    {name: 'MSI MAG Z790 Tomahawk WiFi', image: '/img/msi.png', category: categories[2], price: 548.00},
    {name: 'Gigabyte Z690 Aorus Pro', image: '/img/GB.png', category: categories[2], price: 280.00},
    {name: 'MSI MAG B660M Mortar WiFi DDR4', image: '/img/msi.png', category: categories[2], price: 170.00},
    {name: 'Klevv Cras XR5 RGB DDR5', image: '/img/klev.png', category: categories[3], price: 131.00},
    {name: 'XPG Lancer RGB DDR5', image: '/img/xpg.png', category: categories[3], price: 129.99},
    {name: 'Sabrent Rocket DDR5', image: '/img/sab.png', category: categories[3], price: 50.00},
    {name: 'Crucial Ballistix MAX RGB DDR4', image: '/img/crucial.png', category: categories[3], price: 300.00},
    {name: 'Corsair Vengeance LPX DDR4', image: '/img/cors.png', category: categories[3], price: 54.99},
    {name: 'Cooler Master MASTERLIQUID ML240L RGB V2', image: '/img/coom.png', category: categories[4], price: 99.99},
    {name: 'NZXT Kraken 240', image: '/img/nzxt.png', category: categories[4], price: 127.99},
    {name: 'NZXT Kraken 240 RGB', image: '/img/nzxt.png', category: categories[4], price: 159.99},
    {name: 'Corsair iCUE H100i RGB ELITE', image: '/img/cors.png', category: categories[4], price: 114.99},
    {name: 'Asus ROG THOR 1600T Gaming', image: '/img/asus.png', category: categories[5], price: 650.00},
    {name: 'EVGA SuperNOVA 1600 T2', image: '/img/evga.png', category: categories[5], price: 674.00},
    {name: 'be quiet! Straight Power 12', image: '/img/bqu.png', category: categories[5], price: 269.00},
    {name: 'MSI MEG Ai1300P PCIE5', image: '/img/msi.png', category: categories[5], price: 300.00},
    {name: 'Corsair AX1200', image: '/img/cors.png', category: categories[5], price: 799.00},
    {name: 'Cooler Master MWE Gold V2 ATX3.0', image: '/img/coom.png', category: categories[5], price: 129.99},
    {name: 'Lian Li PC-O11 Dynamic', image: '/img/lian.png', category: categories[6], price: 119.95},
    {name: 'Phanteks Enthoo Pro', image: '/img/phanteks.png', category: categories[6], price: 99.99},
    {name: 'Fractal Design Meshify 2 XL', image: '/img/fract.png', category: categories[6], price: 204.99},
    {name: 'Phanteks NV7', image: '/img/phanteks.png', category: categories[6], price: 179.99},
    {name: 'Thermaltake Core W200', image: '/img/TT.png', category: categories[6], price: 506.49},
    {name: 'Thermaltake Tower 900', image: '/img/TT.png', category: categories[6], price: 304.98},
  ]);

  console.log(items)

  process.exit();

})();