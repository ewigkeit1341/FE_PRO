import React from 'react'
import s from './index.module.css'

export default function UserCard({ username, name, email, phone, address, company }) {

const cardStyles = {
    backgroundColor: name[0] === 'C' ? 'lightgray' : 'Darkcyan'
    
}

const usernameStyles = {
    color: username.length >= 5 ? 'red' : 'black'
}

const companyStyles = {
    color: company.name.toLowerCase().includes ('a') ? 'green' : 'black'
}


  return (
    <div className={s.card} style={cardStyles}>
        <p style={usernameStyles}>Username: {username}</p>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Address: {address.street} {address.suite} {address.city} {address.zipcode}</p>
        <p style={companyStyles}>Company: {company.name}</p>
        <div>Connect</div>
    </div>
  )
}
