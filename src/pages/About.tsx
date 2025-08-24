import { motion } from 'framer-motion'

export function About() {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-8 text-center">
          About Rosenrausch
        </h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-secondary-600 mb-8 text-center">
            We are passionate about creating exceptional digital experiences that make a difference.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Our Mission</h2>
              <p className="text-secondary-600">
                To deliver cutting-edge web solutions that combine beautiful design with 
                powerful functionality, helping businesses and individuals achieve their goals 
                in the digital world.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Our Approach</h2>
              <p className="text-secondary-600">
                We believe in the power of modern web technologies, clean code, and 
                user-centered design. Every project is crafted with attention to detail 
                and a focus on performance and accessibility.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
