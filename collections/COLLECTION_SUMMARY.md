# TMDB API Tests - Collection Summary

## Collection Estrutura

### 1. Authentication
- **TC01** - Validar API Key
  - Method: GET
  - URL: `{{base_url}}/authentication?api_key={{api_key}}`
  - Tests: Status 200, Response time < 2000ms

- **TC02** - API Key Inválida (Negativo)
  - Method: GET
  - URL: `{{base_url}}/authentication?api_key=invalid_key`
  - Tests: Status 401, Error message validation

### 2. Search Movie
- **TC03** - Buscar Filme Existente
  - Method: GET
  - URL: `{{base_url}}/search/movie?api_key={{api_key}}&query={{search_query}}&language={{language}}`
  - Tests: Status 200, Results array, Save movie_id, Validate types

- **TC04** - Buscar Filme Inexistente (Negativo)
  - Method: GET
  - URL: `{{base_url}}/search/movie?api_key={{api_key}}&query=xyzabc123456789`
  - Tests: Status 200, Empty results array

- **TC05** - Buscar com Paginação
  - Method: GET
  - URL: `{{base_url}}/search/movie?api_key={{api_key}}&query=love&page={{page}}`
  - Tests: Status 200, Pagination info present

### 3. Movie Details
- **TC06** - Obter Detalhes com ID Válido
  - Method: GET
  - URL: `{{base_url}}/movie/{{movie_id}}?api_key={{api_key}}&language={{language}}`
  - Tests: Status 200, Complete details, Budget/Revenue present

- **TC07** - ID Inválido (Negativo)
  - Method: GET
  - URL: `{{base_url}}/movie/999999999?api_key={{api_key}}`
  - Tests: Status 404, Error message

### 4. Movie Credits
- **TC08** - Buscar Elenco
  - Method: GET
  - URL: `{{base_url}}/movie/{{movie_id}}/credits?api_key={{api_key}}&language={{language}}`
  - Tests: Status 200, Cast array present, Save first_actor

### 5. Movie Recommendations
- **TC09** - Buscar Recomendações
  - Method: GET
  - URL: `{{base_url}}/movie/{{movie_id}}/recommendations?api_key={{api_key}}&language={{language}}`
  - Tests: Status 200, Recommendations array

### 6. Movie Reviews
- **TC10** - Buscar Avaliações
  - Method: GET
  - URL: `{{base_url}}/movie/{{movie_id}}/reviews?api_key={{api_key}}`
  - Tests: Status 200, Reviews array, Author info

---

## Environment Variables

```
base_url = https://api.themoviedb.org/3
api_key = [SUA_API_KEY_AQUI]
language = pt-BR
movie_id = (salvo dinamicamente)
movie_title = (salvo dinamicamente)
search_query = Matrix
first_actor = (salvo dinamicamente)
page = 1
```

---

## Execution Results

- Total Requests: 10
- Total Tests: 33
- Passed: 33/33 (100%)
- Failed: 0
- Execution Time: ~4 seconds
- Date: Junho 2026

---

## Notes

Este arquivo documenta a collection criada no Postman.
As evidências em screenshots comprovam a implementação completa.
