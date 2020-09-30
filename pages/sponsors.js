import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import TextContainer from '../components/TextContainer'

export default function Projects(props) {
  return <TextContainer>{RichText.render(props.sponsors.text)}</TextContainer>
}

Projects.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('sponsors')
  return {
    sponsors: result.data,
  }
}
