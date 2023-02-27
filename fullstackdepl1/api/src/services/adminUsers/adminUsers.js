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
  const result1 = await db.adminUser.groupBy({
    by: ['age', 'id', 'name'],
    orderBy: {
      age: 'desc',
      // id: true,
      // name: true,
    },
  })
  return result1
  // result['_avg'].age
}

export const admincountbyage = async () => {
  const result2 = await db.adminUser.count({
    where: {
      age: {
        lt: 40,
        gte: 30,
      }
    },
    _count: {
      age: true,
    },
  })
  return result2
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
