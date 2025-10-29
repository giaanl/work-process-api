import { Router } from "express";
import BaseError from "../errors/BaseError.js";
import processoController from "../controllers/processo.controller.js";

const router = Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    await processoController.getProcess(req, res);
  } catch (error) {
    if (error instanceof BaseError) {
      return res.status(error.status_code).send(error.message);
    }

    return res.status(500).send("Internal server error");
  }
});

router.post("/", async (req, res) => {
  try {
    await processoController.createProcess(req, res);
  } catch (error) {
    if (error instanceof BaseError) {
      return res.status(error.status_code).send(error.message);
    }

    return res.status(500).send("Internal server error");
  }
});

router.put("/", async (req, res) => {
  try {
    await processoController.updateProcess(req, res);
  } catch (error) {
    if (error instanceof BaseError) {
      return res.status(error.status_code).send(error.message);
    }

    return res.status(500).send("Internal server error");
  }
});

router.delete("/", async (req, res) => {
  try {
    await processoController.deleteProcess(req, res);
  } catch (error) {
    if (error instanceof BaseError) {
      return res.status(error.status_code).send(error.message);
    }

    return res.status(500).send("Internal server error");
  }
});

export default router;
