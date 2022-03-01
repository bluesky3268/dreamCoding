// 기존에 사용했던 top, left는 layout, paint가 계속 발생하기 때문에 성능에 좋지 않음
// -> transform, translate를 이용(composite만 발생)

const vertical = document.querySelector(".vertical");
const horizontal = document.querySelector(".horizontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

addEventListener('load', () => {
    document.addEventListener("mousemove", event => {
        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;

        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;

        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });
});

addEventListener('click', event => {
    const x = event.clientX;
    const y = event.clientY;
    alert(`(${x}px, ${y}px)입니다.`);
})
