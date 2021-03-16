import { CMSType, ResponsiveImage } from './cms'

export interface BulletLineaEstrategica {
  bullet?: string
}

export interface LineaEstrategica extends CMSType {
  titulo?: string
  slug?: string
  icon?: string
  imagen?: ResponsiveImage
  descripcion?: BulletLineaEstrategica[]
}
