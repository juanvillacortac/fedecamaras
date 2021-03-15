export default function Navigation(data) {
  return [
    {
      titulo: 'Inicio',
      href: '/',
    },
    {
      titulo: 'Equipo',
      href: '/#equipo',
    },
    {
      titulo: 'Líneas estratégicas',
      childrens: data.lineas?.map((c) => ({
        titulo: c.titulo,
        href: `/#${c.slug}`,
      }))
    },
    {
      titulo: 'Camaras sectoriales',
      childrens: data.camaras?.map((c) => ({
        titulo: c.nombre,
        href: `/#${c.slug}`,
      }))
    },
    {
      titulo: 'Comunidad',
      childrens: [
        {
          titulo: 'Galería',
          href: '/galeria',
        },
      ],
    },
  ]
}
