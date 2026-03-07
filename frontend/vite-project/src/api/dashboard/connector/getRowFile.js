


const getRowFile = async () => {
    const res = await fetch('/api/user/get/rowfile')
    const data = await res.json()
    if(!res.ok){
        throw new Error(data.message);
    }

    return data.rowfile
}


export default getRowFile