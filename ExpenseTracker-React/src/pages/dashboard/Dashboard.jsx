import React from 'react'

const Dashboard = () => {

  const email = localStorage.getItem("email");
  return (
    <div>Welcome {email}</div>
  )
}

export default Dashboard