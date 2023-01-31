import {Routes, Route} from 'react-router-dom'
import Header from "./components/Header"
import Main from "./pages/Main"
import Exchange from "./pages/Exchange" 
import Products from './components/Products'
import ProductPage from "./pages/ProductPage"

function App() {

  return (
    <div>
      <Header />
      
      <Routes>
        <Route exact path="/" element={<> <Main /> <Products /> </>} />

        {/* This route will need to only work when signed in */}
        <Route path="/exchange" element={<Exchange />} />

        <Route path="/product-page/:productId" element={ <ProductPage /> }/>
      </Routes>

    </div>
  )
}

export default App