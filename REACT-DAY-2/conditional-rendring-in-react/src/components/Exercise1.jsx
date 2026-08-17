function Exercise1(){
    const isLoggedIn=true;
    return (<>
    <p>{isLoggedIn?<span>Welcome Back!</span>:<span>Please Log in</span>}</p>
    </>)
}
export default Exercise1