import {useState, useEffect} from 'react'
import './components/app.css'
const App = () => {
  const [products, updateProduct] = useState(
    [
      { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
      { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
      { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
      { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
      { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
      { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
  )
  const [inputData, updateInput] = useState('')

  const updatedata = (e) => {
    updateInput(e.target.value)
    updateProduct(products.filter(t => t.name.includes(e.target.value)))
    if(e.target.value == '') {
      updateProduct([
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
      ])
    }
  }

  const removeProduct = (x) => {
    updateProduct(
      products.filter(item => item.name !== x)
    )
  }
  return (
    <>
      <div className="heading">
        <div className="nav">
          <h2>Shopping cart</h2>
          <input type="text" placeholder='search product' onChange={updatedata} value={inputData} />
        </div>
        <hr /> 
        <div className="theproducts">
          {
            products.map((product) => (
              <div key={product.name} className="theproduct">
                <h4 onClick={()=> {window.location.reload()}}>{product.name}</h4>
                <p>{product.price}</p>
                <small>{product.category}</small>
                <br />
                <button onClick={()=> {removeProduct(product.name)}}>Remove</button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App;

