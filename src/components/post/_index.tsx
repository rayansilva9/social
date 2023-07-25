import { CommentsContext, CommentsContextProvider } from "@/context/commentsContext";
import PostComments from "./comments/_index";
import PostAction from "./postAction";
import PostHeader from "./postHeader";
import PostMedia from "./postMedia";
import { useCallback, useContext, useMemo, useRef, useState } from "react";
type prop = {
  content: {
    id: string
    media: string[]
    userId: string
  }
}
const Post: React.FC<prop> = ({ content: { media } }) => {

  const { open, ShowComments, setDistance, distance } = useContext(CommentsContext)
  const containerRef = useRef<HTMLDivElement>(null)

  const [lastPosition, setLastPosition] = useState<number>()

  const viewPost = () => {
    // ALTERA O POST PARA O MODO VIEW
    setLastPosition(containerRef.current?.getBoundingClientRect().top)
    let itemHeight = containerRef.current?.clientHeight
    let dislpayHeight = window.innerHeight
    let resto = dislpayHeight - itemHeight!
    setDistance(resto) // resto da tela entre o poste e a barra de navegação 
  }
  const delay = () => {
    return setTimeout(() => { return "0" }, 200)
  }

  useMemo(() => {
    if (containerRef.current) {
      //  BLOQUEIA O SCROLL DA TELA QUANDO O POST ESTÁ NO MODO VIEW
      if (open) {
        document.querySelector('html')!.style.overflow = 'hidden'
        containerRef.current!.style.zIndex = '250'
      } else {
        setTimeout(() => {
          containerRef.current!.style.zIndex = '50'
          document.querySelector('html')!.style.overflow = ''
        }, 300)
      }
    }
  }, [open])


  return (
    <>
      <div className="relative flex flex-col w-full min-h-[500px] sm:w-[500px] sm:min-h-[500px]">
        <PostHeader img={media[0]} />
        <div
          ref={containerRef}
          style={{
            transition: 'all .2s linear',
            position: 'relative',
            zIndex: open ? '800' : '0',
            transform: containerRef.current && containerRef.current?.getBoundingClientRect().top < 1
              ? open
                ? `translateY(${containerRef.current
                  ?.getBoundingClientRect()
                  .top.toString()
                  .replace('-', '') + 'px'
                })`
                : `translateY(${lastPosition + 'px'})`
              : open
                ? `translateY(${'-' + containerRef.current?.getBoundingClientRect().top + 'px'
                })`
                : `translateY(${lastPosition + 'px'}))`,
          }}>
          <PostMedia media={media} />
          <PostAction openComments={viewPost} />
        </div>
      </div >
    </>
  );
}

export default Post;