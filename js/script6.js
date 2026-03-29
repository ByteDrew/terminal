	function teamSection() {
		return {
			teamMembers: [
				
				
			{
				id: "396757295826075649",
				role: "Project Lead",
				description: "Salut c&#39;est Franck Leboeuf, vous voulez vendre votre voiture ? Passionné par la sécurité Discord et le développement de bots depuis 2019.",
				fallback: {
					name: "ByteDrew",
					image: "https://cdn.discordapp.com/avatars/396757295826075649/a_07a334bab5e4b4de1323c75825b71682.gif?size=1024&animated=true"
				}
			} ,
				
			{
				id: "1365989943012229221",
				role: "Administrateur",
				description: "En charge de la modération et de l&#39;application des règles communautaires.",
				fallback: {
					name: "Administrateur",
					image: "/default-avatar.png"
				}
			} ,
				
			{
				id: "1167412275548790824",
				role: "Développeur du bot",
				description: "Moi je suis un lycéen qui a découvert la programmation grâce à Zelda.",
				fallback: {
					name: "Développeur",
					image: "/default-avatar.png"
				}
			} ,
				
			{
				id: "891215536803946516",
				role: "Développeur du bot",
				description: "A survécu à plusieurs tests d’Aperture, uniquement grâce à la gravité et à la promesse d’un gâteau qui n’existe pas. Travaille sur le bot quand il n’est pas occupé à escalader des murs qui n’étaient pas prévus pour ça.",
				fallback: {
					name: "Développeur",
					image: "/default-avatar.png"
				}
			} ,
				
			{
				id: "1025745321525006357",
				role: "Administrateur",
				description: "Chef de centre dévoué, et apparemment votre créateur de contenu préféré. Toujours là pour vous aider… jusqu’à ce qu’il en ait marre et vous laisse brûler dans les flammes de votre propre incompétence.",
				fallback: {
					name: "Administrateur",
					image: "/default-avatar.png"
				}
			} 
				
			],
		displayedMembers: [],
			loading: true,
				error: false,
					errorMessage: '',

						init() {
			this.loadMembers();
		},

			async loadMembers() {
			try {
				this.loading = true;
				this.error = false;
				this.displayedMembers = [];

				console.log('Chargement des profils des membres de l\'équipe via /api/user...');

				const memberPromises = this.teamMembers.map(async (teamInfo) => {
					try {
						console.log(`Chargement du profil pour ${teamInfo.id}...`);

						const response = await fetch(`/api/user/${teamInfo.id}`);

						if (!response.ok) {
							console.warn(`Échec du chargement pour ${teamInfo.id}: ${response.status}`);
							throw new Error(`HTTP ${response.status}`);
						}

						const userData = await response.json();
						console.log(`Profil chargé pour ${teamInfo.id}:`, userData);

						return {
							id: userData.id,
							name: userData.global_name || userData.username || teamInfo.fallback.name,
							username: userData.username,
							role: this.decodeHtmlEntities(teamInfo.role),
							description: this.decodeHtmlEntities(teamInfo.description),
							image: userData.avatar || teamInfo.fallback.image,
							fromAPI: true
						};
					} catch (error) {
						console.error(`Erreur lors du chargement de ${teamInfo.id}:`, error);

						return {
							id: teamInfo.id,
							name: teamInfo.fallback.name,
							username: null,
							role: this.decodeHtmlEntities(teamInfo.role),
							description: this.decodeHtmlEntities(teamInfo.description),
							image: teamInfo.fallback.image,
							fromAPI: false
						};
					}
				});

				const results = await Promise.all(memberPromises);

				this.displayedMembers = results.filter(member => member !== null);

				this.displayedMembers.sort((a, b) => {
					const roleOrder = {
						'Project Lead': 1,
						'Administrateur': 2,
						'Développeur': 3,
						'Modérateur': 4,
						'Modératrice': 4
					};

					const getRolePriority = (role) => {
						if (role.includes('Project Lead')) return roleOrder['Project Lead'];
						if (role.includes('Administrateur')) return roleOrder['Administrateur'];
						if (role.includes('Développeur')) return roleOrder['Développeur'];
						if (role.includes('Modérateur')) return roleOrder['Modérateur'];
						if (role.includes('Modératrice')) return roleOrder['Modératrice'];
						return 99;
					};

					const priorityA = getRolePriority(a.role);
					const priorityB = getRolePriority(b.role);

					return priorityA - priorityB;
				});

				console.log('Membres de l\'équipe chargés:', this.displayedMembers);

			} catch (error) {
				console.error('Erreur globale lors du chargement des membres:', error);
				this.error = true;
				this.errorMessage = 'Erreur lors du chargement des profils de l\'équipe';

				this.displayedMembers = this.teamMembers.map(member => ({
					id: member.id,
					name: member.fallback.name,
					username: null,
					role: this.decodeHtmlEntities(member.role),
					description: this.decodeHtmlEntities(member.description),
					image: member.fallback.image,
					fromAPI: false
				}));

				this.displayedMembers.sort((a, b) => {
					const roleOrder = {
						'Project Lead': 1,
						'Administrateur': 2,
						'Développeur': 3,
						'Modérateur': 4,
						'Modératrice': 4
					};

					const getRolePriority = (role) => {
						if (role.includes('Project Lead')) return roleOrder['Project Lead'];
						if (role.includes('Administrateur')) return roleOrder['Administrateur'];
						if (role.includes('Développeur')) return roleOrder['Développeur'];
						if (role.includes('Modérateur')) return roleOrder['Modérateur'];
						if (role.includes('Modératrice')) return roleOrder['Modératrice'];
						return 99;
					};

					const priorityA = getRolePriority(a.role);
					const priorityB = getRolePriority(b.role);

					return priorityA - priorityB;
				});
			} finally {
				this.loading = false;
			}
		},

		getBadgesHtml(badges) {
			if (!badges || badges.length === 0) return '';

			const badgeIcons = {
				'HOUSE_BRAVERY': { icon: '🏠', title: 'HypeSquad Bravery', color: 'text-purple-400' },
				'HOUSE_BALANCE': { icon: '⚖️', title: 'HypeSquad Balance', color: 'text-emerald-400' },
				'HOUSE_BRILLIANCE': { icon: '💡', title: 'HypeSquad Brilliance', color: 'text-yellow-400' },
				'ACTIVE_DEVELOPER': { icon: '👨‍💻', title: 'Active Developer', color: 'text-green-400' },
				'DISCORD_CERTIFIED_MODERATOR': { icon: '🛡️', title: 'Discord Certified Moderator', color: 'text-blue-400' },
				'PARTNERED_SERVER_OWNER': { icon: '🤝', title: 'Partnered Server Owner', color: 'text-indigo-400' },
				'VERIFIED_BOT_DEVELOPER': { icon: '✅', title: 'Verified Bot Developer', color: 'text-green-400' }
			};

			return badges.map(badge => {
				const badgeInfo = badgeIcons[badge];
				if (!badgeInfo) return '';

				return `<span class="${badgeInfo.color} text-lg" title="${badgeInfo.title}">${badgeInfo.icon}</span>`;
			}).join(' ');
		},

		formatJoinDate(joinDate) {
			if (!joinDate) return '';
			try {
				const date = new Date(joinDate);
				return date.toLocaleDateString('fr-FR', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				});
			} catch {
				return joinDate;
			}
		},

		getBadgeClass(role) {
			const isFounder = role.includes('Project Lead');
			const isAdmin = role.includes('Admin');
			const isDev = role.includes('Développeur');
			const isSupport = role.includes('Support');
			const isMod = role.includes('Modérat');

			if (isFounder) return 'from-orange-500 to-blue-500';
			if (isAdmin) return 'from-purple-500 to-indigo-500';
			if (isDev) return 'from-blue-500 to-cyan-400';
			if (isSupport) return 'from-emerald-500 to-green-500';
			if (isMod) return 'from-amber-500 to-yellow-400';

			return 'from-blue-500 to-blue-400';
		},

		getBorderClass(role) {
			const isFounder = role.includes('Project Lead');
			const isAdmin = role.includes('Admin');
			const isDev = role.includes('Développeur');
			const isSupport = role.includes('Support');
			const isMod = role.includes('Modérat');

			if (isFounder) return 'border-orange-500';
			if (isAdmin) return 'border-purple-500';
			if (isDev) return 'border-blue-500';
			if (isSupport) return 'border-emerald-500';
			if (isMod) return 'border-amber-500';

			return 'border-blue-500';
		},

		getBadgeText(role) {
			const isFounder = role.includes('Project Lead');
			const isAdmin = role.includes('Admin');
			const isDev = role.includes('Développeur');
			const isSupport = role.includes('Support');
			const isMod = role.includes('Modérat');

			if (isFounder) return 'Management';
			if (isAdmin) return 'Administrateur';
			if (isDev) return 'Développeur';
			if (isSupport) return 'Support';
			if (isMod) return 'Modération';

			return 'Staff';
		},

		decodeHtmlEntities(text) {
			if (!text) return '';
			const textarea = document.createElement('textarea');
			textarea.innerHTML = text;
			return textarea.value;
		}
	}
	}