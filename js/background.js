// const images = ["0.jpg", "1.jpg", "2.jpg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

const backgrounds = [
  ["linear-gradient(to right, #56ccf2, #2f80ed)"],
  ["linear-gradient(to right, #E9E4F0, #D3CCE3)"],
  ["linear-gradient(to right, #f05053, #e1eec3)"],
  ["linear-gradient(to right, #22c1c3, #fdbb2d)"],
  ["linear-gradient(to right, #d9a7c7, #fffcdc)"],
];

// 페이지가 로드될 때마다 랜덤 배경색 적용
function setRandomBg() {
  const randomIndex = Math.floor(Math.random() * backgrounds.length);
  const randomBg = backgrounds[randomIndex];
  document.body.style.background = randomBg;
}

// 페이지 로드될 때마다 배경 변경 실행
window.onload = setRandomBg;
