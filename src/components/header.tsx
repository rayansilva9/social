import { CommentsContext } from "@/context/commentsContext";
import { MainContext } from "@/context/mainContext";
import { UserContext } from "@/context/userContext";
import { useContext } from "react";
import { CiSettings } from 'react-icons/ci'
import { IoMdNotificationsOutline } from 'react-icons/io'

const Header = () => {
  const { user } = useContext(UserContext)
  const { postOnViewMode } = useContext(MainContext)

  return (
    <>
      <div className="flex transition-colors fixed  justify-between items-center px-5 top-0 w-screen h-[50px] md:hidden"
        style={{
          background: 'white',
          zIndex: '9999',
          transition: '.4s ease',
          transform: `translateY(${postOnViewMode ? '-50px' : '0'})`,
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
        }}
      >
        <CiSettings className="text-3xl text-gray-500" />
        <p className={`text-black'
          } font-semibold transition-colors`}
        >
          Instagram
        </p>
        <IoMdNotificationsOutline className="text-3xl text-gray-500" />
      </div>
    </>
  );
}

export default Header;