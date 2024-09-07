import { useState } from 'react'
import './feedback.scss'
import Modal from '../modal/Modal'
import { createGlobalStyle } from 'styled-components'
import axios from 'axios'

const GlobalStyles = createGlobalStyle`
	body, html{
		overflow: hidden;
	}
	#main, #directions, #services, #advantages, #feedback, footer {
		opacity: 0.2;
		transition: opacity 0.3s ease-out; 
		cursor: pointer;
	}	
`

const Loading = createGlobalStyle`
	body, html{
		overflow: hidden;
	}
`

const Feedback = () => {
	const [isAccess, setIsAccess] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	document.addEventListener('click', e => {
		if (e.target instanceof HTMLElement && !e.target?.closest('.modal')) {
			setIsAccess(false)
		}
	})

	const phoneValidate = (e) => {
		e.preventDefault()
		// eslint-disable-next-line no-useless-escape
		if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e.target.phone.value)) {
			a(e)
		}
		else{	
			alert('Укажите правильный номер телефона')
		}
	}

	const a  = e => {
		setIsLoading(true)
		const formData = {
			name: e.target.name.value,
			phone: e.target.phone.value,
			email: e.target.email.value,
			service: e.target.serviceList.value,
			message: e.target.message.value
		}

		Object.keys(formData).forEach(key => {
				if (formData[key] === '' || formData[key] === 'a') {
					formData[key] = null;
				}
		})

		axios.post('http://api.vortex.spb.su/send_mail/', formData)
		.then(() => {
			setIsAccess(true)
			setIsLoading(false)
		})
		.catch(error => {
			console.error('Ошибка при отправке запроса', error)
			alert('Ошибка при отправке запроса, попробуйте отправить заявку позже или свяжитесь с нами напрямую')
			setIsLoading(false)
		})

		e.target[0].value = ''
		e.target[1].value = ''
		e.target[2].value = ''
		e.target[3].value = 'a'
		e.target[4].value = ''
	}

	return (
		<>
		{isAccess && (
			<>
			<Modal setIsAccess={setIsAccess}/>
			<GlobalStyles />
			</>
		)}
		{isLoading && (
			<>
			<div className="mask">
				<div className="loader"></div>
			</div>
			<Loading />
			</>
		)}
		<div className="feedback element-animation" id='feedback'>
			<h2 className="feedback-title">Оставьте вашу <span>заявку</span></h2>
			<div className="feedback__window scale-anim">
				<form action="" onSubmit={(e) => phoneValidate(e)}>
					<input name='name' type="text" placeholder='Ваше имя' required/>
					<input name='phone' type="number" placeholder='Ваш номер' required/>
					<input name='email' type="email" placeholder='Ваша почта' />
					<select name="serviceList" id="serviceList" required defaultValue='a'>
						<option value='a' disabled>Услуга</option>
						<option value="log">Международная логистика</option>
						<option value="customs">Таможенное оформление</option>
						<option value="cert">Сертификация</option>
					</select>
					<textarea name="message" id="message" placeholder='Ваше сообщение'></textarea>
					<input type="submit" value='Оставить заявку'/>
				</form>
			</div>
			<img className='feedback-bg1' src="../../../public/bg_triangle4.webp" alt="" />
			<img className='feedback-bg2' src="../../../public/bg_triangle5.webp" alt="" />
		</div>
		</>
	)
}

export default Feedback