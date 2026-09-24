// ===== TẠO NỀN SAO =====
document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('stars');
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Kích thước ngẫu nhiên
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';

        // Vị trí ngẫu nhiên
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // Độ sáng ngẫu nhiên
        star.style.opacity = Math.random() * 0.7 + 0.3;

        // Thời gian nhấp nháy ngẫu nhiên
        star.style.animationDuration = (Math.random() * 3 + 2) + 's';
        star.style.animationDelay = (Math.random() * 3) + 's';

        starsContainer.appendChild(star);
    }
});
