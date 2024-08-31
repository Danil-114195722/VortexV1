import './advantages.scss'
const Advantages = () => {
	return (
		<div className="advantages">
			<h2 className="advantages-title">Наши <span>преимущества</span></h2>
			<div className="advantages__list">
				<div className="advantages__row-one">
					<div className="advantages__item">
						<img src="../../../public/dopysl.svg" alt="" />
						<div className="advantages__item-desk">
							<h4>Дополнительные услуги</h4>
							<p>Предлагаем сертификацию и <br /> таможенное оформление</p>
						</div>
					</div>
					<div className="advantages__item">
						<img src="../../../public/kompleks.svg" alt="" />
						<div className="advantages__item-desk">
							<h4>Комплексный подход</h4>
							<p>Полный комплекс услуг по <br /> обработке грузов разного вида <br /> сложности</p>
						</div>
					</div>
					<div className="advantages__item">
						<img src="../../../public/individ.svg" alt="" />
						<div className="advantages__item-desk">
							<h4>Индивидуальный подход</h4>
							<p>Разрабатываем маршруты под <br /> конкретный проект с учетом <br /> имеющихся особенностей</p>
						</div>
					</div>
				</div>
				<div className="advantages__row-two">
					<div className="advantages__item">
						<img src="../../../public/oplata.svg" alt="" />
						<div className="advantages__item-desk">
							<h4>Оплата за товар и услуги</h4>
							<p>возможность валютной оплаты <br /> за товар</p>
						</div>
					</div>
					<div className="advantages__item">
						<img src="../../../public/otkrit.svg" alt="" />
						<div className="advantages__item-desk">
							<h4>Открытость к диалогу</h4>
							<p>Будем рады ответить на <br /> вопросы, посчитать конкретные <br /> запросы</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Advantages