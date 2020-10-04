import { RichText } from 'prismic-reactjs'
import { Client } from '../prismic-config'
import TextContainer from '../components/TextContainer'

export default function About(props) {
  return <TextContainer> {RichText.render(props.about.text)}</TextContainer>
}

About.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('about')
  return {
    about: result.data,
  }
}
