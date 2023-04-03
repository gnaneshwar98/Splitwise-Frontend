import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import AddFriends from "./AddFriends"

import Account from"./Account"
import Addgroup from './Addgroup'
import GroupMember from './GroupMember'
import LoginHooks from './LoginHooks'
import Createbill from './Createbill'


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>} ></Route>
            <Route path="/addfriends" element={<AddFriends/>} ></Route>
            <Route path="/addgroup" element={<Addgroup/>} ></Route>
            <Route path="/account" element={<Account/>} ></Route>
            <Route path="/createbill" element={<Createbill/>} ></Route>
            <Route path="/addgroupmembers" element={<GroupMember/>}></Route>
              
        </Routes>


    </div>
  )
}

export default Routing