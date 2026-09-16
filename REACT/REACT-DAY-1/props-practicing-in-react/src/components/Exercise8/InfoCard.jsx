function InfoCard({title,description,bgColor="#f0f0f0",children}){
    return (<>
    <div style={{backgroundColor:bgColor}}>
    <p>Title : {title}</p>
    <p>Description : {description}</p>
    <p>{children}</p>
    </div>
    </>)
}

export default InfoCard