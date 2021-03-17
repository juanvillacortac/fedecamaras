import { NoticiaCardContainer, NoticiaCardContainerProps } from '@/components/noticias'

export interface NoticiasProps extends NoticiaCardContainerProps {
}

const Noticias = (props: NoticiasProps) => (
  <div className="py-16 content-lg">
    <NoticiaCardContainer {...props}/>
  </div>
)

export default Noticias
