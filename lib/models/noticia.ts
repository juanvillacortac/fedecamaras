import { StructuredTextGraphQlResponse } from 'react-datocms'
import { CMSType, ResponsiveImage } from './cms'

export interface Noticia extends CMSType {
  titulo?: string
  slug?: string
  descripcion?: string
  thumbnail?: ResponsiveImage
  cuerpo?: StructuredTextGraphQlResponse
}
