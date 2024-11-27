
import Navbar from "./Navbar"
import Home from "./Home"
import Service from "./Service"
import Enlaces from "./Enlaces"

export default function Header() {
  return (
   <div  className="w-full h-full absolute bg-gradient-to-r from-blue-300 to-violet-700" >
     <Navbar/>
     <Home/>
     <Service/>
     <Enlaces/>
   </div>
  )
}