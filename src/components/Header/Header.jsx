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
                <nav className="flex flex-wrap items-center gap-2 py-3">
                    <div className="mr-2 shrink-0 sm:mr-4">
                    <Link to='/' className="inline-flex items-center">
                        <Logo width="60px"/>
                    </Link>
                    </div>

                    <ul className="ml-auto flex flex-wrap items-center justify-end gap-1 sm:gap-2">
                        {navItems.map((item)=>
                        item.active?(
                            <li key={item.name}>
                                <button 
                                onClick={()=>navigate(item.slug)}
                                className="inline-block rounded-full px-2 py-1.5 text-[11px] font-medium text-slate-700 transition duration-200 hover:bg-slate-100 hover:text-slate-900 sm:px-4 sm:py-2 sm:text-sm"
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