import './directions.scss'

const Directions = () => {
	return (
		<div className="directions element-animation" id='directions'>
			<h2 className="directions-title">Ключевые <span>направления</span></h2>
			<div className="directions__list">
				<div className="directions__item">
					<img src="../../../public/china.jpg" alt="China" />
					<p className="directions__item-subtitle">Китай</p>
				</div>
				<div className="directions__item">
					<img src="../../../public/europe.jpg" alt="Europe" />
					<p className="directions__item-subtitle">Страны Европы</p>
				</div>
				<div className="directions__item">
					<img src="../../../public/turkey.png" alt="Turkey" />
					<p className="directions__item-subtitle">Турция</p>
				</div>
				<div className="directions__item">
					<img src="../../../public/india.png" alt="India" />
					<p className="directions__item-subtitle">Индия</p>
				</div>
			</div>
		</div>
	)
}

export default Directions