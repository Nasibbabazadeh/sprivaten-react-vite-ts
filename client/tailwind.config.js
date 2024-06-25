/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    screens: {
      sm: { min: "360px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      xl: { min: "1024px", max: "1280px" },
      "2xl": { min: "1280px" },
    },
    fontSize: {
      xxs: ["12px", "28px"],
      xs: ["14px", "24px"],
      parag: ["14px", "20px"],
      sm: ["14px", "28px"],
      base: ["16px", "24px"],
      md: ["20px", "30px"],
      lg: ["22px", "28px"],
      xl: ["24px", "28.64px"],
      xxl: ["24px", "32px"],
      "2xxl": ["30px", "45px"],
      header: ["58px", "80px"],
      header2: ["40px", "57px"],
    },
    colors: {
      "second-text-color": "#737373",
      "text-color": "#252B42",
      "light-text-color": "#fff",
      "secondary-color-1": "#00A0C1",
      primary: "#FFA62B",
      "muted-color": "#BDBDBD",
      "input-bg": "#F9F9F9",
      "card-bg-primary": "#D9EDFF",
      border1: "#A9D6FF",
      "bg-primary": "#DEDEDE",
      border3: "#EEE",
      "bg-footer": "#252B42",
      "hr-bg": "#364067",
      "secondary-color-2": "#16697A",
    },
    boxShadow: {
      "box-ellipse": "0px 18px 40px -12px #FF75B759",
    },
    extend: {
      backgroundImage: {
        "linear-cover": "linear-gradient(to bottom, #fff 50%, #0B353D 50%)",
      },
      spacing: {
        18: "74px",
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        md: "10px",
        xxl: "37px",
      },
    },
  },
  plugins: [],
};
