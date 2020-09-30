import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import Prismic from 'prismic-javascript'

export default function Projects(props) {
  return (
    <div>
      {props.projects.map(project => (
        <Project project={project} />
      ))}
    </div>
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

const Project = ({ project }) => (
  <div>
    {RichText.render(project.name)}
    {RichText.render(project.about)}
  </div>
)
