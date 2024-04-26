/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    height: {
      '80vh': '80vh',
      '128': '32rem'
    },
    width: {
      '128': '32rem',
      '40rem': '40rem',
      '50rem': '50rem',
      '60rem': '60rem'
    }
  },
};
export const plugins = [];

