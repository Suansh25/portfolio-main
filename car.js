document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.querySelector('.product-container');
    const nxtBtn = document.querySelector('.nxt-btn');
    const preBtn = document.querySelector('.pre-btn');

    const cardWidth = document.querySelector('.product-card').offsetWidth + 20; // 20px gap

    nxtBtn.addEventListener('click', () => {
        productContainer.scrollLeft += cardWidth * 3; // Scroll 3 cards
    });

    preBtn.addEventListener('click', () => {
        productContainer.scrollLeft -= cardWidth * 3;
    });
});
