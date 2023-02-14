import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client"
let socket = io.connect("http://127.0.0.1:3001")

export default function Game(){
      useEffect(() => {
            socket.emit()
        }, [])



      return(
            <div className='bg-black text-white'>
                  <h1>It works??</h1>
            </div>
      )
}