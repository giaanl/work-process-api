import AppDataSource from "./postgres/database.connection.js";

export const findAllProcessos = async () => {
  try {
    const processoRepository = AppDataSource.getRepository("Processo");
    const processos = await processoRepository.find();
    return processos;
  } catch (error) {
    console.error("Erro ao buscar processos:", error);
    throw new Error("Erro ao buscar processos no banco de dados");
  }
};

export const findProcessoById = async (id) => {
  try {
    const processoRepository = AppDataSource.getRepository("Processo");
    const processo = await processoRepository.findOne({ where: { id } });
    return processo;
  } catch (error) {
    console.error("Erro ao buscar processo:", error);
    throw new Error("Erro ao buscar processo no banco de dados");
  }
};

export const createProcesso = async (processoData) => {
  try {
    const processoRepository = AppDataSource.getRepository("Processo");
    const newProcesso = processoRepository.create(processoData);
    const savedProcesso = await processoRepository.save(newProcesso);
    return savedProcesso;
  } catch (error) {
    console.error("Erro ao criar processo:", error);
    throw new Error("Erro ao registrar processo no banco de dados");
  }
};

export const updateProcesso = async ({
  id,
  numero,
  reclamante,
  reclamada,
  status,
}) => {
  try {
    const processoRepository = AppDataSource.getRepository("Processo");
    await processoRepository.update(id, {
      numero,
      reclamante,
      reclamada,
      status,
    });
    const updatedProcesso = await processoRepository.findOne({ where: { id } });
    return updatedProcesso;
  } catch (error) {
    console.error("Erro ao atualizar processo:", error);
    throw new Error("Erro ao atualizar processo no banco de dados");
  }
};

export const deleteProcesso = async (id) => {
  try {
    const processoRepository = AppDataSource.getRepository("Processo");
    const processo = await processoRepository.findOne({ where: { id } });
    if (processo) {
      await processoRepository.remove(processo);
      return processo;
    }
    return null;
  } catch (error) {
    console.error("Erro ao deletar processo:", error);
    throw new Error("Erro ao deletar processo no banco de dados");
  }
};
