/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        valorant: ['"Valorant"', "sans-serif"],
        kdam: ['"Kdam Thmor Pro"', "sans-serif"]
      },
      animation: {
      'fade-in': 'fade-in 1s ease-in-out forwards',
      typewriter: 'typewriter 1s steps(11) forwards',
      typewriterDown: 'typewriterDown 1s steps(11) forwards',
      caret: 'typewriter 1s steps(11) forwards, blink 1s steps(11) infinite 2s',
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      typewriter: {
        to: {
          left: '100%',
        },
      },
      typewriterDown: {
        to: {
          bottom: '100%',
        },
      },
      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '0',
        },
      },
    },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        // Add other breakpoints if needed
      },
      colors: {
        'red':        '#F7453F',
        'red-light':  '#EB4A4A',
        'blue':       '#80E1D6',
        'grey':       '#001424',

        'white'         : '#FFFFFF',

        'yellow'        : '#eeb868',
        'green'         : '#5DB056',
        'pink'          : '#E76FD4',
      },
    },
  },
  plugins: [],
  safelist: [{
    pattern: /(bg|text|border)-(blue|pink|yellow|green)/
    }
  ]
}