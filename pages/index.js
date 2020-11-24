import SocialMediaLink from '../components/SocialMediaLink'
import CounterAnimation from '../components/CounterAnimation'
import { Client } from '../prismic-config'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import TextContainer from '../components/TextContainer'

export default function Index(props) {
  return (
    <>
      <div id='hero'>
        <div id='center_div'>
          <img src='/logo.png' id='logo' />
          {RichText.render(props.home.data.title_text)}
          <div id='counters'>
            <CounterAnimation
              label='Launches'
              countTo={props.home.data.rockets_launched}
            />
            <CounterAnimation
              label='Static fires'
              countTo={props.home.data.static_fire_tests}
            />
          </div>
        </div>
          <div id='social_media_links'>
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
      <TextContainer lowTopMargin={true}>
          {RichText.render(props.home.data.content)}
          <Link href='/about'><button>Read more</button></Link>
      </TextContainer>
      
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
          max-width: 600px;
          width: 90%;
          text-align: center;
          animation-name: fadein;
          animation-duration: 6s;
          animation-fill-mode: both;
        }

        #hero {
          position: relative;
          height: 85vh;
          background-image: url(${props.home.data.hero_image.url});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        #logo {
          width: 50%;
        }

        #counters {
          display: flex;
          justify-content: space-around;
        }

        #social_media_links {
          display: flex;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      `}</style>
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
