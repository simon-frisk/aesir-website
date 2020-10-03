import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import TextContainer from '../components/TextContainer'
import { useState } from 'react'

export default function Join(props) {
  return (
    <TextContainer>
      {RichText.render(props.join.text)}
      {props.join.currently_recruiting && <JoinForm />}
    </TextContainer>
  )
}

Join.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('join')
  return {
    join: result.data,
  }
}

const JoinForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    console.log(name, email)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Full name'
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button>Join Aesir!</button>
    </form>
  )
}
