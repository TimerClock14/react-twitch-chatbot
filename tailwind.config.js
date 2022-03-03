const withOpacity =
  varName =>
  ({ opacityVariable, opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${varName}), var(${opacityValue}))`
    }
    if (opacityVariable !== undefined) {
      return `rgba(var(${varName}), var(${opacityVariable}, 1))`
    }
    return `rgb(var(${varName}))`
  }

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {},
    fontFamily: {
      sans: 'Arial, Helvetica, sans-serif'
    },
    extend: {},
  },
  plugins: [],
}
