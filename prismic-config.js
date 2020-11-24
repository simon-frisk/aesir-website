import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://aesir.cdn.prismic.io/api/v2'

export const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, process.env.NEXT_PUBLIC_PRISMIC_API_KEY))

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}
