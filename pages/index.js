import SocialMediaLink from '../components/SocialMediaLink'
import CounterAnimation from '../components/CounterAnimation'
import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import TextContainer from '../components/TextContainer'

export default function Index(props) {
  return (
    <>
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
        <div id='center_div'>
          <style jsx>{`
            @keyframes fadein {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            #center_div {
              padding: 10vh auto;
              max-width: 500px;
              width: 90%;
              animation-name: fadein;
              animation-duration: 6s;
              animation-fill-mode: both;
            }
          `}</style>
          <img src='/logo.png' style={{ width: '60%' }} />
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
      <TextContainer lowTopMargin={true}>{RichText.render(props.home.data.content)}</TextContainer>
    </>
  )
}

Index.getInitialProps = async context => {
  const req = context.req
  const home = await Client(req).getSingle('home')
  return {
    home,
  }
}
