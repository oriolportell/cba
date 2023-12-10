import { ContactCard } from './contactCard/contactCard';
import { MailCard } from './mailCard/mailCard';
import './footer.css';

export function Footer() {
  return (
    <div className='main-footer'>
      <div className='cards'>
        <MailCard />
        <ContactCard />
      </div>
      <div className='informacion'>
        <p className='legal'>Información legal</p>
        <p className='privacidad'>Política de privacidad</p>
      </div>
    </div>
  );
}
