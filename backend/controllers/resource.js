import Resource from "../models/resource.js"

export const createResource = async (req, res) => {
    const resourceInfos = req.body

    const newResource = await Resource.create(resourceInfos)

    return res.send({
        message : "Created Resource with success",
        success : true,
        data : newResource
    })

}
export const getResources = async (req, res) => {
    const resources = await Resource.find().populate("classId")

    return res.send({
        message : "Fetched Resources with success",
        success : true,
        data : resources
    })
}
export const getResourceById = async (req, res) => {
    const id = req.params.id

    const myResource = await Resource.findById(id)

    if(!myResource) {
        return res.send({
            message : "Resource not found",
            success : false,
        })
    }

    return res.send({
        message : "Fetched Resources with success",
        success : true,
        data : myResource
    })


}
export const updateResource = async (req, res) => {
    const id = req.params.id

    const newInfos = req.body

    const updatedResource = await Resource.findByIdAndUpdate(id, newInfos)

    return res.send({
        message : "Updated Resource with success",
        success : true,
    })
}
export const deleteResource = async (req, res) => {
    const id = req.params.id

    const deletedResource = await Resource.findByIdAndDelete(id)

    return res.send({
        message : "Deleted Resource with success",
        success : true,
    })
}