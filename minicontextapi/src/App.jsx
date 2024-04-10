import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from "./components/Login.jsx"
function App() {
  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
