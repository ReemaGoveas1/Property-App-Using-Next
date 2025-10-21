export {default} from 'next-auth/middleware';

export const config = { matcher: ['/api/properties/add', '/profile', '/properties/saved', '/messages'] };