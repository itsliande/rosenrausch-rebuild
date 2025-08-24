import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="container-custom py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 mb-6">
            Welcome to{' '}
            <span className="text-primary-600">Rosenrausch</span>
          </h1>
          <p className="text-xl text-secondary-600 mb-8 text-balance">
            Creating modern, beautiful, and performant web experiences that captivate and inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="btn-primary inline-flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-secondary-50 py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Modern solutions for today's digital challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Design',
                description: 'Clean, responsive designs that look great on all devices'
              },
              {
                title: 'Performance',
                description: 'Fast loading times and optimized user experiences'
              },
              {
                title: 'Security',
                description: 'Secure authentication and data protection'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center"
              >
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-secondary-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
