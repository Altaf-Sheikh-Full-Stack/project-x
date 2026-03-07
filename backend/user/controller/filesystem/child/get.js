import getChildFileService from "../../../service/filesystem/child/get.js"



const getChildFileController = async (req, res) => {

    try {
        console.log(req.body)
        const { param } = req.body
        console.log(param)
        await getChildFileService(param)

        res.status(200).json({
            message: "child compo found"
        })
    } catch (err) {
        console.log(err)
    }




}

export default getChildFileController