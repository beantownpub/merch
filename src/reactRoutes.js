import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutInfo } from './components/content/about'
import { ContactInfo } from './components/content/contact'
import { MainInfo } from './components/content/main'
import { PrivateParties } from './components/content/parties'
import { FoodMenu } from './components/foodMenus/main'
import { MerchDash } from './components/merch/main'

export default function ReactRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainInfo/>} />
                <Route path="/index" element={<MainInfo/>} />
                <Route path="/about" element={<AboutInfo/>} />
                <Route path="/contact" element={<ContactInfo/>} />
                <Route path="/menu" element={<FoodMenu/>} />
                <Route path="/merch/items" element={<MerchDash/>} />
                <Route path="/parties" element={<PrivateParties/>} />
            </Routes>
        </BrowserRouter>
    )
}
