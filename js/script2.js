	document.addEventListener('DOMContentLoaded', function () {
		const sections = [
			{ id: 'home', element: null },
			{ id: 'why-glados', element: null },
			{ id: 'features', element: null },
			{ id: 'how-it-works', element: null },
			{ id: 'team', element: null }
		];

		const navPoints = document.querySelectorAll('.nav-point');
		const progressLine = document.getElementById('progress-line');
		let isDesktop = window.innerWidth >= 768;

		sections.forEach(section => {
			section.element = document.getElementById(section.id);
		});

		function updateIndicator() {
			if (!progressLine) {
				console.warn('Element progress-line non trouvé');
				return;
			}

			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollProgress = Math.min(scrollTop / documentHeight, 1);

			if (isDesktop) {
				progressLine.style.height = `${scrollProgress * 100}%`;
				progressLine.style.width = '100%';
			} else {
				progressLine.style.width = `${scrollProgress * 100}%`;
				progressLine.style.height = '100%';
			}

			let activeSection = null;
			const windowHeight = window.innerHeight;
			const threshold = windowHeight * 0.25;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section.element) {
					const rect = section.element.getBoundingClientRect();
					if (rect.top <= threshold && rect.bottom >= -threshold) {
						activeSection = section.id;
						break;
					}
				}
			}

			if (!activeSection && scrollTop < 100) {
				activeSection = 'home';
			}

			navPoints.forEach(point => {
				const isActive = point.dataset.section === activeSection;
				point.classList.toggle('active', isActive);
			});
		}

		function handleResize() {
			const wasDesktop = isDesktop;
			isDesktop = window.innerWidth >= 768;

			if (wasDesktop !== isDesktop) {
				updateIndicator();
			}
		}

		navPoints.forEach(point => {
			point.addEventListener('click', function (e) {
				e.preventDefault();

				const targetSection = document.getElementById(this.dataset.section);
				if (targetSection) {

					this.style.transform = 'scale(0.9)';
					setTimeout(() => {
						this.style.transform = '';
					}, 200);

					const headerOffset = 80;
					const elementPosition = targetSection.offsetTop;
					const offsetPosition = elementPosition - headerOffset;

					window.scrollTo({
						top: offsetPosition,
						behavior: 'smooth'
					});

					this.classList.add('active');
					setTimeout(() => {
						updateIndicator();
					}, 1000);
				}
			});

			point.addEventListener('keydown', function (e) {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					this.click();
				}
			});

			point.addEventListener('touchstart', function () {
				this.classList.add('touch-active');
			});

			point.addEventListener('touchend', function () {
				setTimeout(() => {
					this.classList.remove('touch-active');
				}, 300);
			});
		});

		const observerOptions = {
			root: null,
			rootMargin: '-25% 0px -25% 0px',
			threshold: 0
		};

		const sectionObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const sectionId = entry.target.id;
					navPoints.forEach(point => {
						const isActive = point.dataset.section === sectionId;
						point.classList.toggle('active', isActive);
					});
				}
			});
		}, observerOptions);

		sections.forEach(section => {
			if (section.element) {
				sectionObserver.observe(section.element);
			}
		});

		let ticking = false;
		function throttledUpdate() {
			if (!ticking) {
				requestAnimationFrame(() => {
					updateIndicator();
					ticking = false;
				});
				ticking = true;
			}
		}

		window.addEventListener('scroll', throttledUpdate, { passive: true });
		window.addEventListener('resize', handleResize, { passive: true });

		setTimeout(() => {
			updateIndicator();
		}, 100);

		setTimeout(() => {
			document.getElementById('scroll-indicator').style.opacity = '1';
		}, 600);
	});