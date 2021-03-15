import { ResponsiveImageType } from 'react-datocms'
import { CMSType, Color } from './cms'

export interface DealerCategory extends CMSType {
  name?: string
  slug?: string
}

export interface ModuloCamara extends CMSType {
  titulo?: string
  icon?: string
  texto?: string
}

export interface Camara extends CMSType {
  nombre?: string
  slug?: string
  bgColor?: Color
  fgColor?: Color
  imagen?: {
    responsiveImage?: ResponsiveImageType
  }
  modulos?: ModuloCamara[]
}
