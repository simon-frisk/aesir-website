import { Client } from '../prismic-config'
import Prismic from 'prismic-javascript'
import TextContainer from '../components/TextContainer'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Projects(props) {
  const activeProjects = props.projects.filter(project => project.active)
  const notActiveProjects = props.projects.filter(project => !project.active)

  return (
    <TextContainer>
      <h2>Current projects</h2>
      {activeProjects.map(project => (
        <Project project={project} key={project.name} />
      ))}
      <h2>Past projects</h2>
      {notActiveProjects.map(project => (
        <Project project={project} key={project.name} />
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

  const textExtract = project.about[0].text.slice(0, 150).split(' ').slice(0, -1).join(' ').concat(' ...')
  
  return (
    <Link href={`/projects/${project.name[0].text}`}>
      <div id='container'>
        {project.thumbnail.url && <img src={project.thumbnail.url} />}
        <div>
          <h3>{project.name[0].text}</h3>
          <p>{textExtract}</p>
        </div>
        <style jsx>{`
          #container {
            box-shadow: 0 0 5px 0 #333;
            border-radius: 12px;
            padding: 17px;
            margin-top: 15px;
            cursor: pointer;
            transition: transform .2s;
            display: flex;
          }

          #container:hover {
            transform: scale(1.05);
          }

          #container:active {
            transform: scale(1.02);
          }

          #container > img {
            width: 150px;
            object-fit: cover;
          }

          #container > div {
            margin: 5px;
          }
          
          @media (max-width: 700px) {
            #container > img {
              width: 100%;
            }
            #container {
              display: block;
            }
          }
        `}</style>
      </div>
    </Link>
  )
}
