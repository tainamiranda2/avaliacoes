# Avaliação Front-end com React

Front-end utilizando a biblioteca react para a aplicação de avaliação.

## Dependências

* Repositório [Nginx Proxy + Let's Encrypt](https://github.com/giovannialo/nginx-proxy-letsencrypt).


#### Observação

É necessário realizar os procedimentos de instalação do repositório acima antes de iniciar o processo de instalação abaixo.

## Instalação

Siga as etapas abaixo para um correto funcionamento do sistema.

### Container: Variáveis de ambiente

Na pasta raiz crie um arquivo chamado **.env**, copie e cole o bloco de código abaixo e configure as variáveis.

```dotenv
# ### ### ### ### ### ### ### ### ### ###
# Node
# ### ### ### ### ### ### ### ### ### ###

# Versão recomendada >= 16
NODE_VERSION=16

# ### ### ### ### ### ### ### ### ### ###
# Aplicação
# ### ### ### ### ### ### ### ### ### ###

# Pasta onde encontra-se a aplicação
APP_DIR=./app

# ### ### ### ### ### ### ### ### ### ###
# Servidor
# ### ### ### ### ### ### ### ### ### ###

# Nginx
VIRTUAL_HOST=
VIRTUAL_PORT=80

# Certificação SSL
LETSENCRYPT_EMAIL=email@exemplo.com
```

### Container

Execute o comando abaixo para criar e iniciar o container.

```docker
docker-compose up -d
```

