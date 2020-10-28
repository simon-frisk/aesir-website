export default ({ children, lowTopMargin, ...props }) => (
  <div
    {...props}
    style={{
      maxWidth: '700px',
      width: '90%',
      margin: `${lowTopMargin ? '5vh' : '15vh'} auto`,
      ...props.style,
    }}
  >
    {children}
  </div>
)
