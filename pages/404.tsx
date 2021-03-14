import Page from '@/components/page'
import Link from 'next/link'

const Page404 = () => (
  <Page title="404">
    <div className="flex flex-col w-full py-32 text-center text-blue-800 font-title">
      <h1 className="font-bold text-8xl">404</h1>
      <Link href="/">
        <a className="mt-4 t-p hover:underline">Ir al inicio</a>
      </Link>
    </div>
  </Page>
)

export async function getStaticProps() {
  return {
    props: {
    }
  }
}

export default Page404
