import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'

export const adminUsers = () => {
  return db.adminUser.findMany()
}

export const adminUser = ({ id }) => {
  return db.adminUser.findUnique({
    where: { id },
  })
}


export const adminuserCount = () => {
  return db.adminUser.count()
}

// export const adminuserAvgage = () => {
//   return db.adminUser.aggregate({
//     _avg: {
//       age: true,
//     },
//   })
// }

export const adminuserAvgage = async () => {
    const result = await db.adminUser.aggregate({
      _avg: {
        age: true,
      },
    })
    return result['_avg'].age
}

export const adminorderage = async () => {
  const result = await db.adminUser.groupBy({
    by: ['age'],
    orderBy: {
      age: 'desc',
    },
  })
  return result
  // result['_avg'].age
}


// export const adminuserAvgage = async () => {
//   const result = await db.adminUser.aggregate({
//     _avg: {
//       age: true,
//     },
//   })
//   console.log("from the services", result)
//   logger.debug({custom: result}, 'result from Prisma')
//   const newavg = result.map((item) => {
//     return {
//       adminavg: item['_avg'].age
//     }
//   })
//   return newavg
// }


export const createAdminUser = ({ input }) => {
  return db.adminUser.create({
    data: input,
  })
}

export const updateAdminUser = ({ id, input }) => {
  return db.adminUser.update({
    data: input,
    where: { id },
  })
}

export const deleteAdminUser = ({ id }) => {
  return db.adminUser.delete({
    where: { id },
  })
}
