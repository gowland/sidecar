FROM node:18-alpine

# OCI Image Labels - these describe the image itself
LABEL org.opencontainers.image.title="File Getter Service"
LABEL org.opencontainers.image.description="A sidecar service that fetches and manages files for the distributed system."
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.authors="Me <me.email@example.com>"
LABEL org.opencontainers.image.source="https://github.com/gowland/sidecar"
LABEL org.opencontainers.image.documentation="https://github.com/gowland/sidecar/blob/main/README.md"
LABEL org.opencontainers.image.licenses="MIT"

# Build-time labels (set via build args)
ARG BUILD_DATE
ARG GIT_COMMIT
LABEL org.opencontainers.image.created="${BUILD_DATE}"
LABEL org.opencontainers.image.revision="${GIT_COMMIT}"

# Application setup
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "server.js"]
