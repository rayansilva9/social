import { AiFillHeart } from 'react-icons/ai'
import { FaCommentDots } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { BsBookmark } from 'react-icons/bs'
import { CommentsContext } from '@/context/commentsContext'
import { useContext } from 'react'
import { MainContext } from '@/context/mainContext'

type props = {
  openComments: () => void
}

const PostAction: React.FC<props> = ({ openComments }) => {
  const { ShowComments } = useContext(CommentsContext)
  const { setPostOnViewMode } = useContext(MainContext)


  return (
    <>
      <div className='w-full py-3 px-2'
        style={{ background: 'white' }}>
        <div className='flex items-center justify-between w-auto'>
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-2xl py-2 px-2 flex items-center gap-2">
              <AiFillHeart className="text-[25px]" />
              <p className=" text-sm">
                22k
              </p>
            </div>
            <div className="rounded-2xl p-1 flex items-center gap-2"
              onClick={() => { ShowComments(), openComments(), setPostOnViewMode(prev => !prev) }}
            >
              <FaCommentDots className="text-[25px]" />
              <p className=" text-sm">
                {/* {commentsLength?.length} */}
              </p>
            </div>
            <div className=" rounded-2xl p-1 flex items-center">
              <RiSendPlaneFill className="text-[25px]" />
            </div>
          </div>
          <BsBookmark className="text-[25px] mr-1 text-white" />
        </div>
      </div>
    </>
  );
}

export default PostAction;