# Casos de Teste - TMDB API

## 1. Autenticação

### TC01 - Validar API Key Válida
**Objetivo:** Verificar que uma API Key válida é aceita pelo sistema.

**Pré-condições:**
- API Key válida configurada no environment

**Passos:**
1. Enviar GET request para `/authentication?api_key={{api_key}}`
2. Verificar response

**Resultado Esperado:**
- Status code: 200
- Response body contém: `"success": true`
- Response time < 2000ms

**Testes Postman:**
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

### TC02 - Validar API Key Inválida
**Objetivo:** Verificar que uma API Key inválida é rejeitada.

**Pré-condições:**
- API Key inválida ou vazia

**Passos:**
1. Enviar GET request com API Key inválida
2. Verificar response de erro

**Resultado Esperado:**
- Status code: 401
- Response body contém erro de autenticação
- Campo `success: false`

**Testes Postman:**
```javascript
pm.test("Status code é 401", function () {
    pm.response.to.have.status(401);
});

pm.test("Mensagem de erro apropriada", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(false);
    pm.expect(jsonData.status_code).to.eql(7);
    pm.expect(jsonData.status_message).to.include("Invalid API key");
});
```

---

## 2. Busca de Filmes

### TC03 - Buscar Filme Existente
**Objetivo:** Verificar busca de filme com termo válido.

**Pré-condições:**
- API Key válida
- Termo de busca: "Matrix"

**Passos:**
1. Enviar GET request para `/search/movie?api_key={{api_key}}&query=Matrix`
2. Verificar response
3. Salvar movie_id para próximas requisições

**Resultado Esperado:**
- Status code: 200
- Array `results` não vazio
- Campos obrigatórios presentes em cada resultado
- movie_id salvo em variável de ambiente

**Testes Postman:**
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

### TC04 - Buscar Filme Inexistente
**Objetivo:** Verificar comportamento ao buscar filme que não existe.

**Pré-condições:**
- API Key válida
- Termo de busca: "xyzabc123456789" (string aleatória)

**Passos:**
1. Enviar GET request com termo inexistente
2. Verificar response

**Resultado Esperado:**
- Status code: 200
- Array `results` vazio
- `total_results`: 0

**Testes Postman:**
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

### TC05 - Buscar com Paginação
**Objetivo:** Verificar funcionamento da paginação.

**Pré-condições:**
- API Key válida
- Termo: "love"
- Page: 2

**Passos:**
1. Enviar request para página 1
2. Enviar request para página 2
3. Comparar resultados

**Resultado Esperado:**
- Ambas retornam 200
- `page` corresponde ao solicitado
- Resultados diferentes entre páginas
- `total_pages` e `total_results` presentes

**Testes Postman:**
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Página correta retornada", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.page).to.eql(2);
});

pm.test("Informações de paginação presentes", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('total_pages');
    pm.expect(jsonData).to.have.property('total_results');
    pm.expect(jsonData.total_pages).to.be.a('number');
    pm.expect(jsonData.total_results).to.be.a('number');
});
```

---

## 3. Detalhes do Filme

### TC06 - Obter Detalhes com ID Válido
**Objetivo:** Recuperar informações detalhadas de um filme específico.

**Pré-condições:**
- API Key válida
- movie_id válido (salvo da busca anterior)

**Passos:**
1. Enviar GET request para `/movie/{{movie_id}}?api_key={{api_key}}`
2. Verificar response detalhado

**Resultado Esperado:**
- Status code: 200
- Todos os campos obrigatórios presentes
- Dados mais detalhados que na busca
- Campos extras: budget, revenue, runtime, etc.

**Testes Postman:**
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
    pm.expect(jsonData).to.have.property('production_companies');
});

pm.test("Genres é um array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.genres).to.be.an('array');
});

pm.test("Runtime é um número positivo", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.runtime).to.be.a('number');
    pm.expect(jsonData.runtime).to.be.above(0);
});

pm.test("Vote average está no intervalo correto", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.vote_average).to.be.within(0, 10);
});
```

---

### TC07 - Obter Detalhes com ID Inválido
**Objetivo:** Verificar tratamento de erro para ID inexistente.

**Pré-condições:**
- API Key válida
- movie_id: 999999999 (não existe)

**Passos:**
1. Enviar GET request com ID inválido
2. Verificar response de erro

**Resultado Esperado:**
- Status code: 404
- Mensagem de erro apropriada

**Testes Postman:**
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

## 4. Elenco do Filme

### TC08 - Buscar Elenco com Sucesso
**Objetivo:** Obter lista de atores e equipe do filme.

**Pré-condições:**
- API Key válida
- movie_id válido

**Passos:**
1. Enviar GET request para `/movie/{{movie_id}}/credits`
2. Verificar estrutura do elenco

**Resultado Esperado:**
- Status code: 200
- Arrays `cast` e `crew` presentes
- Informações completas de atores

**Testes Postman:**
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

pm.test("Salvar nome do primeiro ator", function () {
    var jsonData = pm.response.json();
    if (jsonData.cast.length > 0) {
        pm.environment.set("first_actor", jsonData.cast[0].name);
    }
});
```

---

## 5. Recomendações

### TC09 - Buscar Recomendações
**Objetivo:** Obter filmes similares recomendados.

**Pré-condições:**
- API Key válida
- movie_id válido

**Passos:**
1. Enviar GET request para `/movie/{{movie_id}}/recommendations`
2. Verificar lista de recomendações

**Resultado Esperado:**
- Status code: 200
- Array `results` com filmes similares
- Estrutura similar à busca de filmes

**Testes Postman:**
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

## 6. Avaliações

### TC10 - Buscar Reviews
**Objetivo:** Obter avaliações de usuários sobre o filme.

**Pré-condições:**
- API Key válida
- movie_id válido

**Passos:**
1. Enviar GET request para `/movie/{{movie_id}}/reviews`
2. Verificar estrutura das reviews

**Resultado Esperado:**
- Status code: 200
- Array `results` com reviews
- Cada review tem autor, conteúdo e data

**Testes Postman:**
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

pm.test("Rating está no intervalo correto", function () {
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

## Resumo de Cobertura

| Categoria | Casos de Teste | Positivos | Negativos |
|-----------|----------------|-----------|-----------|
| Autenticação | 2 | 1 | 1 |
| Busca | 3 | 2 | 1 |
| Detalhes | 2 | 1 | 1 |
| Elenco | 1 | 1 | 0 |
| Recomendações | 1 | 1 | 0 |
| Avaliações | 1 | 1 | 0 |
| **Total** | **10** | **7** | **3** |

---

## Critérios de Aceitação

Para considerar o teste bem-sucedido:
- ✅ Todos os testes positivos passam
- ✅ Todos os testes negativos validam erros corretamente
- ✅ Response time < 2000ms em 95% dos casos
- ✅ Encadeamento de variáveis funciona
- ✅ Documentação de evidências completa
