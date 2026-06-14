# ✅ Checklist Completo - TMDB API Testing Project

## 📋 Setup Inicial

### Configuração da API
- [ ] Conta criada na TMDB (themoviedb.org)
- [ ] API Key (v3) obtida
- [ ] API Key testada e validada
- [ ] Documentação da API revisada

### Ferramentas
- [ ] Postman instalado
- [ ] Conta Postman criada
- [ ] Git instalado
- [ ] Conta GitHub criada/configurada

---

## 🔧 Configuração do Postman

### Environment
- [ ] Environment criado: "TMDB - Development"
- [ ] Variável `base_url` configurada
- [ ] Variável `api_key` configurada (tipo: secret)
- [ ] Variável `language` configurada (pt-BR)
- [ ] Variáveis dinâmicas criadas:
  - [ ] `movie_id`
  - [ ] `movie_title`
  - [ ] `search_query`
  - [ ] `first_actor`
  - [ ] `page`

### Collection
- [ ] Collection criada: "TMDB API Tests"
- [ ] Description preenchida
- [ ] Pastas organizadas:
  - [ ] 1. Authentication
  - [ ] 2. Search Movie
  - [ ] 3. Movie Details
  - [ ] 4. Movie Credits
  - [ ] 5. Movie Recommendations
  - [ ] 6. Movie Reviews

---

## 🧪 Requisições e Testes

### 1. Authentication
- [ ] **TC01** - Validar API Key
  - [ ] Request configurado
  - [ ] Testes implementados
  - [ ] Executado com sucesso
  
- [ ] **TC02** - API Key Inválida (Negativo)
  - [ ] Request configurado
  - [ ] Testes implementados
  - [ ] Executado com sucesso

### 2. Search Movie
- [ ] **TC03** - Buscar Filme Existente
  - [ ] Request configurado
  - [ ] Testes implementados
  - [ ] movie_id sendo salvo
  - [ ] Executado com sucesso
  
- [ ] **TC04** - Buscar Filme Inexistente (Negativo)
  - [ ] Request configurado
  - [ ] Testes implementados
  - [ ] Executado com sucesso
  
- [ ] **TC05** - Buscar com Paginação
  - [ ] Request configurado
  - [ ] Testes implementados
  - [ ] Executado com sucesso

### 3. Movie Details
- [ ] **TC06** - Obter Detalhes com ID Válido
  - [ ] Request configurado
  - [ ] Usa {{movie_id}} do teste anterior
  - [ ] Testes implementados
  - [ ] Executado com sucesso
  
- [ ] **TC07** - ID Inválido (Negativo)
  - [ ] Request configurado
  - [ ] Testes implementados
  - [ ] Executado com sucesso

### 4. Movie Credits
- [ ] **TC08** - Buscar Elenco
  - [ ] Request configurado
  - [ ] Usa {{movie_id}} do teste anterior
  - [ ] Testes implementados
  - [ ] first_actor sendo salvo
  - [ ] Executado com sucesso

### 5. Movie Recommendations
- [ ] **TC09** - Buscar Recomendações
  - [ ] Request configurado
  - [ ] Usa {{movie_id}} do teste anterior
  - [ ] Testes implementados
  - [ ] Executado com sucesso

### 6. Movie Reviews
- [ ] **TC10** - Buscar Avaliações
  - [ ] Request configurado
  - [ ] Usa {{movie_id}} do teste anterior
  - [ ] Testes implementados
  - [ ] Executado com sucesso

---

## ✨ Validações nos Testes

### Testes Básicos (em todos)
- [ ] Status code validado
- [ ] Response time < 2000ms
- [ ] Content-Type validado
- [ ] Response body não vazio

### Testes de Estrutura
- [ ] Campos obrigatórios presentes
- [ ] Tipos de dados corretos
- [ ] Arrays validados
- [ ] Objetos aninhados verificados

### Testes de Valor
- [ ] Ranges validados (ex: vote_average 0-10)
- [ ] Valores esperados confirmados
- [ ] Formatos validados (datas, URLs)

### Encadeamento
- [ ] movie_id salvo corretamente
- [ ] movie_id usado em requests subsequentes
- [ ] movie_title salvo
- [ ] first_actor salvo
- [ ] Console logs confirmam salvamento

---

## 📊 Execução e Resultados

### Testes Individuais
- [ ] Todos os 10 casos executados individualmente
- [ ] Todos passando (10/10)
- [ ] Environment atualizado após execução
- [ ] Console logs verificados

### Collection Runner
- [ ] Collection executada no Runner
- [ ] Ordem correta de execução
- [ ] 100% de sucesso
- [ ] Tempo total registrado
- [ ] Relatório HTML exportado

---

## 📸 Evidências

### Screenshots Obrigatórios
- [ ] 01 - Estrutura da collection completa
- [ ] 02 - Environment configurado
- [ ] 03 - TC01 - Authentication success
- [ ] 04 - TC02 - Authentication failure (401)
- [ ] 05 - TC03 - Search com resultados
- [ ] 06 - TC03 - Console mostrando movie_id salvo
- [ ] 07 - TC04 - Search sem resultados
- [ ] 08 - TC06 - Movie details completo
- [ ] 09 - TC07 - Movie not found (404)
- [ ] 10 - TC08 - Credits com cast
- [ ] 11 - TC09 - Recommendations
- [ ] 12 - TC10 - Reviews
- [ ] 13 - Collection Runner configuração
- [ ] 14 - Collection Runner resultados
- [ ] 15 - Environment após execução

### Relatórios
- [ ] Collection Runner HTML exportado
- [ ] Execution log salvo
- [ ] Summary em texto criado

### Exports
- [ ] Collection JSON exportada
- [ ] Environment template exportado (sem API Key)

---

## 📁 Estrutura do Projeto

### Arquivos Criados
- [ ] `README.md` - Documentação principal
- [ ] `QUICKSTART.md` - Guia rápido
- [ ] `CHECKLIST.md` - Este arquivo
- [ ] `.gitignore` - Ignorar arquivos sensíveis

### Pasta docs/
- [ ] `API_ENDPOINTS.md` - Documentação dos endpoints
- [ ] `TEST_CASES.md` - Casos de teste detalhados
- [ ] `POSTMAN_SETUP.md` - Tutorial Postman
- [ ] `EVIDENCES.md` - Guia de evidências

### Pasta collections/
- [ ] `TMDB_API_Tests.postman_collection.json`

### Pasta environments/
- [ ] `TMDB_Environment.template.json`

### Pasta scripts/
- [ ] `test_examples.js` - Exemplos de testes

### Pasta evidences/
- [ ] `screenshots/` - Com 15+ imagens
- [ ] `test_reports/` - Com relatórios HTML
- [ ] `exports/` - Com JSONs exportados

---

## 🔐 Segurança

### Antes de Commitar
- [ ] API Key removida de todos os arquivos
- [ ] Environment usa template (sem chave real)
- [ ] .gitignore configurado corretamente
- [ ] Nenhum dado sensível nos screenshots
- [ ] Variáveis do tipo "secret" no Postman

### Verificação Final
- [ ] Busca por "api_key" no código
- [ ] Nenhuma credencial hard-coded
- [ ] Environment template tem placeholder

---

## 📦 GitHub

### Repositório
- [ ] Repositório criado
- [ ] Nome descritivo: `tmdb-api-testing`
- [ ] Description preenchida
- [ ] README.md visível
- [ ] .gitignore funcionando

### Commits
- [ ] Commit inicial com estrutura
- [ ] Commit com documentação
- [ ] Commit com collection
- [ ] Commit com evidências
- [ ] Mensagens descritivas

### Organização
- [ ] Arquivos organizados por pasta
- [ ] README principal completo
- [ ] Links internos funcionando
- [ ] Markdown bem formatado

---

## 🎤 Apresentação

### Preparação
- [ ] Slides criados (10-15 slides)
- [ ] Demo preparada
- [ ] Postman pronto para executar ao vivo
- [ ] Environment configurado
- [ ] Screenshots inseridos nos slides

### Conteúdo
- [ ] Slide 1: Introdução
- [ ] Slide 2: Objetivo e API escolhida
- [ ] Slide 3: Fluxo de testes
- [ ] Slide 4: Estrutura da collection
- [ ] Slide 5: Casos de teste (positivos)
- [ ] Slide 6: Casos de teste (negativos)
- [ ] Slide 7: Encadeamento de variáveis
- [ ] Slide 8: Resultados (Collection Runner)
- [ ] Slide 9: Evidências e documentação
- [ ] Slide 10: Aprendizados
- [ ] Slide 11: Repositório GitHub
- [ ] Slide 12: Conclusão

### Demo ao Vivo
- [ ] Mostrar estrutura no Postman
- [ ] Executar 1-2 requests manualmente
- [ ] Mostrar testes passando
- [ ] Mostrar variáveis sendo salvas
- [ ] Executar Collection Runner
- [ ] Mostrar relatório gerado

### Q&A
- [ ] Preparado para perguntas sobre:
  - [ ] Por que escolheu esta API?
  - [ ] Como funciona o encadeamento?
  - [ ] O que aprendeu?
  - [ ] Dificuldades encontradas?
  - [ ] Como tratou erros?

---

## 📝 Documentação Final

### README.md
- [ ] Título claro
- [ ] Badges (opcional)
- [ ] Descrição do projeto
- [ ] Objetivos listados
- [ ] Fluxo de testes explicado
- [ ] Pré-requisitos
- [ ] Instruções de instalação
- [ ] Como executar
- [ ] Estrutura do projeto
- [ ] Casos de teste (tabela)
- [ ] Evidências mencionadas
- [ ] Tecnologias usadas
- [ ] Recursos adicionais
- [ ] Autor e contatos
- [ ] Licença

### Documentação Técnica
- [ ] API endpoints documentados
- [ ] Casos de teste detalhados
- [ ] Scripts explicados
- [ ] Guias de setup completos

---

## 🎯 Critérios de Aceitação

### Técnicos
- [ ] Mínimo 8 requisições
- [ ] Pelo menos 1 teste negativo
- [ ] Encadeamento funcionando
- [ ] Testes automatizados
- [ ] 80%+ de sucesso

### Documentação
- [ ] README completo
- [ ] Evidências organizadas
- [ ] Código comentado
- [ ] Guias de uso

### Apresentação
- [ ] Demonstração clara
- [ ] Evidências mostradas
- [ ] Aprendizados articulados
- [ ] Perguntas respondidas

### Versionamento
- [ ] Código no GitHub
- [ ] Commits significativos
- [ ] Sem dados sensíveis
- [ ] Estrutura organizada

---

## 🏆 Diferenciais (Opcional)

- [ ] Newman (CLI) integrado
- [ ] CI/CD pipeline básico
- [ ] Testes de schema validation
- [ ] Mais de 10 casos de teste
- [ ] Documentação extra (Swagger/OpenAPI)
- [ ] Variáveis dinâmicas avançadas
- [ ] Pre-request scripts complexos
- [ ] Testes de performance
- [ ] Ambiente de produção configurado
- [ ] Video demo gravado

---

## ✅ Validação Final

### Auto-Revisão
- [ ] Reli todo o README
- [ ] Testei todas as instruções
- [ ] Verifiquei todos os links
- [ ] Revisei ortografia
- [ ] Confirmei que funciona do zero

### Teste com Outra Pessoa
- [ ] Alguém conseguiu seguir o README?
- [ ] Instruções estão claras?
- [ ] Falta alguma informação?
- [ ] Feedback incorporado

### Checklist do Líder
- [ ] Collection funcionando ✅
- [ ] Testes passando ✅
- [ ] Evidências completas ✅
- [ ] GitHub organizado ✅
- [ ] Apresentação clara ✅

---

## 📅 Cronograma Sugerido

### Dia 1 (2-3 horas)
- [ ] Setup completo
- [ ] 3-4 requisições básicas
- [ ] Primeiros testes

### Dia 2 (2-3 horas)
- [ ] Completar todas as requisições
- [ ] Implementar todos os testes
- [ ] Testar encadeamento

### Dia 3 (2-3 horas)
- [ ] Capturar evidências
- [ ] Criar documentação
- [ ] Organizar repositório

### Dia 4 (2-3 horas)
- [ ] Subir para GitHub
- [ ] Preparar apresentação
- [ ] Revisar tudo

### Dia 5 (1-2 horas)
- [ ] Últimas revisões
- [ ] Ensaiar apresentação
- [ ] Apresentar ao líder

**Total Estimado: 10-15 horas**

---

## 🎓 Aprendizados Esperados

Ao completar todos os itens deste checklist, você terá:

✅ Domínio de testes de API REST  
✅ Proficiência com Postman  
✅ Compreensão de autenticação via API Key  
✅ Habilidade de escrever testes automatizados  
✅ Experiência com encadeamento de requisições  
✅ Conhecimento de boas práticas de documentação  
✅ Familiaridade com Git e GitHub  
✅ Capacidade de apresentar trabalho técnico  

---

**Boa sorte! 🚀**

_Use este checklist para não esquecer nada e garantir um projeto completo e profissional._
