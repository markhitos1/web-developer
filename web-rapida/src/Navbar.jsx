
import React, { useState, useEffect } from 'react';


const Navbar = () => {

   
        const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
  // Manejar el redimensionamiento de la ventana
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const searchWidth = isMobile ? 'hidden' : 'w-[40%] h-10 px-2 py-0 rounded-md bg-white text-black outline-none';
  const buttonWidth = isMobile ? 'hidden' : 'lex items-center content-end w-20 h-10 text-center px-2 border-2 border-green-600 rounded-lg bg-green-400   ';


   

    return ( 
       <div>
         <header 
          className= "flex justify-between w-[100%] h-14
         bg-slate-200 text-black pt-2  pb-3 px-8 md:px-32" >
        <ul className="flex justify-center pt-2 space-x-10 py-0 sm:space-x-5 " >
          <li>
            <a href="#Home"> Home </a>
          </li>
          <li>
            <a href="#Enlaces"> Enlaces </a>
          </li>
          <li>
            <a href="#Contact"> Contact </a>
          </li>
          <li>
            <a href="#Services"> Services </a>
          </li>
        </ul>
        <input type="search" name="search"  className={searchWidth} placeholder="Search" />
         <button type="submit"  className={buttonWidth} >Search</button>
         </header>
       </div>
     );
}
 
export default Navbar;