import { AiOutlineHome } from 'react-icons/ai'
import { TfiSearch } from 'react-icons/tfi'
import { CgAddR } from 'react-icons/cg'
import { IoMdHeartEmpty } from 'react-icons/io'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'

import { HiHome } from 'react-icons/hi'

import { usePathname, useRouter } from 'next/navigation'
import { useContext } from 'react'
import { MainContext } from '@/context/mainContext'




const NavBar = () => {

  const pathname = usePathname()
  const { push } = useRouter()

  const { postOnViewMode } = useContext(MainContext)
  return (
    <>
      <div
        style={{
          transform: `translateY(${postOnViewMode ? '80px' : '0'})`,
          transition: 'transform 0.3s',
          background: 'white'
        }}
        className=" transition-colors fixed flex items-center justify-between px-[20px] rounded-tl-[30px] rounded-tr-[30px] bottom-0 w-screen z-[9999] pb-7 h-[60px] 
          md:flex-col md:left-0 md:h-full md:w-[72px] md:pl-[0px] md:pr-[0px]  md:pb-[0px] md:justify-start md:mt-0 md:mb-0 md:gap-8 md:rounded-none pt-10
          xl:w-[230px] xl:pl-[20px]
          "
      >
        {pathname == '/' ? (
          <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
            <HiHome
              className={`'text-black'
                } transition-colors text-3xl lg:text-[2.5rem]`}
            />
            <p
              style={{ color: 'black' }}
              className="text-xl hidden xl:inline"
            >
              Inicio
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
            <AiOutlineHome
              className="text-2xl text-slate-600  lg:text-[2.5rem]"
              onClick={() => {
                push('/')
              }}
            />
            <p
              style={{ color: 'black' }}
              className="text-xl hidden xl:inline"
            >
              Inicio
            </p>
          </div>
        )}
        {/* {isOpen ? (
          <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
            <RxCross1
              onClick={() => {
                setIsOpen(false)
              }}
              className="text-3xl text-zinc-600 lg:text-[2.5rem]"
            />
            <p
              style={{ color: 'black' }}
              className="text-lg hidden xl:inline"
            >
              Inicio
            </p>
          </div>
        ) : (
          <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
            <TfiSearch
              onClick={() => {
                setIsOpen(true)
              }}
              className="text-3xl text-zinc-600 lg:text-[2.5rem]"
            />
            <p
              style={{ color: 'black' }}
              className="text-lg hidden xl:inline"
            >
              Pesquisar
            </p>
          </div>
        )} */}
        <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
          <CgAddR className="text-3xl text-zinc-600 lg:text-[2.5rem]" />
          <p
            style={{ color: 'black' }}
            className="text-lg hidden xl:inline"
          >
            Criar post
          </p>
        </div>
        <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
          <IoMdHeartEmpty className="text-3xl text-zinc-600 lg:text-[2.5rem]" />
          <p
            style={{ color: 'black' }}
            className="text-lg hidden xl:inline"
          >
            Notificações
          </p>
        </div>
        <div className="flex items-center justify-center xl:justify-start gap-3 w-full">
          <MdOutlinePersonOutline className="text-3xl text-zinc-600 lg:text-[2.5rem]" onClick={() => {
            push('signIn')
          }} />
          <p
            style={{ color: 'black' }}
            className="text-lg hidden xl:inline"

          >
            Perfil
          </p>
        </div>
      </div>
    </>
  );
}

export default NavBar;