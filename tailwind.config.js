/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      borderWidth: {
        1: '1px',
      },
      gap: {
        7.5: '30px',
        12.5: '50px',
        15: '60px',
        17.5: '70px',
      },
      padding: {
        7.5: '30px',
        12.5: '50px',
        17.5: '70px',
        25: '100px',
        32.5: '130px',
        37.5: '150px',
      },
      margin: {
        17.5: '70px',
        75: '300px',
        32.5: '130px',
        37.5: '150px',
      },
      screens: {
        xs: '375px',
      },
      backgroundImage: {
        'home-img': "url('assets/home_bg.jpg')",
      },
      height: {
        13.5: '54px',
        15: '60px',
        18: '72px',
        20.5: '82px',
        27.5: '110px',
        87.5: '350px',
        167: '668px',
        231.5: '926px',
      },
      width: {
        15: '60px',
        18: '72px',
        27.5: '110px',
        37: '148px',
        42: '168px',
        43: '172px',
        78: '312px',
        94: '376px',
        150: '600px',
        320: '1280px',
      },
    },
  },
  plugins: [],
}
