import './App.css'
import Header from "./components/header/Header.jsx";
import logoIpsum from "./assets/logoipsum.svg"
import phoneIcon from "./assets/phone-icon.svg"
import Table from "./components/table/Table.jsx";
import tableData from "./constants/table-data.js";

function App() {

  return (
    <>
      <Header
        logoImg={logoIpsum}
        phoneIcon={phoneIcon}
        phoneNumber={"0850640699"}
      />
      <main>
        <Table
          data={tableData}
        />
      </main>
    </>
  )
}

export default App
