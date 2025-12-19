// Elementos del DOM
const $modal = document.getElementById('hero-modal');
const $overlay = document.getElementById('modal-overlay');
const $closeBtn = document.getElementById('close-modal');

// Elementos de contenido
const $img = document.getElementById('modal-img');
const $name = document.getElementById('modal-name');
const $fullName = document.getElementById('modal-fullname');
const $badge = document.getElementById('modal-badge');
const $statsContainer = document.getElementById('modal-stats');
const $work = document.getElementById('modal-work');
const $base = document.getElementById('modal-base');
const $group = document.getElementById('modal-group');
const $relatives = document.getElementById('modal-relatives');
const $firstApp = document.getElementById('modal-first-app');
const $publisher = document.getElementById('modal-publisher');

// Función Principal: ABRIR MODAL
export const openModal = (hero) => {
	// Rellenar datos básicos
	$img.src = hero.images.lg || hero.images.md;
	$name.textContent = hero.name;
	$fullName.textContent = hero.biography.fullName || hero.name;

	$work.textContent =
		hero.work.occupation === '-' ? 'Desconocido' : hero.work.occupation;
	$base.textContent = hero.work.base === '-' ? 'Desconocido' : hero.work.base;
	$group.textContent =
		hero.connections.groupAffiliation === '-'
			? 'Solitario'
			: hero.connections.groupAffiliation;
	$relatives.textContent =
		hero.connections.relatives === '-'
			? 'Sin datos'
			: hero.connections.relatives;
	$firstApp.textContent = hero.biography.firstAppearance;
	$publisher.textContent = hero.biography.publisher;

	// Estilar Badge y Tema según alineación
	const alignment = hero.biography.alignment;
	let themeColor = 'bg-acento';
	let textColor = 'text-gray-900';
	let iconColor = 'text-acento';

	if (alignment === 'good') {
		themeColor = 'bg-cyan-500';
		textColor = 'text-white';
		iconColor = 'text-cyan-400';
	} else if (alignment === 'bad') {
		themeColor = 'bg-fuchsia-600';
		textColor = 'text-white';
		iconColor = 'text-fuchsia-600';
	}

	$badge.textContent = alignment;
	$badge.className = `px-3 py-1 text-xs font-black uppercase rounded-sm shadow-sm ${themeColor} ${textColor}`;

	renderStats(hero.powerstats, themeColor, iconColor);

	$modal.classList.remove('hidden');
	document.body.style.overflow = 'hidden';
};

const renderStats = (stats, colorClass, iconColorClass) => {
	$statsContainer.innerHTML = '';

	const icons = {
		intelligence: 'fa-brain',
		strength: 'fa-dumbbell',
		speed: 'fa-person-running',
		durability: 'fa-shield-halved',
		power: 'fa-bolt',
		combat: 'fa-hand-fist',
	};

	Object.entries(stats).forEach(([statName, value]) => {
		const percentage = value === 'null' ? 0 : value;
		const icon = icons[statName] || 'fa-circle'; // Icono por defecto

		const statHTML = `
            <div class="bg-superficie p-4 rounded-md border border-borde flex flex-col justify-between relative overflow-hidden group hover:border-acento hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                
                <div class="absolute -right-4 -bottom-4 text-6xl text-texto opacity-[0.1] rotate-12 group-hover:opacity-[0.1] group-hover:scale-110 group-hover:rotate-0 transition-all duration-500 z-0 pointer-events-none">
                    <i class="fa-solid ${icon} ${iconColorClass}"></i>
                </div>

                <div class="relative z-10">
                    <div class="flex justify-between items-center z-10 mb-2">
                        <span class="text-[8px] sm:text-[9px] font-black text-texto opacity-50 uppercase tracking-widest truncate mr-1">${statName}</span>
                        <i class="fa-solid ${icon} ${iconColorClass} text-[10px]"></i>
                    </div>

                    <div class="flex items-end gap-1 sm:gap-2 z-10">
                        <span class="text-xl sm:text-2xl font-black text-texto leading-none">${percentage}</span>
                    </div>

                    <div class="w-full bg-btn-ui h-1 mt-2 sm:mt-3 rounded-full overflow-hidden">
                        <div class="${colorClass} h-full rounded-full" style="width: ${percentage}%"></div>
                    </div>
                </div>
            </div>
        `;
		$statsContainer.innerHTML += statHTML;
	});
};

const closeModal = () => {
	$modal.classList.add('hidden');
	document.body.style.overflow = 'auto';
};

$closeBtn.addEventListener('click', closeModal);
$overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape' && !$modal.classList.contains('hidden')) {
		closeModal();
	}
});
