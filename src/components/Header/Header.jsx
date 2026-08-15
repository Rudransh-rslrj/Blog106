import React from "react";
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header(){
    const authStatus = useSelector((state)=>state.auth.status)
    const navigate= useNavigate();
    const navItems=[
        {
        name: 'Home',
        slug: "/",
        active: true
        }, 
        {
        name: "Login",
        slug: "/login",
        active: !authStatus,
        },
        {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
        },
        {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus,
        },
        {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus,
        },
    ]

    return( 
        <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm shadow-sm">
            <Container>
                <nav className="flex items-center py-3">
                    <div className="mr-4">
                    <Link to='/'>
                        <Logo width="70px"/>
                    </Link>
                    </div>

                    <ul className="flex ml-auto items-center gap-2">
                        {navItems.map((item)=>
                        item.active?(
                            <li key={item.name}>
                                <button 
                                onClick={()=>navigate(item.slug)}
                                className="inline-block px-4 py-2 text-sm font-medium text-slate-700 transition duration-200 hover:bg-slate-100 hover:text-slate-900 rounded-full"
                                >{item.name}</button>
                            </li>
                        ): null
                        )}
                        {authStatus &&(
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}

                    </ul>
                </nav>



            </Container>
            
        </header>
                    
    )
}

export default Header