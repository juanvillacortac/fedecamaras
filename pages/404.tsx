import Page from '@/components/page'
import { getGlobalData } from '@/lib/datocms'
import Link from 'next/link'

const Page404 = (globalData: any) => (
  <Page title="404" globalData={globalData}>
    <div className="flex flex-col w-full py-32 text-center text-blue-800 font-title">
      <h1 className="font-bold text-8xl">404</h1>
      <Link href="/">
        <a className="mt-4 t-p hover:underline">Ir al inicio</a>
      </Link>
    </div>
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
