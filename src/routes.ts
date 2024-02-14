import { createUserController } from './useCases/createUser'
import { Router } from "express";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handler(request, response)
})


export { router }