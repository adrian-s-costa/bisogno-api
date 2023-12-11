## Rodando localmente
1. Clone o repositório
```bash
~$ git clone https://github.com/adrian-s-costa/bisogno-api.git
```
2. Dentro do diretório onde o repositório foi clonado, instale as dependências
```bash
~$ npm i
```
3. Crie um aquivo `.env` na raíz do projeto e o configure de acordo com suas particularidades seguindo o padrão do `.env.example` para os nomes das variáveis de ambiente <br/>
As chaves de API podem ser replicadas tranquilamente, foram expostas a fim de diminuir a complexidade de rodar o projeto <br/>
```bash
PORT=3001
MONGO_URI=mongodb+srv://biso:PpIdfYW8hg4FSXSP@biso.fzqz3ak.mongodb.net/?retryWrites=true&w=majority
MONGO_DB=Form
```
4. Execute o comando `npm run start`
```bash
~$ npm run start
```
