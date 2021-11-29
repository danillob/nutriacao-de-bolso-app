# Ações de Nutrição - PDS - API

[![Build Status](https://img.shields.io/travis/cakephp/app/master.svg?style=flat-square)](https://travis-ci.org/cakephp/app)


## Pré-requisitos

#### Obrigatório
Antes de iniciar, certifique-se de cumprir os seguintes requisitos:
<!--- Estes são alguns exemplos de requisitos. Adicione, duplique e remove como necessário --->
* Você deve possuir o docker instalado na sua máquina. (``` https://docs.docker.com/get-docker/ ```)
* Todos o desenvolvovimento foi feito em ambiente unix, aconselhamos fortemente continuar no mesmo sistema operacional.
#### Opcional
* Você pode baixar o Insomnia para testar as rotas. (``` https://insomnia.rest/ ```)


## Implantação
  1. Clone o projeto.
  2. Na raiz do projeto, rode o seguinte comando no terminal: 
   * Para usuários **Linux**
```jsx
sudo docker-compose up
```     
  3. Após o docker inicializar, em um novo terminal, rode o arquivo bash com o seguinte comando:
```jsx
sudo ./db_create_migrate.sh
```   
  5. Após criar o banco, migrar e povoar as tabelas, teste da maneira que achar melhor 🙂.

### User

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /users | JWT  |  | Lista todos os usuários cadastrados |
| POST | /users | | {name: ```String```, email:```String```, password: ```String```,cpf: ```String```,telephone: ```String```}    | Cadastra um novo usuário |
| DELETE | /users/:id | JWT |  | Deleta um usuário |

### Auth

| HTTP Request | Endpoint | Body | Descrição |
| ------ | ------ | ------ | ------ |
| POST | /auth | {email: ```String```, password: ```String```} | Vereifica o login e fornece o token de acesso JWT |


### Practice Category

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /practice-categories |  |  | Lista o todas as categorias de praticas |
| GET | /practice-categories/:id |  |  | Lista uma categoria de pratica específica |
| PUT | /practice-categories/:id | JWT | {title: ```String```, subcategory_of: ```String```} | Atualiza uma categoria de praticas específica |
| POST | /practice-categories | JWT | {title: ```String```, subcategory_of: ```String```} | Cria uma categoria de praticas |
| DELETE | /practice-categories/:id | JWT |  | Deleta uma categoria de praticas específica |

### Practice

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /practice |  |  | Lista o todas as praticas |
| GET | /practice/:id |  |  | Lista uma pratica específica |
| PUT | /practice/:id | JWT | {description: ```String```, practice_category_id: ```Int``` } | Atualiza uma praticas específica |
| POST | /practice | JWT | {description: ```String```, practice_category_id: ```Int``` } | Cria uma praticas |
| DELETE | /practice/:id | JWT |  | Deleta uma praticas específica |

### Document Category

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /document-categories |  |  | Lista o todas as categorias de documentos |
| GET | /document-categories/:id |  |  | Lista uma categoria de documentos específica |
| PUT | /document-categories/:id | JWT | {title: ```String```} | Atualiza uma categoria de documentos específica |
| POST | /document-categories | JWT | {title: ```String```} | Cria uma categoria de documentos |
| DELETE | /document-categories/:id | JWT |  | Deleta uma categoria de documentos específica |

### Document

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /document |  |  | Lista o todas os documentos |
| GET | /document/:id |  |  | Lista um documento específica |
| PUT | /document/:id | JWT | {link_site: ```String```,description: ```String```,link_download: ```String```,title: ```String```, document_category_id: ```Int``` } | Atualiza um documento específica |
| POST | /document | JWT | {link_site: ```String```,description: ```String```,link_download: ```String```,title: ```String```, document_category_id: ```Int``` } | Cria um documento |
| DELETE | /document/:id | JWT |  | Deleta um documento específico |

<!-- ### External Link

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /:user_id/user-external-links |  |  | Lista o todos os links externos de cada usuário |
| GET | /:document_category_id/category-external-links |  |  | Lista o todos os links externos de cada categoria |
| PUT | /external-links/:id | JWT | {name: ```String```, url: ```String```} | Atualiza um link externo específico |
| POST | /:user_id/:document_category_id/external-links | JWT | {name: ```String```, url: ```String```} | Cria uma link externo |
| DELETE | /external-links/:id | JWT |  | Remove um link externo específico |

### Subtitle

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /subtitles |  |  | Lista o todas as legendas |
| PUT | /subtitles/:id | JWT | {name: ```String```, meaning: ```String```} | Atualiza uma legenda específica |
| POST | /subtitles | JWT | {name: ```String```, meaning: ```String```} | Cria apenas uma legenda |
| POST | /action/:action_id/subtitles | JWT | {name: ```String```, meaning: ```String```} | Cria uma legenda em uma ação específica |
| DELETE | /subtitles/:id | JWT |  | Deleta uma legenda específica |

### Action Category

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /action-categories |  |  | Lista o todas as categorias de ação |
| PUT | /action-categories/:id | JWT | {category: ```String```} | Atualiza uma categoria de ação específica |
| POST | /action-categories | JWT | {category: ```String```} | Cria uma categoria de ação |
| DELETE | /action-categories/:id | JWT |  | Deleta uma categoria de ação específica |

### Action

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /actions |  |  | Lista o todas as ações |
| GET | /actions/:id |  |  | Lista uma ação específica |
| PUT | /actions/:id | JWT | {information: ```String```} | Atualiza uma ação específica |
| POST | /actions | JWT | {information: ```String (long)```} | Cria uma ação |
| DELETE | /actions/:id | JWT |  | Deleta uma ação específica |
| DELETE | /action/:action_id/:subtitle_id | JWT |  | Deleta uma legenda de uma ação específica |

### Intervation Level

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /intervation-levels |  |  | Lista o todos os níveis de intervenção |
| GET | /intervation-levels/:id |  |  | Lista um nível de intervenção específico |
| PUT | /intervation-levels/:id | JWT | {title: ```String```} | Atualiza um nível de intervenção específico |
| POST | /intervation-levels | JWT | {title: ```String```} | Cria um nível de intervenção |
| DELETE | /intervation-levels/:id | JWT |  | Deleta um nível de intervenção específico |

### Approach Subject

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /approach-subjects |  |  | Lista o todos os sujeitos da abordagem |
| GET | /approach-subjects/:id |  |  | Lista um sujeito da abordagem específico |
| PUT | /approach-subjects/:id | JWT | {subject: ```String```} | Atualiza um sujeito da abordagem específico |
| POST | /approach-subjects | JWT | {subject: ```String```} | Cria um sujeito da abordagem |
| DELETE | /approach-subjects/:id | JWT |  | Deleta um nível de sujeito da abordagem |

### Information

| HTTP Request | Endpoint | Token | Body | Descrição |
| ------ | ------ | ------ | ------ | ------ |
| GET | /informations |  |  | Lista as junções dos relacionamentos |
| GET | /information/:approach_subject_id/:intervation_level_id/categories |  |  | Lista todas as categorias de ação de um sujeito da abordagem e nível de intervenção |
| GET | /information/action/:category_information_id |  |  | Lista uma ação específica |
| POST | /approach-subjects/:id | JWT | {user_id: ```Int```, approach_subject_id: ```Int```, intervation_level_id: ```Int```, action_category_id: ```Int```, action_id: ```Int```} | Cria uma combinação entre ação, nível de intervenção e sujeito da abordagem |
| DELETE | /information/categories/:id | JWT |  | Deleta uma combinação entre ação, nível de intervenção e sujeito da abordagem | -->

## Regras de Negócio
- Para editar, remover ou criar qualquer um dos items acima, é necessário criar uma conta e gerar um token JWT.
- Nenhuma visualização necessita token JWT.

 
## Contribuidores

As seguintes pessoas contribuiram para este projeto:

* Igor Galvan (https://github.com/igorbgalvan)
* Hiroshi Takehisa Neto (https://github.com/HiroshiNeto)
* Stela Marisco (https://github.com/Smarisco)


## Licença de uso

Este é um projeto privado com direitos reservados para a Universidade Federal do Mato Grosso do Sul. 
