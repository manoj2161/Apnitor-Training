// // The iteration conversion
// function convertObject(details){
// details = Object.entries(details);
// const upperObject = {};
// details.forEach(([key,value]) => {
//     const upperKey = key.toUpperCase();
//     upperObject[upperKey]= value;
// });
// return upperObject;
// };
// const details = {
//     name:"Manoj",
//     age:23,
//     dob:"03/06/2003"
// }
// console.log(convertObject(details));

// // The Profile Extractor

// function extractAdmin(user){
// const {name:adminName,clearance = "Level 1"}= user;
// return `Admin:${adminName},clearance:${clearance}`
// };

// const user = {
//     name : "Manoj",
// };
// console.log(extractAdmin(user));


// // fixing the shallow bug
// const company = {
//   title: "TechCorp",
//   departments: ["HR", "Engineering"]
// };

// const subCompany = structuredClone(company);
// subCompany.departments.push("Design");
// console.log(subCompany);
// console.log(company);

// Safe Cofig Merge
function mergeConfig(baseConfig,userOverrides){
const newConfig = {...baseConfig,...userOverrides};
return newConfig;
};
const baseConfig= {
    name:"Manoj",
    ip:"1.2.3.4"
};
const userOverrides = {
    loacation:"Bilaspur"
};
console.log(mergeConfig(baseConfig,userOverrides))