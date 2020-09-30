export default ({ children, ...props }) => (
  <div
    {...props}
    style={{
      maxWidth: '700px',
      width: '90%',
      margin: '15vh auto',
      ...props.style,
    }}
  >
    {children}
  </div>
)
