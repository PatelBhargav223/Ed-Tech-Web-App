 import React, { useEffect, useState } from 'react'
 import logo from "../../assets/Logo/Logo-Small-Light.png"
import { Link, matchPath, useLocation } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbar-links'
import { useSelector } from 'react-redux'
import { CiShoppingCart } from "react-icons/ci";
import { apiConnector } from '../../../server/services/apiconnectors'
import { catagories } from '../../../server/services/apis'
import { FaArrowDown } from "react-icons/fa";


 const Navbar = () => {

    const {token} = useSelector ((state) => state.auth);
    const {user} = useSelector ((state) => state.user);
    const {totalItems } = useSelector ((state) => state.cart);
    const [subLinks, setSubLinks] = useState([]);

    const fetchSubLinks = async ()=>{
        try {
            const result = await apiConnector("GET", catagories.CATEGORIES_API);
            setSubLinks(result.data.data)
        } catch (error) {
            console.log(error,"Error occured while using api")
        }
    }
    useEffect(()=>{
        fetchSubLinks();
    },[])

    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath ({path:route}, location.pathname)
    }
   return (
     <div className="flex h-14 items-center border-b-[1px] border-richblack-700">
        <div className='flex w-11/12 max-w-maxContent items-center justify-center'>
            {/* image added successfully */}
            <Link to ="/">
            <img src={logo} alt="logo" width={160} height={42} loading='lazy' />
            </Link>
        </div>
        {/* Nav links  */}
        <nav>
            <ul className='flex  gap-x-5 text-richblack-50'>
              {
                NavbarLinks.map((link,index)=>(
                    <li key={index}>
                        {
                            link.title ==="Catalog"? 
                            (<div className='flex items-center gap-3 group relative'>
                                <p>{link.title}</p> 
                                <FaArrowDown />
                                <div className='invisible absolute left-[50%] top-[50%]
                                 flex flex-col rounded-md translate-x-[-50%] translate-y-[80%] 
                                bg-richblack-25 text-richblack-800 opacity-0 duration-300 transition-all
                                group-hover:visible group-hover:opacity-100 lg:w-[300px] '>

                                    <div className='absolute translate-x-[80%] top-0 h-6 w-6 rotate-45
                                    rounded bg-richblack-5 translate-y-[-50%] '></div>
                                    {
                                       subLinks.length ? 
                                       (
                                        subLinks.map((subLink, index)=>{
                                        <Link to={`${subLink.link}`} key={index}>
                                            <p>{subLink.title}</p>
                                        </Link>        
                                        }) 
                                    
                                       ):()
                                    }
                                </div>
                            </div>):
                            (
                                <Link to={link?.path}>
                                    <p className= {`${matchPath (link?.path)? "text-yellow-50":"text-richblack-50"}`}>
                                        {link.title}</p>
                                </Link>
                            )
                        
                        }

                    </li> 
                ))
              }  
            </ul>
        </nav>

        {/* login/ signup/ dashboard */} 
        <div className='flex gap-x-5 items-center'>

        {
            user!= "null" &&  user?.accountType != "Instructor"&& (
                <Link to="/dashborad/cart" className='relative'>
                    <CiShoppingCart />
                    {
                        totalItems >0 && (
                            <span>{totalItems}</span>
                        )
                    }
                </Link>
            )
        }   
        {
            token === null ? 
            (
                <Link to="/login"><button className="border-richblue-700 bg-richblack-800 px-[12px] py-[12px] text-white rounded-sm"
                > Log In</button></Link>
            ):(
                <Link to="/signup"><button className="border-richblue-700 bg-richblack-800 px-[12px] py-[12px] text-white rounded-sm"> 
                Sign Up</button></Link>
            )
        }

        </div>
     </div>
   )
 }
 
 export default Navbar
 