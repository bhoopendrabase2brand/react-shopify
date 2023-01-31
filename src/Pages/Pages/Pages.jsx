import React from 'react'
import Home from '../Home/Home'
import Marketplace from '../Marketplace/Marketplace'
import Auction from '../Auction/Auction'
import Wallet from '../Wallet/Wallet'
import Header from '../shared/Header' 
import {  Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <>
    <Header/>
    <Routes>
          <Route index element={<Home />} />
          <Route path="/Marketplace" element={<Marketplace />} />
          <Route path="/Auction" element={<Auction />} />
          <Route path="/Wallet" element={<Wallet />} />
      </Routes>
    </>
  )
}
