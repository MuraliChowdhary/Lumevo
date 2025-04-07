// FullBlog.tsx (updated)
import { Appbar } from "./Appbar";
import { Blog } from "../hooks";
import { Avator } from "./BlogCard";
import { motion } from "framer-motion";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div className="bg-gradient-to-b from-[#f8f9ff] to-[#e6e9ff]">
      <Appbar />
      
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-6 md:pt-10 max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          
          <div className="lg:col-span-8 order-2 lg:order-1">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#5b63b7] to-[#9296f0] text-transparent bg-clip-text">
                {blog.title}
              </h1>
              <div className="mt-4 text-slate-500 text-sm sm:text-base flex items-center">
                <span className="mr-2">📅</span>
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <motion.div
                className="mt-6 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 prose max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {blog.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </motion.div>
            </motion.div>
          </div>

        
          <motion.div
            className="lg:col-span-4 order-1 lg:order-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="sticky top-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#e6e9ff]">
              <div className="text-lg sm:text-xl font-bold text-[#5b63b7] mb-4">
                ✍️ Author
              </div>
              <div className="flex items-start gap-4">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Avator size="big" name={blog.author.name} />
                </motion.div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {blog.author.name || "Anonymous"}
                  </h2>
                  <p className="mt-2 text-slate-600 text-sm sm:text-base">
                    {blog.author.bio || "Passionate storyteller sharing insights and experiences to inspire others."}
                  </p>
                  <div className="mt-4 flex gap-2">
                    {['📚 12 Articles', '🌟 2.4K Followers'].map((item, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#f8f9ff] text-[#5b63b7] rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};