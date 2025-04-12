import Class from "../models/class.js"

export const createClass = async (req, res) => {
    const classInfos = req.body

    const newClass = await Class.create(classInfos)

    return res.send({
        message : "Created Class with success",
        success : true,
        data : newClass
    })

}
export const getClasses = async (req, res) => {
    const classes = await Class.find()

    return res.send({
        message : "Fetched Classes with success",
        success : true,
        data : classes
    })
}
export const getClassById = async (req, res) => {
    const id = req.params.id

    const myClass = await Class.findById(id)

    if(!myClass) {
        return res.send({
            message : "Class not found",
            success : false,
        })
    }

    return res.send({
        message : "Fetched Classes with success",
        success : true,
        data : myClass
    })


}
export const updateClass = async (req, res) => {
    const id = req.params.id

    const newInfos = req.body

    const updatedClass = await Class.findByIdAndUpdate(id, newInfos)

    return res.send({
        message : "Updated Class with success",
        success : true,
    })
}
export const deleteClass = async (req, res) => {
    const id = req.params.id

    const deletedClass = await Class.findByIdAndDelete(id)

    return res.send({
        message : "Deleted Class with success",
        success : true,
    })
}