# Sistema de Consulta de Filmes - TMDB API Testing

Projeto prático de testes de API utilizando The Movie Database (TMDB) API para demonstração de conceitos de automação de testes e validação de APIs REST.

## 📋 Objetivo

Capacitação em testes de API com aplicação prática, incluindo:
- Autenticação via API Key
- Encadeamento de requisições
- Validação de respostas
- Uso de variáveis de ambiente
- Testes automatizados no Postman

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

## 📸 Evidências

As evidências devem incluir:
1. **Screenshots** dos testes executados
2. **Collection Runner Reports** (HTML export)

## 🔧 Tecnologias

- **API**: The Movie Database (TMDB) API v3
- **Cliente**: Postman
- **Versionamento**: Git/GitHub

## 👤 Autor

[Seu Nome]
- GitHub: [@manumsantos](https://github.com/manumsantos)
- LinkedIn: [Emanueli Marques](https://www.linkedin.com/in/emanueli-marques/)

---

**Data de Criação**: Junho 2026  
**Versão**: 1.0.0
