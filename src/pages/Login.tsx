import { motion } from 'framer-motion'

export function Login() {
  return (
    <div className="container-custom py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        <div className="card text-center">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Login
          </h1>
          <p className="text-secondary-600 mb-8">
            Authentication will be implemented in Phase 2 using Firebase Auth from the aboutme repository.
          </p>
          <div className="bg-secondary-50 p-4 rounded-lg">
            <p className="text-sm text-secondary-500">
              Coming soon: Email/password login, Google sign-in, and user management.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
