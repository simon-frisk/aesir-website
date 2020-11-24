export default ({ children, lowTopMargin, ...props }) => (
  <div {...props} id='container'>
    {children}
    <style jsx>{`
      #container {
        max-width: 700px;
        width: 85%;
        margin: ${lowTopMargin ? '5vh' : '15vh'} auto;
      }
    `}</style>
  </div>
)
