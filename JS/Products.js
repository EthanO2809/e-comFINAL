let Clothes = [
    {
        id: 1,
        image: "https://i.postimg.cc/SKPR9Jz8/bayern-tab-min.jpg",
        Name: "ADIDAS FC Bayern Munchen 22/23 Jersey",
        Price: "R1600,00",
    },
    {
        id: 2,
        image: "https://i.postimg.cc/br9nckmb/9093476a9f0577bf3a6b46ea76e92709.jpg",
        Name: "Nike PSG Alternate 23/24 Jersey",
        Price: "R1950,00",
    },
    {
        id: 3,
        image: "https://i.postimg.cc/Y0KcKwTT/cnk-jordan-psg-1.jpg",
        Name: "Jordan PSG 20/21 Hoodie",
        Price: "R1400,00",
    },
    {
        id: 4,
        image: "https://i.postimg.cc/7Ps7VZ8B/c6578b310aad413fb21a26362cb3f2bd.webp",
        Name: "ADIDAS Black Fitness Tights",
        Price: "R600,00",
    },
    {
        id: 5,
        image: "https://i.postimg.cc/hGLZz7YZ/HO22-NBACity-Edition-NA-Off-Body-Golden-State-Hero-0036-05-scaled.webp",
        Name: "NIKE Golden State Warriors 22/23 Jersey",
        Price: "R1800,00",
    },
];

let dispClothes = document.getElementById('clothing-section');
Clothes.forEach((data) => {
    dispClothes.innerHTML += `
    <div class="card-grid">
             <a href="./page/products.html" class="card">
        <div class="card__bg" style="background-image: url(${data.image})"></div>
              <div class="card__content">
                <p class="card__category"><b>${data.Name}</b></p>
                <h3 class="card__heading text-white">${data.Price}</h3>
              </div>
             </a>
        
            
        </div>
    </div>
    `;
});

let Sneakers = [
    {
        id: 1,
        image: "https://i.postimg.cc/d0j46ZY7/193089.webp",
        Name: "NIKE AirMax 98'",
        Price: "R3599,95",
    },
    {
        id: 2,
        image: "https://i.postimg.cc/9XZBfDxw/photo-1617659512089-6fdec6c54406.jpg",
        Name: "NIKE Air Force 1 98'",
        Price: "R1800,00",
    },
    {
        id: 3,
        image: "https://i.postimg.cc/wMkFXHfd/desktop-wallpaper-nike-dunk-low-retro-black-white-the-darkside-initiative.jpg",
        Name: "NIKE DUNK Low 'Pandas'",
        Price: "R3400,00",
    },
    {
        id: 4,
        image: "https://i.postimg.cc/fWfBK3xn/nike-air-jordan-11-retro-low-b-1650205434-d7348d8a-progressive.jpg",
        Name: "NIKE AIR JORDAN 11 Retro Low 'Bred'",
        Price: "R4600,00",
    },
    {
        id: 5,
        image: "https://i.postimg.cc/nrWkDmQ6/download-2.jpg",
        Name: "JORDAN 13's 'Christopher Wallace'",
        Price: "R1800,00",
    },
];

let dispSneakers = document.getElementById('sneaker-section');
Sneakers.forEach((data) => {
    dispSneakers.innerHTML += `
    <div class="card-grid">
             <a href="./page/products.html" class="card">
        <div class="card__bg" style="background-image: url(${data.image})"></div>
              <div class="card__content">
                <p class="card__category"><b>${data.Name}</b></p>
                <h3 class="card__heading text-white">${data.Price}</h3>
              </div>
             </a>
        
            
        </div>
    </div>
    `;
});
let Accessories = [
    {
        id: 1,
        image: "https://i.postimg.cc/28X19MBd/bfbfb561529c81af67abe115b1b65e98.png",
        Name: "NIKE Black Dri-Fit Cap",
        Price: "R449,95",
    },
    {
        id: 2,
        image: "https://i.postimg.cc/L6TyDqFg/Apple-delivers-apple-watch-series-6-09152020-big-jpg-large.jpg",
        Name: "APPLE Watch Series 6",
        Price: "R8999,95",
    },
    {
        id: 3,
        image: "https://i.postimg.cc/2yJ5NkPQ/17234517.jpg",
        Name: "NIKE Soccer Ball",
        Price: "R499,00",
    },
    {
        id: 4,
        image: "https://i.postimg.cc/zXzmqYJW/desktop-wallpaper-nike-for-apple-watch-iwatch.jpg",
        Name: "NIKE Fitness Watch 23'",
        Price: "R6800,00",
    },
    {
        id: 5,
        image: "https://i.postimg.cc/DyXCVCGs/photo-1612387604874-e75a5820637a.jpg",
        Name: "NIKE Phantom 22'",
        Price: "R3600,00",
    },
];

let dispAccessories = document.getElementById('accessories-section');
Accessories.forEach((data) => {
    dispAccessories.innerHTML += `
    <div class="card-grid">
             <a href="./page/products.html" class="card">
        <div class="card__bg" style="background-image: url(${data.image})"></div>
              <div class="card__content">
                <p class="card__category"><b>${data.Name}</b></p>
                <h3 class="card__heading text-white">${data.Price}</h3>
              </div>
             </a>
        
            
        </div>
    </div>
    `;
});