import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import { useRef, useState } from 'react'
import TextContainer from '../components/TextContainer'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

export default function Contact(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isRecaptcha, setIsRecaptcha] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const textfield = useRef()

  async function submit(e) {
    e.preventDefault()
    setSuccessMessage('')
    setLoading(true)
    const message = textfield.current.innerText
    if(!name || !name.length > 2) {
      setError('Invalid name')
      setLoading(false)
      return
    }
    if(!email || !emailRegex.test(email)) {
      setError('Invalid email')
      setLoading(false)
      return
    }
    if(!message) {
      setError('Empty message')
      setLoading(false)
      return
    }
    if(!isRecaptcha) {
      setError('Recaptcha not confirmed')
      setLoading(false)
      return
    }
    setError('')
    
    try {
      await axios.post('/api/mail', {name, email, message})
      setSuccessMessage('Message sent')
    } catch(error) {
      setError('Failed to send message')
    }
    setLoading(false)
  }

  return (
    <TextContainer>
      {RichText.render(props.contact.text)}
      <form onSubmit={submit}>
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
        <div contentEditable placeholder='Message' ref={textfield} />
        <ReCAPTCHA
          sitekey='6LdNWtQZAAAAACfhJEFWMd3RF_oSHvlz2yiPQ6vS'
          onChange={() => setIsRecaptcha(true)}
        />
        <p style={{color: 'red'}}>{error}</p>
        <p style={{color: '#36a93f'}}>{successMessage}</p>
        <button type='submit' disabled={loading}>Send message</button>
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

const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
