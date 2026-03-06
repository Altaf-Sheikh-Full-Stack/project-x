const register = async (value) => {
    const res = await fetch('/api/auth/register', {
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

export default register