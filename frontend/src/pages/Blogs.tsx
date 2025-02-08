

 

import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { Skleton } from "../components/Skleton";
import { useBlogs } from "../hooks"
export const Blogs = () => {
      const { loading, blogs } = useBlogs();
      if (loading) {
            return (
                <div className="h-screen flex flex-col">
                    <Appbar />
                    <div className="flex justify-center items-center flex-1">
                        <div className="flex flex-col  w-full max-w-2xl">
                            <Skleton />
                            <Skleton />
                            <Skleton />
                            <Skleton />
                        </div>
                    </div>
                </div>
            );
        }
        
        
      return <div>
              <Appbar/>
            <div className="flex justify-center">
                  <div className="max-w-xl p-2">
                  {blogs?.map((blog) => (
    <BlogCard 
        key={blog.id} 
        authorName={blog.author?.name || "Anonymous"} 
        title={blog.title} 
        content={blog.content} 
        publisherDate={"05-02-2025"} 
        id={blog.id} 
    />
))}

                        

                  </div>

            </div>
      </div>
}