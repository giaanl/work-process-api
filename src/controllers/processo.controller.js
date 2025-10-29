import * as processoRepository from "../repositories/processo.repository.js";

async function getProcess(req, res) {
  try {
    const processos = await processoRepository.findAllProcessos();
    res.status(200).json(processos);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar processos", error: error.message });
  }
}

async function createProcess({ body }, res) {
  const { numero, reclamante, reclamada, status } = body;
  try {
    const processoSalvo = await processoRepository.createProcesso({
      numero,
      reclamante,
      reclamada,
      status,
    });
    res.status(201).json(processoSalvo);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao criar processo", error: error.message });
  }
}

async function updateProcess({ body }, res) {
  const { id, numero, reclamante, reclamada, status } = body;

  try {
    const processoAtualizado = await processoRepository.updateProcesso({
      id,
      numero,
      reclamante,
      reclamada,
      status,
    });
    if (!processoAtualizado) {
      return res.status(404).json({ message: "Processo não encontrado" });
    }
    res.status(200).json(processoAtualizado);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erro ao atualizar processo", error: error.message });
  }
}

async function deleteProcess({ body }, res) {
  try {
    if (!body || !body.id) {
      return res.status(400).json({ message: "ID do processo é obrigatório" });
    }

    const processoDeletado = await processoRepository.deleteProcesso(body.id);
    if (!processoDeletado) {
      return res.status(404).json({ message: "Processo não encontrado" });
    }
    res.status(200).json({ message: "Processo deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao deletar processo", error: error.message });
  }
}

export default {
  getProcess,
  createProcess,
  updateProcess,
  deleteProcess,
};
