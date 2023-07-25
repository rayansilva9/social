
type props = {
  img: string
}

const PostHeader: React.FC<props> = ({ img }) => {
  return (
    <>
      <div className="w-full h-[40px] flex items-center px-4 bg-green-400">
        <img src={img} style={{ width: '40px', height: '40px', borderRadius: "50%" }} />
      </div>
    </>
  );
}

export default PostHeader;