const counters = [
	{id: 'uptime', value: '99.9%'},
	{id: 'support-available', value: '24/7'},
];

counters.forEach(counter => {
	const element = document.getElementById(counter.id);
	let count = 0;
	const target = counter.value;
	const increment = Math.ceil(target / 100);

	const updateCounter = () => {
		if (count < target) {
			count += increment;
			if (count > target) count = target;
			element.textContent = count;
			requestAnimationFrame(updateCounter);
		} else {
			element.textContent = target;
		}
	};

	updateCounter();
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
	window.scrollTo({top: 0, behavior: 'smooth'});
});

document.addEventListener('DOMContentLoaded', function () {
	const teamMembers = [
		{
			id: '648690939719843852',
			role: 'Fondateur & Développeur',
			description: 'Passionné par la sécurité Discord et le développement de bots depuis 2019.',
		},
		{
			id: '1295037828694278144',
			role: 'Responsable Général',
			description: 'Responsable de la gestion de la communauté et du serveur Discord.',
		},
		{
			id: '1141909667790979082',
			role: 'Lead Support & Responsable du Discord',
			description: 'Responsable de la gestion de la communauté et du serveur Discord.',
		},
		{
			id: '1297890311753826409',
			role: 'Administrateur & Community Manager en chef',
			description: 'Gère les relations communautaires et coordonne les différents événements Discord.',
		},
		{
			id: '894999665760665600',
			role: 'Administrateur',
			description: "Supervise l'infrastructure technique et assure la stabilité des systèmes.",
		},
		{
			id: '992422120007139469',
			role: 'Administrateur',
			description: "En charge de la modération et de l'application des règles communautaires.",
		},
		{
			id: '704717426729943070',
			role: 'Développeur du bot',
			description: 'Spécialiste des fonctionnalités de sécurité et de la détection des raids.',
		},
		{
			id: '900054039037898762',
			role: 'Développeur du bot',
			description: "Développeur backend, responsable de l'architecture du bot.",
		},
		{
			id: '843808047042134026',
			role: 'Développeur du bot',
			description: 'Expert en intégrations API et développement des commandes avancées.',
		},
		{
			id: '1128368002170093640',
			role: 'Administrateur',
			description: 'Gère la documentation et le support utilisateur de premier niveau.',
		},
		{
			id: '462623358706778132',
			role: 'Modérateur',
			description: 'Garde du serveur, la moindre erreur sera vue, sinon ouvert à la discussion.',
		},
		{
			id: '1210694781114781748',
			role: 'Modératrice',
			description: 'Garde du serveur, la moindre erreur sera vue, sinon ouvert à la discussion.',
		},
		{
			id: '1308722544081244234',
			role: 'Modératrice',
			description: 'Garde du serveur, la moindre erreur sera vue, sinon ouvert à la discussion.',
		},
	];

	async function loadTeamMembers() {
		try {
			const response = await fetch('/api/discord/server-members/1244632629169356884', {
				headers: {
					accept: '*/*',
				},
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error('Failed to fetch team members');
			}

			const members = await response.json();
			const teamContainer = document.getElementById('team-members-container');

			teamContainer.innerHTML = '';

			const ourTeamMembers = members.filter(member => teamMembers.some(teamMember => teamMember.id === member.id));

			ourTeamMembers.forEach((member, index) => {
				const teamInfo = teamMembers.find(tm => tm.id === member.id);
				if (!teamInfo) return;

				const avatarUrl = member.avatar ? `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=256` : 'default-avatar.png';

				const card = document.createElement('div');
				card.className = 'team-card';
				card.setAttribute('data-aos', 'fade-up');
				card.setAttribute('data-aos-delay', index * 100);
				card.innerHTML = `
                    <img src="${avatarUrl}" alt="Photo de ${member.displayName}" class="team-photo">
                    <h3>${member.displayName}</h3>
                    <p class="team-role">${teamInfo.role}</p>
                    <p class="team-description">${teamInfo.description}</p>
                    <div class="team-social">
                        <a href="#" aria-label="Profil Discord"><i class="fab fa-discord"></i></a>
                        <a href="#" aria-label="Profil GitHub"><i class="fab fa-github"></i></a>
                    </div>
                `;

				teamContainer.appendChild(card);
			});

			if (ourTeamMembers.length < teamMembers.length) {
				const missingMemberIds = teamMembers.filter(tm => !ourTeamMembers.some(m => m.id === tm.id)).map(tm => tm.id);

				const fallbackNames = {
					'648690939719843852': {name: 'ysannier', image: 'ysannier.webp'},
					'1295037828694278144': {name: 'Napoleon', image: 'napoleon-premier.png'},
					'1141909667790979082': {name: 'Refresh4Ever', image: 'refresh4ever.png'},
				};

				missingMemberIds.forEach((id, index) => {
					const teamInfo = teamMembers.find(tm => tm.id === id);
					const fallback = fallbackNames[id] || {name: 'Team Member', image: 'default-avatar.png'};

					const card = document.createElement('div');
					card.className = 'team-card';
					card.setAttribute('data-aos', 'fade-up');
					card.setAttribute('data-aos-delay', (ourTeamMembers.length + index) * 100);
					card.innerHTML = `
                        <img src="${fallback.image}" alt="Photo de ${fallback.name}" class="team-photo">
                        <h3>${fallback.name}</h3>
                        <p class="team-role">${teamInfo.role}</p>
                        <p class="team-description">${teamInfo.description}</p>
                        <div class="team-social">
                            <a href="#" aria-label="Profil Discord"><i class="fab fa-discord"></i></a>
                            <a href="#" aria-label="Profil GitHub"><i class="fab fa-github"></i></a>
                        </div>
                    `;

					teamContainer.appendChild(card);
				});
			}
		} catch (error) {
			console.error('Error loading team members:', error);

			const teamContainer = document.getElementById('team-members-container');
			teamContainer.innerHTML = `
                <div class="team-card" data-aos="fade-up">
                    <img src="ysannier.webp" alt="Photo de ysannier" class="team-photo">
                    <h3>ysannier</h3>
                    <p class="team-role">Fondateur & Développeur</p>
                    <p class="team-description">Passionné par la sécurité Discord et le développement de bots depuis 2019.</p>
                    <div class="team-social">
                        <a href="#" aria-label="Profil Discord"><i class="fab fa-discord"></i></a>
                        <a href="#" aria-label="Profil GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="team-card" data-aos="fade-up" data-aos-delay="100">
                    <img src="napoleon-premier.png" alt="Photo de Napoleon Premier" class="team-photo">
                    <h3>Napoleon</h3>
                    <p class="team-role">Responsable Général</p>
                    <p class="team-description">Responsable de la gestion de la communauté et du serveur Discord.</p>
                    <div class="team-social">
                        <a href="#" aria-label="Profil Discord"><i class="fab fa-discord"></i></a>
                        <a href="#" aria-label="Profil GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="team-card" data-aos="fade-up" data-aos-delay="200">
                    <img src="refresh4ever.png" alt="Photo de Refresh4Ever" class="team-photo">
                    <h3>Refresh4Ever</h3>
                    <p class="team-role">Lead Support & Responsable du Discord</p>
                    <p class="team-description">Responsable de la gestion de la communauté et du serveur Discord.</p>
                    <div class="team-social">
                        <a href="#" aria-label="Profil Discord"><i class="fab fa-discord"></i></a>
                        <a href="#" aria-label="Profil GitHub"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            `;
		}
	}

	loadTeamMembers();

	updateTestimonial();
});

document.addEventListener('DOMContentLoaded', function () {
	const animatedElements = document.querySelectorAll('[data-aos]');

	const checkPosition = function () {
		animatedElements.forEach(element => {
			const positionFromTop = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			if (positionFromTop - windowHeight <= 0) {
				const delay = element.getAttribute('data-aos-delay') || 0;
				setTimeout(() => {
					element.classList.add('aos-animate');
				}, delay);
			}
		});
	};

	animatedElements.forEach(element => {
		element.classList.add('aos-init');
	});

	checkPosition();
	window.addEventListener('scroll', checkPosition);
});

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

document.addEventListener('DOMContentLoaded', function () {
	const teamMembers = [
		{
			id: '648690939719843852',
			role: 'Fondateur & Développeur',
			description: 'Passionné par la sécurité Discord et le développement de bots depuis 2019.',
		},
		{
			id: '1295037828694278144',
			role: 'Responsable Général',
			description: 'Responsable de la gestion de la communauté et du serveur Discord.',
		},
		{
			id: '1141909667790979082',
			role: 'Lead Support & Responsable du Discord',
			description: 'Responsable de la gestion de la communauté et du serveur Discord.',
		},
		{
			id: '1297890311753826409',
			role: 'Administrateur & Community Manager en chef',
			description: 'Gère les relations communautaires et coordonne les différents événements Discord.',
		},
		{
			id: '894999665760665600',
			role: 'Administrateur',
			description: "Supervise l'infrastructure technique et assure la stabilité des systèmes.",
		},
		{
			id: '992422120007139469',
			role: 'Administrateur',
			description: "En charge de la modération et de l'application des règles communautaires.",
		},
		{
			id: '704717426729943070',
			role: 'Développeur du bot',
			description: 'Spécialiste des fonctionnalités de sécurité et de la détection des raids.',
		},
		{
			id: '900054039037898762',
			role: 'Développeur du bot',
			description: "Développeur backend, responsable de l'architecture du bot.",
		},

		{
			id: '843808047042134026',
			role: 'Développeur du bot',
			description: 'Expert en intégrations API et développement des commandes avancées.',
		},
		{
			id: '1128368002170093640',
			role: 'Administrateur',
			description: 'Gère la documentation et le support utilisateur de premier niveau.',
		},
		{
			id: '462623358706778132',
			role: 'Modérateur',
			description: 'Garde du serveur, la moindre erreur sera vue, sinon ouvert à la discussion.',
		},
		{
			id: '1210694781114781748',
			role: 'Modératrice',
			description: 'Garde du serveur, la moindre erreur sera vue, sinon ouvert à la discussion.',
		},
		{
			id: '1308722544081244234',
			role: 'Modératrice',
			description: 'Garde du serveur, la moindre erreur sera vue, sinon ouvert à la discussion.',
		},
	];

	async function loadTeamMembers() {
		try {
			const response = await fetch('/api/discord/server-members/1244632629169356884', {
				headers: {
					accept: '*/*',
				},
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error('Failed to fetch team members');
			}

			const members = await response.json();
			const teamContainer = document.getElementById('team-members-container');

			teamContainer.innerHTML = '';

			const ourTeamMembers = members.filter(member => teamMembers.some(teamMember => teamMember.id === member.id));

			ourTeamMembers.forEach(member => {
				const teamInfo = teamMembers.find(tm => tm.id === member.id);
				if (!teamInfo) return;

				const avatarUrl = member.avatar ? `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.webp?size=256` : 'default-avatar.png';

				const card = document.createElement('div');
				card.className = 'team-card';
				card.innerHTML = `
                    <img src="${avatarUrl}" alt="Photo de ${member.displayName}" class="team-photo">
                    <h3>${member.displayName}</h3>
                    <p class="team-role">${teamInfo.role}</p>
                    <p class="team-description">${teamInfo.description}</p>
                    <div class="team-social">

                    </div>
                `;

				teamContainer.appendChild(card);
			});

			if (ourTeamMembers.length < teamMembers.length) {
				const missingMemberIds = teamMembers.filter(tm => !ourTeamMembers.some(m => m.id === tm.id)).map(tm => tm.id);

				const fallbackNames = {
					'648690939719843852': {name: 'ysannier', image: 'ysannier.webp'},
					'1295037828694278144': {name: 'Napoleon', image: 'napoleon-premier.png'},
					'1141909667790979082': {name: 'Refresh4Ever', image: 'refresh4ever.png'},
				};

				missingMemberIds.forEach(id => {
					const teamInfo = teamMembers.find(tm => tm.id === id);
					const fallback = fallbackNames[id] || {name: 'Team Member', image: 'default-avatar.png'};

					const card = document.createElement('div');
					card.className = 'team-card';
					card.innerHTML = `
                        <img src="${fallback.image}" alt="Photo de ${fallback.name}" class="team-photo">
                        <h3>${fallback.name}</h3>
                        <p class="team-role">${teamInfo.role}</p>
                        <p class="team-description">${teamInfo.description}</p>
                        <div class="team-social">

                        </div>
                    `;

					teamContainer.appendChild(card);
				});
			}
		} catch (error) {
			console.error('Error loading team members:', error);

			const teamContainer = document.getElementById('team-members-container');
			teamContainer.innerHTML = `
                <div class="team-card">
                    <img src="ysannier.webp" alt="Photo de ysannier" class="team-photo">
                    <h3>ysannier</h3>
                    <p class="team-role">Fondateur & Développeur</p>
                    <p class="team-description">Passionné par la sécurité Discord et le développement de bots depuis 2019.</p>
                    <div class="team-social">

                    </div>
                </div>
                <div class="team-card">
                    <img src="napoleon-premier.png" alt="Photo de Napoleon Premier" class="team-photo">
                    <h3>Napoleon</h3>
                    <p class="team-role">Responsable Général</p>
                    <p class="team-description">Responsable de la gestion de la communauté et du serveur Discord.</p>
                    <div class="team-social">

                    </div>
                </div>
                <div class="team-card">
                    <img src="refresh4ever.png" alt="Photo de Refresh4Ever" class="team-photo">
                    <h3>Refresh4Ever</h3>
                    <p class="team-role">Lead Support & Responsable du Discord</p>
                    <p class="team-description">Responsable de la gestion de la communauté et du serveur Discord.</p>
                    <div class="team-social">

                    </div>
                </div>
            `;
		}
	}

	loadTeamMembers();
});

updateTestimonial();
