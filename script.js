document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('skills')) {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
            bar.style.width = '0';
            const targetWidth = bar.textContent.includes('Intermediate') ? '66%' : '33%';
            bar.textContent = '';
            bar.setAttribute('data-width', targetWidth);
        });
        progressBars.forEach((bar, index) => {
            setTimeout(() => {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
                setTimeout(() => {
                    bar.textContent = targetWidth === '66%' ? 'Intermediate' : 'Beginner';
                }, 500);
            }, index * 300);
        });
    }
});