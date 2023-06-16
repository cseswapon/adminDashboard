/**
 * Title: Online E-commerce Product Sell
 * Description: Just a baseurl all api call with this base url file.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
import axios from "axios";
export const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  headers: { "X-Custom-Header": "foobar" },
});
