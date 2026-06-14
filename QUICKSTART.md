# 🚀 Início Rápido - TMDB API Testing

## ⏱️ Setup em 10 Minutos

### 1️⃣ Obter API Key (3 min)
1. Acesse: https://www.themoviedb.org/signup
2. Crie sua conta gratuita
3. Vá em: **Settings → API → Create → Developer**
4. Preencha o formulário simples
5. Copie sua **API Key (v3 auth)**

### 2️⃣ Instalar Postman (2 min)
1. Download: https://www.postman.com/downloads/
2. Instale e abra o Postman
3. Crie uma conta (ou use Google Sign-In)

### 3️⃣ Configurar Environment (2 min)
1. No Postman, click em "Environments" (canto superior direito)
2. Click em "+" para novo environment
3. Nome: `TMDB - Development`
4. Adicione as variáveis:

```
base_url = https://api.themoviedb.org/3
api_key = SUA_API_KEY_AQUI (marque como "secret")
language = pt-BR
```

5. Salve o environment
6. Selecione-o no dropdown do topo

### 4️⃣ Criar Primeira Requisição (3 min)
1. Click em "Collections" → "+" → "New Collection"
2. Nome: `TMDB API Tests`
3. Dentro dela, click "Add Request"
4. Configure:
   - Nome: `Validar API Key`
   - Method: `GET`
   - URL: `{{base_url}}/authentication?api_key={{api_key}}`
5. Click em "Send"
6. Se ver `"success": true` → **Funcionou!** 🎉

---

## 🎯 Próximos Passos

### Opção A: Seguir Tutorial Completo
👉 Leia: `docs/POSTMAN_SETUP.md`
- Configuração detalhada de todas as 10 requisições
- Scripts de teste completos
- Explicações passo a passo

### Opção B: Importar Collection Pronta
📥 (Se você recebeu o arquivo JSON)
1. No Postman: `Import` → Selecione o arquivo
2. Configure seu Environment com a API Key
3. Execute via Collection Runner

### Opção C: Usar Exemplos de Código
💻 Veja: `scripts/test_examples.js`
- Exemplos de todos os tipos de teste
- Copie e cole nos seus requests
- Adapte conforme necessário

---

## 📋 Fluxo de Trabalho Recomendado

### Dia 1: Setup e Básico
- [ ] Obter API Key
- [ ] Configurar Postman
- [ ] Criar 3 requisições básicas:
  - Validar API Key
  - Buscar filme
  - Obter detalhes

### Dia 2: Testes Avançados
- [ ] Adicionar scripts de teste
- [ ] Implementar encadeamento de variáveis
- [ ] Criar testes negativos

### Dia 3: Completar Collection
- [ ] Adicionar endpoints de elenco, recomendações, reviews
- [ ] Testar paginação
- [ ] Executar Collection Runner completo

### Dia 4: Evidências e Documentação
- [ ] Capturar screenshots
- [ ] Gerar relatórios
- [ ] Organizar evidências
- [ ] Atualizar README

### Dia 5: GitHub e Apresentação
- [ ] Criar repositório no GitHub
- [ ] Commitar todo o projeto
- [ ] Preparar apresentação
- [ ] Revisar tudo

---

## 🧪 Teste Rápido dos Endpoints

### 1. Authentication
```
GET {{base_url}}/authentication?api_key={{api_key}}
```
Espera: `"success": true`

### 2. Search Movie
```
GET {{base_url}}/search/movie?api_key={{api_key}}&query=Matrix
```
Espera: Array de filmes com "Matrix" no título

### 3. Movie Details
```
GET {{base_url}}/movie/603?api_key={{api_key}}
```
(603 = The Matrix)
Espera: Detalhes completos do filme

### 4. Movie Credits
```
GET {{base_url}}/movie/603/credits?api_key={{api_key}}
```
Espera: Arrays de `cast` e `crew`

### 5. Recommendations
```
GET {{base_url}}/movie/603/recommendations?api_key={{api_key}}
```
Espera: Filmes similares a Matrix

### 6. Reviews
```
GET {{base_url}}/movie/603/reviews?api_key={{api_key}}
```
Espera: Avaliações de usuários

---

## 💡 Scripts de Teste Essenciais

### Validar Status 200
```javascript
pm.test("Status code é 200", function () {
    pm.response.to.have.status(200);
});
```

### Verificar Campo Existe
```javascript
pm.test("Campo 'title' existe", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('title');
});
```

### Salvar Variável
```javascript
pm.test("Salvar movie_id", function () {
    var jsonData = pm.response.json();
    pm.environment.set("movie_id", jsonData.results[0].id);
});
```

### Validar Array
```javascript
pm.test("Results é array não vazio", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.results).to.be.an('array');
    pm.expect(jsonData.results.length).to.be.above(0);
});
```

---

## 🐛 Troubleshooting Rápido

### ❌ Erro 401 - Invalid API Key
**Causa:** API Key incorreta ou não configurada  
**Solução:** 
- Verifique se copiou a chave completa
- Confirme que está usando a v3 API Key
- Aguarde alguns minutos após criar (pode demorar)

### ❌ Variável {{movie_id}} não resolve
**Causa:** Environment não selecionado ou variável não salva  
**Solução:**
- Verifique se o environment está selecionado no dropdown
- Execute a busca de filme primeiro para salvar o ID
- Veja no Console se há erros no script

### ❌ Request timeout
**Causa:** Problema de conexão  
**Solução:**
- Verifique sua internet
- Tente novamente (pode ser temporário)
- Aumente o timeout em Settings

### ❌ Testes não executam
**Causa:** Script com erro de sintaxe  
**Solução:**
- Abra o Console (Ctrl+Alt+C)
- Veja mensagens de erro
- Verifique pontos e vírgulas, chaves, parênteses

---

## 📚 Recursos Úteis

### Documentação
- 📖 [TMDB API Docs](https://developers.themoviedb.org/3)
- 📖 [Postman Learning](https://learning.postman.com/)
- 📄 `docs/API_ENDPOINTS.md` - Lista completa de endpoints
- 📄 `docs/TEST_CASES.md` - Casos de teste detalhados

### Exemplos
- 💻 `scripts/test_examples.js` - Scripts prontos para copiar
- 📋 `docs/POSTMAN_SETUP.md` - Tutorial passo a passo completo

### Templates
- 🔧 `environments/TMDB_Environment.template.json` - Environment pronto

---

## ✅ Checklist Mínimo para Entrega

- [ ] Collection com pelo menos 8 requisições
- [ ] Environment configurado
- [ ] Testes automatizados funcionando
- [ ] Encadeamento de variáveis (busca → detalhes)
- [ ] Pelo menos 1 teste negativo
- [ ] Collection Runner executado com sucesso
- [ ] 3-5 screenshots de evidências
- [ ] README.md com instruções
- [ ] Código no GitHub
- [ ] API Key removida dos arquivos versionados

---

## 🎓 O que Você Vai Aprender

✅ Fazer requisições HTTP (GET)  
✅ Trabalhar com APIs REST  
✅ Autenticação via API Key  
✅ Escrever testes automatizados  
✅ Usar variáveis de ambiente  
✅ Encadear requisições  
✅ Validar JSON responses  
✅ Criar testes positivos e negativos  
✅ Gerar evidências de teste  
✅ Documentar projetos de teste  
✅ Versionar código com Git  

---

## 🎯 Meta de Aprendizado

Ao final deste projeto, você deve ser capaz de:

1. **Configurar** uma collection Postman do zero
2. **Criar** testes automatizados com assertions
3. **Implementar** encadeamento de requisições
4. **Validar** responses de API
5. **Gerar** evidências e documentação
6. **Apresentar** resultados de forma profissional

---

## 💬 Precisa de Ajuda?

1. Consulte a documentação completa em `docs/`
2. Veja exemplos em `scripts/test_examples.js`
3. Revise o `README.md` principal
4. Consulte a [documentação oficial da TMDB](https://developers.themoviedb.org/3)
5. Use o [Postman Community](https://community.postman.com/)

---

**Boa sorte com seu projeto! 🚀**

Lembre-se: O objetivo não é apenas completar a tarefa, mas **aprender** e **demonstrar compreensão** de testes de API.
