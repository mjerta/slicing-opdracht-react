import "./Header.css"
import formatPhoneNumber from "../../helpers/formatPhoneNumber.js";
function Header({className, logoImg, phoneNumber, phoneIcon}) {
  return (
    <header className={className ? className : ''}>
      <img className={'logo'} src={logoImg} alt="Logo van logoipsum"/>
      <address>
        <a href={`tel:${phoneNumber}`}>
          <img className="phone-icon" src={phoneIcon} alt="phone icon"/>
          <span className="phone-number">{formatPhoneNumber(phoneNumber)}</span>
        </a>
      </address>
    </header>
  )
}

export default Header;
