import { BrowserRouter, Route, Routes } from "react-router"
import FormLogin from "./Pages/Forms/FormLogin"
import AdminPage from "./Pages/Admin"
import FormRegister from "./Pages/Forms/FormRegister"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<FormLogin/>}/>
        <Route path="/register" element={<FormRegister/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
