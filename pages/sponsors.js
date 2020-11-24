import { Client } from '../prismic-config'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import Link from 'next/link'
import TextContainer from '../components/TextContainer'

export default function Sponsors(props) {
  console.log(props.sponsors)
  return <TextContainer>
    {RichText.render(props.sponsorPage.text)}
    <Link href='/contact'><button>Contact us</button></Link>
    
    <div id='sponsorslider'>
      {props.sponsors.map(sponsor =>
        <div key={sponsor.name[0].text} id='sponsorcard'>
          <img src={sponsor.logo.url} alt={sponsor.logo.alt} />
          <h3>{sponsor.name[0].text}</h3>
          {RichText.render(sponsor.about)}
        </div>
      )}
    </div>
    <style jsx>{`
      #sponsorslider {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
      }
      #sponsorcard {
        box-shadow: 0 0 5px 0 #333;
        border-radius: 12px;
        overflow: hidden;
        margin-top: 12px;
        margin-right: 15px;
        padding: 10px;
        max-width: 250px;
      }
      #sponsorcard > img {
        height: 60px;
      }
    `}</style>
  </TextContainer>
}

Sponsors.getInitialProps = async ctx => {
  const pageResult = await Client(ctx.req).getSingle('sponsors')
  const sponsorsResult = await Client(ctx.req).query(
    Prismic.Predicates.at('document.type', 'sponsor')
  )
  
  return {
    sponsorPage: pageResult.data,
    sponsors: sponsorsResult.results.map(result => result.data)
  }
}
