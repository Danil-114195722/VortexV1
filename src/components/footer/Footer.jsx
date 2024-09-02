import './footer.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__left">
				<a href="#main"><img src="../../../public/logo_dark.svg" alt="Vortex" /></a>
				<nav className="footer__nav">
					<a href='#services' className='link'>Услуги</a>
					<a href='#directions' className='link'>Направления</a>
					<a href='#advantages' className='link'>Преимущества</a>
					<a href='#feedback' className='link'>Обратная связь</a>
				</nav>
			</div>
			<div className="footer__right">
				<div className="footer__contacts">
					<p>manager@vortex.spb.su</p>
					<p>logist@vortex.spb.su</p>
				</div>
				<div className="footer__media">
					<a href="tel:+79219256513"><svg className='svg' width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4 20.75H18.17C15.5788 20.4681 13.0893 19.5846 10.9 18.17C8.86618 16.8747 7.13938 15.1513 5.84 13.12C4.42216 10.925 3.53852 8.42823 3.26 5.83001C3.22816 5.52011 3.2596 5.20696 3.35243 4.90958C3.44525 4.6122 3.59752 4.33677 3.8 4.10001C3.99694 3.86008 4.24002 3.66211 4.51486 3.51782C4.78969 3.37354 5.09068 3.28587 5.4 3.26001H8C8.56312 3.26058 9.10747 3.46248 9.53476 3.82925C9.96205 4.19602 10.2441 4.70349 10.33 5.26001C10.425 5.97489 10.6028 6.67628 10.86 7.35001C11.0164 7.77339 11.0487 8.23264 10.9531 8.67375C10.8574 9.11485 10.6378 9.51947 10.32 9.84001L9.71 10.45C10.6704 11.9662 11.9587 13.2477 13.48 14.2L14.09 13.6C14.4105 13.2822 14.8152 13.0626 15.2563 12.9669C15.6974 12.8713 16.1566 12.9036 16.58 13.06C17.2545 13.3148 17.9556 13.4926 18.67 13.59C19.236 13.6751 19.7515 13.9638 20.1198 14.402C20.488 14.8403 20.6837 15.3978 20.67 15.97V18.37C20.67 18.9942 20.4227 19.593 19.9823 20.0353C19.5419 20.4776 18.9442 20.7274 18.32 20.73L18.4 20.75ZM8 4.75001H5.61C5.49265 4.75777 5.37809 4.78924 5.27325 4.84252C5.1684 4.8958 5.07545 4.96979 5 5.06001C4.92658 5.14452 4.871 5.24302 4.83663 5.34957C4.80226 5.45612 4.7898 5.56852 4.8 5.68001C5.04249 8.03679 5.83362 10.304 7.11 12.3C8.28664 14.1467 9.85332 15.7134 11.7 16.89C13.6973 18.1798 15.967 18.9878 18.33 19.25C18.4529 19.2569 18.5759 19.2383 18.6912 19.1953C18.8065 19.1522 18.9117 19.0857 19 19C19.1592 18.8368 19.2489 18.6181 19.25 18.39V16C19.2545 15.7896 19.1817 15.5848 19.0453 15.4244C18.9089 15.2641 18.7184 15.1593 18.51 15.13C17.6839 15.0189 16.8724 14.8177 16.09 14.53C15.9359 14.4724 15.7686 14.4596 15.6075 14.4933C15.4464 14.5269 15.2982 14.6055 15.18 14.72L14.18 15.72C14.0629 15.8342 13.912 15.9076 13.7499 15.9292C13.5877 15.9508 13.423 15.9195 13.28 15.84C11.1462 14.6342 9.37997 12.8715 8.17 10.74C8.08718 10.598 8.05402 10.4324 8.07575 10.2694C8.09748 10.1065 8.17286 9.95538 8.29 9.84001L9.29 8.84001C9.40468 8.72403 9.48357 8.57751 9.51726 8.41793C9.55095 8.25835 9.53802 8.09244 9.48 7.94001C9.19119 7.15799 8.98997 6.34637 8.88 5.52001C8.85519 5.30528 8.75133 5.10747 8.58865 4.96513C8.42597 4.82278 8.21613 4.7461 8 4.75001Z" fill="#ffff"/></svg></a>
					<a href="https://www.instagram.com/vortex.spb?igsh=MWJkMWl1Mml6dTA2eA=="><svg className='svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5ZM15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" fill="white"/><path d="M22.5 6.25C21.8096 6.25 21.25 6.80965 21.25 7.5C21.25 8.19035 21.8096 8.75 22.5 8.75C23.1904 8.75 23.75 8.19035 23.75 7.5C23.75 6.80965 23.1904 6.25 22.5 6.25Z" fill="white"/><path fillRule="evenodd" clipRule="evenodd" d="M2.06745 5.34508C1.25 6.94941 1.25 9.04961 1.25 13.25V16.75C1.25 20.9504 1.25 23.0506 2.06745 24.6549C2.7865 26.0661 3.93385 27.2135 5.34508 27.9325C6.94941 28.75 9.04961 28.75 13.25 28.75H16.75C20.9504 28.75 23.0506 28.75 24.6549 27.9325C26.0661 27.2135 27.2135 26.0661 27.9325 24.6549C28.75 23.0506 28.75 20.9504 28.75 16.75V13.25C28.75 9.04961 28.75 6.94941 27.9325 5.34508C27.2135 3.93385 26.0661 2.7865 24.6549 2.06745C23.0506 1.25 20.9504 1.25 16.75 1.25H13.25C9.04961 1.25 6.94941 1.25 5.34508 2.06745C3.93385 2.7865 2.7865 3.93385 2.06745 5.34508ZM16.75 3.75H13.25C11.1086 3.75 9.65281 3.75195 8.5276 3.84387C7.43155 3.93342 6.87105 4.09574 6.48005 4.29496C5.53924 4.77434 4.77434 5.53924 4.29496 6.48005C4.09574 6.87105 3.93342 7.43155 3.84387 8.5276C3.75195 9.65281 3.75 11.1086 3.75 13.25V16.75C3.75 18.8915 3.75195 20.3471 3.84387 21.4724C3.93342 22.5685 4.09574 23.129 4.29496 23.52C4.77434 24.4608 5.53924 25.2256 6.48005 25.705C6.87105 25.9042 7.43155 26.0666 8.5276 26.1561C9.65281 26.248 11.1086 26.25 13.25 26.25H16.75C18.8915 26.25 20.3471 26.248 21.4724 26.1561C22.5685 26.0666 23.129 25.9042 23.52 25.705C24.4608 25.2256 25.2256 24.4608 25.705 23.52C25.9042 23.129 26.0666 22.5685 26.1561 21.4724C26.248 20.3471 26.25 18.8915 26.25 16.75V13.25C26.25 11.1086 26.248 9.65281 26.1561 8.5276C26.0666 7.43155 25.9042 6.87105 25.705 6.48005C25.2256 5.53924 24.4608 4.77434 23.52 4.29496C23.129 4.09574 22.5685 3.93342 21.4724 3.84387C20.3471 3.75195 18.8915 3.75 16.75 3.75Z" fill="white"/></svg></a>
					<a href="https://t.me/vortexstp"><svg className='svg-tg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M27.4961 15C27.4961 21.9035 21.8996 27.5 14.9961 27.5C8.09254 27.5 2.49609 21.9035 2.49609 15C2.49609 8.09644 8.09254 2.5 14.9961 2.5C21.8996 2.5 27.4961 8.09644 27.4961 15ZM15.444 11.728C14.2282 12.2337 11.7983 13.2804 8.15431 14.868C7.56258 15.1034 7.25261 15.3336 7.22438 15.5586C7.17669 15.9391 7.65308 16.0889 8.30179 16.2929C8.39003 16.3206 8.48146 16.3494 8.57518 16.3797C9.21342 16.5872 10.0719 16.83 10.5183 16.8396C10.9231 16.8484 11.375 16.6815 11.8738 16.3389C15.2785 14.0406 17.0361 12.879 17.1464 12.8539C17.2242 12.8362 17.3321 12.814 17.4052 12.879C17.4784 12.944 17.4711 13.067 17.4634 13.1C17.4162 13.3012 15.5462 15.0397 14.5785 15.9394C14.2769 16.2199 14.0629 16.4187 14.0191 16.4642C13.9211 16.566 13.8212 16.6622 13.7252 16.7547C13.1324 17.3264 12.6876 17.755 13.7499 18.455C14.2602 18.7914 14.6687 19.0695 15.0762 19.347C15.5212 19.6501 15.9651 19.9524 16.5395 20.3289C16.6857 20.4247 16.8255 20.5244 16.9616 20.6214C17.4795 20.9906 17.9447 21.3224 18.5196 21.2694C18.8536 21.2387 19.1986 20.9246 19.3739 19.9879C19.788 17.7741 20.602 12.9775 20.7901 11.001C20.8066 10.8278 20.7859 10.6062 20.7691 10.5089C20.7525 10.4116 20.7177 10.273 20.5912 10.1704C20.4415 10.0489 20.2102 10.0233 20.1069 10.025C19.6367 10.0334 18.9154 10.2842 15.444 11.728Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/></svg></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer