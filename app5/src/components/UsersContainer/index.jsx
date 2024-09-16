import React from 'react'
import { users } from '../../data/users'
import UserCard from '../UserCard'
import s from './index.module.css'

export default function UsersContainer() {


  return (
    <div className={s.container}>
       {
        users.map(el => <UserCard key={el.id}  {...el} />) 
       } 
    </div>
  )
}
