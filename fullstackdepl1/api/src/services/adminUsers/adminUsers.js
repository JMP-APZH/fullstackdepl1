import { db } from 'src/lib/db'

export const adminUsers = () => {
  return db.adminUser.findMany()
}

export const adminUser = ({ id }) => {
  return db.adminUser.findUnique({
    where: { id },
  })
}

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
