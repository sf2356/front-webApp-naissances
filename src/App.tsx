import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ApplicationContextProvider from "./components/context/ApplicationContextProvider"

function App() {
//Enveloppement du context dans mon application pour sa reutilisation dans les autres composants
  return (
    <ApplicationContextProvider>
  <Outlet />
  <ToastContainer />
    </ApplicationContextProvider>
  )
}

export default App