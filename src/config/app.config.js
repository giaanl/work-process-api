import env from './enviroment.config.js';

function app({ app }) {
    const port = env.PORT || 3400;
    const appName = "Work";

    app.listen(port, () => {
        console.log(`${appName} está rodando na porta ${port}`);
    });
}

export default app;
