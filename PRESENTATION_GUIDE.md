# 🎤 Guia de Apresentação - TMDB API Testing

## 📋 Estrutura da Apresentação (15-20 minutos)

### ⏱️ Timing Sugerido

| Seção | Tempo | Conteúdo |
|-------|-------|----------|
| Introdução | 2 min | Apresentação pessoal e contexto |
| Objetivo | 2 min | Por que este projeto |
| Arquitetura | 3 min | Fluxo e estrutura dos testes |
| Demo ao Vivo | 5-7 min | Execução dos testes |
| Resultados | 3 min | Evidências e métricas |
| Aprendizados | 2-3 min | O que foi aprendido |
| Conclusão | 1 min | Resumo e próximos passos |
| Q&A | 5 min | Perguntas |

---

## 📊 Slide por Slide

### Slide 1: Título
**Conteúdo:**
```
SISTEMA DE CONSULTA DE FILMES
Testes de API com TMDB (The Movie Database)

[Seu Nome]
[Data]
[Empresa/Projeto de Capacitação]
```

**O que falar:**
- "Bom dia/Boa tarde, meu nome é [Nome]"
- "Hoje vou apresentar meu projeto de testes de API"
- "Utilizei a API do The Movie Database para criar uma suite completa de testes"

---

### Slide 2: Contexto e Motivação
**Conteúdo:**
- 🎯 Objetivo: Aprender testes de API na prática
- 📚 Capacitação em QA/Testing
- 🚀 Aplicação real com ferramentas profissionais

**O que falar:**
- "Este projeto faz parte da capacitação em testes de API"
- "O objetivo era aplicar conceitos de forma prática e profissional"
- "Escolhi a TMDB API por ser bem documentada e amplamente utilizada"

---

### Slide 3: Por que TMDB?
**Conteúdo:**
- ✅ API RESTful completa e estável
- ✅ Documentação clara e exemplos
- ✅ Gratuita (sem cartão de crédito)
- ✅ Endpoints variados para diferentes testes
- ✅ Permite praticar encadeamento de requisições

**O que falar:**
- "A escolha da TMDB foi estratégica"
- "É uma API real, usada em produção por milhares de apps"
- "Oferece complexidade suficiente para demonstrar conceitos avançados"
- "E é gratuita, facilitando a replicação do projeto"

---

### Slide 4: Fluxo de Testes
**Conteúdo:**
Diagrama visual:
```
1. Autenticação
   ↓
2. Buscar Filme (salva movie_id)
   ↓
3. Obter Detalhes (usa movie_id)
   ↓
4. Buscar Elenco (usa movie_id)
   ↓
5. Recomendações (usa movie_id)
   ↓
6. Avaliações (usa movie_id)
```

**O que falar:**
- "O fluxo foi desenhado para simular um usuário real"
- "Começamos autenticando"
- "Buscamos um filme e salvamos o ID"
- "Esse ID é reutilizado nos próximos testes"
- "Isso demonstra encadeamento de requisições"

---

### Slide 5: Estrutura da Collection
**Conteúdo:**
Screenshot do Postman mostrando:
- Collection completa
- Pastas organizadas
- Número de requests (10)

**O que falar:**
- "Organizei tudo no Postman"
- "10 casos de teste divididos em 6 categorias"
- "Cada pasta agrupa testes relacionados"
- "Incluí testes positivos e negativos"

---

### Slide 6: Casos de Teste - Positivos
**Conteúdo:**
Tabela:
| ID | Caso de Teste | Status |
|----|---------------|--------|
| TC01 | Validar API Key | ✅ |
| TC03 | Buscar Filme | ✅ |
| TC06 | Detalhes do Filme | ✅ |
| TC08 | Buscar Elenco | ✅ |
| TC09 | Recomendações | ✅ |
| TC10 | Avaliações | ✅ |

**O que falar:**
- "Testes positivos validam o comportamento esperado"
- "Todos os endpoints principais foram cobertos"
- "Cada teste valida estrutura, tipos de dados e valores"

---

### Slide 7: Casos de Teste - Negativos
**Conteúdo:**
Tabela:
| ID | Caso de Teste | Status Esperado |
|----|---------------|-----------------|
| TC02 | API Key Inválida | 401 ✅ |
| TC04 | Filme Inexistente | 0 results ✅ |
| TC07 | ID Inválido | 404 ✅ |

**O que falar:**
- "Testes negativos são igualmente importantes"
- "Validam que erros são tratados corretamente"
- "Garantem que a API rejeita dados inválidos"
- "Status codes apropriados são retornados"

---

### Slide 8: Encadeamento de Variáveis
**Conteúdo:**
Screenshot mostrando:
- Environment variables
- movie_id populado
- Console log da extração

Código exemplo:
```javascript
// Salvar na busca
pm.environment.set("movie_id", 
    jsonData.results[0].id);

// Usar nos detalhes
GET /movie/{{movie_id}}
```

**O que falar:**
- "Um diferencial é o encadeamento automático"
- "Busco um filme e salvo o ID"
- "Esse ID é usado automaticamente nos próximos testes"
- "Simula um fluxo real de navegação"
- "Não preciso copiar e colar IDs manualmente"

---

### Slide 9: Validações Implementadas
**Conteúdo:**
Lista de validações:
- ✅ Status codes (200, 401, 404)
- ✅ Response time (< 2000ms)
- ✅ Estrutura JSON (campos obrigatórios)
- ✅ Tipos de dados (string, number, array)
- ✅ Ranges de valores (0-10 para ratings)
- ✅ Arrays não vazios
- ✅ Relacionamentos (cast, crew)

**O que falar:**
- "Cada teste tem múltiplas validações"
- "Não basta o status 200, valido a estrutura completa"
- "Tipos de dados, ranges, relacionamentos"
- "Performance também é validada"

---

### Slide 10: Demo ao Vivo 🎬
**Conteúdo:**
Apenas texto:
```
DEMONSTRAÇÃO AO VIVO
- Execução Manual de 1-2 Testes
- Collection Runner Completo
```

**O que fazer:**
1. **Abrir Postman** (já preparado)
2. **Mostrar estrutura** da collection
3. **Executar TC03** manualmente:
   - Click em "Send"
   - Mostrar response
   - Ir para aba "Test Results"
   - Mostrar console com movie_id salvo
4. **Executar TC06** (detalhes):
   - Mostrar URL usando {{movie_id}}
   - Click em "Send"
   - Mostrar response completo
5. **Abrir Collection Runner**:
   - Selecionar environment
   - Click em "Run"
   - Aguardar execução (15-30s)
   - Mostrar resultados: 10/10 passed

**O que falar durante:**
- "Vou executar um teste manualmente"
- "Aqui está a requisição, aqui a resposta"
- "Vejam os testes todos passando"
- "O ID foi salvo e está sendo usado aqui"
- "Agora vou rodar todos de uma vez"
- "100% de sucesso em X segundos"

---

### Slide 11: Resultados - Métricas
**Conteúdo:**
Screenshot do Collection Runner mostrando:
```
📊 Estatísticas
- Total de Testes: 10
- Executados: 10
- Passou: 10 (100%)
- Falhou: 0 (0%)
- Tempo Total: ~4.5s
- Tempo Médio: ~450ms
```

**O que falar:**
- "Aqui estão as métricas finais"
- "100% de sucesso em todos os testes"
- "Performance dentro do esperado"
- "Pronto para executar em pipeline de CI/CD"

---

### Slide 12: Evidências
**Conteúdo:**
Montagem com 3-4 screenshots pequenos:
- Collection structure
- Test results
- Console logs
- Runner report

**O que falar:**
- "Toda a execução foi documentada"
- "Screenshots de cada teste"
- "Relatórios em HTML exportados"
- "Console logs salvos"
- "Tudo versionado no GitHub"

---

### Slide 13: Documentação
**Conteúdo:**
Screenshot da estrutura do projeto:
```
📁 TMDB_API_Testing/
├── 📄 README.md
├── 📄 QUICKSTART.md
├── 📂 docs/
│   ├── API_ENDPOINTS.md
│   ├── TEST_CASES.md
│   └── POSTMAN_SETUP.md
├── 📂 collections/
├── 📂 environments/
├── 📂 scripts/
└── 📂 evidences/
```

**O que falar:**
- "Documentei tudo de forma profissional"
- "README completo com instruções"
- "Guia rápido para começar em 10 minutos"
- "Documentação técnica dos endpoints"
- "Tutorial passo a passo do Postman"

---

### Slide 14: Repositório GitHub
**Conteúdo:**
Screenshot do repositório ou link:
```
🔗 github.com/[seu-usuario]/tmdb-api-testing

✅ Código completo
✅ Documentação
✅ Evidências
✅ Collection Postman
✅ Scripts de exemplo
```

**O que falar:**
- "Todo o projeto está no GitHub"
- "Código aberto e versionado"
- "Qualquer pessoa pode clonar e executar"
- "Commits organizados por funcionalidade"
- "Sem dados sensíveis expostos"

---

### Slide 15: Aprendizados
**Conteúdo:**
Lista em bullet points:

**Técnicos:**
- ✅ APIs REST e métodos HTTP
- ✅ Autenticação via API Key
- ✅ Validação de JSON responses
- ✅ Testes automatizados com Postman
- ✅ Encadeamento de requisições
- ✅ Variáveis de ambiente

**Soft Skills:**
- ✅ Documentação técnica
- ✅ Organização de projeto
- ✅ Controle de versão (Git)
- ✅ Apresentação de resultados

**O que falar:**
- "Este projeto me ensinou muito"
- "Não só tecnicamente, mas também em organização"
- "Aprendi a documentar de forma clara"
- "A estruturar testes de forma lógica"
- "E a apresentar resultados de forma profissional"

---

### Slide 16: Desafios e Soluções
**Conteúdo:**
Tabela:

| Desafio | Solução |
|---------|---------|
| Encadeamento de IDs | Variáveis de ambiente + scripts |
| Filmes sem reviews | Validação condicional |
| Rate limiting | Delays entre requests |
| API Key exposure | .gitignore + templates |

**O que falar:**
- "Enfrentei alguns desafios"
- "O encadeamento exigiu entender bem o Postman"
- "Alguns filmes não têm reviews, então adaptei"
- "Aprendi a proteger dados sensíveis"

---

### Slide 17: Próximos Passos
**Conteúdo:**
- 🚀 Integrar com Newman (CLI)
- 🚀 Adicionar em pipeline CI/CD
- 🚀 Expandir casos de teste (POST, PUT, DELETE)
- 🚀 Implementar testes de carga
- 🚀 Criar monitores automáticos

**O que falar:**
- "Este é só o começo"
- "Posso expandir com testes de escrita (POST/PUT)"
- "Integrar em pipelines de CI/CD"
- "Automatizar execução periódica"
- "Adicionar testes de performance"

---

### Slide 18: Conclusão
**Conteúdo:**
```
✅ 10 Casos de Teste Implementados
✅ 100% de Sucesso na Execução
✅ Documentação Completa
✅ Projeto Versionado no GitHub
✅ Evidências Organizadas

OBJETIVO ALCANÇADO! 🎯
```

**O que falar:**
- "Resumindo, completei todos os objetivos"
- "10 testes, todos passando"
- "Documentação profissional"
- "Código no GitHub"
- "Projeto pronto para uso e expansão"

---

### Slide 19: Agradecimentos
**Conteúdo:**
```
OBRIGADO! 🙏

Dúvidas?

[Seu Nome]
📧 [email]
🔗 github.com/[usuario]
💼 linkedin.com/in/[perfil]
```

**O que falar:**
- "Muito obrigado pela atenção"
- "Estou aberto a perguntas"

---

## 🎯 Dicas para a Apresentação

### Preparação
- [ ] Ensaie pelo menos 2 vezes
- [ ] Teste a demo antecipadamente
- [ ] Tenha um backup (screenshots) se a demo falhar
- [ ] Chegue 10 minutos antes
- [ ] Teste equipamento (projetor, som, etc.)

### Durante
- [ ] Fale claramente e pausadamente
- [ ] Faça contato visual
- [ ] Use linguagem corporal aberta
- [ ] Demonstre confiança (você sabe do que está falando)
- [ ] Se algo der errado na demo, mantenha a calma

### Postura
- ✅ Entusiasmo pelo projeto
- ✅ Confiança técnica
- ✅ Receptivo a perguntas
- ✅ Humilde sobre desafios
- ✅ Proativo em melhorias

---

## ❓ Perguntas Frequentes e Respostas

### "Por que escolheu esta API?"
**Resposta:**
"Escolhi a TMDB porque é uma API profissional, bem documentada e gratuita. Oferece complexidade suficiente para demonstrar conceitos avançados como encadeamento de requisições, mas não é tão complexa que desvie o foco dos testes em si. Além disso, filmes são um domínio familiar, facilitando a compreensão do negócio."

### "Como você tratou erros?"
**Resposta:**
"Implementei testes negativos específicos para validar o tratamento de erros. Por exemplo, testei API Key inválida (esperando 401) e IDs inexistentes (esperando 404). Também usei validações condicionais quando campos opcionais podem estar ausentes, como reviews em filmes novos."

### "O que foi mais difícil?"
**Resposta:**
"O encadeamento de variáveis foi desafiador inicialmente. Tive que entender bem o ciclo de vida das requisições no Postman e como extrair dados do response. Também foi importante organizar a ordem de execução para que os IDs fossem salvos antes de serem usados."

### "Como você garantiu qualidade?"
**Resposta:**
"Além dos testes funcionais, implementei validações de performance (response time), estrutura (JSON schema), tipos de dados, e ranges de valores. Também documentei tudo e versionei no Git para rastreabilidade. E claro, executei tudo múltiplas vezes para garantir consistência."

### "Pode expandir este projeto?"
**Resposta:**
"Sim! Posso adicionar testes de autenticação de usuário, favoritos, ratings. Também posso integrar com Newman para rodar via linha de comando e adicionar em um pipeline de CI/CD. Testes de carga com múltiplas requisições paralelas também seriam interessantes."

### "Como documentou as evidências?"
**Resposta:**
"Capturei screenshots de cada teste passando, exportei o relatório HTML do Collection Runner, salvei console logs relevantes, e organizei tudo em pastas. Também criei um guia de evidências explicando o que foi capturado e por quê. Tudo está no repositório GitHub."

---

## 🎬 Script da Demo (5-7 minutos)

### Parte 1: Estrutura (1 min)
1. Abrir Postman
2. Mostrar collection expandida
3. "Aqui estão os 10 casos de teste organizados em 6 categorias"
4. Mostrar environment selecionado

### Parte 2: Teste Manual - Busca (2 min)
1. Click em TC03 - Buscar Filme
2. "Vou buscar filmes com a palavra Matrix"
3. Mostrar URL: `{{base_url}}/search/movie?...`
4. Click "Send"
5. Mostrar response: array de filmes
6. Ir para "Test Results"
7. "Vejam, 5 testes todos passando"
8. Ir para Console
9. "O movie_id foi salvo: 603"
10. Ir para Environment (olho)
11. "Aqui está o ID salvo"

### Parte 3: Teste Manual - Detalhes (1-2 min)
1. Click em TC06 - Detalhes
2. "Agora vou buscar detalhes usando esse ID"
3. Mostrar URL: `.../movie/{{movie_id}}`
4. "Vejam que está usando a variável"
5. Click "Send"
6. Mostrar response: detalhes completos
7. "Orçamento, receita, duração, tudo aqui"
8. Aba Test Results
9. "6 validações, todas passaram"

### Parte 4: Collection Runner (2-3 min)
1. Click direito na collection
2. "Run collection"
3. "Vou executar todos os 10 de uma vez"
4. Verificar environment selecionado
5. Click "Run TMDB API Tests"
6. Aguardar (narrar enquanto executa):
   - "Autenticando..."
   - "Buscando filme..."
   - "Obtendo detalhes..."
   - "Elenco, recomendações..."
7. Mostrar resultado final
8. "10 de 10, 100% de sucesso"
9. "Tempo total: cerca de 4 segundos"
10. Click para ver detalhes de um teste
11. "Todas as assertions passaram"

---

## ✅ Checklist Pré-Apresentação

### 1 Hora Antes
- [ ] Postman aberto e testado
- [ ] Collection funcionando
- [ ] Environment configurado
- [ ] Slides prontos e testados
- [ ] Projetor/tela testado
- [ ] Backup (screenshots) pronto

### 10 Minutos Antes
- [ ] Fechar abas/programas desnecessários
- [ ] Desativar notificações
- [ ] Testar som (se houver)
- [ ] Testar clicker (se houver)
- [ ] Ter água por perto
- [ ] Respirar fundo 🧘

### Durante
- [ ] Falar pausadamente
- [ ] Fazer pausas para perguntas
- [ ] Olhar para a audiência
- [ ] Demonstrar confiança
- [ ] Agradecer no final

---

## 💪 Mensagem Final

**Lembre-se:**
- Você conhece este projeto melhor que ninguém
- Você fez um trabalho completo e profissional
- Você tem evidências de tudo que fez
- Você está preparado para perguntas
- Você vai se sair bem! 🚀

**Boa apresentação!** 🎤✨
