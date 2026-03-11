
const getChildFile = async (id) => {   
    const res = await fetch('/api/user/get/file', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id})
    })

    const data = await res.json()


    if (!res.ok) {
        throw new Error(data.message);
    }

    return data
}

export default getChildFile