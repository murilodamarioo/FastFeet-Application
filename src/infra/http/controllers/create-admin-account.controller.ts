import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'

const createAdminAccountSchema = z.object({
  name: z.string(),
  cpf: z.string(),
  email: z.string().email(),
  password: z.string()
})

type CreateAdminAccountBodySchema = z.infer<typeof createAdminAccountSchema>

@Controller('/admin-account')
export class CreateAdminAccountController {

  constructor() {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createAdminAccountSchema))
  async handle (@Body() body: CreateAdminAccountBodySchema) {

    const { name, cpf, email, password } = createAdminAccountSchema.parse(body)
  
  }
}