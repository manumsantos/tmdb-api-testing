# Guia de Configuração do Postman

## 1. Criar Collection no Postman

### Passo 1: Nova Collection
1. Abra o Postman
2. Click em "Collections" no menu lateral
3. Click em "+" ou "New Collection"
4. Nome: `TMDB API Tests`
5. Description: `Coleção de testes para The Movie Database API`

### Passo 2: Criar Folders (Pastas)
Dentro da collection, crie as seguintes pastas:
- `1. Authentication`
- `2. Search Movie`
- `3. Movie Details`
- `4. Movie Credits`
- `5. Movie Recommendations`
- `6. Movie Reviews`

---

## 2. Configurar Environment

### Criar Environment
1. Click no ícone de "Environments" (⚙️) no canto superior direito
2. Click em "+" para criar novo environment
3. Nome: `TMDB - Development`

### Adicionar Variáveis
Adicione as seguintes variáveis:

| Variable | Type | Initial Value | Current Value |
|----------|------|---------------|---------------|
| base_url | default | https://api.themoviedb.org/3 | (mesmo) |
| api_key | secret | SUA_API_KEY_AQUI | SUA_API_KEY_AQUI |
| language | default | pt-BR | pt-BR |
| movie_id | default | (vazio) | (vazio) |
| movie_title | default | (vazio) | (vazio) |
| search_query | default | Matrix | Matrix |
| first_actor | default | (vazio) | (vazio) |
| page | default | 1 | 1 |

**Importante:** Marque `api_key` como tipo "secret" para não expor em screenshots!

---

## 3. Criar Requisições

### 3.1 Authentication - Validar API Key

**Folder:** 1. Authentication  
**Nome:** TC01 - Validar API Key

**Request:**
- Method: `GET`
- URL: `{{base_url}}/authentication?api_key={{api_key}}`

**Tests (aba Tests):**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Autenticação bem-sucedida", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(true);
    pm.expect(jsonData.status_code).to.eql(1);
});

pm.test("Response time menor que 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});
```

---

### 3.2 Authentication - API Key Inválida (Negativo)

**Folder:** 1. Authentication  
**Nome:** TC02 - API Key Inválida

**Request:**
- Method: `GET`
- URL: `{{base_url}}/authentication?api_key=invalid_key_12345`

**Tests:**
```javascript
pm.test("Status code é 401", function () {
    pm.response.to.have.status(401);
});

pm.test("Mensagem de erro apropriada", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(false);
    pm.expect(jsonData.status_code).to.eql(7);
});
```

---

### 3.3 Search Movie - Buscar Filme Existente

**Folder:** 2. Search Movie  
**Nome:** TC03 - Buscar Filme Existente

**Request:**
- Method: `GET`
- URL: `{{base_url}}/search/movie?api_key={{api_key}}&query={{search_query}}&language={{language}}`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Resultados encontrados", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.results).to.be.an('array');
    pm.expect(jsonData.results.length).to.be.above(0);
});

pm.test("Estrutura do resultado válida", function () {
    var jsonData = pm.response.json();
    var firstResult = jsonData.results[0];
    
    pm.expect(firstResult).to.have.property('id');
    pm.expect(firstResult).to.have.property('title');
    pm.expect(firstResult).to.have.property('overview');
    pm.expect(firstResult).to.have.property('release_date');
    pm.expect(firstResult).to.have.property('vote_average');
});

pm.test("Salvar movie_id", function () {
    var jsonData = pm.response.json();
    if (jsonData.results.length > 0) {
        pm.environment.set("movie_id", jsonData.results[0].id);
        pm.environment.set("movie_title", jsonData.results[0].title);
        console.log("Movie ID salvo: " + jsonData.results[0].id);
        console.log("Título: " + jsonData.results[0].title);
    }
});

pm.test("Validar tipos de dados", function () {
    var jsonData = pm.response.json();
    var firstResult = jsonData.results[0];
    
    pm.expect(firstResult.id).to.be.a('number');
    pm.expect(firstResult.title).to.be.a('string');
    pm.expect(firstResult.vote_average).to.be.a('number');
    pm.expect(firstResult.vote_average).to.be.within(0, 10);
});
```

---

### 3.4 Search Movie - Filme Inexistente (Negativo)

**Folder:** 2. Search Movie  
**Nome:** TC04 - Buscar Filme Inexistente

**Request:**
- Method: `GET`
- URL: `{{base_url}}/search/movie?api_key={{api_key}}&query=xyzabc123456789&language={{language}}`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Nenhum resultado encontrado", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.results).to.be.an('array');
    pm.expect(jsonData.results.length).to.eql(0);
    pm.expect(jsonData.total_results).to.eql(0);
});
```

---

### 3.5 Search Movie - Paginação

**Folder:** 2. Search Movie  
**Nome:** TC05 - Buscar com Paginação

**Request:**
- Method: `GET`
- URL: `{{base_url}}/search/movie?api_key={{api_key}}&query=love&language={{language}}&page={{page}}`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Informações de paginação presentes", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('page');
    pm.expect(jsonData).to.have.property('total_pages');
    pm.expect(jsonData).to.have.property('total_results');
});

pm.test("Página correta retornada", function () {
    var jsonData = pm.response.json();
    var expectedPage = parseInt(pm.environment.get("page"));
    pm.expect(jsonData.page).to.eql(expectedPage);
});
```

---

### 3.6 Movie Details - ID Válido

**Folder:** 3. Movie Details  
**Nome:** TC06 - Obter Detalhes com ID Válido

**Request:**
- Method: `GET`
- URL: `{{base_url}}/movie/{{movie_id}}?api_key={{api_key}}&language={{language}}`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Detalhes completos presentes", function () {
    var jsonData = pm.response.json();
    
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('title');
    pm.expect(jsonData).to.have.property('overview');
    pm.expect(jsonData).to.have.property('budget');
    pm.expect(jsonData).to.have.property('revenue');
    pm.expect(jsonData).to.have.property('runtime');
    pm.expect(jsonData).to.have.property('genres');
});

pm.test("Genres é um array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.genres).to.be.an('array');
});

pm.test("Runtime é um número positivo", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.runtime).to.be.a('number');
    if (jsonData.runtime !== null) {
        pm.expect(jsonData.runtime).to.be.above(0);
    }
});

pm.test("Vote average no intervalo correto", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.vote_average).to.be.within(0, 10);
});
```

---

### 3.7 Movie Details - ID Inválido (Negativo)

**Folder:** 3. Movie Details  
**Nome:** TC07 - ID Inválido

**Request:**
- Method: `GET`
- URL: `{{base_url}}/movie/999999999?api_key={{api_key}}`

**Tests:**
```javascript
pm.test("Status code é 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Mensagem de erro apropriada", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(false);
    pm.expect(jsonData.status_code).to.eql(34);
});
```

---

### 3.8 Movie Credits - Buscar Elenco

**Folder:** 4. Movie Credits  
**Nome:** TC08 - Buscar Elenco

**Request:**
- Method: `GET`
- URL: `{{base_url}}/movie/{{movie_id}}/credits?api_key={{api_key}}&language={{language}}`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Cast e Crew presentes", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('cast');
    pm.expect(jsonData).to.have.property('crew');
    pm.expect(jsonData.cast).to.be.an('array');
    pm.expect(jsonData.crew).to.be.an('array');
});

pm.test("Informações do ator válidas", function () {
    var jsonData = pm.response.json();
    if (jsonData.cast.length > 0) {
        var firstActor = jsonData.cast[0];
        pm.expect(firstActor).to.have.property('name');
        pm.expect(firstActor).to.have.property('character');
        pm.expect(firstActor).to.have.property('order');
        pm.expect(firstActor.name).to.be.a('string');
    }
});

pm.test("Salvar primeiro ator", function () {
    var jsonData = pm.response.json();
    if (jsonData.cast.length > 0) {
        pm.environment.set("first_actor", jsonData.cast[0].name);
        console.log("Primeiro ator: " + jsonData.cast[0].name);
    }
});
```

---

### 3.9 Movie Recommendations - Buscar Recomendações

**Folder:** 5. Movie Recommendations  
**Nome:** TC09 - Buscar Recomendações

**Request:**
- Method: `GET`
- URL: `{{base_url}}/movie/{{movie_id}}/recommendations?api_key={{api_key}}&language={{language}}&page=1`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Recomendações presentes", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.results).to.be.an('array');
});

pm.test("Estrutura das recomendações válida", function () {
    var jsonData = pm.response.json();
    if (jsonData.results.length > 0) {
        var firstRec = jsonData.results[0];
        pm.expect(firstRec).to.have.property('id');
        pm.expect(firstRec).to.have.property('title');
        pm.expect(firstRec).to.have.property('vote_average');
    }
});
```

---

### 3.10 Movie Reviews - Buscar Avaliações

**Folder:** 6. Movie Reviews  
**Nome:** TC10 - Buscar Reviews

**Request:**
- Method: `GET`
- URL: `{{base_url}}/movie/{{movie_id}}/reviews?api_key={{api_key}}&language=en-US&page=1`

**Tests:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Estrutura de reviews válida", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('results');
    pm.expect(jsonData.results).to.be.an('array');
});

pm.test("Review contém campos obrigatórios", function () {
    var jsonData = pm.response.json();
    if (jsonData.results.length > 0) {
        var firstReview = jsonData.results[0];
        pm.expect(firstReview).to.have.property('author');
        pm.expect(firstReview).to.have.property('content');
        pm.expect(firstReview).to.have.property('created_at');
        pm.expect(firstReview).to.have.property('url');
    }
});

pm.test("Rating no intervalo correto", function () {
    var jsonData = pm.response.json();
    if (jsonData.results.length > 0) {
        var firstReview = jsonData.results[0];
        if (firstReview.author_details && firstReview.author_details.rating) {
            pm.expect(firstReview.author_details.rating).to.be.within(0, 10);
        }
    }
});
```

---

## 4. Executar a Collection

### Teste Individual
1. Selecione o environment "TMDB - Development"
2. Click em cada request e "Send"
3. Verifique os resultados na aba "Test Results"

### Collection Runner
1. Click com botão direito na collection
2. Selecione "Run collection"
3. Certifique-se que o environment está selecionado
4. Click em "Run TMDB API Tests"
5. Aguarde a execução
6. Exporte o relatório (Export Results)

---

## 5. Gerar Evidências

### Screenshots
Capture prints de:
- Collection Runner com todos os testes passando
- Cada request individual mostrando response
- Environment variables após execução
- Console logs importantes

### Exportar Collection
1. Click direito na collection
2. "Export"
3. Formato: Collection v2.1
4. Salvar em: `collections/TMDB_API_Tests.postman_collection.json`

### Exportar Environment
1. Click no environment
2. Ícone "..." → "Export"
3. Salvar em: `environments/TMDB_Environment.postman_environment.json`
4. **Atenção:** Remova a API Key antes de commitar!

---

## 6. Dicas

### Order de Execução
Execute na ordem para aproveitar o encadeamento:
1. TC01 - Validar API Key
2. TC03 - Buscar Filme (salva movie_id)
3. TC06 - Detalhes (usa movie_id)
4. TC08 - Elenco (usa movie_id)
5. TC09 - Recomendações (usa movie_id)
6. TC10 - Reviews (usa movie_id)

### Variáveis Dinâmicas
O Postman permite usar variáveis dinâmicas:
- `{{$timestamp}}` - Unix timestamp
- `{{$randomInt}}` - Número aleatório
- `{{$guid}}` - GUID aleatório

### Console
Use o Console (View → Show Postman Console) para:
- Ver requests completas
- Debuggar scripts
- Ver logs do console.log()

---

## Troubleshooting

### API Key não funciona
- Verifique se copiou corretamente da TMDB
- Certifique-se que está usando a v3 API Key
- Aguarde alguns minutos após criar (pode demorar)

### movie_id não é salvo
- Verifique se executou TC03 primeiro
- Confirme que o environment está selecionado
- Veja no console se há erros no script

### Testes falham
- Verifique conexão com internet
- Confirme que a API está online
- Veja response body para entender o erro
