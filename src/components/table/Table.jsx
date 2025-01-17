import "./Table.css"
import Tbody from "./tbody/Tbody.jsx";

function Table({className, data}) {
  return (<table className={`price-examples ${className ? className : ''}`}>
    {data.map(item => (
      <Tbody
        key={item.id + item.title}
        title={item.title}
        arrayOfList={item.description}
        companyName={item.companyName}
        companyPrice={item.companyPrice}
        competitorPrice={item.competitorPrice}
      />
    ))}
  </table>)
}

export default Table;