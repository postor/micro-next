import { micrize } from 'micrize'

export const services = micrize({
  greeter: () => import('./greeter'),
  server: () => import('./server')
})