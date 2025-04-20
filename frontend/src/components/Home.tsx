import { FloatingNav } from "./ui/floating-navbar";
import { SparklesCore } from "./ui/Sparkles";
import { HouseIcon, User, Notebook } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import About from "./About";
import CategoriesSection from "./Categories";
import Footer from "./Footer";

function Home() {
  const navLinks = [
    { name: "Home", link: "#home", icon: <HouseIcon className="text-[#5b63b7]" /> },
    { name: "About", link: "#about", icon: <User className="text-[#5b63b7]" /> },
    { name: "Blog", link: "/blog", icon: <Notebook className="text-[#5b63b7]" /> },
    { name: "Categories", link: "#categories", icon: <Notebook className="text-[#5b63b7]" /> },
  ];
  const faqItems = [
    {
      question: "What is the purpose of this website?",
      answer: "Our motivational blog is designed to uplift your mind and soul. Whether you're feeling low or just need a little push, our content helps you rediscover your inner strength and build positive daily habits."
    },
    {
      question: "What kind of content can I expect here?",
      answer: "You'll find inspiring stories, habit-building guides, mental wellness tips, productivity hacks, and reflections from people who've overcome challenges. All curated to keep you motivated and growing."
    },
    {
      question: "How often is new content published?",
      answer: "We publish fresh content weekly, ensuring there's always something new for you to read and reflect on. Stay tuned and subscribe to never miss an update!"
    },
    {
      question: "Is this platform suitable for everyone?",
      answer: "Absolutely! Whether you're a student, a working professional, or just someone seeking motivation — our platform is built for everyone looking to improve their mindset and habits."
    },
    {
      question: "Can I contribute my own story or blog?",
      answer: "Yes! We believe in the power of shared experiences. You can reach out to us to publish your motivational journey or tips — and inspire others in the community."
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#cbccff] via-[#9296f0] to-[#5b63b7] text-[#000000]" id="home">
       
      <div className="flex justify-center items-center">
        <FloatingNav 
          className="w-auto h-12 fixed bottom-5 z-50 bg-[#9296f0]/80 backdrop-blur-sm border border-[#5b63b7] rounded-full shadow-lg"
          navItems={navLinks}
        />
      </div>

      
      <div className="h-screen relative w-full bg-gradient-to-br from-[#cbccff] to-[#9296f0] flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#5b63b7"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="md:text-7xl text-4xl lg:text-6xl font-bold text-[#5b63b7] mb-6">
            Welcome to Lumevo&nbsp;
            <span className="text-[#000000]">
              <Typewriter
                words={['Inspire.', 'Create.', 'Grow.']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#5b63b7] max-w-2xl mx-auto mb-8">
            Fuel your motivation daily with insights, ideas, and positive energy.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = "/signin"}
            className="bg-[#5b63b7] text-[#cbccff] px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            Explore Now
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute top-10 right-10 text-4xl z-10"
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ✨
        </motion.div>
      </div>

     
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#cbccff] to-[#9296f0]" id="about">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto scroll-mt-20 bg-[#ffffff]/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
        >
          <About />
        </motion.div>
      </div>

      
      <div className="bg-gradient-to-b from-[#9296f0] to-[#5b63b7] py-16 px-6 md:px-12 lg:px-24" id="categories">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto scroll-mt-20"
        >
          <CategoriesSection />
        </motion.div>
      </div>

       
      <div className="py-12 px-6 md:px-12 lg:px-24 bg-[#5b63b7] text-[#cbccff]" id="faqs">
        <h1 className="text-center text-4xl font-bold mb-12">FAQs</h1>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border-b-[#9296f0]"
              >
                <AccordionTrigger className="text-lg hover:text-[#cbccff]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#cbccff]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

       
      <div className="bg-gradient-to-t from-[#5b63b7] to-[#9296f0] text-[#cbccff] py-12" id="footer">
        <div className="max-w-6xl mx-auto">
          <Footer />
        </div>
      </div>



      <div>
      <button id="buy-now" className="p-2 bg-blue-600 rounded-xl text-white">Buy Now</button>
<button id="purchase-button" className="p-2 bg-blue-600 rounded-xl text-white">Purchase</button>
<a className="checkout-link">Checkout</a>
      </div>
    </div>

      
  );
}

export default Home;


// import { useEffect } from 'react';

// declare global {
//   interface Window {
//     trackConversion?: (event: string, data: Record<string, any>) => void;
//   }
// }
// function Home() {
//   useEffect(() => {
//     // Re-initialize tracking after component mount
//     setTimeout(() => {
//       if (window.trackConversion) {
//         // Re-attach event listeners to all conversion buttons
//         document.querySelectorAll(
//           '[class*="purchase"], [class*="buy"], [id*="purchase"], [id*="buy"], [class*="checkout"], ' + 
//           '[class*="subscribe"], [id*="subscribe"], ' + 
//           '[class*="signup"], [id*="signup"], ' + 
//           '[class*="signin"], [id*="signin"], [class*="login"], [id*="login"], ' +
//           '[class*="register"], [id*="register"]'
//         ).forEach(btn => {
//           btn.addEventListener('click', function() {
//             let eventType = 'default';
            
//             // Determine the event type based on the button's class or ID
//             if (btn.className.includes('subscribe') || btn.id.includes('subscribe')) {
//               eventType = 'subscription_intent';
//             } else if (btn.className.includes('signup') || btn.id.includes('signup') || 
//                       btn.className.includes('register') || btn.id.includes('register')) {
//               eventType = 'signup';
//             } else if (btn.className.includes('signin') || btn.id.includes('signin') || 
//                       btn.className.includes('login') || btn.id.includes('login')) {
//               eventType = 'signin';
//             } else if (btn.className.includes('purchase') || btn.id.includes('purchase') || 
//                       btn.className.includes('buy') || btn.id.includes('buy') || 
//                       btn.className.includes('checkout')) {
//               eventType = 'purchase_intent';
//             }
            
//             if (window.trackConversion) {
//               window.trackConversion(eventType, { source: 'button_click' });
//             }
//           });
//         });
//       }
//     }, 1000);
//   }, []);

//   return (
//     <div>
//       <h1>Welcome to our site</h1>
//       <div className="flex flex-col gap-4">
//         <button id="buy-now" className="buy-button p-2 bg-blue-600 rounded-xl text-white">
//           Buy Now
//         </button>
//         <button id="purchase-button" className="purchase-button p-2 bg-blue-600 rounded-xl text-white">
//           Purchase
//         </button>
//         <button id="subscribe-button" className="subscribe-button p-2 bg-green-600 rounded-xl text-white">
//           Subscribe
//         </button>
//         <button id="signup-button" className="signup-button p-2 bg-purple-600 rounded-xl text-white">
//           Sign Up
//         </button>
//         <button id="signin-button" className="signin-button p-2 bg-yellow-600 rounded-xl text-white">
//           Sign In
//         </button>
//         <a className="checkout-link p-2 bg-blue-600 rounded-xl text-white inline-block">Checkout</a>
        
//         {/* Test buttons with direct tracking calls */}
//         <div className="flex gap-2 mt-4">
//           <button 
//             className="p-2 bg-red-600 rounded-xl text-white"
//             onClick={() => window.trackConversion && window.trackConversion('subscription_intent', { source: 'button_click' })}
//           >
//             Test Subscription
//           </button>
//           <button 
//             className="p-2 bg-red-600 rounded-xl text-white"
//             onClick={() => window.trackConversion && window.trackConversion('signup',{source : 'signup_click'})}
//           >
//             Test Signup
//           </button>
//           <button 
//             className="p-2 bg-red-600 rounded-xl text-white"
//             onClick={() => window.trackConversion && window.trackConversion('signin',{source:'signin_click'})}
//           >
//             Test Signin
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;