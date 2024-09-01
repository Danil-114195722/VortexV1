import './feedback.scss'

const Feedback = () => {
	return (
		<div className="feedback">
			<h2 className="feedback-title">Обратная <span>свзяь</span></h2>
			<div className="feedback__window">
				<form action="">
					<input type="text" placeholder='Ваше имя'/>
					<input type="number" placeholder='Ваш номер'/>
					<select name="serviceList" id="serviceList">
						<option value disabled selected>Услуга</option>
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
	)
}

export default Feedback