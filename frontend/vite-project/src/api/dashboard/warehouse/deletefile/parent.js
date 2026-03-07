const deleteParentFile = async (id) => {
    console.log(id)
    const res = await fetch('/api/user/delete/file', {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({id})
    })


    const data = res.json()
    if(!res.ok){
        throw new Error(data.message);
    }

    return data
}

export default deleteParentFile