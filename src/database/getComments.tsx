import { db } from '@/lib/firebase'

export const getComments = async (collection: string, docPostId: string) => {
  const result = db.collection(collection).doc(docPostId).collection('comments').get()

  const c = []

  const comentarios = (await result).docs.map(doc => doc.data())





  return comentarios
}
