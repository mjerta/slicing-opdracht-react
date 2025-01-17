import './App.css'
import Header from "./components/header/Header.jsx";
import logoIpsum from "./assets/logoipsum.svg"
import phoneIcon from "./assets/phone-icon.svg"
import Table from "./components/table/Table.jsx";

function App() {

  return (
    <>
      <Header
        logoImg={logoIpsum}
        phoneIcon={phoneIcon}
        phoneNumber={"0850640699"}
      />
      <main>
        <Table />
      </main>
    </>
  )
}

export default App
