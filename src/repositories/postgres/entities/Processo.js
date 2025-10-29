import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "Processo",
  tableName: "processo",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    numero: {
      type: "varchar",
      length: 100,
    },
    reclamante: {
      type: "varchar",
      length: 100,
    },
    reclamada: {
      type: "varchar",
      length: 100,
    },
    status: {
      type: "enum",
      enum: ["em_andamento", "acordo_realizado", "encerrado"],
    },
    dataAbertura: {
      type: "timestamp",
      createDate: true,
      name: "data_abertura",
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
      name: "updated_at",
    },
  },
});
