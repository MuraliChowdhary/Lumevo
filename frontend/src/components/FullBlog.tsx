import { Appbar } from "./Appbar"
import { Blog } from "../hooks"
import { Avator } from "./BlogCard"



export const FullBlog = ({blog}:{blog:Blog })=>{
    return <div>
        <Appbar/>
            <div className="grid grid-cols-12 px-10 pt-10 max-w-screen-xl">
            <div className=" col-span-8 pl-30">
                <div className="text-4xl font-bold">
                {blog.title}
                </div >
                <div className="text-slate-400 pt-2">
                    Post on 7nd Feb 2025
                </div>
                <div className="pt-4"> 
                {blog.content}
                </div>
            </div>
            
            <div className="col-span-4">
                   <div className="pb-2 text-slate-800"> Author</div>
                <div className="flex"> 
                <div className="flex justify-center flex-col p-2">
                <Avator size="big" name={blog.author.name}/>
                </div>
                 <div>
                 <div className="text-3xl font-bold">
                {blog.author.name || "Anonmyous" }
                </div>
                <div className="text-slate-400">
                Random details to grab the attention of the audeince by the author
                </div>
                 </div>
                </div>
            </div>
            
            
        </div>
    </div>
}