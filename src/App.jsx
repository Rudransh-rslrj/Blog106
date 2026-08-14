import React,{useState,useEffect} from "react"
import {useDispatch} from 'react-redux'
import authService from "./appwrite/auth"
import {login, logout} from './store/authSlice' 
import { Footer, Header } from "./components"
import { Outlet } from 'react-router-dom'
function App() {

  const [loading, setLoading]= useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      } 
    })
    .finally(()=>setLoading(false)) 
  },[])

  return !loading?(
    <div className='min-h-screen bg-white text-slate-800 antialiased'>
      <div className="w-full">
        <Header/>
        <main className="min-h-[calc(100vh-220px)] bg-white">
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>

  ) : null


}

export default App
