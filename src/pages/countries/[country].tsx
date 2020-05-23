import { GetServerSideProps } from 'next'
import { internalAPI } from '@utils/constant'

const Country = ({ data }) => {
  return <div>{JSON.stringify(data, null, 2)}</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  console.log(req)

  if (!req) {
    return { props: {} }
  }

  const { data } = await internalAPI.get(`/countries/${query.country}`)

  return { props: { data } }
}

export default Country
