import express from "express";

import tasks from "./src/controllers/tasks.js";

const routes = express.Router();

routes.get("/tasks", tasks.findAll);
routes.post("/tasks", tasks.postTask);
routes.get("/tasks/:id", tasks.getTask);
routes.put("/tasks/:id", tasks.putTask);
routes.delete("/tasks/:id", tasks.deleteTask);

export { routes as default };