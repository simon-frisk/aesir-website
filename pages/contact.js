import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import { useState } from 'react'
import TextContainer from '../components/TextContainer'

export default function Contact(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <TextContainer>
      {RichText.render(props.contact.text)}
      <form>
        <input
          type='text'
          placeholder='Full name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea placeholder='Message' />
        <button type='submit'>Send message</button>
      </form>
    </TextContainer>
  )
}

Contact.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('contact')
  return {
    contact: result.data,
  }
}
