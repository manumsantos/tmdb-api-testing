# 📸 Evidências de Execução

Esta pasta contém todas as evidências da execução dos testes.

## 📂 Estrutura

```
evidences/
├── screenshots/        [Capturas de tela dos testes]
├── test_reports/       [Relatórios HTML e JSON do Postman]
└── exports/            [Collections e Environments exportados]
```

## 📸 Screenshots (screenshots/)

Organize os prints com nomes descritivos:

### Nomenclatura Sugerida
- `01_collection_structure.png`
- `02_environment_config.png`
- `03_tc01_authentication_success.png`
- `04_tc02_authentication_failure.png`
- `05_tc03_search_movie_success.png`
- `06_tc03_console_movie_id_saved.png`
- `07_tc04_search_movie_empty.png`
- `08_tc05_pagination.png`
- `09_tc06_movie_details.png`
- `10_tc07_movie_not_found.png`
- `11_tc08_movie_credits.png`
- `12_tc09_recommendations.png`
- `13_tc10_reviews.png`
- `14_runner_configuration.png`
- `15_runner_results_summary.png`
- `16_environment_variables_after.png`
- `17_console_logs.png`

### O Que Capturar
Para cada teste:
- ✅ Request URL completa
- ✅ Response body (exemplo)
- ✅ Test Results tab (todos passando)
- ✅ Console logs (se relevante)
- ✅ Response time

---

## 📊 Test Reports (test_reports/)

### Collection Runner HTML Report
Após executar via Collection Runner:
1. Click em "Export Results"
2. Escolha formato: **HTML**
3. Salve como: `collection_runner_report_YYYYMMDD.html`

### Execution Logs
Copie do Console do Postman:
- Salve em: `execution_log_YYYYMMDD.txt`

### Summary Report
Crie um arquivo de texto com resumo:
- Nome: `test_summary_YYYYMMDD.md`
- Conteúdo: Ver template no `docs/EVIDENCES.md`

---

## 📦 Exports (exports/)

### Collection Export
1. Click direito na Collection
2. "Export"
3. Formato: Collection v2.1
4. Salvar como: `TMDB_API_Tests_final.postman_collection.json`

### Environment Export
1. Click no Environment
2. Menu "..." → "Export"
3. **Importante:** Remova a API Key antes de salvar!
4. Salvar como: `TMDB_Environment_final.postman_environment.json`

---

## ✅ Checklist de Evidências

### Obrigatórias
- [ ] Collection structure screenshot
- [ ] Environment configuration screenshot
- [ ] Pelo menos 1 screenshot de cada TC (10 no total)
- [ ] Collection Runner results screenshot
- [ ] Collection Runner HTML report
- [ ] Collection JSON exportada
- [ ] Environment template exportado (sem API Key)

### Recomendadas
- [ ] Console logs screenshot
- [ ] Environment variables após execução
- [ ] Execution log em texto
- [ ] Test summary em markdown

### Opcionais
- [ ] Video da demo (mp4)
- [ ] GIF animado de execução
- [ ] Screenshots de testes negativos em destaque

---

## 📋 Como Organizar

### Durante os Testes
1. Execute cada teste individualmente primeiro
2. Capture screenshot de cada um
3. Anote observações em arquivo separado

### Depois da Execução Completa
1. Execute Collection Runner
2. Capture screenshot dos resultados
3. Exporte relatório HTML
4. Copie console logs
5. Exporte Collection e Environment

### Antes de Versionar
1. Verifique que não há API Keys nos arquivos
2. Organize por nome/data
3. Crie um índice (lista de arquivos)
4. Revise completude

---

## 🔒 Segurança

### ⚠️ NUNCA versionar:
- ❌ API Keys reais
- ❌ Tokens de autenticação
- ❌ Credenciais de qualquer tipo
- ❌ Dados sensíveis em screenshots

### ✅ Antes de Commitar:
- Busque por "api_key" em todos os arquivos
- Revise screenshots para dados sensíveis
- Use o template de environment (sem chave)
- Verifique o .gitignore

---

## 📸 Dicas de Captura

### Para Screenshots Profissionais
1. Use alta resolução
2. Capture tela inteira para contexto
3. Destaque áreas importantes (opcional)
4. Data/hora visível
5. Nomenclatura clara

### Para Relatórios
1. Exporte imediatamente após execução
2. Não espere para exportar (dados podem perder)
3. Salve múltiplas versões se executar várias vezes
4. Inclua data no nome do arquivo

---

## 📊 Estrutura de Entrega

Ao finalizar, sua pasta `evidences/` deve ter:

```
evidences/
├── README.md (este arquivo)
├── screenshots/
│   ├── 01_collection_structure.png
│   ├── 02_environment_config.png
│   ├── ... (15-20 screenshots)
│   └── 17_console_logs.png
├── test_reports/
│   ├── collection_runner_report_20260614.html
│   ├── execution_log_20260614.txt
│   └── test_summary_20260614.md
└── exports/
    ├── TMDB_API_Tests_final.postman_collection.json
    └── TMDB_Environment_final.postman_environment.json
```

---

## 🎯 Objetivo das Evidências

As evidências servem para:
1. **Comprovar** que os testes foram executados
2. **Demonstrar** que os testes passaram
3. **Documentar** o processo de teste
4. **Apoiar** a apresentação ao líder
5. **Registrar** o trabalho realizado

---

## 💡 Como Usar na Apresentação

### Durante a Demo
- Tenha as screenshots em pasta separada
- Use como backup se algo falhar
- Mostre diferentes ângulos do mesmo teste

### Nos Slides
- Insira screenshots relevantes
- Destaque resultados (círculos, setas)
- Mostre progression (antes/depois)

### No Relatório Final
- Anexe todas as evidências
- Crie índice de figuras
- Referencie nos casos de teste

---

## 📞 Referências

Para mais detalhes sobre evidências, consulte:
- [`docs/EVIDENCES.md`](../docs/EVIDENCES.md) - Guia completo
- [`PRESENTATION_GUIDE.md`](../PRESENTATION_GUIDE.md) - Como usar nas apresentações
- [`CHECKLIST.md`](../CHECKLIST.md) - Verificações de evidências

---

**Importante:** Esta pasta será populada durante a execução dos testes. Por enquanto está vazia, mas seguindo os guias você terá tudo documentado! 📸✨
