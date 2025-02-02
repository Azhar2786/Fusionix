
import { useLoaderData } from "react-router-dom"
import { motion } from "framer-motion";


const Greetings = () => {
    // Load the user data from the loader data using the useLoaderdata hook.
    const { user } = useLoaderData();
  return (
    <div className="grid place-content-center h-full">
        <h2 className="text-headlineLarge font-semibold text-center tracking-tight text-light-onSurfaceVariant
        dark:text-dark-onSurfaceVariant">
            <motion.span 
                initial={{ backgroundPositionX:'100%' }}
                animate={{ backgroundPositionX: '0%' }}
                transition={{ duration: 4, ease: [0.05, 0.7, 0.1, 1] }}
                className="bg-gradient-to-r from-orange-400 from-0% via-red-300 via-56% to-transparent to-75% bg-[length:350%_100%] bg-[100%_0] bg-clip-text text-transparent">Hello, {user.name.split(' ').at()}
            </motion.span>
            <br />
            <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="dark:font-medium">
                How can I help? 
            </motion.span>
        </h2>
    </div>
  )
}

export default Greetings