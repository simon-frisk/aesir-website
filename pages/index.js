import SocialMediaLink from '../components/SocialMediaLink'

export default () => {
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/rocket.jpg)',
          backgroundSize: 'cover',
          color: 'white',
        }}
      >
        <div style={{ margin: 'auto', width: '90%', maxWidth: '600px' }}>
          <h1>
            <img src='/logo.png' style={{ width: '90%' }} />
          </h1>
          <p>
            A student driven rocket organisation at KTH, Stockholm, Sweden. We
            develop and build rockets and have the goal to break the european
            student altitude record.
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            display: 'flex',
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
      <div style={{ margin: '50px auto', maxWidth: '800px' }}>
        <h2>Our work</h2>
        <h3>Mjolnir</h3>
        <p>
          Sigmundr is our newest rocket project! It was named after Simon
          Westerlund who started this association and also donated his homemade
          engine to us. The goal of this project is to improve on what we
          learned from our previous rocket Odin and get one step closer on
          designing our own hybrid engine from scratch.
        </p>
      </div>
      <div>
        <h2>Meet our members</h2>
        <p>
          We have over 30 active members with a broad variety of roles ranging
          all the way from specific role in a project to handling the
          associations overall economy etc. Here below we introduce some of
          them!
        </p>
      </div>
      <div>
        <h2>Sponsors</h2>
      </div>
    </div>
  )
}
