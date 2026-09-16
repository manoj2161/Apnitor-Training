function UserInfo({name,age,isActive}){
    return (<>
    <p>Name : {name}</p>
    <p>Age : {age}</p>
    <p>Status : {isActive?<span>Active</span>:<span>Inactive</span>}</p>
    </>)
}
export default UserInfo