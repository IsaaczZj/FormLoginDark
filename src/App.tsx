import { BrowserRouter, Route, Routes } from "react-router"
import FormLogin from "./Pages/Forms/FormLogin"
import FormRegister from "./Pages/Forms/FormRegister"
import Users from "./Pages/Users"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<FormLogin/>}/>
        <Route path="/register" element={<FormRegister/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
