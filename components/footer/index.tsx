import Link from 'next/link'
import navs from '@/lib/navigation'
import styles from './footer.module.css'
import { Fragment } from 'react'
import {useGlobalDataContext} from '../page'

const MadeBy = () => (
  <div className={styles['madeBy']}>
    <p>Desarrollado por <strong>Marketing Shakers</strong></p>
  </div>
)

const Section = ({ titulo, childrens }: {
  titulo: string,
  childrens?: { titulo: string, href: string }[]
}) => (
  <div className={styles['el']}>
    <p>{titulo}</p>
    <div>
      {childrens.map((n, i) => (
        <Link href={n.href} key={i}>
          <a>{n.titulo}</a>
        </Link>
      ))}
    </div>
  </div>
)

const Isolated = () => {
  const data = useGlobalDataContext()
  const isolated = navs(data).filter(e => !e.childrens)
  return (
    <>{isolated.length && (
      <Section titulo="Menu" childrens={isolated as any[]}/>
    )}</>
  )
}

const Childrens = () => {
  const data = useGlobalDataContext()
  const childrens = navs(data).filter(e => e.childrens)
  return (
    <>{childrens.map((n, i) => (
      <Fragment key={i}>
        <Section {...n}/>
      </Fragment>
    ))}</>
  )
}

const Elements = () => (
  <div className={styles['elements']}>
    <Isolated/>
    <Childrens/>
  </div>
)

const Footer = () => (
  <footer className="py-12 content">
    <Elements/>
    <MadeBy/>
  </footer>
)

export default Footer
