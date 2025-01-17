import './App.css'
import Header from "./components/header/Header.jsx";
import logoIpsum from "./assets/logoipsum.svg"
import phoneIcon from "./assets/phone-icon.svg"

function App() {

  return (
    <>
      <Header
        logoImg={logoIpsum}
        phoneIcon={phoneIcon}
        phoneNumber={"0850640699"}
      />
    </>
  )
}

export default App
