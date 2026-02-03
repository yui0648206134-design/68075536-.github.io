const images = document.querySelectorAll(".img-container img");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    index = i;
    popup.style.display = "flex";
    popupImg.src = img.src;
  });
});

closeBtn.onclick = () => popup.style.display = "none";

nextBtn.onclick = () => {
  index = (index + 1) % images.length;
  popupImg.src = images[index].src;
};

prevBtn.onclick = () => {
  index = (index - 1 + images.length) % images.length;
  popupImg.src = images[index].src;
};
