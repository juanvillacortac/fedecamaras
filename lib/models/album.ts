import { CMSType, ResponsiveImage } from './cms'

export interface Album extends CMSType {
  titulo?: string
  slug?: string
  imagenes?: ResponsiveImage[]
}
