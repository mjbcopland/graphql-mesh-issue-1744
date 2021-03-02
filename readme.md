This reproduction repo contains patches which change the internal behaviour of graphql-mesh surrounding the resolution of merged results(https://github.com/Urigo/graphql-mesh/issues/1744). The upstream diff of these changes can be seen in `resolve-return-data.diff`.

To run a patched instance, install dependencies and run both workspaces.

```
$ yarn install
$ yarn workspace service run start & yarn workspace mesh run start
```

To see existing behaviour, reverse the patches and restart the mesh.

```
$ yarn run patch-package --reverse
$ yarn workspace mesh run start
```
