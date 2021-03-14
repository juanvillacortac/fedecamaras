export default function Navigation() {
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
