/**
 * Exemplos de Scripts de Teste para Postman
 * TMDB API Testing Project
 */

// ============================================================================
// 1. TESTES BÁSICOS DE STATUS E RESPONSE TIME
// ============================================================================

// Validar status code
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});

// Validar response time
pm.test("Response time menor que 2000ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(2000);
});

// Validar Content-Type
pm.test("Content-Type é JSON", function () {
    pm.response.to.have.header('Content-Type', /application\/json/);
});

// ============================================================================
// 2. VALIDAÇÃO DE ESTRUTURA JSON
// ============================================================================

// Verificar propriedades obrigatórias
pm.test("Response contém campos obrigatórios", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('results');
    pm.expect(jsonData).to.have.property('page');
    pm.expect(jsonData).to.have.property('total_results');
});

// Verificar tipo de dado
pm.test("Results é um array", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.results).to.be.an('array');
});

// Verificar array não vazio
pm.test("Array de resultados não está vazio", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.results.length).to.be.above(0);
});

// ============================================================================
// 3. VALIDAÇÃO DE VALORES
// ============================================================================

// Verificar valor específico
pm.test("Success é true", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(true);
});

// Verificar range de valores
pm.test("Vote average está entre 0 e 10", function () {
    var jsonData = pm.response.json();
    var result = jsonData.results[0];
    pm.expect(result.vote_average).to.be.within(0, 10);
});

// Verificar string contém texto
pm.test("Mensagem de erro contém 'Invalid'", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.status_message).to.include("Invalid");
});

// ============================================================================
// 4. SALVANDO VARIÁVEIS DE AMBIENTE (ENCADEAMENTO)
// ============================================================================

// Salvar movie_id para próximas requisições
pm.test("Salvar movie_id", function () {
    var jsonData = pm.response.json();
    if (jsonData.results && jsonData.results.length > 0) {
        var movieId = jsonData.results[0].id;
        pm.environment.set("movie_id", movieId);
        console.log("Movie ID salvo: " + movieId);
    }
});

// Salvar múltiplas variáveis
pm.test("Salvar dados do filme", function () {
    var jsonData = pm.response.json();
    var movie = jsonData.results[0];
    
    pm.environment.set("movie_id", movie.id);
    pm.environment.set("movie_title", movie.title);
    pm.environment.set("movie_rating", movie.vote_average);
});

// ============================================================================
// 5. VALIDAÇÃO DE ARRAYS E LOOPS
// ============================================================================

// Validar cada item do array
pm.test("Todos os resultados têm ID", function () {
    var jsonData = pm.response.json();
    jsonData.results.forEach(function(movie) {
        pm.expect(movie).to.have.property('id');
        pm.expect(movie.id).to.be.a('number');
    });
});

// Contar itens com condição
pm.test("Pelo menos 5 filmes com rating acima de 7", function () {
    var jsonData = pm.response.json();
    var highRated = jsonData.results.filter(movie => movie.vote_average > 7);
    pm.expect(highRated.length).to.be.at.least(5);
});

// ============================================================================
// 6. VALIDAÇÃO CONDICIONAL
// ============================================================================

// Teste condicional
pm.test("Se há resultados, validar estrutura", function () {
    var jsonData = pm.response.json();
    if (jsonData.results.length > 0) {
        var firstResult = jsonData.results[0];
        pm.expect(firstResult).to.have.property('title');
        pm.expect(firstResult).to.have.property('id');
    }
});

// ============================================================================
// 7. SCHEMA VALIDATION
// ============================================================================

// Validação de schema JSON
var schema = {
    "type": "object",
    "required": ["page", "results", "total_pages", "total_results"],
    "properties": {
        "page": {"type": "number"},
        "results": {
            "type": "array",
            "items": {
                "type": "object",
                "required": ["id", "title", "vote_average"],
                "properties": {
                    "id": {"type": "number"},
                    "title": {"type": "string"},
                    "vote_average": {"type": "number"}
                }
            }
        },
        "total_pages": {"type": "number"},
        "total_results": {"type": "number"}
    }
};

pm.test("Schema válido", function () {
    pm.response.to.have.jsonSchema(schema);
});

// ============================================================================
// 8. PRE-REQUEST SCRIPTS
// ============================================================================

// Setar variável antes da requisição (colocar na aba Pre-request Script)
pm.environment.set("current_timestamp", new Date().getTime());

// Gerar query aleatória
var randomQueries = ["Matrix", "Avatar", "Inception", "Interstellar"];
var randomQuery = randomQueries[Math.floor(Math.random() * randomQueries.length)];
pm.environment.set("search_query", randomQuery);

// ============================================================================
// 9. TESTES NEGATIVOS
// ============================================================================

// Validar erro 401
pm.test("Erro 401 - Unauthorized", function () {
    pm.response.to.have.status(401);
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(false);
    pm.expect(jsonData.status_code).to.eql(7);
});

// Validar erro 404
pm.test("Erro 404 - Not Found", function () {
    pm.response.to.have.status(404);
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.eql(false);
    pm.expect(jsonData.status_code).to.eql(34);
});

// ============================================================================
// 10. TESTES AVANÇADOS
// ============================================================================

// Comparar valores entre requisições
pm.test("Movie ID corresponde ao buscado", function () {
    var jsonData = pm.response.json();
    var expectedId = pm.environment.get("movie_id");
    pm.expect(jsonData.id.toString()).to.eql(expectedId);
});

// Validar formato de data
pm.test("Release date tem formato válido", function () {
    var jsonData = pm.response.json();
    var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    pm.expect(jsonData.release_date).to.match(dateRegex);
});

// Validar URL
pm.test("URL de review é válida", function () {
    var jsonData = pm.response.json();
    if (jsonData.results.length > 0) {
        var urlRegex = /^https?:\/\/.+/;
        pm.expect(jsonData.results[0].url).to.match(urlRegex);
    }
});

// ============================================================================
// 11. CONSOLE LOGGING PARA DEBUG
// ============================================================================

// Logar informações úteis
console.log("Response Time: " + pm.response.responseTime + "ms");
console.log("Status Code: " + pm.response.code);
console.log("Total Results: " + pm.response.json().total_results);

// Logar dados salvos
console.log("Movie ID: " + pm.environment.get("movie_id"));
console.log("Movie Title: " + pm.environment.get("movie_title"));

// ============================================================================
// 12. EXEMPLOS COMPLETOS POR ENDPOINT
// ============================================================================

// EXEMPLO 1: Search Movie
pm.test("Busca de filme - validação completa", function () {
    pm.response.to.have.status(200);
    pm.expect(pm.response.responseTime).to.be.below(2000);
    
    var jsonData = pm.response.json();
    pm.expect(jsonData.results).to.be.an('array');
    pm.expect(jsonData.results.length).to.be.above(0);
    
    var firstMovie = jsonData.results[0];
    pm.expect(firstMovie).to.have.property('id');
    pm.expect(firstMovie).to.have.property('title');
    pm.expect(firstMovie.vote_average).to.be.within(0, 10);
    
    // Salvar para próximas requisições
    pm.environment.set("movie_id", firstMovie.id);
});

// EXEMPLO 2: Movie Details
pm.test("Detalhes do filme - validação completa", function () {
    pm.response.to.have.status(200);
    
    var jsonData = pm.response.json();
    
    // Campos obrigatórios
    pm.expect(jsonData).to.have.property('id');
    pm.expect(jsonData).to.have.property('title');
    pm.expect(jsonData).to.have.property('budget');
    pm.expect(jsonData).to.have.property('revenue');
    pm.expect(jsonData).to.have.property('runtime');
    
    // Validações de tipo
    pm.expect(jsonData.budget).to.be.a('number');
    pm.expect(jsonData.runtime).to.be.a('number');
    pm.expect(jsonData.genres).to.be.an('array');
    
    // Validações de valor
    pm.expect(jsonData.runtime).to.be.above(0);
    pm.expect(jsonData.vote_average).to.be.within(0, 10);
});

// EXEMPLO 3: Movie Credits
pm.test("Elenco - validação completa", function () {
    pm.response.to.have.status(200);
    
    var jsonData = pm.response.json();
    
    // Arrays presentes
    pm.expect(jsonData.cast).to.be.an('array');
    pm.expect(jsonData.crew).to.be.an('array');
    
    // Validar primeiro ator
    if (jsonData.cast.length > 0) {
        var firstActor = jsonData.cast[0];
        pm.expect(firstActor).to.have.property('name');
        pm.expect(firstActor).to.have.property('character');
        pm.expect(firstActor).to.have.property('order');
        
        // Salvar para evidências
        pm.environment.set("first_actor", firstActor.name);
        console.log("Primeiro ator: " + firstActor.name + " como " + firstActor.character);
    }
});
