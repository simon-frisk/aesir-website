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
      <MenuIcon onClick={() => setIsShow(!isShow)} />
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
          transition: width 600ms ease-out, height 600ms ease-out;
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
          float: right;
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
