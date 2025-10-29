import express from "express";
import appConfig from "./src/config/app.config.js";
import { initializeDatabase } from "./src/repositories/postgres/database.connection.js";
import userRoutes from "./src/routes/user.route.js";
import processoRoutes from "./src/routes/processo.route.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ALLOWED_ORIGINS,
  })
);
app.use(express.json());
app.use("/user", userRoutes);
app.use("/processo", processoRoutes);

appConfig({ app });

const PORT = process.env.PORT || 3400;

initializeDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao iniciar a aplicação:", error);
    process.exit(1);
  });
