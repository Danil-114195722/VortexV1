import './services.scss'

const Services = () => {
	return (
		<div className="services">
			<h2 className="services-title">Способы <span>перевозок</span></h2>
			<div className="services__list">
				<div className="services__item">
						<div className="services__item-hrline"></div>
						<div className="services__item-content">
							<div className='services__item-img track'></div>
							<div className="services__desc">
								<h3 className="services__desc-title">Автомобильные</h3>
								<p className="services__desc-subtitle">Доставка любого вида груза от сборного до <br /> проектного везде, где есть дорога</p>
								<div className="services__graphics">
									<div className="services__graphics-item">
										<p>Скорость</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
									<div className="services__graphics-item">
										<p>Стоимость</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
									<div className="services__graphics-item">
										<p>Возможность</p>
										<img src="../../../public/100.svg" alt="100/100" />
									</div>
								</div>
							</div>
						</div>
				</div>
				<div className="services__item">
						<div className="services__item-hrline"></div>
						<div className="services__item-content">
							<div className='services__item-img ship'></div>
							<div className="services__desc">
								<h3 className="services__desc-title">Морские</h3>
								<p className="services__desc-subtitle">Доставка любого вида груза от сборного до <br /> проектного в любой порт, куда заходят корабли</p>
								<div className="services__graphics">
									<div className="services__graphics-item">
										<p>Скорость</p>
										<img src="../../../public/30.svg" alt="30/100" />
									</div>
									<div className="services__graphics-item">
										<p>Стоимость</p>
										<img src="../../../public/30.svg" alt="30/100" />
									</div>
									<div className="services__graphics-item">
										<p>Возможность</p>
										<img src="../../../public/100.svg" alt="100/100" />
									</div>
								</div>
							</div>
						</div>
				</div>
				<div className="services__item">
						<div className="services__item-hrline"></div>
						<div className="services__item-content">
							<div className='services__item-img train'></div>
							<div className="services__desc">
								<h3 className="services__desc-title">Железнодорожные</h3>
								<p className="services__desc-subtitle">Доставка от коробки до контейнера везде, где есть <br /> рельсы</p>
								<div className="services__graphics">
									<div className="services__graphics-item">
										<p>Скорость</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
									<div className="services__graphics-item">
										<p>Стоимость</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
									<div className="services__graphics-item">
										<p>Возможность</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
								</div>
							</div>
						</div>
				</div>
				<div className="services__item">
						<div className="services__item-hrline"></div>
						<div className="services__item-content">
							<div className='services__item-img avia'></div>
							<div className="services__desc">
								<h3 className="services__desc-title">Авиатранспортные</h3>
								<p className="services__desc-subtitle">Доставка любого вида груза быстро везде, где есть <br /> взлетная и посадочная полоса</p>
								<div className="services__graphics">
									<div className="services__graphics-item">
										<p>Скорость</p>
										<img src="../../../public/100.svg" alt="100/100" />
									</div>
									<div className="services__graphics-item">
										<p>Стоимость</p>
										<img src="../../../public/100.svg" alt="100/100" />
									</div>
									<div className="services__graphics-item">
										<p>Возможность</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
								</div>
							</div>
						</div>
				</div>
				<div className="services__item">
						<div className="services__item-hrline"></div>
						<div className="services__item-content">
							<div className='services__item-img multi'></div>
							<div className="services__desc">
								<h3 className="services__desc-title">Мультимодальные</h3>
								<p className="services__desc-subtitle">Доставка груза в любую точку, совместив все виды <br /> транспорта</p>
								<div className="services__graphics">
									<div className="services__graphics-item">
										<p>Скорость</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
									<div className="services__graphics-item">
										<p>Стоимость</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
									<div className="services__graphics-item">
										<p>Возможность</p>
										<img src="../../../public/50.svg" alt="50/100" />
									</div>
								</div>
							</div>
						</div>
						<div className="services__item-hrline"></div>
				</div>
			</div>
		</div>
	)
}

export default Services