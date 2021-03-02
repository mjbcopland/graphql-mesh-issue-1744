const grpc = require("@grpc/grpc-js");
const loader = require("@grpc/proto-loader");

const packageDef = loader.loadSync(require.resolve("./api.proto"));
const client = grpc.loadPackageDefinition(packageDef);

const getObject = (call, callback) => {
  const error = call.request.throw ? new Error("test") : null;
  return callback(error, { value: 0 });
};

const creds = grpc.ServerCredentials.createInsecure();
const server = new grpc.Server();

server.addService(client.Service.service, { getObject });
server.bindAsync("localhost:50051", creds, () => server.start());
