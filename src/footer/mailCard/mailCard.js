import './mailCard.css';

export function MailCard() {
  return (
    <div className='main-card-mail'>
      <p className='title-mail'>Contactanos via correo</p>
      <div className='inputs'>
        <input
          type='text'
          id='textInput'
          name='textInput'
          className='inputbox usermail'
          placeholder='Introduce tu correo'
        ></input>
        <textarea
          id='multilineInput'
          className='inputbox textmail '
          placeholder='Mensaje'
        ></textarea>
      </div>
    </div>
  );
}
