<!DOCTYPE html>
<html lang="ru">
<title>Производство</title>

<body>
	<?php include "components/head.php"?>
	<?php include "components/nav.php"?>
	<img class="call-back-img" src="/assets/icons/call-back.svg" alt="">

	<nav class="menu-bar-con">
			<ul>
				<li class="menu-bar i-cor active " value="Картонная коробка">
					<h1>Картонная коробка</h1>
						<?php include "./components/under-menu.php" ?>
				</li>

				<li class="menu-bar i-instr " value="Инструкция-вкладыш">
					<h1>Инструкция-вкладыш</h1>
					<?php include "./components/under-menu.php" ?>
				</li>

				<li class="menu-bar i-et " value="Этикетка">
					<h1>Этикетка</h1>
					<?php include "./components/under-menu.php" ?>
				</li>

				<li class="menu-bar i-tub" value="Туба">
					<h1>Туба</h1>
					<?php include "./components/under-menu.php" ?>
				</li>

				<li class="menu-bar i-ban" value="Банка">
					<h1>Банка</h1>
					<?php include "./components/under-menu.php" ?>
				</li>

			</ul>



			<div class="call-back">
			<h1>Обратная связь</h1>
			<h2>Оставьте данные и менеджер с вами свяжется</h2>

			<form action="#">
				<input type="text" placeholder="компания">
				<input type="phone" placeholder="номер телефона">
				<button class="button">Отправить</button>
			</form>
			
			</div>



	</nav>



	<section class="container">


	<div class="content">

	<div class="navigation">
	 <p class="text-page"> Производство </p> 
	 <p class="text-page"> / </p> 
	 <p class="text-categories-nav"> Картонная коробка </p> 
	 <p class="text-page"> / </p> 
	 <p class="text-segment-nav"> Стомотология</p>
	 <p class="text-page"> / </p> 
	 <p class="text-podsegment"> Картонные футляры-пеналы для зубной пасты </p>
	</div>


	<div class="categories-con">
		<div class="categories button i-cor active" value="Картонная коробка">
			Картонная коробка
		</div>
		<div class="categories button i-instr" value="Инструкция-вкладыш">
			Инструкция-вкладыш
		</div>
		<div class="categories button i-et" value="Этикетка">
			Этикетка
		</div>
		<div class="categories button i-tub" value="Туба">
			Туба
		</div>
		<div class="categories button i-ban" value="Банка">
			Банка
		</div>
	</div>

	<div class="main-content">
		<div class="main-content_podsegment">
			<?php include "components/podsegment.php"?>

		
		
		
		</div>
		<div class="main-content_text">
			<h1 class="text-categories move">Картонная коробка</h1>
			<h2 class="text-segment move">Стоматология</h2>
			<p class="text-description move">
				Картонная коробка витамины
			</p>
			<?php include "components/buttons-slide.php"?>
		</div>

		</div>






		<div class="segment-btn_con">
			<div class="segment-btn">

				<div class="segment-cover">
					<h2 >БАД</h2>
				</div>
				<div class="segment low i-bad" value="БАД">
					<img src="/assets/icons/bad.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Косметика и парфюмерия</h2>
				</div>
				<div class="segment i-cosm active" value="Косметика и парфюмерия" >
					<img src="/assets/icons/cosm.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Фармацевтика</h2>
				</div>
				<div class="segment low i-farma " value="Фармацевтика">
					<img src="/assets/icons/farma.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Стоматология</h2>
				</div>
				<div class="segment low i-dent " value="Стоматология">
					<img src="/assets/icons/dent.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Витамины</h2>
				</div>
				<div class="segment low i-vit" value="Витамины">
					<img src="/assets/icons/vit.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Продукты питания</h2>
				</div>
				<div class="segment i-prod" value="Продукты питания">
					<img src="/assets/icons/prod.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Кондитерские изделия</h2>
				</div>
				<div class="segment i-conditer" value="Кондитерские изделия">
					<img src="/assets/icons/cond.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Замороженные продукты</h2>
				</div>
				<div class="segment i-zamoroz" value="Замороженные продукты" >
					<img src="/assets/icons/froz.svg" alt="">
				</div>
			</div>

			<div class="segment-btn">
				<div class="segment-cover">
					<h2>Промышленный</h2>
				</div>
				<div class="segment low i-prom" value="Промышленный">
					<img src="/assets/icons/prom.svg" alt="">
				</div>
			</div>

		</div>
	</div>
	





	</section>


	
</body>
</html>