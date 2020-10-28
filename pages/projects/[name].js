import { useRouter } from 'next/router'
import Link from 'next/link'
import { Client } from '../../prismic-config'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'
import TextContainer from '../../components/TextContainer'

export default function Projects(props) {
  const name = useRouter().query.name
  const project = props.projects.find(project => project.name[0].text.toLowerCase() == name.toLowerCase())
  if(!project) return <div/>

  return (
    <TextContainer>
      <Link href='/projects'>
        <a>{'< '}Back</a>
      </Link>
      {RichText.render(project.name)}
      {RichText.render(project.about)}
    </TextContainer>
  )
}

Projects.getInitialProps = async ctx => {
  const result = await Client(ctx.req).query(
    Prismic.Predicates.at('document.type', 'project')
  )
  return {
    projects: result.results.map(result => result.data),
  }
}