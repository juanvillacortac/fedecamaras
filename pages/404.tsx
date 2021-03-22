import Page from '@/components/page'
import { getGlobalData } from '@/lib/datocms'
import Link from 'next/link'

const Page404 = (globalData: any) => (
  <Page title="404" globalData={globalData}>
  </Page>
)

export async function getStaticProps() {
  const { lineas, camaras } = await getGlobalData()
  return {
    props: {
      camaras,
      lineas,
    }
  }
}

export default Page404
