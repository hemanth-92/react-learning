import React, { useEffect, useState } from "react"

// function Github() {
//   const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/hemanth-92')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//   }, [])
return (
  <>
    <div className="text-center p-4 text-3xl bg-blue-600 text-white">Github Followers :{data.followers} <img src="{data.avatar_url}" alt="github img" width={300} /></div>
  </>
)
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/hemanth-92')
  return response.json
}
