import express from "express"
import { createResource, deleteResource, getResourceById, getResources, updateResource } from "../controllers/resource.js"

export const resourceRouter = express.Router()

resourceRouter.post('/', createResource)
resourceRouter.put('/:id', updateResource)
resourceRouter.delete('/:id', deleteResource)
resourceRouter.get('/', getResources)
resourceRouter.get('/:id', getResourceById)