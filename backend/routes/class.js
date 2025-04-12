import express from "express"
import { createClass, deleteClass, getClassById, getClasses, updateClass } from "../controllers/class.js"

export const classRouter = express.Router()

classRouter.post('/', createClass)
classRouter.put('/:id', updateClass)
classRouter.delete('/:id', deleteClass)
classRouter.get('/', getClasses)
classRouter.get('/:id', getClassById)