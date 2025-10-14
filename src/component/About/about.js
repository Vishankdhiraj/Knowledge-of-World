import Nav from "../nav/nav"
import {createBrowserRouter,routerProvider} from "react-router-dom"
export default function  About(){
    const router=createBrowserRouter([
        {
            path:"/about",
            element:<About/>
        }
   ] )
    return(
        <div>
               <routerProvider router={router}/>
            <h1>About Component</h1>
        </div>
    )
}