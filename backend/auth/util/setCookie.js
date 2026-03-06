

const setCookie = (req, res, token) => {
    return res.cookie("AuthToken", token)
}


export default setCookie