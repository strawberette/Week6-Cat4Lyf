import './App.css';
import CatItem from "./CatItem"
import Cart from "./Cart"
import {useState, useEffect} from "react"
import faker from 'faker';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


function App() {
  const [catList, setCatList] = useState([])
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = async () => {


      const response = await fetch("https://api.thecatapi.com/v1/breeds", {
        method: "GET",
    
      })

      const cats = await response.json()

    
      setCatList(cats)
  }
  const handleCart = (breed, price) => {
    const array = cart;
    array.push({breed: breed, price: price})
    setCart(array)
  }

  return (
    <div className="App">
      <h1>Cat Shop</h1>
      <div className="cart">
        <button className="cart" onClick={onOpenModal}>SHOPPING CART</button>
        <Modal open={open} onClose={onCloseModal} center>
          <Cart cartItems={cart} />
        </Modal>
      </div>
      <div className="catList">
        {catList.map((c, index) => {
          return (
            <CatItem key={index} 
              image={c.image && c.image.url}
              // it will show the url only when available, see: https://stackoverflow.com/questions/46309882/react-nested-object-gives-error
              breed={c.name}
              hypoallergenic={c.hypoallergenic}
              childFriendly={c.child_friendly}
              dogFriendly={c.dog_friendly}
              temperament={c.temperament}
              price={faker.commerce.price(100, 1000, 2)}
              function={handleCart}
            />
          )
        })}

      </div>
      
      
    </div>
  );
}

export default App;
