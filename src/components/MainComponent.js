import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

import Home from './HomeComponent'
import Student from './StudentComponent'
import Parent from './ParentComponent'
import Teacher from './TeacherComponent'
import About from './AboutComponent'

import {Routes, Route} from 'react-router-dom'

function Main() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path='/parent' element={<Parent/>}/>
                <Route path='/teacher' element={<Teacher/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>
        </>
        
    )
}

export default Main;
