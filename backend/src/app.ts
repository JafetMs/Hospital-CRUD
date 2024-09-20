import {  PrismaClient } from '@prisma/client';
import { envs } from './config/envs';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async()=> {
  main();
})();


async function main() {

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  const prisma = new PrismaClient();
  server.start();
}