import { useNavigate } from "react-router-dom";
import './App.css'
function App() {
  const navigate = useNavigate();
  const ProtectRoute = async () => {

    try {
      const res = await fetch('/api/auth')
      const data = await res.json()

      if (data.message === "You already login but email is not verified") {
        navigate("/emailVerify");

      }

      if (data.message === "You already login and the email is verified") {
        navigate("/dashboard/datasource");
      }

    } catch (err) {
      console.log(err)
    }

  }

  ProtectRoute()
}

export default App
