import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://aesir.cdn.prismic.io/api/v2'
export const accessToken =
  'MC5YM1FsMmhJQUFOT2l4ZWha.CWbvv71Y77-977-9Cu-_vTnvv71SAO-_vXMT77-9AO-_vWUCHO-_ve-_ve-_vUsJ77-977-9HB1rQw'

export const Client = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))

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
