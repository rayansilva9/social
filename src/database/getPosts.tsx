import { db } from "@/lib/firebase"

export async function getPosts(following: string[]) {

  const res = await db
    .collection('posts')
    .where('userId', 'in', following)
    .get()

  const post = res.docs.map((post) => ({ ...post.data() }))


  return post
}