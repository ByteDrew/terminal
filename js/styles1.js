
    document.addEventListener('DOMContentLoaded', function () {

        const preloadCriticalResources = () => {

            const avatars = document.querySelectorAll('img[src*="discord"]');
            avatars.forEach(img => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.href = img.src;
                link.as = 'image';
                document.head.appendChild(link);
            });
        };

        const improveFocusManagement = () => {
            let isUsingKeyboard = false;

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    isUsingKeyboard = true;
                    document.body.classList.add('keyboard-navigation');
                }
            });

            document.addEventListener('mousedown', () => {
                isUsingKeyboard = false;
                document.body.classList.remove('keyboard-navigation');
            });
        };

        const optimizeScrollPerformance = () => {
            let scrollEndTimer;

            window.addEventListener('scroll', () => {

                clearTimeout(scrollEndTimer);
                scrollEndTimer = setTimeout(() => {

                }, 150);
            }, { passive: true });
        };

        preloadCriticalResources();
        improveFocusManagement();
        optimizeScrollPerformance();

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(() => {

            });
        }
    });