module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    

    extend: {
      
      animation: {
      'spin-slow': 'spin 5s linear infinite',
      'bounce-slow': 'bounce 1.5s cubic-bezier(1, 0.2, 0.2, 1)',

    }},
  },
  plugins: [],
}
