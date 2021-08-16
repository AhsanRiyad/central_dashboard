module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    preserveHtmlElements: false,
    content: [
      './index.html',
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  prefix: 't-',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
