import getChildFileService from "../../../service/filesystem/child/get.js"



const getChildFileController = async (req, res) => {
    try {
        console.log("yes")
        console.log("budy" + req.body)
        await getChildFileService(param)

        res.status(200).json({
            message: "child compo found"
        })
    } catch (err) {
        console.log(err)
    }




}

export default getChildFileController