// Blog.tsx (updated)
import { useParams } from "react-router-dom";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { motion } from "framer-motion";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-[#e6e9ff] flex flex-col justify-center">
        <div className="flex justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#5b63b7] border-t-transparent rounded-full"
          ></motion.div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#f8f9ff] to-[#e6e9ff]"
    >
      {blog && <FullBlog blog={blog} />}
    </motion.div>
  );
};