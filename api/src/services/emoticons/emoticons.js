import { db } from 'src/lib/db'

export const emoticons = () => {
  return db.emoticon.findMany()
}

export const emoticon = ({ id }) => {
  return db.emoticon.findUnique({
    where: { id },
  })
}

export const createEmoticon = ({ input }) => {
  return db.emoticon.create({
    data: input,
  })
}

export const updateEmoticon = ({ id, input }) => {
  return db.emoticon.update({
    data: input,
    where: { id },
  })
}

export const deleteEmoticon = ({ id }) => {
  return db.emoticon.delete({
    where: { id },
  })
}
