import { GetServerSideProps } from 'next'
import { internalAPI } from '@utils/constant'

const Country = ({ data }) => {
  console.log(data)

  return <div>Hello</div>
}

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
  if (!req) {
    return { props: {} }
  }

  const { data } = await internalAPI.get(`/countries/${query.country}`)

  return { props: { data } }
}

export default Country
