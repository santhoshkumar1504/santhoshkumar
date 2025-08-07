import '../Stylesheets/navStyle.css'

const Navbar = () => {

    function changeMenuBtn() {
        let menu=document.getElementById('menu');
        let menusbtn=document.getElementById('menusbtn');
        let menuscbtn=document.getElementById('menuscbtn');

        menusbtn.style.display="none";
        menu.style.display="flex";
        menuscbtn.style.display="flex";

    }

 
    function closeMenu()
    {
        let menu=document.getElementById('menu');
        let menusbtn=document.getElementById('menusbtn');
        let menuscbtn=document.getElementById('menuscbtn');

         menusbtn.style.display="flex";
        menu.style.display="none";
        menuscbtn.style.display="none";
    }


  return (
    <div className='navbar navbar-expand-md'>
        <div className="navbar-brand">Santhosh

        <div className='buttons'>
        {/* Menu Button */}
        <div className='btn' onClick={changeMenuBtn} id='menusbtn'>
                <span className='menu-btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                </span>
        </div>

        {/* Close Button */}
        <div className='btn' >
            <span className='close-btn' id='menuscbtn' onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="crimson"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </span>
        </div>
        </div>

        
        </div>
        
        {/* Navbar Menu Items */}
        <div className="contain" id='menu'>
            <ul className="navbar-nav">
            <a href="#home">
                <li className="navbar-item">
                    Home
                </li></a>
                <a href="#about">
                <li className="navbar-item">
                    About Me
                </li></a>
                <a href="#">
                <li className="navbar-item">
                    Skills
                </li></a>
                <a href="#">
                <li className="navbar-item">
                    Certificates
                </li></a>
                <a href="#">
                <li className="navbar-item">
                    Projects
                </li></a>
                <a href="#">
                <li className="navbar-item">
                    Contact
                </li></a>
            </ul>
        </div>
    </div>
  )
}

export default Navbar