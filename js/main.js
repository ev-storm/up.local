document.addEventListener("DOMContentLoaded", function() {
	const currentUrl = window.location.pathname;

	// Проверяем, что текущая страница - index.php
	if (currentUrl.includes("index.php")) {
			var swiper = new Swiper(".about-swiper", {
					spaceBetween: 30,
					speed: 1000,
					direction: 'vertical',
					pagination: {
							el: ".swiper-pagination",
							clickable: true,
					},
					mousewheel: true,
					keyboard: false,
					on: {
							slideChange: function () {
									updateActiveButton(this.activeIndex);
							}
					}
			});

			const buttons = document.querySelectorAll('.menu-bar-con .bar-item');
			buttons.forEach(button => {
					button.addEventListener('click', function () {
							const slideIndex = parseInt(this.getAttribute('data-slide'), 10);
							swiper.slideTo(slideIndex);
							updateActiveButton(slideIndex);
					});
			});

			function updateActiveButton(index) {
					buttons.forEach(btn => btn.classList.remove('active'));
					buttons[index].classList.add('active');
			}

			window.addEventListener('mousemove', function(e) {
					const viewportWidth = window.innerWidth;
					const redDiv = document.querySelector('.cover');
					const rect = redDiv.getBoundingClientRect();
					const offsetX = e.clientX - rect.left; 
					const percentage = (offsetX / rect.width) * 100; 
					const clampedPercentage = Math.max(0, Math.min(100, percentage));
					redDiv.style.clipPath = `inset(0 ${100 - clampedPercentage}% 0 0)`;
			});

			const miniImages = document.querySelectorAll('.mini-sert img');
			const coverSert = document.querySelector('.cover-sert');
			const coverImages = document.querySelectorAll('.cover-sert img');

			miniImages.forEach((img, index) => {
					img.addEventListener('click', () => {
							coverSert.classList.add('active');
							coverImages.forEach((coverImg) => coverImg.classList.remove('active'));
							coverImages[index].classList.add('active');
					});
			});

			coverSert.addEventListener('click', (event) => {
					const saveImgArea = document.querySelector('.save-img');
					const activeCoverImg = document.querySelector('.cover-sert img.active');
					
					if (!saveImgArea.contains(event.target) && event.target !== activeCoverImg) {
							coverSert.classList.remove('active');
							activeCoverImg.classList.remove('active');
					}
			});
		}




		
			const menuButtons = {
					'index.php': '.menu-btn-about',
					'production.php': '.menu-btn-prod',
					'contact.php': '.menu-btn-cont'
			};

			for (const [page, btnSelector] of Object.entries(menuButtons)) {
					if (currentUrl.includes(page)) {
							const button = document.querySelector(btnSelector);
							if (button) {
									button.classList.add('active');
							}
							break;
					}
			}



			// Получаем элементы
			const burger = document.querySelector('.burger');
			const burgerClose = document.querySelector('.burger-close');
			const menu = document.querySelector('.menu');

			// Функция для открытия меню
			function openMenu() {
					menu.classList.add('active');
					burger.style.display = 'none'; // Скрываем бургер
					burgerClose.style.display = 'block'; // Показываем кнопку закрытия
			}

			// Функция для закрытия меню
			function closeMenu() {
					menu.classList.remove('active');
					burger.style.display = 'block'; // Показываем бургер
					burgerClose.style.display = 'none'; // Скрываем кнопку закрытия
			}

			// Обработчик клика по бургеру
			burger.addEventListener('click', openMenu);

			// Обработчик клика по кнопке закрытия
			burgerClose.addEventListener('click', closeMenu);

			// Обработчик клика по всему экрану
			document.addEventListener('click', function(event) {
					if (!menu.contains(event.target) && !burger.contains(event.target) && menu.classList.contains('active')) {
							closeMenu();
					}
			});

});

/////////////////////////////////////////////////////////





//--------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
const currentUrl = window.location.pathname;

// Проверяем, что текущая страница - index.php
if (currentUrl.includes("production.php")) {

document.addEventListener('DOMContentLoaded', () => {
	
	const swiper = new Swiper('.about-swiper', {
			speed: 1000,
			direction: 'vertical',
			spaceBetween: 45,
			pagination: {
					el: '.swiper-pagination',
					clickable: true,
			},
			mousewheel: true,
			keyboard: false,
			on: {
					slideChange: function () {
							updateActiveButton(this.activeIndex);
					}
			}
	});

	const buttons = document.querySelectorAll('.menu-bar-con .bar-item');
	buttons.forEach(button => {
			button.addEventListener('click', function () {
					const slideIndex = parseInt(this.getAttribute('data-slide'), 10);
					swiper.slideTo(slideIndex);
					updateActiveButton(slideIndex);
			});
	});

	function updateActiveButton(index) {
			buttons.forEach(btn => btn.classList.remove('active'));
			buttons[index].classList.add('active');
	}
});

document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.about-carts-swiper', {
		slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
				
      },

	});

});







// КАТЕГОРИИ
function toggleActiveAndMove(className) {
	document.querySelectorAll('.menu-bar, .categories').forEach(item => {
			item.classList.remove('active');
	});

	document.querySelectorAll(`.${className}`).forEach(item => {
			item.classList.add('active');
	});

	// Обновляем текстовые категории
	const activeCategory = document.querySelector('.categories.active');
	if (activeCategory) {
			const value = activeCategory.getAttribute('value');
			const textCategories = document.querySelector('.text-categories');
			const textNav = document.querySelector('.text-categories-nav');

			textCategories.classList.remove('move');
			textCategories.textContent = value;
			textNav.textContent = value;
			setTimeout(() => {
					textCategories.classList.add('move');
			}, 10);
	}

	// Выводим активные значения в консоль
	logActiveValues();
}


document.querySelectorAll('.menu-bar, .categories').forEach(element => {
	element.addEventListener('click', function() {
			this.classList.forEach(cls => {
					if (cls.startsWith('i-')) {
							toggleActiveAndMove(cls);
					}
			});
	});
});

// СЕГМЕНТЫ
document.querySelectorAll('.segment, .under-menu').forEach(item => {
	item.addEventListener('click', function() {
			const className = Array.from(this.classList).find(cls => cls.startsWith('i-'));
			if (!className) return;
			
			document.querySelectorAll('.under-menu, .segment').forEach(elem => {
					elem.classList.remove('active');
			});

			document.querySelectorAll(`.${className}`).forEach(elem => {
					elem.classList.add('active');
			});

			const activeSegment = document.querySelector('.segment.active');
			if (activeSegment) {
					const value = activeSegment.getAttribute('value');
					const textSegment = document.querySelector('.text-segment');
					const textNav = document.querySelector('.text-segment-nav');

					textSegment.classList.remove('move');
					textSegment.textContent = value;
					textNav.textContent = value;
					setTimeout(() => {
							textSegment.classList.add('move');
					}, 10);
			}

			// Выводим активные значения в консоль
			logActiveValues();
	});
});









//скрыть слайды
document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.button');
	const slides = document.querySelectorAll('.segment-slide');

	buttons.forEach((button, index) => {
			button.addEventListener('click', () => {
					slides.forEach(slide => slide.classList.remove('active'));
					slides[index].classList.add('active');
			});
	});

	// По умолчанию активируйте первый слайд
	slides[0].classList.add('active');
});





document.addEventListener('DOMContentLoaded', function() {
	const downloadLink = document.getElementById('download-link');
	const serfImg = document.getElementById('serf-img');
	const images = document.querySelectorAll('.mini-sert img');
	const textLinks = document.querySelectorAll('.text-link');

	// Обрабатываем клик на мини-картинках
	images.forEach((img, index) => {
			img.addEventListener('click', function(e) {
					const pdfNumber = index + 1;
					downloadLink.href = `/assets/sertifikat/${pdfNumber}.pdf`;
					serfImg.src = `/assets/img/${pdfNumber}.png`;

					// Обновляем классы active для текстовых ссылок
					updateActiveLink(index);
			});
	});

	// Обрабатываем клик на текстовые ссылки
	textLinks.forEach((link, index) => {
			link.addEventListener('click', function(e) {
					// Устанавливаем активный элемент по индексу
					updateActiveLink(index);
			});
	});

	function updateActiveLink(index) {
			textLinks.forEach(link => {
					link.classList.remove('active'); 
			});
			textLinks[index].classList.add('active');
	}
});

document.addEventListener('DOMContentLoaded', function() {
	const currentUrl = window.location.pathname;

	// Определяем классы кнопок и соответствующие страницы
	const menuButtons = {
			'index.php': '.menu-btn-about',
			'production.php': '.menu-btn-prod',
			'contact.php': '.menu-btn-cont'
	};

	// Добавляем класс active для соответствующей кнопки
	for (const [page, btnSelector] of Object.entries(menuButtons)) {
			if (currentUrl.includes(page)) {
					const button = document.querySelector(btnSelector);
					if (button) {
							button.classList.add('active');
					}
					break;  // Прерываем цикл, если кнопка уже добавлена
			}
	}
});

function checkAspectRatio() {
	// Получаем текущую ширину и высоту окна
	const width = window.innerWidth;
	const height = window.innerHeight;

	// Вычисляем соотношение сторон
	const ratio = width / height;
	const targetRatio = 1 / 1;

	// Проверяем соотношение и выводим сообщение
	let message;
	if (ratio < targetRatio) {
			message = "Соотношение сторон окна меньше 1:1";
	} else if (ratio === targetRatio) {
			message = "Соотношение сторон окна равно 1:1";
	} else {
			message = "Соотношение сторон окна больше 1:1";
	}

	console.log(message);
}

// Выполняем проверку соотношения при загрузке страницы
checkAspectRatio();

// Добавляем обработчик события изменения размера окна
window.addEventListener('resize', checkAspectRatio);




var swiper2 = new Swiper(".swiper-v", {
	speed: 1000,
	loop:true,
	direction: 'vertical',
	autoplay: {
    delay: 3000,
  },
	slidesPerView: 3,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	keyboard:  true,
});

}
});
