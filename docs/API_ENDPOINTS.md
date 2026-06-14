# TMDB API - Endpoints Utilizados

## Base URL
```
https://api.themoviedb.org/3
```

## Autenticação

Todos os endpoints requerem o parâmetro `api_key` na query string.

```
?api_key={{api_key}}
```

---

## 1. Authentication

### GET /authentication
Valida se a API Key é válida.

**Request:**
```
GET https://api.themoviedb.org/3/authentication?api_key={{api_key}}
```

**Response 200:**
```json
{
  "success": true,
  "status_code": 1,
  "status_message": "Success."
}
```

---

## 2. Search Movie

### GET /search/movie
Busca filmes por título.

**Parameters:**
- `api_key` (required): Sua API key
- `query` (required): Termo de busca
- `language` (optional): Idioma (default: en-US)
- `page` (optional): Número da página (default: 1)
- `include_adult` (optional): Incluir conteúdo adulto (default: false)
- `year` (optional): Filtrar por ano

**Request:**
```
GET https://api.themoviedb.org/3/search/movie?api_key={{api_key}}&query=Matrix&language=pt-BR
```

**Response 200:**
```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
      "genre_ids": [28, 878],
      "id": 603,
      "original_language": "en",
      "original_title": "The Matrix",
      "overview": "Thomas Anderson...",
      "popularity": 67.349,
      "poster_path": "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      "release_date": "1999-03-30",
      "title": "Matrix",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 23000
    }
  ],
  "total_pages": 5,
  "total_results": 100
}
```

---

## 3. Get Movie Details

### GET /movie/{movie_id}
Obtém detalhes completos de um filme específico.

**Parameters:**
- `api_key` (required): Sua API key
- `language` (optional): Idioma (default: en-US)
- `append_to_response` (optional): Dados adicionais (videos,images,credits)

**Request:**
```
GET https://api.themoviedb.org/3/movie/603?api_key={{api_key}}&language=pt-BR
```

**Response 200:**
```json
{
  "adult": false,
  "backdrop_path": "/fNG7i7RqMErkcqhohV2a6cV1Ehy.jpg",
  "belongs_to_collection": {
    "id": 2344,
    "name": "Coleção Matrix",
    "poster_path": "/bV9qTVHTVf0gkW0j7p7M0ILD1LJ.jpg",
    "backdrop_path": "/bRm2DEgUiYciDw3myHuYFInD7la.jpg"
  },
  "budget": 63000000,
  "genres": [
    {
      "id": 28,
      "name": "Ação"
    },
    {
      "id": 878,
      "name": "Ficção científica"
    }
  ],
  "homepage": "http://www.warnerbros.com/matrix",
  "id": 603,
  "imdb_id": "tt0133093",
  "original_language": "en",
  "original_title": "The Matrix",
  "overview": "Thomas Anderson...",
  "popularity": 67.349,
  "poster_path": "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  "production_companies": [...],
  "production_countries": [...],
  "release_date": "1999-03-30",
  "revenue": 466364845,
  "runtime": 136,
  "spoken_languages": [...],
  "status": "Released",
  "tagline": "Bem-vindo ao mundo real.",
  "title": "Matrix",
  "video": false,
  "vote_average": 8.2,
  "vote_count": 23000
}
```

---

## 4. Get Movie Credits

### GET /movie/{movie_id}/credits
Obtém o elenco e equipe de um filme.

**Parameters:**
- `api_key` (required): Sua API key
- `language` (optional): Idioma (default: en-US)

**Request:**
```
GET https://api.themoviedb.org/3/movie/603/credits?api_key={{api_key}}&language=pt-BR
```

**Response 200:**
```json
{
  "id": 603,
  "cast": [
    {
      "adult": false,
      "gender": 2,
      "id": 6384,
      "known_for_department": "Acting",
      "name": "Keanu Reeves",
      "original_name": "Keanu Reeves",
      "popularity": 54.321,
      "profile_path": "/4D0PpNI0kmP58hgrwGC3wCjxhnm.jpg",
      "cast_id": 1,
      "character": "Neo",
      "credit_id": "52fe4250c3a36847f800b579",
      "order": 0
    },
    {
      "adult": false,
      "gender": 2,
      "id": 2975,
      "name": "Laurence Fishburne",
      "character": "Morpheus",
      "order": 1
    }
  ],
  "crew": [
    {
      "adult": false,
      "gender": 2,
      "id": 899,
      "known_for_department": "Directing",
      "name": "Lana Wachowski",
      "original_name": "Lana Wachowski",
      "popularity": 8.123,
      "department": "Directing",
      "job": "Director"
    }
  ]
}
```

---

## 5. Get Movie Recommendations

### GET /movie/{movie_id}/recommendations
Obtém filmes recomendados baseados no filme especificado.

**Parameters:**
- `api_key` (required): Sua API key
- `language` (optional): Idioma (default: en-US)
- `page` (optional): Número da página (default: 1)

**Request:**
```
GET https://api.themoviedb.org/3/movie/603/recommendations?api_key={{api_key}}&language=pt-BR&page=1
```

**Response 200:**
```json
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/nlkCílson5.jpg",
      "id": 604,
      "title": "Matrix Reloaded",
      "original_language": "en",
      "original_title": "The Matrix Reloaded",
      "overview": "Após derrotar...",
      "poster_path": "/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
      "media_type": "movie",
      "genre_ids": [12, 28, 53, 878],
      "popularity": 45.123,
      "release_date": "2003-05-15",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 10000
    }
  ],
  "total_pages": 3,
  "total_results": 60
}
```

---

## 6. Get Movie Reviews

### GET /movie/{movie_id}/reviews
Obtém avaliações/reviews de usuários sobre o filme.

**Parameters:**
- `api_key` (required): Sua API key
- `language` (optional): Idioma (default: en-US)
- `page` (optional): Número da página (default: 1)

**Request:**
```
GET https://api.themoviedb.org/3/movie/603/reviews?api_key={{api_key}}&language=en-US&page=1
```

**Response 200:**
```json
{
  "id": 603,
  "page": 1,
  "results": [
    {
      "author": "John Chard",
      "author_details": {
        "name": "John Chard",
        "username": "john_chard",
        "avatar_path": "/avatar.jpg",
        "rating": 10
      },
      "content": "The Matrix is one of...",
      "created_at": "2019-05-13T19:28:20.000Z",
      "id": "5cd9b5a70e0a26329b000e02",
      "updated_at": "2021-06-23T15:57:44.000Z",
      "url": "https://www.themoviedb.org/review/5cd9b5a70e0a26329b000e02"
    }
  ],
  "total_pages": 2,
  "total_results": 12
}
```

---

## Error Responses

### 401 Unauthorized
```json
{
  "status_code": 7,
  "status_message": "Invalid API key: You must be granted a valid key.",
  "success": false
}
```

### 404 Not Found
```json
{
  "status_code": 34,
  "status_message": "The resource you requested could not be found.",
  "success": false
}
```

### 429 Too Many Requests
```json
{
  "status_code": 25,
  "status_message": "Your request count is over the allowed limit.",
  "success": false
}
```

---

## Rate Limits

- **Requests por segundo**: 50
- **Requests por dia**: 1,000,000

## Referências

- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [API Status Codes](https://developers.themoviedb.org/3/getting-started/status-codes)
