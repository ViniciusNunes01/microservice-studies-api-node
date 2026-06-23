# Usa uma imagem oficial e leve do Node.js
FROM node:20-alpine

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de dependência primeiro (boa prática para usar cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da API
COPY . .

# Expõe a porta que definimos no index.js
EXPOSE 3000

# Inicia o microsserviço
CMD ["node", "index.js"]