import { useNavigate } from "react-router-dom";
import './App.css'
import { useEffect } from "react";
function App() {
  const navigate = useNavigate();



  useEffect(() => {
    const ProtectRoute = async () => {

      try {
        const res = await fetch('/api/auth')
        const data = await res.json()

        if (data.message === "You already login but email is not verified") {
          navigate("/verifyEmail");
          console.log("navigate")

        }


        if (data.message === "You already login and the email is verified") {
          navigate("/connector");
          console.log("navigate")
        }

      } catch (err) {
        console.log(err)
      }

    }

    ProtectRoute()
  }, [navigate])

}

export default App
