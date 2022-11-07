import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const  [MobileMenu, setMobileMenu] = useState(false);
    return (
        <>
            <header className='header'>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className="fa-solid fa-border-all"></span>
                        <h4>
                            Kategoriler <i className="fa fa-chevron-down"></i>
                        </h4>
                    </div>

                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-links-Mobilemenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>anasayfa</Link>
                            </li>
                            <li>
                                <Link to='/pages'>sayfalar</Link>
                            </li>
                            <li>
                                <Link to='/user'>Kullanıcı Hesabı</Link>
                            </li>
                            <li>
                                <Link to='/vendor'>Satıcı Hesabı</Link>
                            </li>
                            <li>
                                <Link to='/track'>Siparişi Takip et</Link>
                            </li>
                            <li>
                                <Link to='/contact'>İletişim</Link>
                            </li>
                        </ul>
                        
                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {MobileMenu? <i className='fas fa-times close home-bth'></i> : 
                            <i className='fa-solid fa-circle-xmark open'> </i>
                            
                            }
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};


export default Navbar