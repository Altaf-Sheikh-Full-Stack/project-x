

const login = async (data) => {
    const res = await fetch('/api/auth/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(data)
    })


    const data = res.json()
    if(!res.ok){
        throw new Error("Can't login");
    }

    return data
}

export default login