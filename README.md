# Sidecar pattern
Toy web server with sidecar.

## Usage

### Run

- `docker-compose build`
- `docker-compose up`

### Services

- http://localhost:3000/ to see current output of main service
- http://localhost:3001/health to see memory usage

## Architecture

```
┌─────────────┐    ┌──────────────┐    ┌──────────┐
│file-getter  │    │health-check  │    │main-app  │
│(writes data)│    │(system stats)│    │(serves)  │
└─────────────┘    └──────────────┘    └──────────┘
       │                                     │
       └─────────────────────────────────────┘
                       │
               shared-volume
```