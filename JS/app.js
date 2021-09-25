document.addEventListener("DOMContentLoaded", () => {
  const heroMain = document.querySelector("#hero-main");
  const heroTitle = document.querySelector(".hero-title");
  const heroTextContainer = document.querySelector(".hero-text-container");
  const titleWords = document.querySelectorAll(".title-word");
  const titleMultiWords = document.querySelectorAll(".title-multiword");
  const titleWordContainers = document.querySelectorAll(".title-word-container");
  let delay = 1;

  for (let i = 0; i < titleWordContainers.length; i++) {
    titleWordContainers[i].style.width = titleWords[i].clientWidth + "px";
    titleWordContainers[i].style.height = titleWords[i].clientHeight + "px";

    switch (i) {
      case 0:
        titleWords[i].style.animation = `animateWordUp 0.3s ${delay}s forwards`;
        break;
      case 1:
        titleWords[i].style.animation = `animateWordDown 0.3s ${delay}s forwards`;
        break;
      case 2:
        titleWords[i].style.animation = `animateWordUp 0.3s ${delay}s forwards`;
        break;
      case 3:
        titleWords[i].style.animation = `animateWordDown 0.3s ${delay}s forwards`;
        break;
      case 4:
        titleWords[i].style.animation = `animateWordUp 0.3s ${delay}s forwards`;
        break;
      case 5:
        titleMultiWords[i].style.animation = `animateWordUp 0.3s ${delay}s forwards`;
        break;
      default:
        break;
    }

    delay += 0.3;
  }

  heroMain.style.animationName = "moveToHeaderPosition";
  setTimeout(function () {
    heroTitle.innerHTML = "Welcome to your Cup of Happiness";
    for (let i = 0; i < titleWordContainers.length; i++) {
      titleWordContainers[i].style.display = "none";
    }
    heroTitle.style.animationName = "reduceFontSize";
  }, 6000);
});
