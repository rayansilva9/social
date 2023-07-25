type props = {
  media: string[]
}

const PostMedia: React.FC<props> = ({ media }) => {
  return (
    <>
      <div className="w-full">
        <div
          className="w-full h-full"
          style={{
            overflowY: 'scroll',
            display: 'flex',
            scrollSnapType: 'x mandatory',
          }}
        >
          {media.map((src, index) => (
            <img key={index} src={src} style={{
              width: '100%', height: 'auto',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'normal',
            }} />
          ))}
        </div>
      </div>
    </>
  )
}

export default PostMedia
