import { useState } from 'react'
import TextContainer from '../components/TextContainer'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <TextContainer>
      <h1>Contact</h1>
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
