import "@/styles/globals.css";

import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL; // macht Zugrifff auf BACKEND URL per Variable möglich
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
