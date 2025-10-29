import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    name: {
      type: "varchar",
      length: 100,
      nullable: false,
    },
    email: {
      type: "varchar",
      length: 100,
      nullable: false,
      unique: true,
    },
    password: {
      type: "varchar",
      nullable: false,
    },
    createdAt: {
      type: "timestamp",
      createDate: true,
      name: "created_at",
    },
    updatedAt: {
      type: "timestamp",
      updateDate: true,
      name: "updated_at",
    },
  },
});
