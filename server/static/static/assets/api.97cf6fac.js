import{A as o}from"./Api.b0f465a3.js";const m={mongoList:o.create("/mongos","get"),saveMongo:o.create("/mongos","post"),deleteMongo:o.create("/mongos/{id}","delete"),databases:o.create("/mongos/{id}/databases","get"),collections:o.create("/mongos/{id}/collections","get"),runCommand:o.create("/mongos/{id}/run-command","post"),findCommand:o.create("/mongos/{id}/command/find","post"),updateByIdCommand:o.create("/mongos/{id}/command/update-by-id","post"),deleteByIdCommand:o.create("/mongos/{id}/command/delete-by-id","post"),insertCommand:o.create("/mongos/{id}/command/insert","post")};export{m};
