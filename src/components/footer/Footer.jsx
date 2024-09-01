import './footer.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__left">
				<img src="../../../public/logo_dark.svg" alt="Vortex" />
				<nav className="footer__nav">
					<p>Услуги</p>
					<p>Нарпавления</p>
					<p>Преимущества</p>
					<p>Обратная связь</p>
				</nav>
			</div>
			<div className="footer__right">
				<div className="footer__contacts">
					<p>manager@vortex.spb.su</p>
					<p>logist@vortex.spb.su</p>
				</div>
				<div className="footer__media">
					<img src="../../../public/phone.svg" alt="Phone" />
					<img src="../../../public/insta.svg" alt="Inst" />
					<img src="../../../public/tg.svg" alt="Tg" />
				</div>
			</div>
		</footer>
	)
}

export default Footer