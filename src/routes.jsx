import React from 'react'
import {
Routes,
Route
} from 'react-router-dom'

import Portfolio from './pages/portfolio/portfolio'
import Page404 from './pages/404/page404'

export default function mainRoutes(){
    return (
        <Routes>
            <Route path='/' element={ <Portfolio/> }/>
            <Route path="*" element = { <Page404/> } />
        </Routes>
    )
}