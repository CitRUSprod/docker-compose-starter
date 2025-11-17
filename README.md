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
scripts/dev <docker compose command>
scripts/prod <docker compose command>
```

Run the project by entering these commands and open http://localhost:6600 in your browser:

```sh
# Development
scripts/dev up -d
pnpm dev # or "cd apps/<app>" and "pnpm dev"

# Production
scripts/start
```

### Example of development mode commands

```sh
scripts/dev up -d # Start
scripts/dev down # Stop
scripts/dev logs <app> # View app logs
scripts/dev exec <app> sh # Enter the app container
scripts/dev <docker compose command> # Any docker compose command
```

### Example of production mode commands

```sh
scripts/prod up -d # Start
scripts/prod down # Stop
scripts/prod logs <app> # View app logs
scripts/prod exec <app> sh # Enter the app container
scripts/prod <docker compose command> # Any docker compose command

# or shortcuts

scripts/start # Start
scripts/stop # Stop
scripts/restart # Restart
```

### First run

##### Development mode

1. Enter this command and edit the `.env` file:

```sh
scripts/clone-env
```

2. Start required docker containers for development:

```sh
scripts/dev up -d
```

3. Install project dependencies:

```sh
pnpm i
```

4. Build packages:

```sh
pnpm build
```

5. Start web and api in development mode:

```sh
pnpm dev
```

##### Production mode

1. Enter this command and edit the `.env` file:

```sh
scripts/clone-env
```

2. Start required docker containers for production:

```sh
scripts/start
```

After completing all steps, the application will be available at `http://localhost:<WEBSITE_PORT>` (default is http://localhost:6600).

### Project Structure

- `apps` - Applications
- `packages` - Local libraries
- `configs` - Configuration files (docker, nginx, etc.)
- `scripts` - Project management scripts (start, stop, restart, etc.)
- `storage` - Storage directory for backups and other data that should not be in the repository

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
