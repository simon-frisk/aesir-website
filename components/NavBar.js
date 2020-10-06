import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const breakPointWidth = 600

export default function NavBar() {
  const [isShow, setIsShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsShow(false)
  }, [router.pathname])

  return (
    <div className='navbar'>
      <div className='menu-left'>
        <Link href='/'>
          <img src='/logo.png' style={{ height: 40, cursor: 'pointer' }} />
        </Link>
        <MenuIcon onClick={() => setIsShow(!isShow)} />
      </div>
      <div>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/projects'>
          <a>Projects</a>
        </Link>
        <Link href='/sponsors'>
          <a>Sponsors</a>
        </Link>
        <Link href='/contact'>
          <a>Contact</a>
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
        .menu-left {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        a {
          display: ${isShow ? 'block' : 'none'};
          margin: 10px;
        }
        a :hover {
          color: #aaa;
        }
        @media (min-width: ${breakPointWidth}px) {
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

function MenuIcon(props) {
  return (
    <div className='container' onClick={props.onClick}>
      <div className='bar' />
      <div className='bar' />
      <div className='bar' />
      <style jsx>{`
        .container {
          cursor: pointer;
          display: inline;
        }

        .bar {
          width: 30px;
          height: 4px;
          background-color: white;
          margin: 5px 0;
        }

        @media (min-width: ${breakPointWidth}px) {
          display: none;
        }
      `}</style>
    </div>
  )
}
