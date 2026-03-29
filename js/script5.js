	const pageCounters = [
		{ id: 'uptime', value: '99.9', isPercentage: true },
		{ id: 'support-available', value: '24/7', isText: true },

	];

	function animateCounter(element, targetValue, duration = 2000) {
		const startValue = 0;
		const startTime = performance.now();

		const formatter = new Intl.NumberFormat('fr-FR');

		function updateCounter(currentTime) {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / duration, 1);

			const easeOutQuad = progress * (2 - progress);

			const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOutQuad);
			element.textContent = formatter.format(currentValue);

			if (progress < 1) {
				requestAnimationFrame(updateCounter);
			} else {
				element.textContent = formatter.format(targetValue);
			}
		}

		requestAnimationFrame(updateCounter);
	}

	pageCounters.forEach(counter => {
		const element = document.getElementById(counter.id);
		if (counter.isText) {

			element.textContent = counter.value;
		} else if (counter.isPercentage) {

			let count = 0;
			const target = parseFloat(counter.value);
			const increment = target / 50;

			const updateCounter = () => {
				if (count < target) {
					count += increment;
					if (count > target) count = target;
					element.textContent = count.toFixed(1) + '';
					requestAnimationFrame(updateCounter);
				} else {
					element.textContent = counter.value;
				}
			};

			updateCounter();
		}
	});

	document.addEventListener('DOMContentLoaded', async function () {
		try {

			const response = await fetch('/api/bot/stats');

			if (!response.ok) {
				throw new Error(`Erreur API: ${response.status}`);
			}

			const data = await response.json();
			const stats = data.stats;

			console.log('Statistiques récupérées:', stats);

			const formatter = new Intl.NumberFormat('fr-FR', { useGrouping: true });

			const totalServersElement = document.querySelector('#totalServers > span');
			const totalMembersElement = document.querySelector('#totalMembers > span');

			if (totalServersElement && stats.totalServeurs) {
				animateCounter(totalServersElement, stats.totalServeurs);
			}

			if (totalMembersElement && stats.totalMembers) {
				animateCounter(totalMembersElement, stats.totalMembers);
			}
		} catch (error) {
			console.error('Erreur lors de la récupération des statistiques:', error);

			const serversElement = document.querySelector('#totalServers > span');
			const membersElement = document.querySelector('#totalMembers > span');

			if (serversElement) {
				serversElement.innerText = '6 500+';
			}

			if (membersElement) {
				membersElement.innerText = '210 000+';
			}

			document.querySelectorAll('.server-stats').forEach(el => {
				el.textContent = '6 500+';
			});

			document.querySelectorAll('.member-stats').forEach(el => {
				el.textContent = '210 000+';
			});
		}
	});

	const testimonials = [
		{
			rating: 5,
			text: 'Bot bien représenté dans son but, et très conseillé. À utiliser',
			author: 'Dream',
			avatar: 'dream.webp',
			time: 'il y a 4h',
		},
		{
			rating: 5,
			text: 'Le bot est bien mais pour un gros mot petit comme caca...',
			author: 'Poulpe-glace',
			avatar: 'poulpe-glace.webp',
			time: 'il y a 1j',
		},
		{
			rating: 5,
			text: 'Rien à dire, le bot est top et le support est très réactif.',
			author: 'Titanoskill-67',
			avatar: 'titanoskill-67.webp',
			time: 'il y a 2j',
		},
	];
	let currentIndex = 0;
	const card = document.querySelector('.testimonial-card');
	let isAnimating = false;

	function updateTestimonial(direction = 'next') {
		if (isAnimating) return;
		isAnimating = true;

		const testimonial = testimonials[currentIndex];
		const wrapper = document.createElement('div');
		wrapper.className = 'testimonial-content';
		wrapper.innerHTML = `
                <div class="rating">
                    ${Array(testimonial.rating).fill('<i class="fas fa-star" style="color: #ffd700;"></i>').join('')}
                </div>
                <p>"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <img src="${testimonial.avatar}" alt="Avatar de ${testimonial.author}" class="author-avatar">
                    <div>
                        <strong>${testimonial.author}</strong>
                        <div>${testimonial.time}</div>
                    </div>
                </div>
            `;

		const oldContent = card.querySelector('.testimonial-content');
		if (oldContent) {
			oldContent.style.position = 'absolute';
			oldContent.style.width = '100%';
			oldContent.style.transform = 'translateX(0)';
			oldContent.style.opacity = '1';

			oldContent.style.transform = direction === 'next' ? 'translateX(-100%)' : 'translateX(100%)';
			oldContent.style.opacity = '0';
		}

		wrapper.style.position = 'relative';
		wrapper.style.transform = direction === 'next' ? 'translateX(100%)' : 'translateX(-100%)';
		wrapper.style.opacity = '0';
		card.appendChild(wrapper);

		wrapper.offsetHeight;

		wrapper.style.transform = 'translateX(0)';
		wrapper.style.opacity = '1';

		setTimeout(() => {
			if (oldContent) {
				oldContent.remove();
			}
			isAnimating = false;
		}, 300);
	}

	function nextTestimonial() {
		if (!isAnimating) {
			currentIndex = (currentIndex + 1) % testimonials.length;
			updateTestimonial('next');
		}
	}

	function prevTestimonial() {
		if (!isAnimating) {
			currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
			updateTestimonial('prev');
		}
	}

	document.querySelectorAll('.faq-question').forEach(button => {
		button.addEventListener('click', () => {
			const answer = button.nextElementSibling;
			const isActive = button.classList.contains('active');

			document.querySelectorAll('.faq-question').forEach(otherButton => {
				if (otherButton !== button) {
					otherButton.classList.remove('active');
					otherButton.nextElementSibling.classList.remove('active');
				}
			});

			button.classList.toggle('active');
			answer.classList.toggle('active');
		});
	});

	document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
		const navItems = document.getElementById('nav-items');
		navItems.classList.toggle('active');
		this.querySelector('i').classList.toggle('fa-bars');
		this.querySelector('i').classList.toggle('fa-times');
	});

	document.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			const navItems = document.getElementById('nav-items');
			const menuToggle = document.getElementById('mobile-menu-toggle');
			if (navItems.classList.contains('active')) {
				navItems.classList.remove('active');
				menuToggle.querySelector('i').classList.add('fa-bars');
				menuToggle.querySelector('i').classList.remove('fa-times');
			}
		});
	});

	const backToTopBtn = document.getElementById('back-to-top');

	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 300) {
			backToTopBtn.classList.add('visible');
		} else {
			backToTopBtn.classList.remove('visible');
		}
	});

	backToTopBtn.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});