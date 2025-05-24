import { createRoot } from "react-dom/client"
import App from './App.jsx'

import { a,b } from './App.jsx'
import { StrictMode } from "react"
console.log(a,b)

createRoot(document.getElementById("root")).render(<App/>)

