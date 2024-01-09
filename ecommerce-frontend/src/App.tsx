import { lazy,Suspense } from "react"
import { BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Loader from "./components/Loader"

const Home = lazy(()=>import("./pages/Home"))
const Search = lazy(()=>import("./pages/Search"))
const Cart = lazy(()=>import("./pages/Cart"))



function App() {
  return (
   <Router>
<Suspense fallback={<Loader/>}>
<Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        </Routes>
</Suspense>
   
   </Router>
  )
}

export default App