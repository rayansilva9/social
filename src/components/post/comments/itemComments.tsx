import { db } from "@/lib/firebase"
import { DocumentData } from "firebase/firestore"
import { useEffect, useState } from "react"


type props = {
  comment: string
  img: string
  userId: string
}

const ItemComment: React.FC<props> = ({ comment, img, userId }) => {

  const [commentInfoUser, setCommentInfoUser] = useState<DocumentData>([])


  async function getUserProviderInfo() {
    const result = await db
      .collection('user')
      .where('uid', '==', userId)
      .get()

    setCommentInfoUser(result.docs.map((doc) => ({ ...doc.data() })));
  }


  useEffect(() => {
    getUserProviderInfo()
  }, []);



  return (
    <>
      <div className="flex w-full py-1 items-start">
        <img src={img} style={{ width: '40px', height: '40px', borderRadius: "50%" }} />
        <div className="self-center">
          <p style={{ wordBreak: 'break-all', flex: 1, }}>{comment}</p>
        </div>
      </div>
    </>
  );
}

export default ItemComment;