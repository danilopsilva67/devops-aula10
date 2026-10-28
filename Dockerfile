# Utiliza imagem oficial e minimalista em Alpine Linux
FROM node:20-alpine

WORKDIR /app

# Copia primeiro apenas os manifestos de dependência (Otimização de Cache)
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm ci --only=production

# Copia o código-fonte restante por último
COPY . .

EXPOSE 8080

USER node

CMD ["node", "server.js"]
