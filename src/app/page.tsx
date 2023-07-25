"use client"

import Post from '@/components/post/_index';
import PostComments from '@/components/post/comments/_index';
import { CommentsContextProvider } from '@/context/commentsContext';
import { getPosts } from '@/database/getPosts';
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

export default function Home() {
  const [ass, setass] = useState(false);


  const { USI: token } = parseCookies()
  const a = JSON.parse(token)
  useEffect(() => {
    if (token) {
      setass(true)
    }
  }, []);

  async function get() {
    const b = await getPosts(a.following);
  }
  // get()

  const posts = [
    {
      "id": "asddsa",
      "media": [
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/05/membros-da-ku-klux-klan-vestidos-de-branco-e-com-capuz-em-formato-conico-tambem-branco-sobre-o-rosto.jpg",
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/05/membros-da-ku-klux-klan-vestidos-de-branco-e-com-capuz-em-formato-conico-tambem-branco-sobre-o-rosto.jpg",
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/05/membros-da-ku-klux-klan-vestidos-de-branco-e-com-capuz-em-formato-conico-tambem-branco-sobre-o-rosto.jpg",
      ],
      "userId": "vyUNh7DNj7dg64wJxhu5SoDUONF3"
    },
    {
      "id": "vf9Gmpf3yMAs9d7ULm4y",
      "media": [
        "https://i.pinimg.com/1200x/41/ec/b0/41ecb0b52ae253915a2e1e4f4a6409ff.jpg"
      ],
      "userId": "vyUNh7DNj7dg64wJxhu5SoDUONF3"
    },
    {
      "id": "asddsaasddsa",
      "media": [
        "https://static.mundoeducacao.uol.com.br/mundoeducacao/2023/05/membros-da-ku-klux-klan-vestidos-de-branco-e-com-capuz-em-formato-conico-tambem-branco-sobre-o-rosto.jpg"
      ],
      "userId": "vyUNh7DNj7dg64wJxhu5SoDUONF3"
    }
  ]

  return (
    <>

      {ass && (

        <main className="flex min-h-screen items-center flex-col my-[70px] ">
          {posts.map((post) => (
            <div key={post.id}>
              <CommentsContextProvider>
                <Post content={post} />
                <PostComments docId={post.id} />
              </CommentsContextProvider>
            </div>
          ))}
        </main>
      )}

    </>
  )
}
