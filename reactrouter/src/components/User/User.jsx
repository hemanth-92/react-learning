import React from "react";
import { useParams } from "react-router-dom";


function User() {
  const { userid } = useParams()
  return (
    <>
      <div className="bg-gray-500 p-4 text-white text-center tesxt-5xl">User : {userid}</div>
    </>
  )
}
export default User
