import Routes from 'next-routes-extended'

const routes = new Routes()
.add('index', '/')
.add('about', '/about')
.add('blog', '/blog/:slug')

export default routes
export const { Link, Router } = routes