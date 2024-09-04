import './modal.scss'

// eslint-disable-next-line react/prop-types
const Modal = ({setIsAccess}) => {
	return (
		<div className="modal">
			<div className="modal__items">
				<h3><span>Заявка оставлена!</span></h3>
				<p>Мы с вами свяжемся по оставленным контактным данным.</p>
			</div>
			<svg onClick={() => setIsAccess(false) } className='svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36321 20.3637C8.01174 20.7152 8.01174 21.285 8.36321 21.6365C8.71468 21.9879 9.28453 21.9879 9.636 21.6365L8.36321 20.3637ZM15.636 15.6365C15.9874 15.285 15.9874 14.7152 15.636 14.3637C15.2845 14.0123 14.7147 14.0123 14.3632 14.3637L15.636 15.6365ZM14.3632 14.3637C14.0118 14.7152 14.0118 15.285 14.3632 15.6365C14.7147 15.9879 15.2845 15.9879 15.636 15.6365L14.3632 14.3637ZM21.636 9.63649C21.9874 9.28502 21.9874 8.71517 21.636 8.3637C21.2845 8.01223 20.7147 8.01223 20.3632 8.3637L21.636 9.63649ZM15.636 14.3637C15.2845 14.0123 14.7147 14.0123 14.3632 14.3637C14.0118 14.7152 14.0118 15.285 14.3632 15.6365L15.636 14.3637ZM20.3632 21.6365C20.7147 21.9879 21.2845 21.9879 21.636 21.6365C21.9874 21.285 21.9874 20.7152 21.636 20.3637L20.3632 21.6365ZM14.3632 15.6365C14.7147 15.9879 15.2845 15.9879 15.636 15.6365C15.9874 15.285 15.9874 14.7152 15.636 14.3637L14.3632 15.6365ZM9.636 8.3637C9.28453 8.01223 8.71468 8.01223 8.36321 8.3637C8.01174 8.71517 8.01174 9.28502 8.36321 9.63649L9.636 8.3637ZM9.636 21.6365L15.636 15.6365L14.3632 14.3637L8.36321 20.3637L9.636 21.6365ZM15.636 15.6365L21.636 9.63649L20.3632 8.3637L14.3632 14.3637L15.636 15.6365ZM14.3632 15.6365L20.3632 21.6365L21.636 20.3637L15.636 14.3637L14.3632 15.6365ZM15.636 14.3637L9.636 8.3637L8.36321 9.63649L14.3632 15.6365L15.636 14.3637Z" fill="black"/></svg>
		</div>
	)
}

export default Modal