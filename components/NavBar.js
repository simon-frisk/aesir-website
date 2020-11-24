import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const breakPointWidth = 750

export default function NavBar() {
  const [isShow, setIsShow] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsShow(false)
  }, [router.pathname])

  useEffect(() => {
    const handle = () => setIsShow(false)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  })

  return (
    <div id='navbar'>
      <div id='menu-left'>
        <Link href='/'>
          <img src='/logo.png' style={{ height: 40, cursor: 'pointer' }} />
        </Link>
        <MenuIcon onClick={() => setIsShow(!isShow)} isOpen={isShow} />
      </div>
      <div id='menu-right'>
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
          <a>Join Æsir</a>
        </Link>
      </div>
      
      <style jsx>{`
        #navbar {
          position: fixed;
          top: 0;
          left: 0;
          opacity: 0.99;
          width: 100%;
          padding: 10px;
          background: #222;
          color: #ddd;
          z-index: 1000;
        }
        #menu-left {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        a {
          margin: 10px;
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          color: #777;
        }

        @media (max-width: ${breakPointWidth}px) {
          #menu-right {
            height: ${isShow ? '220px' : 0};
            transition: height 1s;
            overflow: hidden;
          }
          a {
            display: block;
            opacity: ${isShow ? 1: 0};
            transition: opacity 1s;
          }
        }

        @media (min-width: ${breakPointWidth}px) {
          #navbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  )
}

function MenuIcon({onClick, isOpen}) {
  return (
    <div id='container' className={isOpen ? 'open' : ''} onClick={onClick}>
      <div id='bar' />
      <style jsx>{`
        #container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          cursor: pointer;
          transition: all .5s ease-in-out;
        }

        #bar {
          width: 35px;
          height: 6px;
          border-radius: 5px;
          background-color: #fff;
          transition: all .5s ease-in-out;
        }

        #bar::before, #bar::after {
          content: '';
          position: absolute;
          width: 35px;
          height: 6px;
          border-radius: 6px;
          background-color: #fff;
          transition: all .5s ease-in-out;
        }

        #bar::before {
          transform: translateY(-11px);
        }

        #bar::after {
          transform: translateY(11px);
        }

        #container.open #bar {
          background: transparent;
        }

        #container.open #bar::before {
          transform: rotate(45deg);
        }

        #container.open #bar::after {
          transform: rotate(-45deg);
        }

        @media (min-width: ${breakPointWidth}px) {
          display: none;
        }
      `}</style>
    </div>
  )
}
