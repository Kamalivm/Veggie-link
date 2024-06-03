import apple from "../assets/apple.avif";
import strawberry from '../assets/strawberry.png'
import orange from '../assets/orange.jpg'
import melon from '../assets/melon.png'
import kiwi from '../assets/kiwi.avif'
import grapes from '../assets/grapes.png'
import amla from '../assets/amla.webp'
import mango from '../assets/mango.jpg'

import pumpkin from '../assets/pumpkin.png'
import carrot from '../assets/carrot.jpg'
import onion from '../assets/onion.webp'
import cabbage from '../assets/cabbage.webp'
import potato from '../assets/potato.jpg'
import tomato from '../assets/tomato.jpeg'
import corn from '../assets/corn.jpg'
import brinjal from '../assets/brinjal.jpeg'
import bittergourd from '../assets/bittergourd.jpg'
import ladiesfinger from '../assets/ladiesfinger.jpg'
import bloomsdale from '../assets/bloomsdale.jpg'
import escalade from '../assets/escalade.jpg'
import planthub from '../assets/planthub.jpg'
import regiment from '../assets/regiment.jpg'
import aywal from '../assets/aywal.webp'
import flaxseed from '../assets/flaxseed.jpg'
import pumpkinseed from '../assets/pumpkinseed.jpg'
import sesameseed from '../assets/sesameseed.jpg'
import sunflowerseed from '../assets/sunflowerseed.jpg'
import watermelonseed from '../assets/watermelonseed.jpg'

const Data = {
    fruitItems: [
        {
            id: 1,
            img: apple,
            title: 'Apple',
            price: 150,
            description: 'A sweet, crisp fruit perfect for snacking or adding to salads.',
            rating: 4.5
        },
        {
            id: 2,
            img: strawberry,
            title: 'Strawberry',
            price: 90,
            description: 'Juicy and delicious, strawberries are a great source of vitamins.',
            rating: 4.2
        },
        {
            id: 3,
            img: melon,
            title: 'Melon',
            price: 30,
            description: 'Refreshing and hydrating, melons are ideal for hot summer days.',
            rating: 4.0
        },
        {
            id: 4,
            img: mango,
            title: 'Mango',
            price: 25,
            description: 'Known as the king of fruits, mangoes are sweet and rich in flavor.',
            rating: 4.8
        },
        {
            id: 5,
            img: kiwi,
            title: 'Kiwi',
            price: 95,
            description: 'Tart and sweet, kiwis are packed with vitamin C and antioxidants.',
            rating: 4.1
        },
        {
            id: 6,
            img: grapes,
            title: 'Grapes',
            price: 40,
            description: 'Perfect for snacking, grapes are sweet, juicy, and high in nutrients.',
            rating: 4.3
        },
        {
            id: 7,
            img: orange,
            title: 'Orange',
            price: 60,
            description: 'Citrusy and refreshing, oranges are great for boosting your immune system.',
            rating: 4.6
        },
        {
            id: 8,
            img: amla,
            title: 'Amla',
            price: 20,
            description: 'Also known as Indian gooseberry, amla is rich in vitamin C and antioxidants.',
            rating: 4.4
        }
    ],
    vegetableItems: [
        {
            id: 9,
            img: pumpkin,
            title: 'Pumpkin',
            price: 20,
            description: 'A versatile vegetable used in soups, pies, and savory dishes.',
            rating: 3.9
        },
        {
            id: 10,
            img: carrot,
            title: 'Carrot',
            price: 30,
            description: 'Crunchy and sweet, carrots are great raw or cooked in various dishes.',
            rating: 4.0
        },
        {
            id: 11,
            img: onion,
            title: 'Onion',
            price: 50,
            description: 'A staple ingredient in many dishes, onions add flavor and depth.',
            rating: 4.2
        },
        {
            id: 12,
            img: cabbage,
            title: 'Cabbage',
            price: 15,
            description: 'A leafy green vegetable often used in salads and cooked dishes.',
            rating: 3.8
        },
        {
            id: 13,
            img: potato,
            title: 'Potato',
            price: 35,
            description: 'A versatile root vegetable that can be baked, mashed, or fried.',
            rating: 4.3
        },
        {
            id: 14,
            img: tomato,
            title: 'Tomato',
            price: 50,
            description: 'Juicy and tangy, tomatoes are essential in salads, sauces, and more.',
            rating: 4.5
        },
        {
            id: 15,
            img: corn,
            title: 'Corn',
            price: 30,
            description: 'Sweet and crunchy, corn is perfect for grilling or adding to salads.',
            rating: 4.1
        },
        {
            id: 16,
            img: brinjal,
            title: 'Brinjal',
            price: 12,
            description: 'Also known as eggplant, brinjal is great in stews, curries, and grilled dishes.',
            rating: 3.7
        },
        {
            id: 17,
            img: bittergourd,
            title: 'Bitter Gourd',
            price: 10,
            description: 'A unique vegetable known for its bitter taste and health benefits.',
            rating: 3.5
        },
        {
            id: 18,
            img: ladiesfinger,
            title: 'Ladies Finger',
            price: 10,
            description: 'Also known as okra, it is popular in soups, stews, and fried dishes.',
            rating: 3.8
        }
    ],
    spinachItems:[
        { 
            id: 19,
            img: bloomsdale,
            title: 'Bloomsdale',
            price: 15,
            description: 'A variety of spinach known for its dark green, crinkled leaves.',
            rating: 4.2
        },
        {
            id: 20,
            img: escalade,
            title: 'Escalade',
            price: 15,
            description: 'A hybrid spinach variety with smooth, dark green leaves.',
            rating: 4.0
        },
        {
            id: 21,
            img: planthub,
            title: 'Planthub',
            price: 15,
            description: 'A nutritious spinach variety with tender, succulent leaves.',
            rating: 4.3
        },
        {
            id: 22,
            img: regiment,
            title: 'Regiment',
            price: 25,
            description: 'A high-yield spinach variety with dark green, smooth leaves.',
            rating: 4.5
        },
        {
            id: 23,
            img: aywal,
            title: 'Aywal',
            price: 25,
            description: 'A spinach variety known for its high nutritional content and robust flavor.',
            rating: 4.4
        },
    ],
    seedItems:[
        { 
            id: 24,
            img: flaxseed,
            title: 'Flax Seed',
            price: 20,
            description: 'Rich in omega-3 fatty acids, fiber, and essential nutrients, flax seeds promote heart health, aid digestion, and improve skin health.',
            rating: 4.3
        },
        {
            id: 25,
            img: pumpkinseed,
            title: 'Pumpkin Seed',
            price: 30,
            description: 'Known as pepitas, pumpkin seeds are a protein-rich snack packed with fiber, vitamins, and minerals, ideal for both sweet and savory dishes.',
            rating: 4.0
        },
        {
            id: 26,
            img: sesameseed,
            title: 'Sesame Seed',
            price: 10,
            description: 'Sesame seeds, with their nutty flavor and crunchy texture, are nutrient powerhouses rich in healthy fats, protein, and essential vitamins and minerals.',
            rating: 4.3
        },
        {
            id: 27,
            img: sunflowerseed,
            title: 'Sunflower Seed',
            price: 35,
            description: 'Enjoyed as a snack or added to salads and baked goods, sunflower seeds are nutrient-dense, providing healthy fats, protein, fiber, and essential nutrients.',
            rating: 4.5
        },
        {
            id: 28,
            img: watermelonseed,
            title: 'Watermelon Seed',
            price: 25,
            description: 'Packed with protein, healthy fats, vitamins, and minerals, watermelon seeds are often roasted and seasoned for a delicious snack or used in salads and trail mixes.',
            rating: 4.4
        },
    ],
    
};

export default Data;
