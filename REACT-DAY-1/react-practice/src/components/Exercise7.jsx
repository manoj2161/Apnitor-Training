function Exercise7(){
    const numbers = [10, 15, 20, 25, 30, 35];
return( <>
<p>Filtered : 
{
   numbers.filter((number)=>
   {return number%5===0 && number>15}
).join(",")
}
</p>
</>)
}
export default Exercise7