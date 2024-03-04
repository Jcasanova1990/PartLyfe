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
    {name: 'GeForce RTX 4090', image: '/img/nvidia.jpg', category: categories[0], price: 5.95},
    {name: 'GeForce RTX 4080', image: '/img/nvidia.jpg', category: categories[0], price: 5.95},
    {name: 'GeForce RTX 4070', image: '/img/nvidia.jpg', category: categories[0], price: 5.95},
    {name: 'GeForce RTX 4060', image: '/img/nvidia.jpg', category: categories[0], price: 5.95},
    {name: 'GeForce RTX 3090', image: '/img/nvidia.jpg', category: categories[0], price: 5.95},
    {name: 'GeForce RTX 3080 Ti', image: '/img/nvidia.jpg', category: categories[0], price: 6.95},
    {name: 'GeForce RTX 3080', image: '/img/nvidia.jpg', category: categories[0], price: 6.95},
    {name: 'GeForce RTX 3070 Ti', image: '/img/nvidia.jpg', category: categories[0], price: 6.95},
    {name: 'GeForce RTX 3070', image: '/img/nvidia.jpg', category: categories[0], price: 6.95},
    {name: 'GeForce RTX 3060 Ti', image: '/img/nvidia.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Radeon RX 7900 XTX', image: '/img/amd.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Radeon RX 7900 XT', image: '/img/amd.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Radeon RX 7800 XT', image: '/img/amd.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Radeon RX 7700 XT', image: '/img/amd.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Radeon RX 7600 XT', image: '/img/amd.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Radeon RX 7600', image: '/img/amd.jpg', category: categories[0], price: 6.95},
    {name: 'AMD Ryzen Threadripper PRO 7995WX', image: '/amd.jpg', category: categories[1], price: 6.95},
    {name: 'AMD Ryzen Threadripper PRO 5995WX', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'AMD Ryzen Threadripper PRO 5975WX', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'AMD Ryzen Threadripper 3990X', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'AMD Ryzen Threadripper 3970X', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'Intel Xeon w9-3495X Processor', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'Intel Xeon w7-2495X Processor', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'Intel Core i9 processor 14900K', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'Intel Core i9 processor 14900KF', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'Intel Core i9-13900KS Processor', image: '/img/amd.jpg', category: categories[1], price: 6.95},
    {name: 'Gigabyte X670 Aorus Elite AX', image: '/img/amd.jpg', category: categories[2], price: 6.95},
    {name: 'Asus TUF Gaming B650-Plus WiFi', image: '/img/amd.jpg', category: categories[2], price: 6.95},
    {name: 'Asus ROG Crosshair VIII Dark Hero', image: '/img/amd.jpg', category: categories[2], price: 6.95},
    {name: 'MSI MAG Z790 Tomahawk WiFi', image: '/img/intel.jpg', category: categories[2], price: 6.95},
    {name: 'Gigabyte Z690 Aorus Pro', image: '/img/intel.jpg', category: categories[2], price: 6.95},
    {name: 'MSI MAG B660M Mortar WiFi DDR4', image: '/img/intel.jpg', category: categories[2], price: 6.95},
    {name: 'Klevv Cras XR5 RGB DDR5', image: '/img/DDR5', category: categories[3], price: 6.95},
    {name: 'XPG Lancer RGB DDR5', image: '/img/DDR5', category: categories[3], price: 6.95},
    {name: 'Sabrent Rocket DDR5', image: '/img/DDR5', category: categories[3], price: 6.95},
    {name: 'Crucial Ballistix MAX RGB DDR4', image: '/img/DDR4', category: categories[3], price: 6.95},
    {name: 'Corsair Vengeance LPX DDR4', image: '/img/DDR4', category: categories[3], price: 6.95},
    {name: 'Cooler Master MASTERLIQUID ML240L RGB V2', image: '/img/240', category: categories[4], price: 99.99},
    {name: 'NZXT Kraken 240', image: '/img/240', category: categories[4], price: 127.99},
    {name: 'NZXT Kraken 240 RGB', image: '/img/240', category: categories[4], price: 159.99},
    {name: 'Corsair iCUE H100i RGB ELITE', image: '/img/240', category: categories[4], price: 114.99},
    {name: 'Asus ROG THOR 1600T Gaming', image: '/img/Titanium', category: categories[5], price: 6.95},
    {name: 'EVGA SuperNOVA 1600 T2', image: '/img/Titanium', category: categories[5], price: 6.95},
    {name: 'be quiet! Straight Power 12', image: '/img/Platinum', category: categories[5], price: 6.95},
    {name: 'MSI MEG Ai1300P PCIE5', image: '/img/Platinum', category: categories[5], price: 6.95},
    {name: 'Corsair AX1200', image: '/img/Gold', category: categories[5], price: 799.00},
    {name: 'Cooler Master MWE Gold V2 ATX3.0', image: '/img/Gold', category: categories[5], price: 129.99},
    {name: 'Lian Li PC-O11 Dynamic', image: '/img/ATX', category: categories[6], price: 119.95},
    {name: 'Phanteks Enthoo Pro', image: '/img/DDR4', category: categories[6], price: 99.99},
    {name: 'Fractal Design Meshify 2 XL', image: '/img/DDR4', category: categories[6], price: 204.99},
    {name: 'Phanteks NV7', image: '/img/DDR4', category: categories[6], price: 179.99},
    {name: 'Thermaltake Core W200', image: '/img/DDR4', category: categories[6], price: 506.49},
    {name: 'Thermaltake Tower 900', image: '/img/DDR4', category: categories[6], price: 304.98},
  ]);

  console.log(items)

  process.exit();

})();