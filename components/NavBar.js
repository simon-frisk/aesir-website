import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function NavBar() {
  const [isShow, setIsShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsShow(false)
  }, [router.pathname])

  return (
    <div className='navbar'>
      <span className='menu' onClick={() => setIsShow(!isShow)}>
        Menu
      </span>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
      </div>
      <div>
        <Link href='/sponsors'>
          <a>Sponsors</a>
        </Link>
        <Link href='/join'>
          <a>Join Aesir</a>
        </Link>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          opacity: 0.9;
          width: 100%;
          padding: 10px;
          background: #222;
          color: white;
          z-index: 1000;
        }
        a {
          display: ${isShow ? 'block' : 'none'};
          margin: 10px;
        }
        .menu {
          margin: 0;
        }
        @media (min-width: 600px) {
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          a {
            display: inline;
          }
          .menu {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}
