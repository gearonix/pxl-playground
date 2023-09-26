## server

## Run project

```shell
# pnpx prisma generate
pnpm run generate --filter=server

pnpm run dev --filter=server
```

## Build project

This will create a `dist` archive and and add the 
necessary files for deployment to virtual hosting, see also [scripts](./scripts)
```shell
pnpm run build
```


## Update prisma
This will make `prisma migrate` and generate typescript interfaces for development

```shell
pnpm run prisma
```