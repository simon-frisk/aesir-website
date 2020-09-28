export default ({ text, image, href }) => {
  return (
    <a
      href={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: 'white',
        margin: 8,
      }}
    >
      <p style={{ fontSize: '.7em', marginRight: 5 }}>{text}</p>
      <img src={image} style={{ height: 15 }} />
    </a>
  )
}
