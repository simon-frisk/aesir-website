import { Client } from '../prismic-config'
import Prismic from 'prismic-javascript'
import TextContainer from '../components/TextContainer'
import Link from 'next/link'

export default function Projects(props) {
  const activeProjects = props.projects.filter(project => project.active)
  const notActiveProjects = props.projects.filter(project => !project.active)

  return (
    <TextContainer>
      <h2>Current projects</h2>
      {activeProjects.map(project => (
        <Project project={project} />
      ))}
      <h2>Past projects</h2>
      {notActiveProjects.map(project => (
        <Project project={project} />
      ))}
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

const Project = ({ project }) => {
  const textExtract = project.about[0].text.slice(0, 120).split(' ').slice(0, -1).join(' ').concat(' ...')

  return (
    <Link href={`/projects/${project.name[0].text}`}>
      <div style={{boxShadow: '0 0 5px 0 #333', borderRadius: 12, padding: 17, marginTop: 15, cursor: 'pointer'}}>
        <h3 style={{margin: 0}}>{project.name[0].text}</h3>
        <p style={{margin: 0}}>{textExtract}</p>
      </div>
    </Link>
  )
}
