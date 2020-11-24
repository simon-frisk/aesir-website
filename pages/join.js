import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import TextContainer from '../components/TextContainer'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

export default function Join(props) {
  return (
    <TextContainer>
      {RichText.render(props.recruitment.text)}
      {(props.recruitment.show_recruitment_form || process.env.NODE_ENV == 'development') && <JoinForm />}
    </TextContainer>
  )
}

Join.getInitialProps = async ctx => {
  const result = await Client(ctx.req).getSingle('recruitment')
  return {
    recruitment: result.data,
  }
}

const JoinForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
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
        placeholder='Email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <ReCAPTCHA
        sitekey='6LdNWtQZAAAAACfhJEFWMd3RF_oSHvlz2yiPQ6vS'
        onChange={() => setIsRecaptcha(true)}
      />
      <button type='submit'>Join Æsir!</button>
    </form>
  )
}
