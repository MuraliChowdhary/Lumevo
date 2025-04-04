 import { Link } from "react-router-dom";
import  {Avator} from "../components/BlogCard";

 export const Appbar = ()=>{
    return <div className="border-b flex  border-slate-200 justify-between px-10 py-4">
        <div className="flex justify-center flex-col">
            <Link to={"/blogs"} className="flex flex-col justify-center"
            >
                Medium
            </Link>
            </div>
              <div>
              <Link to={"/publish"} className="cursor-pointer">
              <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer">New</button>
      </Link>
            <Avator name="Murali" size="big"/>
        </div>
    </div>

    
    
 }