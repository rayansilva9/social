import { db } from '@/lib/firebase'

export const addComments = async (
  collection: string,
  docPostId: string,
  userId: string,
  comment: string
) => {
  db.collection(collection)
    .doc(docPostId)
    .collection('comments')
    .add({
      userId,
      comment
    })
    .then(doc => {
      doc.update({ docId: doc.id })
    })
}
