


const getChildFile = async (value) => {
    const res = await fetch('/api/user/get/folder/child', {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value)
    })

    const data = res.json()

    if(!res.ok){
        throw new Error(data.message);
    }

    return data
}

export default getChildFile