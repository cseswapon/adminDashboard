/**
 * Title: Online E-commerce Product Sell
 * Description: This is a custom hook use to cookies handel.
 * Author: Swapon Saha.
 * Date: 16/06/2023.
 */
const useCookies = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export default useCookies;
