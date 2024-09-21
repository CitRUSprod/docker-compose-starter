# Docker Compose Starter

### Get started

> **NOTE:** Before using this template, you need to install `pnpm` (only for development), `docker` and `docker compose`.

Create a new project based on this template using `degit`:

```sh
pnpx degit CitRUSprod/docker-compose-starter my-app
cd my-app
pnpm i
```

The launch is done through `docker compose`, but with scripts `scripts/dev` and `scripts/prod`:

```sh
scripts/dev [docker compose command]
scripts/prod [docker compose command]
```

Run the project by entering these commands and open http://localhost:6600 in your browser:

```sh
# Development
scripts/dev up -d
pnpm dev # or "cd apps/[app]" and "pnpm dev"

# Production
scripts/start
```

### Example of development mode commands

```sh
scripts/dev up -d # Start
scripts/dev down # Stop
scripts/dev logs [app] # View app logs
scripts/dev exec [app] sh # Enter the app container
scripts/dev [docker compose command] # Any docker compose command
```

### Example of production mode commands

```sh
scripts/prod up -d # Start
scripts/prod down # Stop
scripts/prod logs [app] # View app logs
scripts/prod exec [app] sh # Enter the app container
scripts/prod [docker compose command] # Any docker compose command

# or shortcuts

scripts/start # Start
scripts/stop # Stop
scripts/restart # Restart
```

### Tools

Commit with `commitizen`:

```sh
pnpm commit
```

Check types with `tsc`:

```sh
pnpm check-types
```

Lint with linters:

```sh
pnpm lint
```

Format with formatters:

```sh
pnpm format
```

### Environment variables

All environment variables are written to the `.env` file. If it doesn't exist, just enter this command:

```sh
scripts/clone-env
```
