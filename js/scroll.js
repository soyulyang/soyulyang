function scrollLeft(container) {
  container.scrollBy({
    left: -300,
    behavior: 'smooth',
  });
}

function scrollRight(container) {
  container.scrollBy({
    left: 300,
    behavior: 'smooth',
  });

  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
    setTimeout(() => {
      container.scrollTo({
        left: 0,
        behavior: 'smooth',
      });
    }, 300);
  }
}

// Handle button clicks
document.querySelectorAll('.scroll-btn').forEach(button => {
  button.addEventListener('click', () => {
    console.log('Button clicked');  // 버튼 클릭 시 확인
    const direction = button.getAttribute('data-direction');
    console.log(direction);
    const targetSelector = button.getAttribute('data-target');
    console.log(targetSelector);
    const container = document.querySelector(targetSelector);
    console.log(container);

    if (direction === 'left') {
      scrollLeft(container);
    } else if (direction === 'right') {
      scrollRight(container);
    }
  });
});

// 모든 .works-cards 요소를 가져와서 자동 스크롤 설정
document.querySelectorAll('.works-cards').forEach(container => {
  setInterval(() => {
    scrollRight(container); // 각 컨테이너별로 오른쪽으로 스크롤
  }, 5000); // 5초마다 실행
});