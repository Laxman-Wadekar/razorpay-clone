// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//   ],
//   base:"/razorpay-clone/"
// })
import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig({
    base:"/razorpay-clone/",
    css: {
    postcss: {
      plugins: [tailwindcss()],
    },
    
  }
})