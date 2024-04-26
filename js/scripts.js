const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');
hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

const currentYear = new Date();
document.querySelector('#currentYear').textContent = currentYear.getFullYear();

// hotel location data
import { hotels } from '../data/hotels.js';
const cards= document.querySelector('#cards');

hotels.forEach(hotel => {
    const hotelCard = document.createElement('section');

    const cardImg = document.createElement('img');
    cardImg.src = `images/${hotel.img}`;
    cardImg.alt = `Image of ${hotel.name}`;

    const cardName = document.createElement('h2');
    cardName.textContent = hotel.name;

    const cardAddress = document.createElement('address');
    cardAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`

    const cardPhone = document.createElement('a');
    cardPhone.href = `tel:${hotel.phone}`;
    cardPhone.textContent = hotel.phone;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = hotel.description;

    hotelCard.appendChild(cardName);
    hotelCard.appendChild(cardImg);
    hotelCard.appendChild(cardDescription);
    hotelCard.appendChild(cardAddress);
    hotelCard.appendChild(cardPhone);
    cards.appendChild(hotelCard);
})