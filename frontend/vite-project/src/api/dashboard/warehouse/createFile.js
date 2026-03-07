



const createFile = async (value) => {
    const res = await fetch('/api/user/file', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value)
    })

    const data = await res.json()
    if(!res.ok){
        throw new Error(data.message);
    }

    return data
}

export default createFile