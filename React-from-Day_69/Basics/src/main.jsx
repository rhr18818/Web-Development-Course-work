import { createRoot } from "react-dom/client"
import "./index.css"
import { ToastContainer } from "react-toastify"
import App from './App.jsx'
import Json from "./Day72.jsx"
import { A } from "./Day72.jsx"
import Day75 from "./Day75.jsx"
import Day76 from "./Day76.jsx"
import Day77 from "./Day77.jsx"
import Day78 from "./Day78.jsx"
import Day81 from "./Day81.jsx"
import Wrapper from "./components/Wrapper.jsx"



createRoot(document.getElementById("root")).render(
<>
    <Wrapper>
        <Day81></Day81>
        <ToastContainer  position="top-center"/>
    </Wrapper>
   

</>
)

