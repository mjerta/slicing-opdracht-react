import "./Table.css"

function Table({className, title, arrayOfList, companyName, companyPrice, competitorPrice}) {
  return (
    <table className={`price-examples ${className ? className : ''}`}>
      <tbody>
      <tr class="description-price-example">
        <td>
          <h4>Prijsvoorbeeld 1</h4>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Integer mollis euismod tristique</li>
          </ul>
        </td>
      </tr>
      <tr class="sales-comparison-title">
        <td><h4>logoipsum</h4></td>
        <td><h4>elders</h4></td>
      </tr>
      <tr class="prices-comparison">
        <td>
          <span class="price">€2.500</span>
          <span class="price-addition">15% goedkoper</span>
        </td>
        <td>
          <span class="price">€2.934</span>
        </td>
      </tr>
      </tbody>
    </table>
  )
}

export default Table;