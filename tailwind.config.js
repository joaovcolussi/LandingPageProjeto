module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        'main-blue': '#0000A3',
        'hover-blue': '#00007D',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}