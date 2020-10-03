import Link from 'next/link'

export default function NavBar() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '10px',
        background: '#333',
        color: 'white',
        boxShadow: '0 0 5px 1px #333',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link href='/'>
          <a
            style={{ margin: '0 10px', display: 'flex', alignItems: 'center' }}
          >
            <span>🚀</span>Home
          </a>
        </Link>
        <Link href='/projects'>
          <a style={{ margin: '0 10px' }}>Projects</a>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link href='/sponsors'>
          <a style={{ margin: '0 10px' }}>Sponsors</a>
        </Link>
        <Link href='/join'>
          <a style={{ margin: '0 10px' }}>Join Aesir</a>
        </Link>
      </div>
    </div>
  )
}
