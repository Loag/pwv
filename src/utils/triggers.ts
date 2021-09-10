import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

prisma.$use(async (params, next) => {

  const result = await next(params)

  if (params.model != "AuditEvent" && params.action == 'create') {
    return await prisma.auditEvent.create({
      data: {
        user_id: params.args.data.user_id,
        description: `New record created in ${params.model} with id: ${result.id}`
      },
    })
  }

  // See results here
  return result
})