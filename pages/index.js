import SocialMediaLink from '../components/SocialMediaLink'
import CounterAnimation from '../components/CounterAnimation'

export default () => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          backgroundImage: 'url(/rocket.jpg)',
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
          }}
        >
          <img src='/logo.png' style={{ width: '40%' }} />
          <p>
            Association of Engineering Students in Rocketry, by students from
            KTH, Stockholm.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <CounterAnimation label='Rockets launched' countTo={2} />
            <CounterAnimation label='Static fires' countTo={8} />
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
      <h2>Who are we?</h2>
      <p>Helljasjdkfahskdjfhak</p>
    </div>
  )
}
