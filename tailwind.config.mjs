/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Nature-inspired palette
        moss: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce5bc',
          300: '#8dd18d',
          400: '#5bb85b',
          500: '#3a9d3a',
          600: '#2d7d2d',
          700: '#256325',
          800: '#225022',
          900: '#1f421f',
          950: '#0d240d',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b0a3',
          400: '#7d8a7d',
          500: '#627062',
          600: '#4d5a4d',
          700: '#404a40',
          800: '#363e36',
          900: '#2f352f',
          950: '#1a1e1a',
        },
        earth: {
          50: '#faf9f7',
          100: '#f3f0eb',
          200: '#e6dfd3',
          300: '#d4c9b5',
          400: '#c0b092',
          500: '#b19a77',
          600: '#a08863',
          700: '#857153',
          800: '#6d5c46',
          900: '#5a4c3c',
          950: '#30271e',
        },
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'inherit',
            a: {
              color: 'rgb(14 165 233)',
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: 'rgb(2 132 199)',
                textDecoration: 'underline',
              },
            },
            strong: {
              color: 'inherit',
              fontWeight: '600',
            },
            'a strong': {
              color: 'inherit',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: 'rgb(107 114 128)',
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::marker': {
              color: 'rgb(107 114 128)',
            },
            hr: {
              borderColor: 'rgb(229 231 235)',
              borderTopWidth: 1,
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: 'rgb(17 24 39)',
              borderLeftWidth: '0.25rem',
              borderLeftColor: 'rgb(229 231 235)',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            h1: {
              color: 'rgb(17 24 39)',
              fontWeight: '800',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: 'rgb(17 24 39)',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            'img, svg, video, canvas, audio, iframe, embed, object': {
              display: 'block',
              verticalAlign: 'middle',
            },
            'img, svg, video': {
              maxWidth: '100%',
              height: 'auto',
            },
            'figure > *': {
              display: 'block',
            },
            figcaption: {
              color: 'rgb(107 114 128)',
              fontSize: '0.875em',
              lineHeight: '1.4285714',
              marginTop: '0.8571429em',
            },
            code: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            'a code': {
              color: 'inherit',
            },
            pre: {
              color: 'rgb(229 231 235)',
              backgroundColor: 'rgb(17 24 39)',
              overflowX: 'auto',
              fontWeight: '400',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              paddingTop: '0.8571429em',
              paddingRight: '1.1428571em',
              paddingBottom: '0.8571429em',
              paddingLeft: '1.1428571em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: 'inherit',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              color: 'rgb(17 24 39)',
              fontWeight: '600',
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(229 231 235)',
            },
            'thead th': {
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: 'rgb(243 244 246)',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'top',
              paddingTop: '0.5714286em',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
          },
        },
        invert: {
          css: {
            color: 'rgb(243 244 246)',
            a: {
              color: 'rgb(96 165 250)',
              '&:hover': {
                color: 'rgb(147 197 253)',
              },
            },
            strong: {
              color: 'rgb(255 255 255)',
            },
            'a strong': {
              color: 'inherit',
            },
            'ol[type="A"] s': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"] s': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"] s': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"] s': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: 'rgb(156 163 175)',
            },
            'ul > li::marker': {
              color: 'rgb(156 163 175)',
            },
            hr: {
              borderColor: 'rgb(55 65 81)',
            },
            blockquote: {
              color: 'rgb(209 213 219)',
              borderLeftColor: 'rgb(55 65 81)',
            },
            h1: {
              color: 'rgb(255 255 255)',
            },
            h2: {
              color: 'rgb(255 255 255)',
            },
            h3: {
              color: 'rgb(255 255 255)',
            },
            h4: {
              color: 'rgb(255 255 255)',
            },
            'figure figcaption': {
              color: 'rgb(156 163 175)',
            },
            code: {
              color: 'rgb(255 255 255)',
            },
            'a code': {
              color: 'inherit',
            },
            pre: {
              color: 'rgb(229 231 235)',
              backgroundColor: 'rgb(17 24 39)',
            },
            thead: {
              color: 'rgb(255 255 255)',
              borderBottomColor: 'rgb(55 65 81)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(55 65 81)',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
