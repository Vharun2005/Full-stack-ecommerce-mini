
import { useEffect, useState } from 'react';
import AppBar from './AppBar';
import Footer from './Footer';
import ProductsContainer from './ProductsContainer';
import { Route, Routes } from 'react-router-dom';
import Eappliances from './Eappliances';
import LoginPage from './LoginPage';
import FashionPage from './FashionPage';
import Tshirts from './Tshirts';
import Jeans from './Jeans';
import Shirts from './Shirts';
import ViewShirt from './ViewShirt';
import ViewJeans from './ViewJeans';
import ViewTshirt from './ViewTshirt';
import ViewElectronics from './ViewElectronics';
import CartView from './CartView';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItems,setCartItems] = useState([])

  useEffect(()=>{
    const fetchItems = async() =>{
      try{
        const response = await fetch('http://localhost:3500/api/tshirts')
        const result = await response.json()
        setShirts(result)
        const responseTwo = await fetch('http://localhost:3500/api/jeans')
        const resultTwo = await responseTwo.json()
        setJeanpants(resultTwo)
        const responseThree = await fetch('http://localhost:3500/api/electronics')
        const resultThree = await responseThree.json()
        setElectronics(resultThree)
        const responseFour = await fetch('http://localhost:3500/api/carts')
        const resultFour = await responseFour.json()
        setCartItems(resultFour)
      }catch(err){
        if(err.response){
          console.log(err.response.status)
          alert(`${err.response.status}`)
        }else{
          console.error(err.message)
        }
      }

    }
    fetchItems()
  },[])

  const [tshirts,setTshirts] = useState([])
  const [jeanpants,setJeanpants] = useState([])
  const [shirts,setShirts] = useState([])
  const [Electronics,setElectronics] = useState([])


// const handleCartJean = async(id) =>{
//    const foundobj = jeanpants.find((item)=> item._id === id)
//    const checkobj = carts.find((item)=> item._id === id)
//    if(checkobj){
//     alert('item aldready added to cart')
//    }else{
//     const newarr = [...carts,foundobj]
//     setCart(newarr)
//     console.log(carts)
//     alert('Item added to cart !')
    
//    }
// }

// const handleCartShirt = async(id) => {
//   const findobj = shirts.find((item) => item._id === id)
//   console.log(findobj)
//   const checkobj = carts.find((item)=> item._id === id)
//   if(checkobj){
//     alert('item aldready added to Cart')
//   }
//   else{
//     const newarr = [...carts,findobj]
//     setCart(newarr)
//     alert('Item added to cart !')
//   }
// }
// const handleCartTshirt = async(id) => {
//   const findobj = tshirts.find((item) => item.id === id)
//   const checkobj = carts.find((item)=> item.id === id)
//   if(checkobj){
//     alert('item aldready added to Cart')
//   }
//   else{
//     const newarr = [...carts,findobj]
//     setCart(newarr)
//     alert('Item added to cart !')
//     await api.post('/cartitems',findobj)
//   }
// }
// const handleCartElectronics = async(id) => {
//   const findobj = Electronics.find((item) => item.id === id)
//   const checkobj = carts.find((item)=> item.id === id)
//   if(checkobj){
//     alert('item aldready added to Cart')
//   }
//   else{
//     const newarr = [...carts,findobj]
//     setCart(newarr)
//     alert('Item added to cart !')
//     await api.post('/cartitems',findobj)
//   }
// }
// const handleDelete = async(id) => {
//   try{
//   const newArr = carts.filter((item)=> item.id !== id)
//   setCart(newArr)
//   await api.delete(`/cartitems/${id}`)
//   }catch(err){
//     console.log(err);
    
//   }
// }
  return (
    
      <div className='main-container'>
        <AppBar/>
        <div>
          <Routes>
            <Route path='/' element={<ProductsContainer/>}></Route>
            <Route path='/electronics' element={<Eappliances Electronics={Electronics}/>}></Route>
            <Route path='/loginpage' element={<LoginPage/>}></Route>
            <Route path='/fashions' element={<FashionPage tshirts={tshirts}/>}/>
            <Route path='/t-shirts' element={<Tshirts/>} />
            <Route path='/jeanpants' element={<Jeans jeanpants={jeanpants}/>} />
            <Route path='/shirts' element={<Shirts shirts={shirts}/>} />
            <Route path='/shirts/:id' element={<ViewShirt  cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path='/jeans/:id' element={<ViewJeans cartItems={cartItems} setCartItems={setCartItems}/>}></Route>
            <Route path='/tshirts/:id' element={<ViewTshirt  tshirts={tshirts}/>}></Route>
            <Route path='/electronics/:id' element={<ViewElectronics  cartItems={cartItems} setCartItems={setCartItems}/>} />
            <Route path='/cart' element={<CartView cartItems={cartItems} setCartItems={setCartItems} />} />
          </Routes>
        </div>
        <Footer/>
      </div>
               
   
  );
}

export default App;
