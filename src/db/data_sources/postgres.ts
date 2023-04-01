import { DataSource } from "typeorm";
import cfg from "../../../config.json" assert {type:"json"}

const PostgresDataSource = new DataSource({
    type: "postgres",
    url: cfg.postgres_connection_string
})

export default PostgresDataSource