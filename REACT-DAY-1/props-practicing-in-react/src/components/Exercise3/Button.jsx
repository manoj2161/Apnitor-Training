function Button({onClick,label="FullName"}){

    return(<>
    <button onClick={onClick}>Click me</button>
    <p>{label}</p>
    </>)
}

export default Button