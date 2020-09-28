import Link from 'next/link'

export default () => (
  <div
    style={{
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'flex',
      width: '100%',
      boxSizing: 'border-box',
      justifyContent: 'space-between',
      padding: 10,
      color: 'white',
    }}
  >
    <div
      style={{
        display: 'flex',
      }}
    >
      <Link href='/'>
        <a style={{ margin: '0 10px' }}>🚀Home</a>
      </Link>
    </div>
    <div
      style={{
        display: 'flex',
      }}
    >
      <Link href='/contact'>
        <a style={{ margin: '0 10px' }}>📬Contact</a>
      </Link>
      <Link href='/join'>
        <a style={{ margin: '0 10px' }}>🔨Join us</a>
      </Link>
    </div>
  </div>
)
