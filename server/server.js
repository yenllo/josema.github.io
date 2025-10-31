import 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Conectar a la base de datos
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// --- Lógica para Producción ---

// Obtenemos la ruta del directorio actual de una forma robusta para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Comprueba si el entorno es producción
if (process.env.NODE_ENV === 'production') {
  // Sirve la carpeta 'public' (que contiene el build del cliente) como archivos estáticos
  app.use(express.static(path.join(__dirname, 'public')));

  // Para cualquier otra ruta que no sea de la API, sirve el index.html de React
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
  );
} else {
  // En desarrollo, solo muestra que la API está funcionando
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

// --- Fin de la Lógica para Producción ---


// Middlewares de error
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));