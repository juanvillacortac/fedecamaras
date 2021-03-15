import { ResponsiveImageType } from 'react-datocms'
import { CMSType } from './cms'

export interface OcupacionIntegrante {
  ocupacion?: string
}

export interface Integrante extends CMSType {
  nombre?: string
  cargo?: string
  imagenSm?: {
    responsiveImage?: ResponsiveImageType
  }
  imagenLg?: {
    responsiveImage?: ResponsiveImageType
  }
  ocupaciones?: OcupacionIntegrante[]
}
