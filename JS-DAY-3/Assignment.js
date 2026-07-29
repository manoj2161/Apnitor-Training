// // Q1: Count the number of words in a sentence.
// const sentence = "JavaScript is easy to learn";
// const newArr = sentence.split(" ");
// console.log(`Total number of words : ${newArr.length}`);

// // Q2: Create a file path from this array.
// const folders = ["Users", "Madhavi", "Documents", "Resume.pdf"];
// const path= folders.join("/");
// console.log(path);

// // Q3: Replace only the first occurrence of "cat".
// const sentence = "cat dog cat rabbit";
// const newSentence = sentence.replace("cat","lion");
// console.log(newSentence);

// // Q4: Replace every "-" with "/".
// const date = "12-07-2025";
// console.log(date.replaceAll("-","/"));

// // Q5: Extract the year from the da te.
// const date = "18/07/2025";
// console.log(date.slice(-4));

// // Q6: Extract the last four digits of an Aadhaar-like number.
// const aadhaar = "123456789012";
// console.log(aadhaar.slice(-4));

// // Q7: Remove unwanted spaces before storing the username.
// const username = "   Practice  ";
// console.log(username.trim());

// // Q8: Check whether the user entered an empty comment after removing spaces.
// const comment = "     ";
// comment.trim()===""?console.log("The Comment is empty"): console.log("The comment is not empty");

// // Q9: Check whether the email belongs to Gmail.
// const email = "user@gmail.com";
// console.log(email.includes("@gmail.com"));

// // Q10: Check whether the URL starts with HTTPS.
// const url = "https://openai.com";
// console.log(url.startsWith("https://"));

// // Q11: Check whether an image is in PNG format.
// const image = "banner.png";
// console.log(image.endsWith(".png"));


// Q12: You are given the following raw product information received from a form:
const productInfo =
  "   PRD-1024 | Wireless Mouse | electronics | ₹799 | available | mouse-image.png   ";
// console.log(productInfo.trim());
// console.log(productInfo.split("|"));
const cleanedProductDetails = productInfo.split("|").map(prodct=>prodct.trim());
console.log(cleanedProductDetails);
let [productId,productName,catagory,price,status,imageName]= cleanedProductDetails;
console.log(productId.startsWith("PRD-"));
console.log(productId.substring(4));
console.log(catagory.replace("electronics","Electronics"));
console.log(productName.replaceAll(" ","-"));
console.log(status.includes("available"));
console.log(imageName.toLowerCase().endsWith(".png"));
console.log(imageName.slice(0,-4));
console.log();
const stockStatus = status.includes("available")?"In Stock":"Out of Stock";
const finalResult = [`Product ${productId.slice(-4)} - ${productName.replaceAll(" ","-")} - ${catagory.replace("electronics","Electronics")} - ${price} - ${stockStatus}`]
console.log(finalResult);

// console.log(productInfo.trim()
// .replace("PRD-1024","Product 1025")
// .replace("electronics","Electronics")
// .replace("available","In Stock")
// .replaceAll(" | "," - ")
// .substring(0,productInfo.trim().length-15)
// );


