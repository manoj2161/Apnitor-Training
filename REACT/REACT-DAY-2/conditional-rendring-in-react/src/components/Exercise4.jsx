function StatusText({ status }) {
    if(status ==="loading"){
        return <p>Loading...</p>
    }
    if(status==="error"){
        return <p>Something went wrong</p>
    }
    if(status==="empty"){
        return <p>No data Found</p>
    }
    return <p>Data Loaded Successfully</p>
}
export default StatusText