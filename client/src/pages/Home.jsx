import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatList from '../components/ChatList'
import ChatWindow from '../components/ChatWindow'

const Home = () => {
  return (
    <div className='container'>
        <Sidebar/>
        <ChatList/>
        <ChatWindow/>
    </div>
  )
}

export default Home