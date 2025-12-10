# 🔍 Guia Completo: Configuração SEO Pós-Deploy

## 1️⃣ Google Search Console (OBRIGATÓRIO)

### Passo a Passo:

1. **Acesse:** https://search.google.com/search-console/welcome

2. **Adicionar Propriedade:**
   - Escolha: "Prefixo do URL"
   - Digite: `https://www.bumbasite.com`

3. **Verificar Propriedade:**
   - Método recomendado: **Tag HTML**
   - Copie o código: `<meta name="google-site-verification" content="SEU_CODIGO_AQUI" />`
   - Cole no `index.html` (já tem o placeholder)
   - Faça rebuild: `npm run build`
   - Faça deploy
   - Clique em "Verificar"

4. **Enviar Sitemap:**
   - No menu lateral: "Sitemaps"
   - Adicionar sitemap: `https://www.bumbasite.com/sitemap.xml`
   - Enviar

5. **Solicitar Indexação:**
   - Menu: "Inspeção de URL"
   - Digite: `https://www.bumbasite.com`
   - Clique em "Solicitar indexação"

### O que Monitorizar:
- **Cobertura:** Páginas indexadas vs. erros
- **Desempenho:** Cliques, impressões, CTR, posição média
- **Core Web Vitals:** LCP, FID, CLS
- **Links:** Backlinks externos e internos

---

## 2️⃣ Bing Webmaster Tools

### Passo a Passo:

1. **Acesse:** https://www.bing.com/webmasters

2. **Adicionar Site:**
   - URL: `https://www.bumbasite.com`
   - Método de verificação: **Meta Tag**
   - Copie: `<meta name="msvalidate.01" content="SEU_CODIGO" />`
   - Adicione ao `index.html`

3. **Importar do Google:**
   - Opção mais rápida: "Importar do Google Search Console"
   - Autorize a conexão

4. **Enviar Sitemap:**
   - URL: `https://www.bumbasite.com/sitemap.xml`

---

## 3️⃣ Google My Business (Local SEO)

### MUITO IMPORTANTE para negócios locais!

1. **Acesse:** https://business.google.com

2. **Criar Perfil:**
   - Nome da empresa: **BumbaSite**
   - Categoria principal: **Agência de web design**
   - Localização: **Rua dos Correios, 3020, Souselas, Coimbra, Portugal**
   - Área de serviço: **Portugal inteiro** (marcar)

3. **Completar Informações:**
   - Telefone: **+351 926 389 247**
   - Website: **https://www.bumbasite.com**
   - Horário:
     - Segunda a Sexta: 09:00 - 18:00
     - Sábado e Domingo: Fechado
   - Email: **nelsonbumbassite@gmail.com**

4. **Adicionar Fotos:**
   - Logo
   - Fotos do escritório/equipa
   - Exemplos de trabalhos

5. **Descrição (750 caracteres):**
```
A BumbaSite é uma agência especializada em criação de sites profissionais, desenvolvimento web e lojas online em Portugal. Ajudamos empresas a crescer no digital com soluções modernas, rápidas e otimizadas para SEO. Oferecemos web design personalizado, e-commerce, landing pages e manutenção de sites. Baseados em Coimbra, atendemos clientes em todo Portugal. Orçamento grátis e desenvolvimento ágil. Transforme a presença digital do seu negócio!
```

6. **Serviços Oferecidos:**
   - Criação de sites profissionais
   - Desenvolvimento de lojas online
   - Web design responsivo
   - SEO e otimização
   - Manutenção de websites
   - Consultoria digital

7. **Verificação:**
   - Escolha verificação por telefone ou correio
   - Siga as instruções

---

## 4️⃣ Google Analytics 4

### Já está instalado! ✅
- ID: **AW-17560148799**

### Configurações Adicionais:

1. **Acesse:** https://analytics.google.com

2. **Configurar Conversões:**
   - Evento: Clique no WhatsApp
   - Evento: Scroll para serviços
   - Evento: Clique em "Pedir Orçamento"

3. **Criar Relatórios Personalizados:**
   - Páginas mais visitadas
   - Origem do tráfego
   - Taxa de rejeição por página

---

## 5️⃣ Ferramentas de Verificação SEO

### PageSpeed Insights
1. **Acesse:** https://pagespeed.web.dev/
2. **Analise:** `https://www.bumbasite.com`
3. **Meta:** 90+ em Mobile e Desktop

### GTmetrix
1. **Acesse:** https://gtmetrix.com/
2. **Teste:** `https://www.bumbasite.com`
3. **Meta:** Nota A, tempo < 2s

### Lighthouse (Chrome DevTools)
1. Abra DevTools (F12)
2. Aba "Lighthouse"
3. Gerar relatório
4. **Metas:**
   - Performance: 90+
   - SEO: 100
   - Accessibility: 90+
   - Best Practices: 90+

---

## 6️⃣ Redes Sociais (Para Backlinks e Presença)

### Criar Perfis Profissionais:

**Facebook Business:**
- https://www.facebook.com/business
- Categoria: Agência de Web Design
- Link para o site

**Instagram Business:**
- Converter para conta profissional
- Categoria: Web Design
- Link no bio: `https://www.bumbasite.com`

**LinkedIn:**
- Criar Página da Empresa
- Categoria: Design de Sites
- Website

**Pinterest Business:**
- Para portfólio visual
- Pins com link para o site

---

## 7️⃣ Diretórios Locais Portugal

### Registar o Negócio em:

1. **Portugal Positivo**
   - https://www.portugalpositivo.pt
   - Adicionar empresa

2. **Empresas de Portugal**
   - https://www.empresasdeportugal.pt
   - Criar perfil

3. **Páginas Amarelas**
   - https://www.pai.pt
   - Adicionar estabelecimento

4. **Yelp Portugal**
   - https://www.yelp.pt
   - Registar negócio

5. **Hotfrog**
   - https://www.hotfrog.pt
   - Adicionar empresa

**IMPORTANTE:** Use sempre os mesmos dados (NAP - Name, Address, Phone) em TODOS os diretórios!

---

## 8️⃣ Monitorização de Posições

### Ferramentas Gratuitas:

1. **Google Search Console** (já configurado)
   - Ver posições médias

2. **Ubersuggest** (Limitado gratuito)
   - https://neilpatel.com/ubersuggest/
   - Acompanhar palavras-chave

3. **SERPWatcher** (Trial)
   - Monitorar posições diárias

### Palavras-Chave para Monitorizar:

**Principais:**
- criação de sites portugal
- web design portugal
- criar site profissional
- desenvolvimento web portugal
- agência web portugal

**Long-tail:**
- criar site empresa portugal
- quanto custa criar site
- melhor agência web portugal
- criar loja online portugal

**Locais:**
- criar site coimbra
- web design coimbra
- agência digital coimbra

---

## 9️⃣ Estratégia de Conteúdo (Próximos 3 Meses)

### Mês 1:
- ✍️ Blog: "Como Criar um Site Profissional em Portugal (Guia 2025)"
- 📸 Post Instagram: Antes/Depois de projetos
- 🎬 Vídeo: Tour pelo processo de criação

### Mês 2:
- ✍️ Blog: "Quanto Custa Criar um Site em Portugal?"
- 📧 Newsletter: Dicas de SEO local
- 🎬 Vídeo: Depoimentos de clientes

### Mês 3:
- ✍️ Blog: "10 Erros Comuns em Sites Portugueses"
- 📱 Stories Instagram: Dia a dia da agência
- 🎬 Vídeo: Tutorial básico WordPress

---

## 🔟 Checklist Semanal

### Toda Segunda-feira:

- [ ] Verificar erros no Google Search Console
- [ ] Revisar páginas não indexadas
- [ ] Analisar posições das palavras-chave
- [ ] Verificar velocidade do site (PageSpeed)
- [ ] Responder comentários/reviews
- [ ] Verificar backlinks novos (Ahrefs/Ubersuggest)
- [ ] Postar 2-3x nas redes sociais

---

## ⚠️ Alertas Críticos

### Configurar Alertas para:

1. **Google Search Console:**
   - Erros críticos de rastreamento
   - Problemas de segurança
   - Quedas bruscas de tráfego

2. **Google Analytics:**
   - Tráfego zero (site down)
   - Pico anormal de tráfego (ataque?)

3. **Uptime Monitor:**
   - Use: https://uptimerobot.com (grátis)
   - Alertar se site ficar offline

---

## 📊 Métricas de Sucesso (3 Meses)

### Objetivos Realistas:

**Mês 1:**
- ✅ Site indexado no Google (100% das páginas)
- 📈 50-100 visitantes orgânicos/mês
- 🎯 3-5 posições na 2ª página para palavras-chave principais

**Mês 2:**
- 📈 100-200 visitantes orgânicos/mês
- 🎯 2-3 palavras-chave na 1ª página (posições 5-10)
- 💬 5-10 pedidos de orçamento

**Mês 3:**
- 📈 200-500 visitantes orgânicos/mês
- 🎯 5+ palavras-chave na 1ª página (posições 1-5)
- 💬 10-20 pedidos de orçamento
- ⭐ 5+ reviews no Google My Business

---

## 🎯 Ação IMEDIATA Após Deploy

1. ✅ Adicionar códigos de verificação (Google + Bing) no index.html
2. ✅ Rebuild + Deploy
3. ✅ Verificar propriedades (Google Search Console + Bing)
4. ✅ Enviar sitemaps
5. ✅ Solicitar indexação da homepage
6. ✅ Criar Google My Business
7. ✅ Criar perfis redes sociais
8. ✅ Registar em 3 diretórios locais
9. ✅ Configurar alertas (Uptime)
10. ✅ Testar velocidade (PageSpeed)

---

**Precisa de Ajuda?**
Este guia é extenso, mas essencial. Siga passo a passo e o seu site vai começar a aparecer nas pesquisas em 2-4 semanas!

**Última atualização:** 10/12/2025
