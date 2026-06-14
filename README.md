# Sistema de Consulta de Filmes - TMDB API Testing

Projeto prático de testes de API utilizando The Movie Database (TMDB) API para demonstração de conceitos de automação de testes e validação de APIs REST.

## 📋 Objetivo

Capacitação em testes de API com aplicação prática, incluindo:
- Autenticação via API Key
- Encadeamento de requisições
- Validação de respostas
- Uso de variáveis de ambiente
- Testes automatizados no Postman

## 🎬 Fluxo de Testes

### 1. Autenticação
- Validar API Key
- Criar sessão de autenticação
- Gerenciar tokens

### 2. Buscar Filme
- Pesquisar filmes por título
- Validar estrutura da resposta
- Extrair IDs para próximas requisições

### 3. Obter Detalhes do Filme
- Buscar informações completas
- Validar dados obrigatórios
- Verificar formato de dados

### 4. Buscar Elenco
- Listar atores e equipe
- Validar relacionamentos
- Verificar integridade dos dados

### 5. Buscar Recomendações
- Obter filmes similares
- Validar algoritmo de recomendação
- Testar paginação

### 6. Validar Avaliações
- Verificar ratings e reviews
- Validar intervalos de valores
- Testar filtros

## 🚀 Como Usar

### Pré-requisitos

1. **Criar conta na TMDB**
   - Acesse: https://www.themoviedb.org/
   - Faça o cadastro gratuito

2. **Obter API Key**
   - Vá em: Settings → API → Create → Developer
   - Copie sua API Key (v3 auth)

3. **Instalar Postman**
   - Download: https://www.postman.com/downloads/

### Configuração

1. **Importar a Collection**
   ```
   Postman → Import → Selecione o arquivo TMDB_API_Tests.postman_collection.json
   ```

2. **Configurar Environment**
   ```
   Postman → Environments → Import → Selecione TMDB_Environment.postman_environment.json
   ```

3. **Adicionar sua API Key**
   - Abra o Environment "TMDB - Development"
   - Edite a variável `api_key` e cole sua chave
   - Salve as alterações

### Executar Testes

#### Manualmente
1. Selecione o environment "TMDB - Development"
2. Execute cada request na ordem da collection
3. Observe os resultados dos testes na aba "Test Results"

#### Via Collection Runner
1. Click com botão direito na Collection
2. Selecione "Run collection"
3. Configure iterações e delays se necessário
4. Click em "Run TMDB API Tests"

## 📊 Estrutura de Testes

### Testes Positivos
- ✅ Status code 200/201
- ✅ Response time < 2000ms
- ✅ Schema validation
- ✅ Dados obrigatórios presentes
- ✅ Tipos de dados corretos

### Testes Negativos
- ❌ API Key inválida (401)
- ❌ Recurso não encontrado (404)
- ❌ Parâmetros inválidos (400)
- ❌ Rate limiting (429)

### Validações Customizadas
- 🔍 Encadeamento de variáveis
- 🔍 Validação de arrays
- 🔍 Verificação de valores esperados
- 🔍 Testes de paginação

## 📁 Estrutura do Projeto

```
TMDB_API_Testing/
├── README.md
├── .gitignore
├── collections/
│   └── TMDB_API_Tests.postman_collection.json
├── environments/
│   ├── TMDB_Environment.postman_environment.json
│   └── TMDB_Production.postman_environment.json
├── docs/
│   ├── API_ENDPOINTS.md
│   ├── TEST_CASES.md
│   └── EVIDENCES.md
├── evidences/
│   ├── screenshots/
│   └── test_reports/
└── scripts/
    └── test_examples.js
```

## 🧪 Casos de Teste Cobertos

| ID | Cenário | Método | Endpoint | Status Esperado |
|----|---------|--------|----------|-----------------|
| TC01 | Validar API Key | GET | /authentication | 200 |
| TC02 | Buscar filme existente | GET | /search/movie | 200 |
| TC03 | Buscar filme inexistente | GET | /search/movie | 200 (results vazio) |
| TC04 | Obter detalhes com ID válido | GET | /movie/{id} | 200 |
| TC05 | Obter detalhes com ID inválido | GET | /movie/{id} | 404 |
| TC06 | Buscar elenco | GET | /movie/{id}/credits | 200 |
| TC07 | Buscar recomendações | GET | /movie/{id}/recommendations | 200 |
| TC08 | Validar avaliações | GET | /movie/{id}/reviews | 200 |
| TC09 | Testar paginação | GET | /search/movie?page=2 | 200 |
| TC10 | Request sem API Key | GET | /search/movie | 401 |

## 📸 Evidências

As evidências devem incluir:
1. **Screenshots** dos testes executados
2. **Collection Runner Reports** (HTML export)
3. **Console logs** de requests/responses importantes
4. **Newman reports** (se executado via CLI)

## 🔧 Tecnologias

- **API**: The Movie Database (TMDB) API v3
- **Cliente**: Postman
- **Versionamento**: Git/GitHub
- **Documentação**: Markdown

## 📚 Recursos Adicionais

- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [Postman Learning Center](https://learning.postman.com/)
- [API Testing Best Practices](https://www.postman.com/api-platform/api-testing/)

## 📑 Navegação Rápida

- 🚀 **Começar agora?** → [`QUICKSTART.md`](QUICKSTART.md)
- 📋 **Acompanhar progresso?** → [`CHECKLIST.md`](CHECKLIST.md)
- 🎤 **Preparar apresentação?** → [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md)
- 📚 **Ver todos os documentos?** → [`INDEX.md`](INDEX.md)

## 👤 Autor

[Seu Nome]
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

## 📝 Licença

Este projeto é para fins educacionais e de capacitação.

---

**Data de Criação**: Junho 2026  
**Versão**: 1.0.0
