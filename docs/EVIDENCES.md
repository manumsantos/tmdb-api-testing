# Guia de Evidências - TMDB API Testing

## Objetivo
Este documento guia a captura e organização de evidências para demonstrar a execução e os resultados dos testes de API.

---

## 1. Tipos de Evidências

### 1.1 Screenshots
Capturas de tela demonstrando:
- Execução dos testes
- Resultados positivos e negativos
- Variáveis de ambiente configuradas
- Console logs relevantes

### 1.2 Relatórios do Postman
- Collection Runner Reports (HTML)
- Export de resultados JSON
- Estatísticas de execução

### 1.3 Logs e Outputs
- Console logs do Postman
- Requests e Responses completos
- Erros e warnings

### 1.4 Documentação
- Collection exportada
- Environment exportado (sem API Key)
- Changelog de alterações

---

## 2. Checklist de Evidências

### ✅ Antes da Execução

- [ ] Screenshot do Postman mostrando:
  - Collection completa com todas as requisições
  - Estrutura de pastas organizada
  - Environment configurado (com API Key mascarada)

- [ ] Exportar arquivos:
  - Collection JSON
  - Environment Template (sem API Key real)

### ✅ Durante a Execução

- [ ] Para cada teste bem-sucedido, capturar:
  - Request URL e parameters
  - Response body (exemplo representativo)
  - Test Results tab mostrando testes passando
  - Response time

- [ ] Para testes negativos, capturar:
  - Request que causa erro
  - Response de erro (status code e mensagem)
  - Validação do erro nos testes

- [ ] Console logs mostrando:
  - Variáveis sendo salvas
  - Valores encadeados entre requests
  - Informações de debug relevantes

### ✅ Collection Runner

- [ ] Screenshot da configuração do Runner:
  - Environment selecionado
  - Ordem de execução
  - Configurações de delay/iterations

- [ ] Screenshot dos resultados:
  - Summary view com estatísticas
  - Lista de todos os testes executados
  - % de sucesso
  - Tempo total de execução

- [ ] Exportar relatório HTML do Runner

### ✅ Casos Específicos

- [ ] **TC01 - Autenticação**: Mostrar success:true
- [ ] **TC03 - Buscar Filme**: Mostrar results array e movie_id sendo salvo
- [ ] **TC06 - Detalhes**: Mostrar dados completos do filme
- [ ] **TC08 - Elenco**: Mostrar cast array com atores
- [ ] **TC09 - Recomendações**: Mostrar filmes recomendados
- [ ] **TC10 - Reviews**: Mostrar avaliações de usuários

---

## 3. Estrutura de Arquivos de Evidências

```
evidences/
├── screenshots/
│   ├── 01_collection_structure.png
│   ├── 02_environment_config.png
│   ├── 03_tc01_authentication_success.png
│   ├── 04_tc02_authentication_failure.png
│   ├── 05_tc03_search_movie_success.png
│   ├── 06_tc04_search_movie_empty.png
│   ├── 07_tc05_pagination.png
│   ├── 08_tc06_movie_details.png
│   ├── 09_tc07_movie_not_found.png
│   ├── 10_tc08_movie_credits.png
│   ├── 11_tc09_recommendations.png
│   ├── 12_tc10_reviews.png
│   ├── 13_runner_configuration.png
│   ├── 14_runner_results_summary.png
│   └── 15_console_logs.png
│
├── test_reports/
│   ├── collection_runner_report.html
│   ├── test_results_summary.json
│   └── execution_log.txt
│
└── exports/
    ├── TMDB_API_Tests.postman_collection.json
    └── TMDB_Environment.template.json
```

---

## 4. Como Capturar Screenshots

### No Windows
- **Print Screen completo**: `PrtScn`
- **Janela ativa**: `Alt + PrtScn`
- **Área selecionada**: `Win + Shift + S`
- **Ferramenta Snipping**: `Win + Shift + S`

### Dicas
1. Certifique-se que a data/hora está visível
2. Capture a tela inteira para contexto
3. Destaque informações importantes (use edição)
4. Use nomes de arquivo descritivos
5. Organize por ordem de execução

---

## 5. Exportar Collection Runner Report

### Passo a Passo
1. Execute a collection via Collection Runner
2. Aguarde finalização completa
3. Click no botão "Export Results" no topo direito
4. Escolha formato: **HTML** (recomendado)
5. Salve em: `evidences/test_reports/`
6. Nomeie: `collection_runner_report_YYYYMMDD.html`

### Informações no Relatório
- Número total de testes
- Testes passados vs falhados
- Tempo de execução de cada request
- Detalhes de cada assertion
- Response codes

---

## 6. Documentar Variáveis de Ambiente

### Capturar Estado das Variáveis
Após execução completa:

1. Click no ícone do Environment (olho 👁️)
2. Expanda para ver todas as variáveis
3. Capture screenshot mostrando:
   - `movie_id` populado
   - `movie_title` populado
   - `first_actor` populado
   - Outras variáveis dinâmicas

### Tabela de Variáveis (para documentação)

| Variável | Valor Inicial | Valor Final | Observação |
|----------|---------------|-------------|------------|
| movie_id | (vazio) | 603 | Salvo no TC03 |
| movie_title | (vazio) | Matrix | Salvo no TC03 |
| first_actor | (vazio) | Keanu Reeves | Salvo no TC08 |

---

## 7. Console Logs Importantes

### Ativar Console
- Menu: View → Show Postman Console
- Atalho: `Ctrl + Alt + C` (Windows)

### O que Registrar
```
✓ Movie ID salvo: 603
✓ Título: Matrix
✓ Primeiro ator: Keanu Reeves
✓ Response Time: 458ms
✓ Total Results: 28
```

### Capturar
1. Execute cada requisição
2. Verifique os logs no Console
3. Capture screenshot do Console
4. Copie logs para arquivo .txt

---

## 8. Exemplo de Evidência Completa

### TC03 - Buscar Filme Existente

**Screenshot 1: Request e Response**
- URL: `https://api.themoviedb.org/3/search/movie?api_key=...&query=Matrix`
- Status: 200 OK
- Response Time: 458ms
- Response Body mostrando results array

**Screenshot 2: Test Results**
```
✓ Status code é 200
✓ Resultados encontrados
✓ Estrutura do resultado válida
✓ Salvar movie_id
✓ Validar tipos de dados
```

**Screenshot 3: Console Log**
```
Movie ID salvo: 603
Título: Matrix
```

**Screenshot 4: Environment Variables**
- movie_id: 603
- movie_title: "Matrix"

---

## 9. Relatório de Execução Textual

### Template
```
# Relatório de Execução - TMDB API Tests
Data: 14/06/2026
Executor: [Seu Nome]
Environment: TMDB - Development

## Resumo Executivo
- Total de Casos de Teste: 10
- Executados com Sucesso: 10
- Falhados: 0
- Taxa de Sucesso: 100%
- Tempo Total de Execução: 4.5s
- Tempo Médio por Request: 450ms

## Detalhamento por Caso de Teste

### TC01 - Validar API Key
- Status: ✅ PASSOU
- Status Code: 200
- Response Time: 432ms
- Observações: API Key validada com sucesso

### TC02 - API Key Inválida
- Status: ✅ PASSOU (teste negativo)
- Status Code: 401
- Response Time: 398ms
- Observações: Erro tratado corretamente

[... continuar para todos os casos ...]

## Variáveis Capturadas
- movie_id: 603
- movie_title: "Matrix"
- first_actor: "Keanu Reeves"

## Problemas Encontrados
- Nenhum

## Conclusão
Todos os testes executados com sucesso. A API está respondendo
conforme esperado para casos positivos e negativos.
```

---

## 10. Apresentação ao Líder

### Estrutura da Apresentação

#### Slide 1: Introdução
- Nome do projeto
- Objetivo
- API utilizada

#### Slide 2: Fluxo de Testes
- Diagrama do fluxo
- Endpoints testados
- Encadeamento de requisições

#### Slide 3: Estrutura da Collection
- Screenshot da organização
- Pastas e requisições
- Quantidade de testes

#### Slide 4: Resultados
- Screenshot do Collection Runner
- Estatísticas (100% sucesso)
- Tempo de execução

#### Slide 5: Casos Positivos
- Exemplos de testes bem-sucedidos
- Screenshots de responses
- Validações realizadas

#### Slide 6: Casos Negativos
- Testes de erro
- Tratamento de exceções
- Validação de mensagens

#### Slide 7: Encadeamento
- Demonstrar variáveis de ambiente
- Como dados fluem entre requests
- Exemplo: busca → detalhes → elenco

#### Slide 8: Evidências
- Organização dos arquivos
- Relatórios gerados
- Documentação criada

#### Slide 9: Aprendizados
- Conceitos aplicados
- Desafios encontrados
- Soluções implementadas

#### Slide 10: Conclusão
- Objetivos alcançados
- Repositório GitHub
- Próximos passos

---

## 11. Checklist Final

### Antes de Entregar

- [ ] Todos os testes executados e passando
- [ ] Screenshots capturados e organizados
- [ ] Relatórios exportados
- [ ] Collection e Environment exportados
- [ ] API Key removida dos arquivos versionados
- [ ] README.md completo
- [ ] Código commitado no GitHub
- [ ] Repositório público ou compartilhado
- [ ] Apresentação preparada
- [ ] Evidências compiladas em pasta única

### Arquivos para Entrega

1. **Repositório GitHub** com:
   - README.md
   - Collection JSON
   - Environment template
   - Documentação completa
   - Scripts de exemplo

2. **Pasta de Evidências** (ZIP ou compartilhada) com:
   - Screenshots organizados
   - Relatórios HTML
   - Logs e outputs
   - Apresentação (PPT/PDF)

3. **Apresentação ao Vivo**:
   - Demo executando os testes
   - Explicação do fluxo
   - Discussão dos resultados
   - Q&A

---

## 12. Dicas Finais

### Qualidade das Evidências
- Screenshots nítidos e legíveis
- Foco nas informações relevantes
- Contexto suficiente para entendimento
- Organização lógica

### Documentação
- Clara e objetiva
- Sem expor credenciais
- Com exemplos práticos
- Facilmente navegável

### Apresentação
- Seja objetivo
- Demonstre entendimento técnico
- Destaque os aprendizados
- Esteja preparado para perguntas

---

## Recursos Adicionais

- [Postman Learning Center - Documentation](https://learning.postman.com/docs/publishing-your-api/documenting-your-api/)
- [API Testing Best Practices](https://www.postman.com/api-platform/api-testing/)
- [Como fazer boas evidências de teste](https://www.ministryoftesting.com/dojo/lessons/how-to-report-bugs-effectively)
