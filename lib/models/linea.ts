import { ResponsiveImageType } from 'react-datocms'
import { CMSType } from './cms'

export interface BulletLineaEstrategica {
  bullet?: string
}

export interface LineaEstrategica extends CMSType {
  titulo?: string
  slug?: string
  icon?: string
  imagen?: {
    responsiveImage?: ResponsiveImageType
  }
  descripcion?: BulletLineaEstrategica[]
}
