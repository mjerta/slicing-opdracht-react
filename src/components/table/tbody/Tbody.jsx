import formatPrice from "../../../helpers/formatPrice.js";
import calculatePercentage from "../../../helpers/calculatePercentage.js";

function Tbody({
                 className,
                 title,
                 arrayOfList,
                 companyName,
                 companyPrice,
                 competitorPrice
               }) {
  return (<tbody>
  <tr className="description-price-example">
    <td>
      <h4>{title}</h4>
      <ul>
        {
          arrayOfList.map((listItem, index) => (
            <li key={index + listItem}>{listItem}</li>)
          )
        }
      </ul>
    </td>
  </tr>
  <tr className="sales-comparison-title">
    <td><h4>{companyName}</h4></td>
    <td><h4>elders</h4></td>
  </tr>
  <tr className="prices-comparison">
    <td>
      <span className="price">€{formatPrice(companyPrice)}</span>
      <span className="price-addition">{calculatePercentage(companyPrice,competitorPrice)}% goedkoper</span>
    </td>
    <td>
      <span className="price">€{formatPrice(competitorPrice)}</span>
    </td>
  </tr>
  </tbody>)
}

export default Tbody;