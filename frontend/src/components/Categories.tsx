import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "./ui/tabs"
  import { Badge } from "./ui/badge"
  import { motion } from "framer-motion"
  
  const CategoriesSection = () => {
    return (
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="py-16 px-8 bg-[#ffffff]/10 backdrop-blur-sm rounded-3xl shadow-xl border border-[#9296f0]"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[#5b63b7]">📚 Explore Topics</h2>
        
        <Tabs defaultValue="growth" className="w-full">
          <TabsList className="flex justify-center flex-wrap gap-2 bg-[#cbccff] rounded-full p-2">
            <TabsTrigger 
              value="growth"
              className="data-[state=active]:bg-[#5b63b7] data-[state=active]:text-[#cbccff] text-[#5b63b7]"
            >
              Personal Growth
            </TabsTrigger>
            <TabsTrigger 
              value="productivity"
              className="data-[state=active]:bg-[#5b63b7] data-[state=active]:text-[#cbccff] text-[#5b63b7]"
            >
              Productivity
            </TabsTrigger>
            <TabsTrigger 
              value="success"
              className="data-[state=active]:bg-[#5b63b7] data-[state=active]:text-[#cbccff] text-[#5b63b7]"
            >
              Success Stories
            </TabsTrigger>
            <TabsTrigger 
              value="mindfulness"
              className="data-[state=active]:bg-[#5b63b7] data-[state=active]:text-[#cbccff] text-[#5b63b7]"
            >
              Mindfulness
            </TabsTrigger>
          </TabsList>
  
          <TabsContent value="growth">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 space-y-4 p-4 bg-[#9296f0]/20 rounded-xl"
            >
              <Badge className="bg-[#5b63b7] text-white hover:bg-[#5b63b7]/90">#mindset</Badge>
              <p className="text-white">Explore tips, exercises, and stories that help you grow emotionally, mentally, and spiritually.</p>
            </motion.div>
          </TabsContent>
  
          <TabsContent value="productivity">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 space-y-4 p-4 bg-[#9296f0]/20 rounded-xl"
            >
              <Badge className="bg-[#5b63b7] text-[#cbccff] hover:bg-[#5b63b7]/90">#focus</Badge>
              <p className="text-white">Boost your daily efficiency with productivity tools, routines, and strategies that work.</p>
            </motion.div>
          </TabsContent>
  
          <TabsContent value="success">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 space-y-4 p-4 bg-[#9296f0]/20 rounded-xl"
            >
              <Badge className="bg-[#5b63b7] text-[#cbccff] hover:bg-[#5b63b7]/90">#inspiration</Badge>
              <p className="text-white">Read motivating journeys of individuals who turned setbacks into comebacks.</p>
            </motion.div>
          </TabsContent>
  
          <TabsContent value="mindfulness">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 space-y-4 p-4 bg-[#9296f0]/20 rounded-xl"
            >
              <Badge className="bg-[#5b63b7] text-[#cbccff] hover:bg-[#5b63b7]/90">#peace</Badge>
              <p className="text-white">Learn to stay present and manage stress through techniques like meditation and journaling.</p>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.section>
    )
  }
  
  export default CategoriesSection