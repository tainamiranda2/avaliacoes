# Define os argumentos
ARG NODE_VERSION=${NODE_VERSION}

# Define a imagem
FROM node:${NODE_VERSION}-alpine

# Define a pasta de trabalho
WORKDIR /var/www/html

# Atualiza o NPM
RUN npm install --location=global npm@latest

# Copia o arquivo 'package.json' e 'package-lock.json' (se disponível)
ADD app/package.json .

# Instala as dependências
RUN npm i --silent

# Copia os arquivos
ADD app .

# Define a permissão da pasta node_modules para resolver o problema de instalação de pacotes no linux
RUN chmod 777 node_modules

# Exibe a porta 80
EXPOSE 80

# Inicia a aplicação em desenvolvimento (com live-reload)
CMD npm run dev