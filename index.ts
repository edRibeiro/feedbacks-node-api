import "dotenv/config";
import setupApp from "./src/app";

const port = process.env.PORT || 3001;

setupApp()
  .then((app) => {
    app.listen(port, () =>
      console.log(`🚀 Server ready at http://localhost:${port}`)
    );
  })
  .catch((err: Error) => {
    console.log(err);
    process.exit(1);
  });
