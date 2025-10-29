import { Router } from "express";
import BaseError from "../errors/BaseError.js";
import userController from "../controllers/user.controller.js";

const app = Router({ mergeParams: true });

app.post("/register", async (req, res) => {
  try {
    await userController.userRegister(req, res);
  } catch (error) {
    if (error instanceof BaseError) {
      return res.status(error.status_code).send(error.message);
    }

    return res.status(500).send("Internal server error");
  }
});

app.post("/login", async (req, res) => {
    try {
        await userController.authenticate(req,res);
    } catch (error) {
        if (error instanceof BaseError) {
            return res.status(error.status_code).send(error.message);
        }

        return res.status(500).send("Internal server error")
    }
})

export default app;
