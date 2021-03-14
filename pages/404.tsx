import Page from '@/components/page'

const Page404 = () => (
  <Page title="404"/>
)

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default Page404
