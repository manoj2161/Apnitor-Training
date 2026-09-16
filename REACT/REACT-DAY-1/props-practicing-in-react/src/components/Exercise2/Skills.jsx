function Skills({skillsList}){
    return (<>
    <h3>Skills List</h3>
    {
    skillsList.map((skill)=>
    skill
    ).join(",")}
    </>)
}

export default Skills