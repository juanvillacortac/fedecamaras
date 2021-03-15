export default function Navigation(data) {
  return [
    {
      titulo: 'Menú',
      childrens: [
        {
          titulo: 'Inicio',
          href: '/',
        },
        {
          titulo: 'Galería',
          href: '/galeria',
        },
        {
          titulo: 'Noticias',
          href: '/noticias',
        },
      ]
    },
    {
      titulo: 'Líneas estratégicas',
      childrens: data.lineas?.map((c) => ({
        titulo: c.titulo,
        href: `/#${c.slug}`,
      }))
    },
    {
      titulo: 'Propuestas sectoriales',
      childrens: data.camaras?.map((c) => ({
        titulo: c.nombre,
        href: `/#${c.slug}`,
      }))
    },
    {
      titulo: 'Equipo de trabajo',
      childrens: [
        {
          titulo: 'Miembros',
          href: '/#equipo',
        },
        {
          titulo: 'Experiencia gremial',
          href: '/#experiencia-gremial',
        },
      ],
    },
  ]
}
