import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import TextContainer from '../components/TextContainer'

export default function Sponsors(props) {
  return <TextContainer>
    {RichText.render(props.sponsors.text)}
    <Link href='/contact'><button>Contact us</button></Link>
  </TextContainer>
}

Sponsors.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('sponsors')
  return {
    sponsors: result.data,
  }
}
