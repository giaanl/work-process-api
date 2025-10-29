import AppDataSource from "./postgres/database.connection.js";

export const findUserByEmail = async (email) => {
  const userRepository = AppDataSource.getRepository("User");
  const user = await userRepository.findOne({ where: { email } });
  return user;
};

export const createUser = async ({ email, name, password }) => {
  try {
    const userRepository = AppDataSource.getRepository("User");

    const newUser = userRepository.create({
      email,
      name,
      password,
    });

    const savedUser = await userRepository.save(newUser);

    const { password: _, ...userWithoutPassword } = savedUser;
    return userWithoutPassword;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw new Error("Erro ao registrar usuário no banco de dados");
  }
};
