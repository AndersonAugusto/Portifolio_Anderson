import React from 'react'
import {
Routes,
Route
} from 'react-router-dom'
import Portfolio from './pages/portfolio/portfolio'
import Skills from './pages/skills/skills'
import Projects from './pages/projects/projects'
import Contacts from './pages/contacts/contacts'
import Page404 from './pages/404/page404'

export default function mainRoutes(){
    return (
        <Routes>
            <Route path='/' element = { <Portfolio /> }/>
            <Route path="/projects" element = { <Projects /> } />
            <Route path="/Skills" element = { <Skills /> } />
            <Route path="/contact" element = { <Contacts /> } />
            <Route path="*" element = { <Page404 /> } />
        </Routes>
    )
}