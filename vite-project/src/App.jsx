import React from "react";

import Footer from "./Footer";



import './App.css'
import Profile from "./profile";
import Body from "./body";
import Backdrop from "./backdrop";


export default function App(){
    return (
        <div>
            <Backdrop />
            <Profile />
            <Body />
            <Footer />   
        </div>
       
    )
}