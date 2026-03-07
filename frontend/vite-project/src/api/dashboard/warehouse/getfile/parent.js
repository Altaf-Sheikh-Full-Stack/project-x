const getParentFile = async () => {
    const res = await fetch('/api/user/get/file')

    const data = await res.json()

    if(!res.ok) {
        throw new Error(data.message);
    }

    return data.file
}

export default getParentFile