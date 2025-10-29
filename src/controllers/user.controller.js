import {
  createUser,
  findUserByEmail,
} from "../repositories/user.repository.js";
import { generateToken } from "../config/jwt.js";
import bcrypt from "bcrypt";

async function userRegister({ body }, res) {
  const { email, name, password } = body;

  try {
    const verifyUser = await findUserByEmail(email);

    if (verifyUser) {
      return res.status(400).json({
        error: "Usuário já existe",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        error: "Senha inválida",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser({ email, name, password: hashedPassword });

    return res.status(201).json({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    return res.status(500).json({
      error: "Erro interno do servidor",
    });
  }
}

async function authenticate({ body }, res) {
  const { email, password } = body;

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        error: "Usuário não encontrado",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({
        error: "Senha inválida",
      });
    }

    const token = generateToken({ id: user.id });

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      access_token: token,
    });
  } catch (error) {
    console.log("Erro ao realizar login", error);
    return res.status(500).json({
      error: "Erro ao realizar login",
    });
  }
}

export default {
  userRegister,
  authenticate,
};
