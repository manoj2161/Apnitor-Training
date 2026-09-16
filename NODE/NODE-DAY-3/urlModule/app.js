import { URL } from "url";
const myUrl = new URL(
  "https://example.com/products?category=mobile&page=2&limit=10",
);
console.log("Protocol : ", myUrl.protocol);
console.log("Hostname : ", myUrl.hostname);
console.log("Pathname : ", myUrl.pathname);
console.log("Category : ", myUrl.searchParams.get("category"));
console.log("Page : ", myUrl.searchParams.get("page"));
console.log("Limit : ", myUrl.searchParams.get("limit"));
