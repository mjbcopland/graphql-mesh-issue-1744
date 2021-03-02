module.exports = {
  sources: [
    {
      name: "Source",
      handler: {
        grpc: {
          endpoint: "localhost:50051",
          packageName: "",
          protoFilePath: require.resolve("service/src/api.proto"),
          serviceName: "Service",
        },
      },
    },
  ],
  additionalTypeDefs: `
    extend type Query {
      getValue(input: InputInput = {}): Value
    }
  `,
  additionalResolvers: [
    {
      type: "Query",
      field: "getValue",
      targetSource: "Source",
      targetMethod: "getObject",
      returnData: "value",
      args: { "input.throw": "{args.input.throw}" },
    },
  ],
};
