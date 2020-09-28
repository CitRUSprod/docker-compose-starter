# Docker Compose Template

### Get started

Create a new project based on this template using degit:

```sh
npx degit CitRUSprod/docker-compose-template my-app
cd my-app
```

The launch is done through docker-compose, but via scripts `scripts/dev` and `scripts/prod`:

```sh
sh scripts/dev [docker-compose command]
sh scripts/prod [docker-compose command]
```

Run the project just enter this command and open http://localhost:6600 in your browser:

```sh
sh scripts/prod up -d
```

### Development mode

```sh
sh scripts/dev up -d # Start
sh scripts/dev down # Stop
sh scripts/dev logs [service] # View service logs
sh scripts/dev exec [service] sh # Enter the service container
sh scripts/dev [docker-compose command] # Any docker-compose command
```

### Production mode

```sh
sh scripts/prod up -d # Start
sh scripts/prod down # Stop
sh scripts/prod logs [service] # View service logs
sh scripts/prod exec [service] sh # Enter the service container
sh scripts/prod [docker-compose command] # Any docker-compose command
```

### Settings

All settings for docker-compose are written to a `.env` file.
