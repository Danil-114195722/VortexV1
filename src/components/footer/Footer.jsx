import './footer.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__left">
				<a href="#main"><img src="../../../public/logo_dark.svg" alt="Vortex" /></a>
				<nav className="footer__nav">
					<a href='#services'>Услуги</a>
					<a href='#directions'>Направления</a>
					<a href='#advantages'>Преимущества</a>
					<a href='#feedback'>Обратная связь</a>
				</nav>
			</div>
			<div className="footer__right">
				<div className="footer__contacts">
					<p>manager@vortex.spb.su</p>
					<p>logist@vortex.spb.su</p>
				</div>
				<div className="footer__media">
					<a href="tel:+79219256513"><img src="../../../public/phone.svg" alt="Phone"/></a>
					<a href="https://www.instagram.com/vortex.spb?igsh=MWJkMWl1Mml6dTA2eA=="><img src="../../../public/insta.svg" alt="Inst" /></a>
					<a href="https://t.me/vortexstp"><img src="../../../public/tg.svg" alt="Tg" /></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer