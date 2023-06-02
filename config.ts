const prod = {
  url: {
      //API_URL: "https://localhost:44377", /// production
  },
  defaultTimeout: 5 * 3600 * 1000, // Five hours
};
const dev = {
  url: {
      //API_URL: "https://localhost:44377", //dev
      //API_URL:"https://localhost:7143"
      API_URL:"http://95.110.133.251:5050"
  },
  defaultTimeout: 2 * 3600 * 1000, // Two hours
};
export const conf = process.env.NODE_ENV === "development" ? dev : prod;