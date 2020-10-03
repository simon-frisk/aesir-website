import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import TextContainer from '../components/TextContainer'

export default function Sponsors(props) {
  return <TextContainer>{RichText.render(props.sponsors.text)}</TextContainer>
}

Sponsors.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('sponsors')
  return {
    sponsors: result.data,
  }
}
