import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import { useState } from 'react'
import TextContainer from '../components/TextContainer'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Contact(props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isRecaptcha, setIsRecaptcha] = useState(false)
  const [error, setError] = useState('')

  function submit(e) {
    e.preventDefault()
    if(!name) {
      setError('Invalid name')
      return
    }
    if(!email) {
      setError('Invalid email')
      return
    }
    if(!message) {
      setError('Empty message')
      return
    }
    if(!isRecaptcha) {
      setError('Recaptcha not confirmed')
      return
    }
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
        <textarea placeholder='Message' />
        <ReCAPTCHA
          sitekey='6LdNWtQZAAAAACfhJEFWMd3RF_oSHvlz2yiPQ6vS'
          onChange={() => setIsRecaptcha(true)}
        />
        <p style={{color: 'red'}}>{error}</p>
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
