import { SwaggerConfig } from './swagger.interface';

/**
 * Configuration for the swagger UI (found at /api).
 * Change this to suit your app!
 */
export const SWAGGER_CONFIG: SwaggerConfig = {
    title: 'Nest js Swagger Document',
    description: 'This Basic to Upper Nest Js Api Building',
    version: '1.0',
    tags: ["Base", 'Auth', 'Post',],
};