
// Функция для логирования активных значений
function logActiveValues(selector) {
	const activeElements = document.querySelectorAll(selector);

}

// // Функция для обновления состояния активных классов
	function updateActiveState(elements, activeClass) {
		elements.forEach(element => {
				element.addEventListener('click', () => {
						elements.forEach(el => el.classList.remove(activeClass));
						element.classList.add(activeClass);

						// Логируем активные значения
						logActiveValues('.segment.active');
						logActiveValues('.categories.active');

		
					
						// Обновляем содержимое на основе активных значений
						updateContentBasedOnActiveValues();

						
				});
		});
	}

const activeSegmentVal = document.querySelector('.segment.active').getAttribute('value');
const activeCategoryVal = document.querySelector('.categories.active').getAttribute('value');

// Объект для хранения текстовых значений в зависимости от активных сегментов и категорий
const contentMapping = {
	"БАД": {
			"Картонная коробка": {
					pSegment: 'Применение картонной коробки в области Биоактивных добавок. Детали призводства',
					imgSrc: '/assets/img/bad-slide.png',
					bs_1: 'Коробка для флакона', bs_2:'Коробка для банки', bs_3:'Пачка для капсул', bs_4:'Шоу-бокс из картона',bs_5:' ',bs_6: '',bs_7: '',
			},
			"Инструкция-вкладыш": {
				pSegment: 'Инструкция-вкладыш по применению вкладывается в картонную коробку с биологически активными добавками (БАД), расфасованными в тубу, банку, или блистерную упаковку.',
				imgSrc: '/assets/img/list.png',
				bs_1: 'Листок -вкладыш в картонную коробку для флакона', bs_2: 'Листок -вкладыш в картонную коробку для банки',bs_3: 'Листок -вкладыш в картонную пачку для капсул',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
			},
			"Этикетка": {
				pSegment: 'Применение этикетки в области Биоактивных добавок. Детали призводства',
					imgSrc: '/assets/img/box.png',
					bs_1: 'Этикетка для флакона', bs_2:'Этикетка для банки', bs_3:'Этикетка для картонной пачки - картонного пенала для банки и флакона', bs_4:'',bs_5:' ',bs_6: '',bs_7: '',
			},
			"Банка-флакон": {
					pSegment: 'Применение банки в области Биоактивных добавок. Детали призводства',
					imgSrc: '/assets/img/bad-slide.png',
					bs_1: 'Флакон  для БАД ', bs_2:'Банка для БАД', bs_3:'', bs_4:'',bs_5:'',bs_6: '',bs_7: '',
			},
			"Туба": {
				pSegment: 'Туба используется для фасовки биологически активных добавок с пастообразной структурой или однородной (медовой) вязкой массой.<br><br>Туба с БАД упаковывается в картонную коробку, в которую вложена инструкция-вкладыш по применению.',
				imgSrc: '/assets/img/stom-slide.jpg',
				bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
			},
	},

	"Косметика и парфюмерия": {
			"Картонная коробка": {
					pSegment: 'Применение картонной коробки в области Косметики и парфюмерии. Детали призводства',
					imgSrc: '/assets/img/box.png',
					bs_1: 'Коробка для флакона', bs_2:'Коробка для кремов, сывороток, косметических средств', bs_3:'Шоу-бокс из картона', bs_4:'',bs_5:'Шоу-бокс из картона ',bs_6: '',bs_7: '',
			},
			"Инструкция-вкладыш": {
				pSegment: 'Инструкция-вкладыш по применению вкладывается в картонную коробку с косметикой или парфюмерией, расфасованной в тубу, банку, или блистерную упаковку.',
				imgSrc: '/assets/img/list.png',
				bs_1: 'Инструкция-вкладыш  в коробку для флакона', bs_2: 'Инструкция -вкладыш в коробку для кремов, сывороток, косметических средств ',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
			},
			"Этикетка": {
				pSegment: 'Применение этикетки в области Косметики и парфюмерии. Детали призводства',
					imgSrc: '/assets/img/box.png',
					bs_1: 'Этикетка для флакона', bs_2:'Этикетка для банки', bs_3:'Этикетка для коробок для кремов, сывороток, косметических средств', bs_4:'Этикетка для туб', bs_5:'', bs_6: '',bs_7: '',
			},
			"Банка-флакон": {
					pSegment: 'Применение банки в области Косметики и парфюмерии. Детали призводства',
					imgSrc: '/assets/img/box.png',
					bs_1: 'Флакон для косметики', bs_2:'Банка для косметики', bs_3:'Флакон для парюмерии', bs_4:'Банка для парфюмерии',bs_5:'',bs_6: '',bs_7: '',
			},
			"Туба": {
				pSegment: 'Туба используется для фасовки косметических и парфюмерных средств с кремообразной текстурой: лосьонов, кремов, шампуней, гелей.<br><br>Туба с косметикой и парфюмерией упаковывается в картонную коробку, в которую вложена инструкция-вкладыш по применению.<br><br>При использовании тубы, косметические препараты легко объединить в одну линию или набор, упакованный в картонную коробку: пример: шампунь, кондиционер + бальзам для волос; гель для душа, молочко + крем для тела; эмульсия+ молочко +крем для лица; набор для мужчин: гель для душа+ лосьон для бритья+ гель после бритья; набор для младенцев: пенка для купания+ молочко + крем.',
				imgSrc: '/assets/img/stom-slide.jpg',
				bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
			},
	},


	"Фармацевтика": {
		"Картонная коробка": {
				pSegment: 'Применение картонной коробки в области Фармацевтики. Детали призводства',
				imgSrc: '/assets/img/farma-slide.png',
				bs_1: 'Коробка для флакона', bs_2:'Коробка для банки', bs_3:'Пачка для капсул', bs_4:'Пачка для лекарственных препаратов',bs_5:'Шоу-бокс из картона ',bs_6: '',bs_7: '',
		},
		"Инструкция-вкладыш": {
			pSegment: 'Инструкция-вкладыш (листок-вкладыш) по применению вкладывается в картонную коробку-пачку с лекарственным препаратом, расфасованным в тубу, банку, или блистерную упаковку.',
			imgSrc: '/assets/img/list.png',
			bs_1: 'Листок -вкладыш в картонную коробку для флакона', bs_2: 'Листок -вкладыш в картонную коробку для банки',bs_3: 'Листок -вкладыш в картонную пачку для капсул',bs_4: 'Листок -вкладыш для картонную пачку для лекарственных препаратов',bs_5: '',bs_6: '',bs_7: '',
		},
		"Этикетка": {
			pSegment: 'Применение этикетки в области Фармацевтики. Детали призводства',
				imgSrc: '/assets/img/box.png',
				bs_1: 'Этикетка для флакона', bs_2:'Этикетка для банки', bs_3:'Этикетка для картонной пачки для лекарственных препаратов', bs_4:'',bs_5:' ',bs_6: '',bs_7: '',
		},
		"Банка-флакон": {
				pSegment: 'Применение банки в области Фармацевтики. Детали призводства',
				imgSrc: '/assets/img/farma-slide.png',
				bs_1: 'Флакон для лекарственых средств', bs_2:'Банка для таблеток', bs_3:'', bs_4:'',bs_5:'',bs_6: '',bs_7: '',
		},
		"Туба": {
			pSegment: 'Туба в фармацевтике используется для фасовки средств: мазей, гелей от боли в мышцах и суставах, гелей для пищеварительной системы и так далее.<br><br>Туба с фармацевтическим средством упаковывается в картонную коробку, в которую вложена инструкция-вкладыш по применению.',
			imgSrc: '/assets/img/stom-slide.jpg',
			bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
		},
},


"Стоматология": {
	"Картонная коробка": {
			pSegment: 'Применение картонной коробки в области Стоматологии. Детали призводства',
			imgSrc: '/assets/img/stom-slide2.png',
			bs_1: 'Футляр-пенал для зубной пасты', bs_2:'Пенал – промо с увеличенным рекламным полем для комплектации основного продукта подарками', bs_3:'Блистер пластиковый с картонной подложкой для зубных щеток, спреев', bs_4:'Шоу-бокс из картона ', bs_5:'', bs_6: '',bs_7: '',
	},
	"Инструкция-вкладыш": {
		pSegment: 'Инструкция-вкладыш по применению вкладывается в картонную или пластиковую коробку-пенал с зубной пастой или средствами для ухода за полостью рта в тубе, банке, флаконе или блистерной упаковке. <br><br>Вкладыш информирует потребителей о свойствах товара, о других продуктах в серии.',
		imgSrc: '/assets/img/list.png',
		bs_1: 'Инструкция-вкладыш в картонный пенал для зубной пасты', bs_2: 'Инструкция-вкладыш в картонный пенал – промо с увеличенным рекламным полем для комплектации основного продукта подарками',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
	"Этикетка": {
		pSegment: 'Применение этикетки в области Стоматологии. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: ' Этикетка для флакона', bs_2:'Этикетка для пеналов– промо с увеличенным рекламным полем для комплектации основного продукта подарками', bs_3:'Этикетка на блистер пластиковый для зубных щеток', bs_4:'Этикетка на блистер пластиковый для спреев', bs_5:'', bs_6: '',bs_7: '',
	},
	"Банка-флакон": {
			pSegment: 'Применение банки в области Стоматологии. Детали призводства',
			imgSrc: '/assets/img/stom-slide2.png',
			bs_1: 'Флакон для ополаскивателя и освежителя рта', bs_2:'Банка для зубной пасты ', bs_3:'', bs_4:'',bs_5:'',bs_6: '',bs_7: '',
	},
	"Туба": {
		pSegment: 'Туба в стоматологии используется для фасовки зубной пасты.<br><br>Туба с зубной пастой упаковывается в картонный футляр -пенал, в которую вложена инструкция-вкладыш по применению.<br><br>Для Тубы с зубной пастой возможна пластиковая упаковка, как в виде стандартного пенала, так и в виде блистера, приваренного к картонной основе.',
			imgSrc: '/assets/img/stom-slide.jpg',
			bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
},

"Витамины": {
	"Картонная коробка": {
			pSegment: 'Применение инструкции в области Витаминов. Детали призводства',
			imgSrc: '/assets/img/farma-slide.png',
			bs_1: 'Коробка для флакона', bs_2:'Коробка для банки', bs_3:'Пачка для капсул', bs_4:'Шоу-бокс из картона',bs_5:' ',bs_6: '',bs_7: '',

	},
	"Инструкция-вкладыш": {
		pSegment: 'Инструкция-вкладыш (листок-вкладыш) по применению вкладывается в картонную коробку с витаминами, расфасованными в тубу, банку, или блистерную упаковку.',
		imgSrc: '/assets/img/list.png',
		bs_1: 'Листок -вкладыш в картонную коробку для флакона', bs_2: 'Листок -вкладыш в картонную коробку для банки',bs_3: 'Листок -вкладыш в картонную пачки для капсул',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
	"Этикетка": {
		pSegment: 'Применение этикетки в области Витаминов. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: 'Этикетка для флакона', bs_2:'Этикетка для банки', bs_3:'Этикетка для картонной пачки и картонного пенала для банки и флакона', bs_4:'',bs_5:' ',bs_6: '',bs_7: '',
	},
	"Банка-флакон": {
			pSegment: 'Применение банки в области Витаминов. Детали призводства',
			imgSrc: '/assets/img/farma-slide.png',
			bs_1: 'Флакон для Витаминов', bs_2:'Банка для Витаминов', bs_3:'', bs_4:'',bs_5:'',bs_6: '',bs_7: '',
	},
	"Туба": {
		pSegment: 'Туба используется для фасовки витаминов с гелеобразной или однородной вязкой массой.<br><br>Туба с витаминами упаковывается в картонную коробку, в которую вложена инструкция-вкладыш по применению.',
		imgSrc: '/assets/img/stom-slide.jpg',
		bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
},


"Продукты питания": {
	"Картонная коробка": {
			pSegment: 'Применение картонной коробки в области Продуктов питания. Детали призводства',
			imgSrc: '/assets/img/prod.jpg',
			bs_1: 'Коробка для чая', bs_2:'Коробка для сыра и молочной продукции', bs_3:'Коробка для рыбы и морепродуктов', bs_4:'Коробка для специй и приправ',bs_5:'Коробка круп',bs_6: 'Шоу-бокс из картона ',bs_7: '',
	},
	"Инструкция-вкладыш": {
		pSegment: 'Инструкция-вкладыш по применению вкладывается в упаковку с продуктами питания, расфасованными в картонную коробку, тубу, банку, или блистерную упаковку. <br><br>Вкладыш информирует потребителей о способе приготовления, свойствах продукта, о других продуктах в серии',
		imgSrc: '/assets/img/list.png',
		bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
	"Этикетка": {
		pSegment: 'Применение этикетки в области Продуктов питания. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: 'Этикетка для овощей и фруктов и ягод', bs_2:'Этикетка для чая ', bs_3:'Этикетка для кофе', bs_4:'Этикетка для сыра и молочной продукции', bs_5:'Этикетка для рыбы и морепродуктов', bs_6: 'Этикетка для специй и приправ',bs_7: '',
	},
	"Банка-флакон": {
			pSegment: 'Применение банки в области Продуктов питания. Детали призводства',
			imgSrc: '/assets/img/prod.jpg',
			bs_1: 'Флакон для продутов питания', bs_2:'Банка для продуктов питания', bs_3:'', bs_4:'',bs_5:'',bs_6: '',bs_7: '',
	},
	"Туба": {
		pSegment: 'Туба используется для фасовки продуктов питания с пастообразной, жидкой структурой или однородной вязкой массой.',
			imgSrc: '/assets/img/stom-slide.jpg',
			bs_1: 'Туба с продуктами питания упаковывается в картонную коробку.', bs_2: 'Туба для фасовки пищевых продуктов (пюре, суп, вторые блюда, мясо, рыба, десерты, смузи, каша, творог с фруктами), <br> напитки (сок, вода, алкоголь, коктейли), приправы, соусы.',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
},



"Кондитерские изделия": {
	"Картонная коробка": {
			pSegment: 'Применение картонной коробки в области Кондитерских изделий. Детали призводства',
		imgSrc: '/assets/img/box.png',
		bs_1: 'Коробка для шоколада', bs_2:'Коробка для конфет', bs_3:'Коробка для тортов', bs_4:'Коробка для печенья',bs_5:'Шоу-бокс из картона ',bs_6: '',bs_7: '',
	},
	"Инструкция-вкладыш": {
		pSegment: 'Инструкция-вкладыш по применению вкладывается в упаковку с кондитерскими изделиями, расфасованными в картонную коробку, тубу, банку, или блистерную упаковку. Вкладыш информирует потребителей о способе приготовления, свойствах продукта, о других продуктах в серии',
		imgSrc: '/assets/img/list.png',
		bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
	"Этикетка": {
		pSegment: 'Применение этикетки в области Кондитерских изделий. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: 'Этикетка для шоколада', bs_2:'Этикетка для конфет', bs_3:'Этикетка для тортов', bs_4:'Этикетка для печенья', bs_5:'', bs_6: '',bs_7: '',
	},
	"Банка-флакон": {
			pSegment: 'Применение банки в области Кондитерских изделий. Детали призводства',
		imgSrc: '/assets/img/box.png',
		bs_1: 'Флакон для кондитерских изделий (сироп, пищевой краситель, и так далее)', bs_2:'Банка для кондитерских изделий', bs_3:'', bs_4:'',bs_5:'',bs_6: '',bs_7: '',
	},
	"Туба": {
		pSegment: 'Туба используется для фасовки кондитерских изделий с пастообразной, жидкой структурой или однородной вязкой массой.<br><br>В тубы фасуют десятки видов кондитерских изделий (шоколадную паста, мед, гели -конфеты и так далее)<br><br>Туба с кондитерскими изделиями упаковывается в картонную коробку',
			imgSrc: '/assets/img/stom-slide.jpg',
			bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
},

"Замороженные продукты": {
	"Картонная коробка": {
			pSegment: 'Применение картонной коробки в области Замороженных продуктов. Детали призводства',
		imgSrc: '/assets/img/box.png',
		bs_1: 'Коробка для мясных и рыбных полуфабрикатов', bs_2:'Коробка для овощей и фруктов и ягод', bs_3:'Коробка для готовых блюд', bs_4:'Коробка для пиццы',bs_5:'Шоу-бокс из картона ',bs_6: '',bs_7: '',
	},
	"Инструкция-вкладыш": {
		pSegment: 'Инструкция-вкладыш по применению вкладывается в упаковку с замороженными продуктами, расфасованными в картонную коробку, блистерную упаковку. <br><br>Вкладыш информирует потребителей о способе приготовления, свойствах продукта, о других продуктах в серии.',
		imgSrc: '/assets/img/list.png',
		bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
	"Этикетка": {
		pSegment: 'Применение этикетки в области Замороженных продуктов. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: 'Этикетка для мясных и рыбных полуфабрикатов', bs_2:'Этикетка для овощей и фруктов и ягод', bs_3:'Этикетка для готовых блюд', bs_4:'', bs_5:'', bs_6: '',bs_7: '',
	},
	"Банка-флакон": {
			pSegment: 'Применение банки в области Замороженных продуктов. Детали призводства',
		imgSrc: '/assets/img/box.png',
		bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
	"Туба": {
		pSegment: 'Применение тубы в области Замороженных продуктов. Детали призводства',
			imgSrc: '/assets/img/stom-slide.jpg',
			bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
},


"Промышленный": {
	"Картонная коробка": {
			pSegment: 'Применение картонной коробки в области Промышленный. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: ' Коробка для игр и детского творчества', bs_2:'Коробка для метизов и крепежа', bs_3:'Коробка для зоотоваров', bs_4:'Коробка для карандашей',bs_5:'Коробка для приборов',bs_6: 'Коробка для электротехники', bs_7: 'Шоу-бокс из картона',
	},
	"Инструкция-вкладыш": {
		pSegment: 'Инструкция-вкладыш по применению вкладывается в картонную коробку или блистерную упаковку с промышленными товарами. <br><br>Вкладыш информирует потребителей о свойствах товара, о других продуктах в серии.',
		imgSrc: '/assets/img/list.png',
		bs_1: 'Инструкция -кладыш в коробку для игр и детского творчества', bs_2: 'Инструкция -кладыш в коробку для метизов и крепежа',bs_3: 'Инструкция -кладыш в коробку для зоотоваров',bs_4: 'Инструкция -кладыш в коробку для приборов',bs_5: 'Инструкция -кладыш в коробку для электротехники',bs_6: '',bs_7: '',
	},
	"Этикетка": {
		pSegment: 'Применение этикетки в области Промышленный. Детали призводства',
			imgSrc: '/assets/img/box.png',
			bs_1: 'Этикетка для метизов и крепежа', bs_2:'Этикетка для зоотоваров', bs_3:'Этикетка для приборов', bs_4:'Этикетка для электротехники', bs_5:'Этикетка для бытовой химии', bs_6: 'Этикетка для автотоваров',bs_7: '',
	},
	"Банка-флакон": {
			pSegment: 'Применение банки в области Промышленный. Детали призводства',
		imgSrc: '/assets/img/box.png',
		bs_1: 'Флакон для промышленной и бытовой химии (лак, краска, клей, растворитель, и так далее)', bs_2:'Банка для промышленной и бытовой химии (лак, краска, клей, растворитель, и так далее', bs_3:'', bs_4:'', bs_5:'', bs_6: '',bs_7: '',
	},
	"Туба": {
		pSegment: 'Туба в промышленности применяется для фасовки геле- и пастообразных химических средств для промышленной химии (смазка, герметик, клей, краска и так далее)<br><br>Туба с бытовыми и промышленными химическими средствами упаковывается в картонный коробку, в которую вложена инструкция-вкладыш по применению. Возможна пластиковая упаковка, как в виде стандартной коробки, так и в виде блистера, приваренного к картонной основе.',
			imgSrc: '/assets/img/stom-slide.jpg',
			bs_1: '', bs_2: '',bs_3: '',bs_4: '',bs_5: '',bs_6: '',bs_7: '',
	},
},






};

// Функция обновления текста в зависимости от активных значений
function updateContentBasedOnActiveValues() {
	const activeSegment = document.querySelector('.segment.active');
	const activeCategory = document.querySelector('.categories.active');

	document.querySelector('.text-segment').textContent = activeSegment.getAttribute('value')
	document.querySelector('.text-categories').textContent = activeCategory.getAttribute('value')

	



	const segmentValue = activeSegment ? activeSegment.getAttribute('value') : null;
	const categoryValue = activeCategory ? activeCategory.getAttribute('value') : null;
	const zamorozElement = document.querySelector('.i-zamoroz');




	let pSegment = 'Область применения и описание. Детали призводства';
	let imgSrc = '/assets/img/bad-slide.png';

	


	
	if (categoryValue == 'Туба' || categoryValue =='Банка-флакон'){
		zamorozElement.classList.add('hide');
	}else{
		zamorozElement.classList.remove('hide');
	}

	// if (categoryValue == 'Банка-флакон'){
	// 	console.log(categoryValue)
	// 	zamorozElement.classList.add('hide');
	// }else{
	// 	zamorozElement.classList.remove('hide');
	// }


	
	

	const imgElement = document.querySelector('.img-segment');
	imgElement.src = imgSrc;

	// Получаем соответствующие тексты из объекта
	if (segmentValue && categoryValue && contentMapping[segmentValue] && contentMapping[segmentValue][categoryValue]) {

			pSegment = contentMapping[segmentValue][categoryValue].pSegment;
			bs_1 = contentMapping[segmentValue][categoryValue].bs_1;
			bs_2 = contentMapping[segmentValue][categoryValue].bs_2;
			bs_3 = contentMapping[segmentValue][categoryValue].bs_3;
			bs_4 = contentMapping[segmentValue][categoryValue].bs_4;
			bs_5 = contentMapping[segmentValue][categoryValue].bs_5;
			bs_6 = contentMapping[segmentValue][categoryValue].bs_6;
			bs_7 = contentMapping[segmentValue][categoryValue].bs_7;
			const content = contentMapping[segmentValue] && contentMapping[segmentValue][categoryValue];
			if (content) {
					// Обновление source для изображения
					const imgElement = document.querySelector('.img-segment');
					imgElement.src = content.imgSrc;
			}
	}

	// Обновляем текст в нужных элементах

	document.querySelector('.p-segment').innerHTML = pSegment;
	document.querySelector('.bs-1').innerHTML = bs_1;
	document.querySelector('.bs-2').innerHTML = bs_2;
	document.querySelector('.bs-3').innerHTML = bs_3;
	document.querySelector('.bs-4').innerHTML = bs_4;
	document.querySelector('.bs-5').innerHTML = bs_5;
	document.querySelector('.bs-6').innerHTML = bs_6;
	document.querySelector('.bs-6').innerHTML = bs_7;
}

// Инициализация событий на сегментах и категориях
const segment = document.querySelectorAll('.segment');
const categories = document.querySelectorAll('.categories');

updateActiveState(segment, 'active');
updateActiveState(categories, 'active');




 // Функция для скрытия элемента с текстом 'n'
 function hideSegments() {
	const segments = document.querySelectorAll('.btn-segment');

	// Сначала устанавливаем display для всех сегментов
	segments.forEach(function(segment) {
			segment.style.display = 'flex'; // Устанавливаем display в 'flex'
	});

	// Затем проверяем текст каждого сегмента
	segments.forEach(function(segment) {
			if (segment.textContent.trim() === 'n') {
					// Скрываем элемент
					segment.style.display = 'none';
			}
	});
}

// Добавление обработчиков событий
const elementsSeg = document.querySelectorAll('.categories, .segment');

elementsSeg.forEach((element) => {
    element.addEventListener('click', hideSegments);
});

document.querySelectorAll('.btn-segment').forEach(function(segment) {
	segment.addEventListener('click', hideSegments);
});






// /////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", function() {
// 	// Получаем элемент по ID
// 	var instrButton = document.getElementById('instr-main');

// 	// Создаем событие клика
// 	var clickEvent = new Event('click', {
// 			'bubbles': true,
// 			'cancelable': true
// 	});

// 	// Добавляем обработчик события для нажатия на элемент
// 	instrButton.addEventListener('click', function() {
// 			// Логика, срабатывающая при клике на кнопку
// 			console.log('Инструкция-вкладыш выбрана');

// 			// Обновляем визуальное состояние кнопок
// 			var buttons = document.querySelectorAll('.categories.button');
// 			buttons.forEach(function(button) {
// 					button.classList.remove('active');
// 			});

// 			instrButton.classList.add('active');
// 	});

// 	// Виртуально "нажимаем" на кнопку
// 	instrButton.dispatchEvent(clickEvent);
// });


document.addEventListener("DOMContentLoaded", function() {
	// Получаем параметр из URL
	const urlParams = new URLSearchParams(window.location.search);
	const type = urlParams.get('type');

	if (type) {
			// Найти кнопку с соответствующим значением
			const button = document.querySelector(`.categories.button[value="${type}"]`);
			
			if (button) {
					// Создаем событие клика
					var clickEvent = new Event('click', {
							'bubbles': true,
							'cancelable': true
					});

					// Добавляем обработчик события для нажатия на элемент
					button.addEventListener('click', function() {
							// Логика, срабатывающая при клике на кнопку
							console.log(`${type} выбрана`);

							// Обновляем визуальное состояние кнопок
							var buttons = document.querySelectorAll('.categories.button');
							buttons.forEach(function(btn) {
									btn.classList.remove('active');
							});

							button.classList.add('active');
					});

					// Виртуально "нажимаем" на кнопку
					button.dispatchEvent(clickEvent);
			}
	}
});










document.addEventListener('DOMContentLoaded', function() {
	// Получаем все кнопки с классом .segment-btn
	const segmentButtons = document.querySelectorAll('.segment-btn');

	segmentButtons.forEach(button => {
			button.addEventListener('click', () => {
					// Сначала удаляем класс `.show` у всех элементов `.segment-title` и `.segment-title-dark`
					segmentButtons.forEach(btn => {
							const titles = btn.querySelectorAll('.segment-title, .segment-title-dark');
							titles.forEach(title => {
									title.classList.remove('show');
							});
					});
					
					// Затем добавляем класс `.show` только к дочерним элементам нажатой кнопки
					const activeTitles = button.querySelectorAll('.segment-title, .segment-title-dark');
					activeTitles.forEach(title => {
							title.classList.add('show');
					});
			});
	});
});	