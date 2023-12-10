import './contactCard.css';

export function ContactCard() {
  return (
    <div className='main-card-contact'>
      <div className='contact-title'>Contacto</div>
      <div className='contact-image'></div>
      <div className='contact-name'>Josep Portell</div>
      <div className='contact-information'>
        <span className='contact-icon contact-icon-phone'></span>
        <p className='contact-information-text'>663 92 34 73</p>
        <span className='contact-icon contact-icon-mail'></span>
        <p className='contact-information-text'>joseprpc@hotmail.com</p>
      </div>
    </div>
  );
}
