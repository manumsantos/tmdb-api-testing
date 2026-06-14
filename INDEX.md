# 📑 Índice do Projeto - TMDB API Testing

## 📖 Guia de Navegação

Este documento serve como índice central de todos os recursos do projeto. Use-o para navegar rapidamente entre os diferentes documentos e encontrar o que precisa.

---

## 🚀 Por Onde Começar?

### Novo no Projeto?
1. Leia: [`QUICKSTART.md`](QUICKSTART.md) - Setup em 10 minutos
2. Depois: [`README.md`](README.md) - Visão geral completa

### Vai Implementar?
1. Siga: [`docs/POSTMAN_SETUP.md`](docs/POSTMAN_SETUP.md) - Tutorial passo a passo
2. Use: [`CHECKLIST.md`](CHECKLIST.md) - Não esqueça nada

### Vai Apresentar?
1. Consulte: [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md) - Guia completo
2. Organize: [`docs/EVIDENCES.md`](docs/EVIDENCES.md) - Evidências

---

## 📂 Estrutura do Projeto

```
TMDB_API_Testing/
│
├── 📄 README.md ⭐ [Documentação principal]
├── 📄 QUICKSTART.md ⚡ [Início rápido]
├── 📄 CHECKLIST.md ✅ [Lista completa de tarefas]
├── 📄 INDEX.md 📑 [Este arquivo]
├── 📄 PRESENTATION_GUIDE.md 🎤 [Guia de apresentação]
├── 📄 .gitignore 🔒 [Arquivos ignorados]
│
├── 📂 docs/ [Documentação detalhada]
│   ├── API_ENDPOINTS.md 🔌 [Referência da API]
│   ├── TEST_CASES.md 🧪 [Casos de teste]
│   ├── POSTMAN_SETUP.md ⚙️ [Tutorial Postman]
│   └── EVIDENCES.md 📸 [Guia de evidências]
│
├── 📂 collections/ [Arquivos Postman]
│   └── TMDB_API_Tests.postman_collection.json
│
├── 📂 environments/ [Configurações]
│   └── TMDB_Environment.template.json
│
├── 📂 scripts/ [Exemplos de código]
│   └── test_examples.js 💻 [Scripts de teste]
│
└── 📂 evidences/ [Evidências de execução]
    ├── screenshots/ [Imagens]
    ├── test_reports/ [Relatórios]
    └── exports/ [Exports JSON]
```

---

## 📚 Documentos por Propósito

### 🎯 Começar o Projeto

| Documento | Propósito | Tempo |
|-----------|-----------|-------|
| [`QUICKSTART.md`](QUICKSTART.md) | Setup inicial rápido | 10 min |
| [`README.md`](README.md) | Visão geral e contexto | 15 min |
| [`docs/POSTMAN_SETUP.md`](docs/POSTMAN_SETUP.md) | Tutorial completo | 1-2h |

### 📖 Referência Técnica

| Documento | Conteúdo | Quando Usar |
|-----------|----------|-------------|
| [`docs/API_ENDPOINTS.md`](docs/API_ENDPOINTS.md) | Documentação completa da API | Implementar requests |
| [`docs/TEST_CASES.md`](docs/TEST_CASES.md) | Especificação de testes | Criar testes |
| [`scripts/test_examples.js`](scripts/test_examples.js) | Exemplos de código | Copiar scripts |

### ✅ Execução e Controle

| Documento | Propósito | Quando Usar |
|-----------|-----------|-------------|
| [`CHECKLIST.md`](CHECKLIST.md) | Lista completa de tarefas | Durante todo projeto |
| [`docs/EVIDENCES.md`](docs/EVIDENCES.md) | Como capturar evidências | Antes de executar |

### 🎤 Apresentação

| Documento | Conteúdo | Quando Usar |
|-----------|----------|-------------|
| [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md) | Guia completo de apresentação | Preparar demo |

---

## 🗺️ Fluxo de Trabalho Recomendado

### Fase 1: Setup (Dia 1)
1. ✅ [`QUICKSTART.md`](QUICKSTART.md) → Setup inicial
2. ✅ [`README.md`](README.md) → Entender o projeto
3. ✅ Obter API Key da TMDB
4. ✅ Instalar Postman

### Fase 2: Implementação (Dias 2-3)
1. ✅ [`docs/POSTMAN_SETUP.md`](docs/POSTMAN_SETUP.md) → Criar collection
2. ✅ [`docs/API_ENDPOINTS.md`](docs/API_ENDPOINTS.md) → Referência
3. ✅ [`docs/TEST_CASES.md`](docs/TEST_CASES.md) → Casos de teste
4. ✅ [`scripts/test_examples.js`](scripts/test_examples.js) → Scripts
5. ✅ [`CHECKLIST.md`](CHECKLIST.md) → Acompanhar progresso

### Fase 3: Evidências (Dia 4)
1. ✅ [`docs/EVIDENCES.md`](docs/EVIDENCES.md) → Guia de evidências
2. ✅ Executar testes e capturar screenshots
3. ✅ Exportar relatórios
4. ✅ [`CHECKLIST.md`](CHECKLIST.md) → Validar completude

### Fase 4: GitHub (Dia 4-5)
1. ✅ Criar repositório
2. ✅ Commitar código
3. ✅ Atualizar [`README.md`](README.md) com seu perfil
4. ✅ Verificar [`CHECKLIST.md`](CHECKLIST.md)

### Fase 5: Apresentação (Dia 5)
1. ✅ [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md) → Preparar slides
2. ✅ Ensaiar demo
3. ✅ Revisar [`CHECKLIST.md`](CHECKLIST.md)
4. ✅ Apresentar!

---

## 📖 Descrição Detalhada dos Documentos

### 📄 [`README.md`](README.md)
**O que é:** Documentação principal do projeto  
**Conteúdo:**
- Visão geral do projeto
- Objetivos de aprendizado
- Fluxo de testes
- Como usar
- Estrutura do projeto
- Casos de teste (tabela resumida)
- Tecnologias
- Recursos adicionais

**Quando usar:** Primeira leitura, referência geral

---

### ⚡ [`QUICKSTART.md`](QUICKSTART.md)
**O que é:** Guia de início rápido (10 minutos)  
**Conteúdo:**
- Setup em 4 passos
- Teste rápido dos endpoints
- Scripts essenciais
- Troubleshooting
- Checklist mínimo

**Quando usar:** Começar do zero rapidamente

---

### ✅ [`CHECKLIST.md`](CHECKLIST.md)
**O que é:** Lista completa de verificação  
**Conteúdo:**
- Setup inicial
- Configuração Postman
- Requisições e testes (10 casos)
- Validações
- Evidências
- GitHub
- Apresentação
- Cronograma

**Quando usar:** Durante todo o projeto para acompanhar progresso

---

### 🎤 [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md)
**O que é:** Guia completo de apresentação  
**Conteúdo:**
- Estrutura slide-por-slide
- Timing sugerido
- O que falar em cada slide
- Script da demo ao vivo
- Perguntas frequentes e respostas
- Dicas de apresentação
- Checklist pré-apresentação

**Quando usar:** Preparar a apresentação ao líder

---

### 🔌 [`docs/API_ENDPOINTS.md`](docs/API_ENDPOINTS.md)
**O que é:** Documentação técnica da API TMDB  
**Conteúdo:**
- Base URL
- Autenticação
- Todos os 6 endpoints usados
- Parameters de cada endpoint
- Request examples
- Response examples (200, 401, 404)
- Rate limits

**Quando usar:** Implementar requests, entender estrutura

---

### 🧪 [`docs/TEST_CASES.md`](docs/TEST_CASES.md)
**O que é:** Especificação detalhada dos casos de teste  
**Conteúdo:**
- 10 casos de teste completos
- Objetivos
- Pré-condições
- Passos
- Resultados esperados
- Scripts de teste completos
- Resumo de cobertura

**Quando usar:** Implementar testes, entender validações

---

### ⚙️ [`docs/POSTMAN_SETUP.md`](docs/POSTMAN_SETUP.md)
**O que é:** Tutorial passo-a-passo completo do Postman  
**Conteúdo:**
- Como criar collection
- Como configurar environment
- Cada uma das 10 requisições detalhadas
- Scripts de teste para copiar
- Como executar
- Dicas e troubleshooting

**Quando usar:** Implementar no Postman pela primeira vez

---

### 📸 [`docs/EVIDENCES.md`](docs/EVIDENCES.md)
**O que é:** Guia para captura e organização de evidências  
**Conteúdo:**
- Tipos de evidências
- Checklist de screenshots
- Como capturar
- Como exportar relatórios
- Como documentar variáveis
- Estrutura de arquivos
- Template de relatório
- Estrutura de apresentação

**Quando usar:** Antes de executar testes finais, ao documentar

---

### 💻 [`scripts/test_examples.js`](scripts/test_examples.js)
**O que é:** Biblioteca de exemplos de scripts de teste  
**Conteúdo:**
- Testes básicos (status, response time)
- Validação de estrutura JSON
- Validação de valores
- Salvamento de variáveis
- Loops em arrays
- Validação condicional
- Schema validation
- Pre-request scripts
- Testes negativos
- Exemplos completos por endpoint

**Quando usar:** Copiar código, aprender sintaxe, referência rápida

---

### 🔒 [`.gitignore`](.gitignore)
**O que é:** Arquivo de configuração Git  
**Conteúdo:**
- Arquivos a ignorar (API keys, logs, etc.)

**Quando usar:** Ao criar repositório Git

---

### 📦 [`collections/TMDB_API_Tests.postman_collection.json`](collections/TMDB_API_Tests.postman_collection.json)
**O que é:** Collection exportada do Postman  
**Quando usar:** Importar no Postman, versionar, compartilhar

---

### 🔧 [`environments/TMDB_Environment.template.json`](environments/TMDB_Environment.template.json)
**O que é:** Template de environment (sem API Key)  
**Quando usar:** Setup inicial, versionar sem expor credenciais

---

## 🎯 Casos de Uso Rápidos

### "Preciso começar AGORA"
→ [`QUICKSTART.md`](QUICKSTART.md)

### "Como faço X no Postman?"
→ [`docs/POSTMAN_SETUP.md`](docs/POSTMAN_SETUP.md)

### "Qual é o formato do endpoint Y?"
→ [`docs/API_ENDPOINTS.md`](docs/API_ENDPOINTS.md)

### "Como escrevo este teste?"
→ [`scripts/test_examples.js`](scripts/test_examples.js)

### "O que ainda falta fazer?"
→ [`CHECKLIST.md`](CHECKLIST.md)

### "Como capturo evidências?"
→ [`docs/EVIDENCES.md`](docs/EVIDENCES.md)

### "Como preparo a apresentação?"
→ [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md)

### "Qual o contexto geral?"
→ [`README.md`](README.md)

---

## 📊 Estatísticas do Projeto

### Documentação
- **11 arquivos** de documentação
- **~6000 linhas** de conteúdo
- **10 casos de teste** detalhados
- **50+ exemplos** de código

### Cobertura
- **6 endpoints** da TMDB API
- **10 casos de teste** (7 positivos, 3 negativos)
- **40+ validações** implementadas
- **100%** de sucesso esperado

### Tempo Estimado
- **Setup:** 10-30 minutos
- **Implementação:** 6-10 horas
- **Evidências:** 2-4 horas
- **Apresentação:** 2-3 horas
- **Total:** 10-15 horas

---

## 🔗 Links Externos Úteis

### TMDB
- [TMDB Website](https://www.themoviedb.org/)
- [TMDB API Documentation](https://developers.themoviedb.org/3)
- [TMDB API Status](https://status.themoviedb.org/)

### Postman
- [Postman Download](https://www.postman.com/downloads/)
- [Postman Learning Center](https://learning.postman.com/)
- [Postman Community](https://community.postman.com/)

### Ferramentas
- [Git Download](https://git-scm.com/downloads)
- [GitHub](https://github.com/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 💡 Dicas de Navegação

### Leitura Linear (Aprendizado)
Se está aprendendo, leia nesta ordem:
1. `README.md` - Contexto
2. `QUICKSTART.md` - Setup rápido
3. `docs/POSTMAN_SETUP.md` - Tutorial completo
4. `docs/TEST_CASES.md` - Entender testes
5. `scripts/test_examples.js` - Ver exemplos
6. `CHECKLIST.md` - Acompanhar
7. `docs/EVIDENCES.md` - Documentar
8. `PRESENTATION_GUIDE.md` - Apresentar

### Consulta Rápida (Referência)
Se precisa de algo específico, vá direto:
- Endpoint? → `docs/API_ENDPOINTS.md`
- Script? → `scripts/test_examples.js`
- Passo do Postman? → `docs/POSTMAN_SETUP.md`
- Evidência? → `docs/EVIDENCES.md`

### Implementação (Fazer)
Se vai fazer o projeto agora:
1. `QUICKSTART.md` - Começar
2. `docs/POSTMAN_SETUP.md` + `CHECKLIST.md` - Implementar
3. `docs/EVIDENCES.md` - Documentar
4. `PRESENTATION_GUIDE.md` - Apresentar

---

## ✅ Como Usar Este Índice

1. **Salve como favorito** - Este é seu ponto central
2. **Comece pelo propósito** - O que você quer fazer agora?
3. **Siga os links** - Navegue pelos documentos
4. **Use o CHECKLIST** - Acompanhe seu progresso
5. **Volte aqui** - Quando precisar de outro documento

---

## 🎓 Objetivos de Aprendizado

Após completar este projeto usando todos os documentos, você saberá:

✅ Configurar e usar o Postman profissionalmente  
✅ Testar APIs REST com validações completas  
✅ Implementar encadeamento de requisições  
✅ Criar testes positivos e negativos  
✅ Documentar projetos de teste  
✅ Capturar e organizar evidências  
✅ Versionar código com Git/GitHub  
✅ Apresentar resultados técnicos  

---

## 📞 Próximos Passos

1. **Se é primeira vez:** Comece pelo [`QUICKSTART.md`](QUICKSTART.md)
2. **Se quer entender tudo:** Leia o [`README.md`](README.md)
3. **Se vai implementar agora:** Abra [`CHECKLIST.md`](CHECKLIST.md) e [`docs/POSTMAN_SETUP.md`](docs/POSTMAN_SETUP.md)
4. **Se vai apresentar:** Consulte [`PRESENTATION_GUIDE.md`](PRESENTATION_GUIDE.md)

---

**Bom projeto! 🚀**

_Este índice foi criado para facilitar sua navegação. Marque-o como favorito e use como ponto de partida sempre que precisar._
