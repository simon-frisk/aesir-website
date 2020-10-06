import SocialMediaLink from '../components/SocialMediaLink'
import CounterAnimation from '../components/CounterAnimation'
import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import TextContainer from '../components/TextContainer'

export default function Index(props) {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          backgroundImage: `url(${props.home.data.hero_image.url})`,
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            padding: '10vh auto',
            maxWidth: '500px',
            width: '90%',
          }}
        >
          <img src='/logo.png' style={{ width: '50%' }} />
          {RichText.render(props.home.data.title_text)}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CounterAnimation
              label='Rockets launched'
              countTo={props.home.data.rockets_launched}
            />
            <CounterAnimation
              label='Static fires'
              countTo={props.home.data.static_fire_tests}
            />
          </div>
          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: 0,
              left: 0,
            }}
          >
            <SocialMediaLink
              text='@aesirkth'
              href='https://www.instagram.com/aesirkth'
              image='/instagram.png'
            />
            <SocialMediaLink
              text='@aesirkth'
              image='/facebook.png'
              href='https://www.facebook.com/aesirkth/'
            />
            <SocialMediaLink
              text='Aesir'
              href='https://www.youtube.com/channel/UC9lQIzjSvOyuEHL602m6OQQ'
              image='/youtube.png'
            />
          </div>
        </div>
      </div>
      <TextContainer>{RichText.render(props.home.data.content)}</TextContainer>
    </div>
  )
}

Index.getInitialProps = async context => {
  const req = context.req
  const home = await Client(req).getSingle('home')
  return {
    home,
  }
}
