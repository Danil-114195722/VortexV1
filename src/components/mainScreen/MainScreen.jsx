import './mainScreen.scss'

const MainScreen = () => {
	return (
		<div className="main">
			<header className="header">
				<div className="header__left">
					<img src="../../../public/logo.png" alt="Vortex" />
					<div className="header__nav">
						<p>Услуги</p>
						<p>Направления</p>
						<p>Преимущества</p>
						<p>Обратная связь</p>
					</div>
				</div>
				<div className="header__right">
					<h5>+7 921 925 65 13</h5>
					<input type="button" value='Оставить заявку'/>
				</div>
			</header>
			<div className="entry">
				<h1 className='entry__title'>Международная <br /> <span>логистика</span></h1>
				<div className="entry__subtitle">
					<p>Мы предлагаем комплексные логистические решения для оптимизации <br /> ваших международных перевозок.</p>
					<p>С нами международная логистика легко, таможенное <br /> оформление с удовольствием, сертификация просто <br /> Забрось свой запрос в <span>Вортекс.</span></p>
					<img src="../../../public/container.png" alt="" />
				</div>
			</div>
			<img className='main-bg1' src="../../../public/bg_triangle1.png" alt="" />
			<img className='main-bg2' src="../../../public/bg_triangle2.png" alt="" />
			<img className='main-bg3' src="../../../public/bg_triangle3.png" alt="" />
		</div>
	)
}

export default MainScreen