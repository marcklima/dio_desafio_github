import { create } from "domain";
import * as http from "http";

const server = http.createServer();
server.listen(300, () => { console.log("server on line, porta 300")}
);  