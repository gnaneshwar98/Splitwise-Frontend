import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddFriends from "./AddFriends"
import  Group from "./Group"
import Account from"./Account"

import GroupMembers from './GroupMembers'
import LoginHooks from './LoginHooks'
import Createbill from './Createbill'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>} ></Route>
            <Route path="/addfriends" element={<AddFriends/>} ></Route>
            <Route path="/groups" element={<Group/>} ></Route>
            <Route path="/account" element={<Account/>} ></Route>
            <Route path="/createbill" element={<Createbill/>} ></Route>
              
        </Routes>


    </div>
  )
}

export default Routing