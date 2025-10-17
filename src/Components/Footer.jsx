import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Footer = () => {
const [dark,setDark]=useState(false);
const [light,setLight]=useState(true);

const changeDark=()=>{
  setDark(false);
  setLight(true);
    document.body.removeAttribute("class");

}

const changeLight=()=>{
  setDark(true);
  setLight(false);
    document.body.setAttribute("class","alternate");

}

  return (
    <div className='d-block'>
        <div className="text-center">
          {dark && <button className="text-dark fw-bold btn" onClick={changeDark}><MdDarkMode className="icon"/>Dark Mode</button>  }  

         {light && <button className="text-light btn" onClick={changeLight}><MdLightMode className="icon"/>Light Mode</button>  }  

</div>
        <div className='footer text-center pt-2'>
         <p>&copy; {new Date().getFullYear()} | Designed and Developed By Santhoshkumar</p>
        </div>
    </div>
  )
}

export default Footer