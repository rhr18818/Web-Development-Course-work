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
import Day81_router from "./Day81_router.jsx"
import { BrowserRouter } from "react-router-dom"
import Day82 from "./Day82.jsx"
import Day83 from "./Day83.jsx"
import Recipecontext from "./context/Recipecontext.jsx"
import Day87 from "./Day87.jsx"



createRoot(document.getElementById("root")).render(
    <Recipecontext>
        <BrowserRouter>
            <Day87/>
            <ToastContainer/>
        </BrowserRouter>
    </Recipecontext>
)

// createRoot(document.getElementById("root")).render(
// <>
//     <Wrapper>
//         <Day81></Day81>
//         <ToastContainer  position="top-center"/>
//     </Wrapper>
// </>
// )


