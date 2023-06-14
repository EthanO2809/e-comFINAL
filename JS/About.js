let personalInfo = [
  {
    firstName: "Ethan",
    lastName: "Oliver",
    position: "CEO & Founder",
    email: "example@gmail.com",
    backgroundimage: "https://i.postimg.cc/QdbR97yQ/IMG-9863-1.jpg",
  },
];

let dispPersonalinfo = document.getElementById("card");
personalInfo.forEach((data) => {
  dispPersonalinfo.innerHTML += `
    <div class="card-grid3">
    <div class="card__bg3" 
    style="background-image: url(${data.backgroundimage})">
    </div>
    <div class="card__content3">
    <p class="card__category3"><b>${data.firstName},${data.lastName}</b></p>
    <h3 class="card__heading3 text-white">${data.position}</h3>
    <p>${data.email}</p>
    </div>
    </div>
    `;
});

const splide = new Splide("#splide", {
  arrows: true,
  pagination: false,
  rewind: true,
  perPage: 1,
  autoheight: true,
});

splide.mount();

function setCaption() {
  const currentSlide = splide.Components.Elements.slides[splide.index];
  const caption = currentSlide.getAttribute("data-caption");
  const title = currentSlide.getAttribute("data-title");
  document.querySelector(".caption").textContent = caption;
  document.querySelector(".caption-title").textContent = title;
}

setCaption();
splide.on("move", function () {
  setCaption();
});
