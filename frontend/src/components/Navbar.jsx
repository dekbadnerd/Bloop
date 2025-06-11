import { useAuthStore } from '../store/useAuthStore'
import { LogOut, MessageSquareCode , Settings, UserRound  } from 'lucide-react'
import { Link } from "react-router-dom"

const Navbar = () => {
  const {authUser, logout } = useAuthStore()
  return (
    <header className='bg-base-100/80 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg '>
      <div className='container mx-auto px-4 h-16'>
        <div className='flex items-center justify-between h-full'>
          <div className='flex items-center gap-8'>
            <Link to="/" className='flex items-center gap-2.5 hover:opacity-80 transition-all'>
              <div className='size-9 rounded-lg bg-primary/10 flex items-center justify-center'>
                <MessageSquareCode  className='size-5 text-primary' />
              </div>
              <h1 className='text-lg font-bold'>Bloop</h1>
            </Link>
          </div>

          {/* Right side */}
          <div className='flex items-center gap-2'>
            <Link
              to={"/settings"}
              className={`btn btn-sm gap-2 transition-colors`}
            >
              <Settings className='size-4'/>
              <span className='hidden sm:inline'>Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <UserRound  className='size-5'></UserRound>
                  <span className='hidden sm:inline'>Profile</span>
                </Link>

                <button className='flex gap-2 items-center' onClick={logout}>
                  <LogOut className='size-5' />
                  <span className='hidden sm:inline'>Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar