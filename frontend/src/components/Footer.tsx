import { Separator } from "./ui/separator"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="px-6 py-12 text-[#cbccff]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#5b63b7]">Lumevo</h3>
            <p className="text-sm mb-4">
              Empowering your journey through motivation and self-improvement.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#5b63b7]">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link 
                    to="/about" 
                    className="hover:text-[#5b63b7] transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blog" 
                    className="hover:text-[#5b63b7] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="hover:text-[#5b63b7] transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-end"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#5b63b7]">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="w-6 h-6 hover:text-[#5b63b7] transition-colors" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="w-6 h-6 hover:text-[#5b63b7] transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin className="w-6 h-6 hover:text-[#5b63b7] transition-colors" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="w-6 h-6 hover:text-[#5b63b7] transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <Separator className="bg-[#9296f0]" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center text-sm text-[#9296f0]"
        >
          <p>
            &copy; {new Date().getFullYear()} Lumevo. All rights reserved. 
            <span className="block mt-2">
              Designed with ❤️ for better tomorrows
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer