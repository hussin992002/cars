'use client'
import { useState } from "react";
import HomePage from "./components/HomePage";
import Navbar from "./components/Nav";
import Estegar from "./components/Estegar";
import Sell from "./components/Sell";
import Roll from "./components/Roll";
import ChatBot from "./components/ChatBot";

export default function Home() {
  const [sOrb, setSorB] = useState('s')
  return (
    <>
      <Navbar />
      <Roll/>
      <HomePage setSorB={setSorB}/>
      {sOrb === 'b' ? <Estegar /> : <Sell/>}
      <ChatBot/>
    </>
  );
}
