document.addEventListener("DOMContentLoaded", function() {
//--------------------MENU------------------------------------------------
			const currentUrl = window.location.pathname;
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

//--------------------BURGER------------------------------------------------

			// Получаем элементы
			// const burger = document.querySelector('.burger');
			// const burgerClose = document.querySelector('.burger-close');
			// const menu = document.querySelector('.menu');

			// // Функция для открытия меню
			// function openMenu() {
			// 		menu.classList.add('active');

			// }

			// // Функция для закрытия меню
			// function closeMenu() {
			// 		menu.classList.remove('active');
	
			// }

			// // Обработчик клика по бургеру
			// burger.addEventListener('click', openMenu);

			// // Обработчик клика по кнопке закрытия
			// burgerClose.addEventListener('click', closeMenu);

			// // Обработчик клика по всему экрану
			// document.addEventListener('click', function(event) {
			// 		if (!menu.contains(event.target) && !burger.contains(event.target) && menu.classList.contains('active')) {
			// 				closeMenu();
			// 		}
			// });



//--------------------call-back------------------------------------------------

	const burger = document.querySelector('.burger');
	const burgerClose = document.querySelector('.burger-close');

	const callBack = document.querySelector('.call-back');
	const callBar = document.querySelector('.menu-bar-con');
	const callBarUl = document.querySelector('.menu-bar-con-ul');

	function activateClasses() {
			callBack.classList.add('active');
			callBar.classList.add('active');
			callBarUl.classList.add('active');
			burger.style.display = 'none'; 
			burgerClose.style.display = 'block'; 
	}

	function deactivateClasses() {
			callBack.classList.remove('active');
			callBar.classList.remove('active');
			callBarUl.classList.remove('active');
			burger.style.display = 'block'; 
			burgerClose.style.display = 'none'; 
	}

	// Обработчик для кнопки
	burger.addEventListener('click', function(event) {
			// При нажатии на кнопку, активируем классы
			activateClasses();
			// Остановить всплытие события
			event.stopPropagation();
	});

	// Обработчик для кликов на документ
	document.addEventListener('click', function(event) {
			// Проверяем, был ли клик вне зоны callBar (если так, убираем классы)
			if (!callBar.contains(event.target) && event.target !== burger) {
					deactivateClasses();
			}
	});




	var hammertime = new Hammer(document.body, {
    enable: true,
    recognizers: [[Hammer.Swipe, { direction: Hammer.DIRECTION_HORIZONTAL }]]
		});

		hammertime.on('swiperight', function(ev) {

	

				activateClasses()

		});

		hammertime.on('swipeleft', function(ev) {

	

			deactivateClasses()

		});








});




	//-------------------SERTY----------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
	const currentUrl = window.location.pathname;
	
		// Проверяем, что текущая страница - index.php
	if (currentUrl.includes("/")) {

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


});

