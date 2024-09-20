import { Router } from 'express';
import { PatientRoutes } from './patients/routes';
import cors from 'cors';  // Importación correcta de cors

export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
    // Configurar CORS
    router.use(cors({
      origin: 'http://localhost:5173' // Aquí especificas el origen permitido (frontend)
    }));

    // Definir las rutas
    router.use('/patients', PatientRoutes.routes);

    return router;
  }
}
