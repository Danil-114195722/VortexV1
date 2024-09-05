import './directions.scss'

const Directions = () => {
	return (
		<div className="directions" id='directions'>
			<h2 className="directions-title element-animation">Ключевые <span>направления</span></h2>
			<div className="directions__list">
				<div className="directions__item element-animation">
					<img src="../../../public/china.webp" alt="China" />
					<p className="directions__item-subtitle">Китай</p>
				</div>
				<div className="directions__item element-animation">
					<img src="../../../public/europe.webp" alt="Europe" />
					<p className="directions__item-subtitle">Страны Европы</p>
				</div>
				<div className="directions__item element-animation">
					<img src="../../../public/turkey.webp" alt="Turkey" />
					<p className="directions__item-subtitle">Турция</p>
				</div>
				<div className="directions__item element-animation">
					<img src="../../../public/india.webp" alt="India" />
					<p className="directions__item-subtitle">Индия</p>
				</div>
			</div>
		</div>
	)
}

export default Directions