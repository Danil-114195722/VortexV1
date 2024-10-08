import './mainScreen.scss'

const MainScreen = () => {
	return (
		<div className="main" id='main'>
			<header className="header">
				<div className="header__left">
					<a href="#main"><img src="../../../public/logo.svg" alt="Vortex" /></a>
					<div className="header__nav">
						<a href='#services' className='link'>Услуги</a>
						<a href='#directions' className='link'>Направления</a>
						<a href='#advantages' className='link'>Преимущества</a>
						<a href='#feedback' className='link'>Оставить заявку</a>
					</div>
				</div>
				<div className="header__right">
					<a href="tel:+79219256513"><h5 className='link'>+7 921 925 65 13</h5></a>
					<a href="#feedback"><input type="button" value='Оставить заявку'/></a>
					<div className="menu">
						<input type="checkbox" id='burger-checkbox' className='burger-checkbox' />
						<label htmlFor="burger-checkbox" className='burger'></label>
						<ul className='menu-list'>
							<a href="#main"><li className='menu-item'>Главная</li></a>
							<a href="#services"><li className='menu-item'>Услуги</li></a>
							<a href="#directions"><li className='menu-item'>Направления</li></a>
							<a href="#advantages"><li className='menu-item'>Преимущества</li></a>
							<a href="#feedback"><li className='menu-item'>Оставить заявку</li></a>
						</ul>
					</div>
				</div>
			</header>
			<div className="entry">
				<h1 className='entry__title'>Международная <br /> <span>логистика</span></h1>
				<div className="entry__subtitle">
					<p>Мы предлагаем комплексные логистические решения для оптимизации <br /> ваших международных перевозок.</p>
					<p>С нами международная логистика легко, <br /> таможенное оформление с удовольствием, <br /> сертификация просто, <br /> Направьте свой запрос в <a href="#feedback"><span className='link'>Вортекс.</span></a></p>
					<img src="../../../public/container.webp" alt="" />
				</div>
			</div>
			<img className='main-bg1' src="../../../public/bg_triangle1.webp" alt="" />
			<img className='main-bg2' src="../../../public/bg_triangle2.webp" alt="" />
			<img className='main-bg3' src="../../../public/bg_triangle3.webp" alt="" />
		</div>
	)
}

export default MainScreen