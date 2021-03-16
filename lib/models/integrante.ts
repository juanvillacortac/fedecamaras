import { CMSType, ResponsiveImage } from './cms'

export interface OcupacionIntegrante {
  ocupacion?: string
}

export interface Integrante extends CMSType {
  nombre?: string
  cargo?: string
  imagenSm?: ResponsiveImage
  imagenLg?: ResponsiveImage
  ocupaciones?: OcupacionIntegrante[]
}
