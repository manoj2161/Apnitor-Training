export function Product(props){
    const {name,price}= props;
    return (<>
    <p>{name} cost {price}</p>
    <p>{props.name} costs ₹{props.price}</p>
    </>)
}

export default Product