
function handleScrollAndAlign(button) {
  const direction = button.getAttribute("data-direction");
  const targetSelector = button.getAttribute("data-target"); 
  const container = document.querySelector(targetSelector);

  if (!container) {
    console.error("스크롤 컨테이너를 찾을 수 없습니다:", targetSelector);
    return;
  }

  // 정렬 상태 설정
  const cards = container.querySelectorAll(".works-card");
  if (cards.length < 3) {
    container.style.justifyContent = "center"; 
  } else {
    container.style.justifyContent = "flex-start";
  }

  if (direction === "left") {
    scrollLeft(container);
  } else if (direction === "right") {
    scrollRight(container);
  }
}

function scrollLeft(container) {
  container.scrollBy({
    left: -520,
    behavior: "smooth",
  });
}

function scrollRight(container) {
  container.scrollBy({
    left: 520,
    behavior: "smooth",
  });

  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    setTimeout(() => {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".scroll-btn").forEach((button) => {
    button.addEventListener("click", () => handleScrollAndAlign(button));
  });

  document.querySelectorAll(".works-cards").forEach((container) => {
    const cards = container.querySelectorAll(".works-card");
    if (cards.length < 3) {
      container.style.justifyContent = "center";
    } else {
      container.style.justifyContent = "flex-start";
    }
  });
});
