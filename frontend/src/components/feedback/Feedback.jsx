import { useState } from 'react'
import './feedback.scss'
import Modal from '../modal/Modal'
import { createGlobalStyle } from 'styled-components'

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

const Feedback = () => {
	const [isAccess, setIsAccess] = useState(false)

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
	const a = e => {
		const formData = {
			name: e.target.name.value,
			phone: e.target.phone.value,
			email: e.target.email.value,
			sevice: e.target.serviceList.value,
			message: e.target.message.value
		}
		if(formData.sevice === 'a'){
			formData.sevice = null
		}
		if(formData.message === ''){
			formData.message = null
		}
		if(formData.email === ''){
			formData.email = null
		}
		console.log(formData)
		setIsAccess(true)
	}
	return (
		<>
		{isAccess && (
			<>
			<Modal setIsAccess={setIsAccess}/>
			<GlobalStyles />
			</>
		)}
		<div className="feedback element-animation" id='feedback'>
			<h2 className="feedback-title">Обратная <span>свзяь</span></h2>
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
			<img className='feedback-bg1' src="../../../public/bg_triangle4.png" alt="" />
			<img className='feedback-bg2' src="../../../public/bg_triangle5.png" alt="" />
		</div>
		</>
	)
}

export default Feedback