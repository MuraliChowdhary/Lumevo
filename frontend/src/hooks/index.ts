import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../../config";

export interface Blog{
    "title":string,
    "content":string,
    "id":number,
    "publication":boolean,
     "author":{
          "name":string,
          "bio":string
     },
    

    
}



export const useBlog= ({id}:{id:string})=>{
    console.log(id)
    const [loading,setLoading] = useState(true);
    const [blog,setBlog]=useState<Blog>();

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
            headers:{"Authorization":localStorage.getItem("token")}
        })
        .then(response =>{
            setBlog(response.data.blog);
           setLoading(false);
        })
    },[id])
    return {
        loading,
        blog
    }

}

export const useBlogs= ()=>{
    const [loading,setLoading] = useState(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);

    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk?page=1&limit=50`,{
            headers:{"Authorization":localStorage.getItem("token")}
        })
        .then(response =>{
            setBlogs(response.data.data.posts);
            setLoading(false);
        })
    },[])
    return (
        {loading,
        blogs}
    )

}


