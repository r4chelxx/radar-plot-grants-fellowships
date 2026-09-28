window.RADAR_PARTS=window.RADAR_PARTS||{};
window.RADAR_PARTS.investigations={
 "violencia-obstetrica":{
  updated:"2026-09-28",
  note:"As fontes já usadas permanecem registradas como evidência da apuração. As demais aparecem somente como caminhos relacionados ainda não utilizados; o Radar não executa consultas nem incorpora resultados.",
  stages:[
   {id:"mortalidade",label:"Mortalidade materna, fetal e neonatal",status:"parcial",evidence:["Dados recebidos da SESAB por respostas/retornos da apuração","Caminhos adicionais: comparar definições e séries públicas de SIM, SINASC e painéis epidemiológicos da SESAB"],sources:["vo-sesab-respostas","vo-sim","vo-sinasc","vo-sesab-painel"]},
   {id:"rede",label:"Rede, maternidades e capacidade assistencial",status:"em_apuracao",evidence:["Unidades e maternidades fazem parte do recorte de responsabilização e assistência","Caminhos adicionais: CNES para estabelecimentos, leitos e profissionais; SIH/SUS para internações e procedimentos, sempre com limites administrativos explícitos"],sources:["vo-cnes","vo-cnes-leitos","vo-cnes-prof","vo-sih","vo-sih-procedimentos"]},
   {id:"manifestacoes",label:"Manifestações e violência obstétrica",status:"em_apuracao",evidence:["Pedido à Ouvidoria SUS-BA segue como frente de acesso à informação; não tratar ausência de resposta como dado obtido","OuvidorSUS é uma fonte pública relacionada a testar separadamente, sem substituir o pedido estadual"],sources:["vo-ouvidorsus"]},
   {id:"responsabilizacao",label:"Responsabilização institucional e judicial",status:"parcial",evidence:["MP-BA/CESAU respondeu que não há centralização/taxonomia suficiente para o levantamento estadual pretendido","DPE-BA permanece como frente de apuração; DataJud pode orientar busca de processos públicos, sem inferir culpa ou resultado"],sources:["vo-mpba-cesau","vo-datajud"]},
   {id:"comite",label:"Comitê e vigilância da mortalidade",status:"em_apuracao",evidence:["Frentes DIVEP/CEPOIF e pedidos de informação ainda têm lacunas","Boletins e painéis epidemiológicos podem orientar períodos, definições e novas perguntas institucionais"],sources:["vo-sesab-painel"]}
  ],
  sources:[
   {id:"vo-sesab-respostas",dataset:"plot-vo-sesab-recebidos",name:"SESAB — dados recebidos na apuração",type:"LAI / planilhas oficiais",status:"usada",detail:"Óbitos maternos, fetais e neonatais recebidos no curso da apuração. Não confundir com obtenção direta de SIM/SINASC."},
   {id:"vo-mpba-cesau",dataset:"plot-vo-mpba-cesau",name:"MP-BA / CESAU — resposta institucional",type:"Resposta oficial",status:"usada",detail:"Resposta sobre procedimentos e limites de centralização do MP-BA."},
   {id:"vo-sim",dataset:"sim-mortalidade",name:"SIM — Sistema de Informações sobre Mortalidade",type:"Base pública relacionada",status:"planejada",detail:"Caminho possível para séries de mortalidade; distinguir arquivos consolidados, preliminares e prévios e registrar definições epidemiológicas."},
   {id:"vo-sinasc",dataset:"sinasc",name:"SINASC — Nascidos Vivos",type:"Base pública relacionada",status:"planejada",detail:"Caminho possível para nascimentos, parto e estabelecimentos; verificar completude, ignorados e diferenças entre residência e ocorrência."},
   {id:"vo-sesab-painel",dataset:"sesab-mortalidade-materna",name:"SESAB — Mortalidade materna na Bahia",type:"Fonte epidemiológica relacionada",status:"planejada",detail:"Painéis e boletins podem orientar recortes e definições; não substituem os dados já recebidos nem respostas específicas."},
   {id:"vo-cnes",dataset:"cnes",name:"CNES — Estabelecimentos de Saúde",type:"Base pública relacionada",status:"planejada",detail:"Caminho para mapear maternidades e estabelecimentos; cadastro não comprova oferta efetiva em determinada data."},
   {id:"vo-cnes-leitos",dataset:"cnes-leitos",name:"CNES — Leitos por estabelecimento",type:"Base pública relacionada",status:"planejada",detail:"Caminho para capacidade cadastrada; leito cadastrado não equivale necessariamente a leito operacional."},
   {id:"vo-cnes-prof",dataset:"cnes-profissionais",name:"CNES — Profissionais por estabelecimento",type:"Base pública relacionada",status:"planejada",detail:"Caminho para vínculos profissionais cadastrados; não mede escala real nem presença em plantão."},
   {id:"vo-sih",dataset:"datasus-sih",name:"SIH/SUS — Internações",type:"Base pública relacionada",status:"planejada",detail:"Caminho para internações financiadas pelo SUS; não representa toda assistência obstétrica."},
   {id:"vo-sih-procedimentos",dataset:"datasus-sih-procedimentos-obstetricos",name:"SIH/SUS — Procedimentos obstétricos",type:"Base pública relacionada",status:"planejada",detail:"Caminho para procedimentos hospitalares; códigos e versões SIGTAP precisam ser documentados."},
   {id:"vo-ouvidorsus",dataset:"ouvidorsus",name:"OuvidorSUS — manifestações",type:"Base pública relacionada",status:"planejada",detail:"Caminho nacional relacionado; testar taxonomia e cobertura sem presumir equivalência com a Ouvidoria SUS-BA."},
   {id:"vo-datajud",dataset:"datajud-api-publica",name:"CNJ — API Pública do DataJud",type:"Base pública relacionada",status:"planejada",detail:"Caminho para metadados de processos públicos; aplicar minimização de dados pessoais e não inferir culpa, autoria ou desfecho."}
  ]
 },
 "data-centers":{
  updated:"2026-09-28",
  note:"Investigação avançada, com base própria e Gentio do Ouro como caso-piloto. Fontes já usadas permanecem separadas das sugestões; o Radar apenas indica caminhos adicionais.",
  stages:[
   {id:"empreendimentos",label:"Empreendimentos, empresas e estrutura societária",status:"estruturado",evidence:["Base própria de empreendimentos em construção e validação","Gentio do Ouro usado como caso-piloto"],sources:["dc-base-propria","dc-aneel-atos"]},
   {id:"energia",label:"Energia, conexão e transmissão",status:"em_apuracao",evidence:["Atos regulatórios e infraestrutura elétrica já integram a apuração","SIGET, SAMP e BDGD são caminhos complementares para testar transmissão, demanda, agentes e infraestrutura, sem presumir vínculo com cada empreendimento"],sources:["dc-aneel-atos","dc-delano","dc-siget","dc-samp","dc-bdgd"]},
   {id:"agua",label:"Água e disponibilidade hídrica",status:"em_apuracao",evidence:["SNIRH/ANA, outorgas e licenciamento compõem a frente hídrica","SINISA/SNIS pode contextualizar serviços municipais, sem substituir outorgas nem consumo específico dos projetos"],sources:["dc-ana","dc-inema","dc-sinisa"]},
   {id:"licenciamento",label:"Licenciamento e governança ambiental",status:"em_apuracao",evidence:["SEIA/INEMA e atos ambientais são frente ativa","Autos do Ibama são um caminho nacional complementar; não equivalem a decisão final nem comprovam relação com um empreendimento sem verificação"],sources:["dc-inema","dc-ibama"]},
   {id:"territorio",label:"Território e impactos locais",status:"em_apuracao",evidence:["Semiárido baiano é o recorte principal; Igaporã, Caetité e Gentio do Ouro já aparecem na apuração","TerraBrasilis pode apoiar contexto territorial de desmatamento, degradação e fogo, respeitando a metodologia de cada produto"],sources:["dc-base-propria","dc-terrabrasilis"]},
   {id:"incentivos",label:"Incentivos, dinheiro público e política setorial",status:"em_apuracao",evidence:["Redata e incentivos fiscais integram a investigação; PL 278/2026 acompanhado","SDE e TCE-BA são caminhos complementares para programas, atos e renúncia fiscal; beneficiários individuais exigem cruzamento documental"],sources:["dc-base-propria","dc-sde-incentivos","dc-tce-renuncia"]},
   {id:"trabalho",label:"Empregos e efeitos econômicos",status:"em_apuracao",evidence:["Empregos permanentes e cadeia econômica são hipóteses de verificação, não conclusão fechada","RAIS e Novo Caged podem apoiar testes sobre estoque e fluxo de emprego formal, sem identificar automaticamente vagas geradas pelos projetos"],sources:["dc-delano","dc-rais","dc-caged"]}
  ],
  sources:[
   {id:"dc-base-propria",dataset:"plot-datacenters-base",name:"PLOT. — base própria de data centers no semiárido baiano",type:"Base própria",status:"usada",detail:"Empreendimentos, empresas, municípios, atos e variáveis documentais consolidados durante a apuração."},
   {id:"dc-aneel-atos",dataset:"datacenters-aneel-mme-atos",name:"ANEEL/MME — atos e registros regulatórios",type:"Documentos e sistemas oficiais",status:"usada",detail:"Inclui atos usados na verificação de geração, conexão e infraestrutura; preservar divergências entre documentos."},
   {id:"dc-ana",dataset:"ana-snirh-usos-agua",name:"ANA / SNIRH",type:"Sistemas oficiais",status:"usada",detail:"Fontes hídricas incorporadas à frente de água; cada extração deve preservar produto e variável utilizados."},
   {id:"dc-inema",dataset:"seia-bahia",name:"INEMA / SEIA",type:"Processos, atos e sistemas oficiais",status:"usada",detail:"Licenciamento, outorga e documentação ambiental consultados como frente ativa."},
   {id:"dc-delano",dataset:"plot-datacenters-delano",name:"Entrevista com Delano — energia e sistema elétrico",type:"Entrevista técnica",status:"usada",detail:"Fonte técnica para geração renovável, transmissão, grandes cargas e curtailment; orienta documentos a buscar e não prova fatos específicos dos projetos."},
   {id:"dc-siget",dataset:"aneel-siget",name:"ANEEL — SIGET",type:"Base pública relacionada",status:"planejada",detail:"Caminho complementar para infraestrutura de transmissão, subestações, linhas, módulos e pontos de conexão."},
   {id:"dc-samp",dataset:"aneel-samp",name:"ANEEL — SAMP",type:"Base pública relacionada",status:"planejada",detail:"Caminho complementar para mercado, consumo, demanda e agentes acessantes; a granularidade precisa ser conferida."},
   {id:"dc-bdgd",dataset:"aneel-bdgd",name:"ANEEL — BDGD",type:"Base pública relacionada",status:"planejada",detail:"Caminho para ativos de distribuição e testes espaciais, sem presumir vínculo com empreendimentos."},
   {id:"dc-sde-incentivos",dataset:"bahia-sde-incentivos",name:"SDE Bahia — incentivos fiscais",type:"Fonte pública relacionada",status:"planejada",detail:"Caminho para programas, procedimentos, planilhas e atos de incentivos."},
   {id:"dc-tce-renuncia",dataset:"bahia-tce-renuncia-fiscal",name:"TCE-BA — renúncia fiscal",type:"Fonte pública relacionada",status:"planejada",detail:"Caminho para dimensionar renúncia por programa e localizar achados de auditoria."},
   {id:"dc-sinisa",dataset:"sinisa-saneamento",name:"SINISA / SNIS — Saneamento Básico",type:"Base pública relacionada",status:"planejada",detail:"Caminho para contexto municipal de água e saneamento; não informa consumo específico de data centers."},
   {id:"dc-ibama",dataset:"ibama-autos-infracao",name:"Ibama — Autos de Infração Ambiental",type:"Base pública relacionada",status:"planejada",detail:"Caminho nacional de fiscalização; auto lavrado não equivale a decisão final."},
   {id:"dc-terrabrasilis",dataset:"inpe-terrabrasilis",name:"INPE — TerraBrasilis",type:"Base geoespacial relacionada",status:"planejada",detail:"Caminho para contexto territorial; PRODES, DETER e fogo têm metodologias e periodicidades diferentes."},
   {id:"dc-rais",dataset:"rais",name:"RAIS — Emprego formal",type:"Base pública relacionada",status:"planejada",detail:"Caminho para estoque anual de vínculos e estabelecimentos; não identifica automaticamente empregos atribuíveis aos projetos."},
   {id:"dc-caged",dataset:"novo-caged",name:"Novo Caged — movimentações do emprego formal",type:"Base pública relacionada",status:"planejada",detail:"Caminho para admissões e desligamentos; fluxo não equivale ao estoque da RAIS."}
  ]
 },
 "futebol":{
  updated:"2026-09-28",
  note:"A base própria e as convocações da CBF permanecem como fontes já usadas. Os demais itens são caminhos relacionados ainda não utilizados pelo Radar.",
  stages:[
   {id:"convocacoes",label:"Convocações e eventos",status:"estruturado",evidence:["Eventos individualizados e jogadoras separadas por convocação","Duplicidade entre eventos não é tratada como erro"],sources:["fut-cbf","fut-base-propria"]},
   {id:"jogadoras",label:"Jogadoras, origem e registros",status:"estruturado",evidence:["Aba Jogadoras auditada contra as convocações","BID pode apoiar conferência de registros e movimentações, sem substituir biografias, entrevistas ou verificação da trajetória"],sources:["fut-base-propria","fut-bid"]},
   {id:"trajetorias",label:"Trajetórias, clubes e transferências",status:"em_apuracao",evidence:["Carreiras no Brasil/exterior em verificação e expansão","Documentos de competições e registros oficiais são caminhos adicionais, mas não formam sozinhos uma trajetória completa"],sources:["fut-base-propria","fut-bid","fut-governanca"]},
   {id:"historico",label:"Linha do tempo histórica",status:"em_apuracao",evidence:["Pesquisa histórica inclui imprensa e episódios de organização/repressão; afirmações secundárias são auditadas","Acervos de federações, clubes, hemerotecas e arquivos pessoais permanecem como caminhos documentais a localizar"],sources:["fut-base-propria","fut-acervos","fut-hemeroteca"]},
   {id:"estrutura",label:"Estrutura, investimento e desigualdades",status:"em_apuracao",evidence:["Cruzar circulação de atletas, clubes, competições, calendário, audiência e investimento permanece como frente investigativa","Portal de Governança da CBF e balanços de federações/clubes podem orientar calendário, regulamentos e finanças; comparar escopo e ausência de dados específicos do feminino"],sources:["fut-governanca","fut-clubes"]}
  ],
  sources:[
   {id:"fut-base-propria",dataset:"plot-futebol-base",name:"PLOT. — base própria do futebol feminino",type:"Base própria",status:"usada",detail:"Convocações, atletas, carreiras, clubes, competições, linha do tempo, fontes e controle de verificação."},
   {id:"fut-cbf",dataset:"cbf-convocacoes-feminina",name:"CBF — convocações oficiais da Seleção Brasileira Feminina",type:"Fonte primária",status:"usada",detail:"Fonte primária para auditoria das convocações e composição dos eventos no recorte 2020–22/08/2026."},
   {id:"fut-bid",dataset:"cbf-bid",name:"CBF — Boletim Informativo Diário (BID)",type:"Fonte pública relacionada",status:"planejada",detail:"Caminho para registros e movimentações de atletas; não demonstra participação efetiva, remuneração ou trajetória completa."},
   {id:"fut-governanca",dataset:"cbf-governanca",name:"CBF — Portal de Governança e competições",type:"Fonte documental relacionada",status:"planejada",detail:"Caminho para regulamentos, calendários, documentos de partida, gestão e finanças; registrar edição e competição."},
   {id:"fut-acervos",name:"Hemerotecas, federações, clubes e arquivos pessoais",type:"Caminho documental relacionado",status:"planejada",detail:"Possíveis fontes para lacunas históricas; cada item precisa de identificação, data, autoria e verificação própria."},
   {id:"fut-hemeroteca",dataset:"bn-hemeroteca-digital",name:"Biblioteca Nacional — Hemeroteca Digital Brasileira",type:"Acervo público relacionado",status:"planejada",detail:"Caminho para localizar periódicos históricos sobre futebol feminino e organização esportiva; OCR e resultados de busca exigem conferência na página digitalizada."},
   {id:"fut-clubes",name:"Balanços e relatórios de clubes e federações",type:"Caminho documental relacionado",status:"planejada",detail:"Possíveis fontes para estrutura e investimento; conferir se os valores do futebol feminino são discriminados ou apenas agregados."}
  ]
 },
 "educacao":{
  updated:"2026-09-28",
  note:"A pauta/submissão Jeduca permanece como fonte já usada. As bases públicas abaixo são apenas indicações relacionadas para orientar a apuração; o Radar não faz extrações nem armazena resultados.",
  stages:[
   {id:"hipotese",label:"Hipótese territorial",status:"estruturado",evidence:["Recorte definido: escolas públicas municipais de ensino fundamental em Salvador","Pergunta central relaciona território e oportunidades educacionais"],sources:["edu-pitch"]},
   {id:"escolas",label:"Caminhos para localizar e caracterizar escolas",status:"planejado",evidence:["Censo Escolar e Catálogo de Escolas podem orientar o universo de unidades, endereço, oferta e infraestrutura","Educação em Números pode apoiar conferência da rede municipal; SIGEduc é complementar para a rede estadual e não deve ser confundido com o recorte principal"],sources:["edu-censo-escolar","edu-salvador-numeros","edu-sigeduc-ba","edu-bd-censo","edu-bd-catalogo"]},
   {id:"territorio",label:"Caminhos para relacionar escolas e território",status:"planejado",evidence:["Malha e agregados por setores censitários podem apoiar análises territoriais futuras","Qualquer cruzamento precisa preservar edição, código do setor e compatibilidade geográfica; o Radar apenas indica essas possibilidades"],sources:["edu-setores","edu-agregados"]},
   {id:"indicadores",label:"Indicadores possíveis de infraestrutura e oportunidades",status:"planejado",evidence:["Campos a investigar nas fontes: biblioteca, laboratório, internet, quadra, climatização, tempo integral, AEE, matrículas e docentes","IDEB e outros indicadores derivados exigem fonte, ano de referência e denominadores próprios"],sources:["edu-censo-escolar","edu-bd-censo"]},
   {id:"validacao",label:"Validação e fontes complementares",status:"planejado",evidence:["Comparar definições e cobertura entre Inep, SMED e eventuais respostas institucionais antes de usar qualquer número","Divergências entre sistemas devem virar pergunta de apuração, não ser corrigidas automaticamente pelo Radar"],sources:["edu-salvador-numeros","edu-bd-catalogo"]}
  ],
  sources:[
   {id:"edu-pitch",dataset:"plot-educacao-cep-escola",name:"PLOT. — pauta CEP-escola / submissão Jeduca",type:"Documento editorial",status:"usada",detail:"Define recorte, hipótese e método proposto; não equivale a base de dados já analisada."},
   {id:"edu-censo-escolar",dataset:"inep-censo-escolar",name:"INEP — Microdados do Censo Escolar",type:"Base pública relacionada",status:"planejada",detail:"Caminho principal para escolas e variáveis educacionais; conferir edição, dicionário e regras de divulgação antes de qualquer uso."},
   {id:"edu-salvador-numeros",dataset:"salvador-educacao-numeros",name:"SMED Salvador — Educação em Números",type:"Sistema municipal relacionado",status:"planejada",detail:"Caminho para relatórios da rede municipal e conferência de unidades; cobertura, filtros e exportação precisam ser avaliados na apuração."},
   {id:"edu-sigeduc-ba",dataset:"sigeduc-escolas-ba",name:"SIGEduc Bahia — escolas estaduais",type:"Sistema estadual relacionado",status:"planejada",detail:"Caminho complementar para a rede estadual; não substitui nem deve ser misturado ao universo municipal principal."},
   {id:"edu-bd-censo",dataset:"bd-inep-censo-escolar",name:"INEP / Base dos Dados — Censo Escolar tratado",type:"Camada de acesso relacionada",status:"planejada",detail:"Caminho alternativo de acesso; comparar cobertura, tipos e transformações com a fonte oficial do Inep."},
   {id:"edu-bd-catalogo",dataset:"bd-inep-catalogo-escolas",name:"INEP — Catálogo de Escolas",type:"Catálogo relacionado",status:"planejada",detail:"Caminho para consultas e conferências por localização e oferta; registrar data e filtros de qualquer consulta futura."},
   {id:"edu-setores",dataset:"ibge-setores-2022",name:"IBGE — Malha de Setores Censitários 2022",type:"Base territorial relacionada",status:"planejada",detail:"Caminho para associação espacial futura; preservar edição, sistema de referência e método."},
   {id:"edu-agregados",dataset:"ibge-agregados-setores-2022",name:"IBGE — Agregados por Setores Censitários 2022",type:"Base contextual relacionada",status:"planejada",detail:"Caminho para indicadores territoriais; preservar arquivo, versão, código do setor e denominadores."}
  ]
 },
 "laudemio":{
  updated:"2026-09-28",
  note:"Matrículas e códices do APEB permanecem como fontes já usadas. As demais são indicações relacionadas para ampliar a apuração, sem consulta ou incorporação automática pelo Radar.",
  stages:[
   {id:"matriculas",label:"Matrículas e imóveis",status:"em_apuracao",evidence:["Conjunto inicial de matrículas já analisado; matrícula de apartamento não deve ser tratada como perímetro integral do edifício","Cadastro imobiliário e VVA são caminhos administrativos complementares, sujeitos a acesso e validação por inscrição"],sources:["lau-matriculas","lau-cadastro","lau-vva"]},
   {id:"territorio",label:"Perímetro e transformação territorial",status:"em_apuracao",evidence:["Objetivo é reconstruir localidades e observar transformação temporal; perímetro ainda não está fechado","Cartografia municipal, ortoimagens e malha censitária são caminhos para testar localização e mudanças no território"],sources:["lau-matriculas","lau-apeb","lau-cartografia","lau-geo","lau-setores"]},
   {id:"titulares",label:"Igrejas, mosteiros e titulares",status:"em_apuracao",evidence:["Relações dominiais e aforamentos estão sendo reconstruídos a partir de registros e arquivos","Diários oficiais, acervos institucionais e novas matrículas podem orientar cadeias dominiais, sempre com verificação documental"],sources:["lau-matriculas","lau-apeb","lau-diarios","lau-hemeroteca"]},
   {id:"transacoes",label:"Laudêmio, transmissões e dinheiro",status:"em_apuracao",evidence:["Escopo busca localizar prédios/apartamentos e relações de cobrança em escala, não apenas casos isolados","ITIV, VVA e Cadastro Imobiliário são caminhos possíveis; sua existência administrativa não significa acesso público em massa"],sources:["lau-matriculas","lau-vva","lau-itiv","lau-cadastro"]},
   {id:"temporal",label:"Transformação temporal observável",status:"planejado",evidence:["Comparação por cartografia e imagens históricas é um caminho de investigação","Cada produto cartográfico exige registro de ano, escala, resolução, sistema de referência e limites de comparabilidade"],sources:["lau-cartografia","lau-geo","lau-setores"]}
  ],
  sources:[
   {id:"lau-matriculas",dataset:"plot-laudemio-matriculas",name:"Registros de imóveis — matrículas já incorporadas à apuração",type:"Documentos registrais",status:"usada",detail:"Inclui 16.511, 16.505, 2.887, 49.294, 42.177, 36.058, 27.165, 23.991 e 19.258 (matrícula-mãe a investigar)."},
   {id:"lau-apeb",dataset:"apeb-aforamentos-codices",name:"APEB — códices de aforamentos",type:"Fonte arquivística",status:"usada",detail:"Referências registradas: Códice 158, fls. 11 e 24; Códice 165, f. 64; Códice 347 com páginas ainda a identificar."},
   {id:"lau-vva",dataset:"salvador-vva",name:"SEFAZ Salvador — Valor Venal Atualizado",type:"Fonte pública relacionada",status:"planejada",detail:"Caminho para valor administrativo por inscrição imobiliária; consulta individual não equivale a microdados abertos."},
   {id:"lau-cadastro",dataset:"salvador-cadastro-imobiliario",name:"Salvador — Cadastro Imobiliário",type:"Sistema relacionado",status:"planejada",detail:"Caminho para inscrição e atributos administrativos; acesso público integral não está demonstrado."},
   {id:"lau-itiv",dataset:"salvador-itiv",name:"Salvador — ITIV e transações imobiliárias",type:"Sistema relacionado",status:"planejada",detail:"Caminho para transmissões e valores administrativos; verificar acesso agregado ou necessidade de LAI."},
   {id:"lau-cartografia",dataset:"salvador-cartografia",name:"Salvador — Cartografia e ortoimagens",type:"Fonte geoespacial relacionada",status:"planejada",detail:"Caminho para transformação temporal; preservar ano, escala, resolução, CRS e produto."},
   {id:"lau-geo",dataset:"salvador-geo",name:"Salvador — informações geográficas",type:"Portal relacionado",status:"planejada",detail:"Caminho para lotes, logradouros e camadas municipais; conferir metadados antes de uso."},
   {id:"lau-setores",dataset:"ibge-setores-2022",name:"IBGE — Setores Censitários 2022",type:"Base territorial relacionada",status:"planejada",detail:"Caminho para contexto territorial atual; não resolve diretamente limites históricos de aforamentos."},
   {id:"lau-diarios",dataset:"bahia-doe",name:"Bahia — Diário Oficial",type:"Fonte documental relacionada",status:"planejada",detail:"Caminho para atos e referências institucionais; resultados exigem identificação e leitura do documento original."},
   {id:"lau-hemeroteca",dataset:"bn-hemeroteca-digital",name:"Biblioteca Nacional — Hemeroteca Digital Brasileira",type:"Acervo público relacionado",status:"planejada",detail:"Caminho para anúncios, notícias e referências históricas a imóveis, localidades, titulares e aforamentos; cada ocorrência precisa ser conferida na edição digitalizada e confrontada com registros e arquivos."}
  ]
 },
 "evore":{
  updated:"2026-09-28",
  note:"Hipótese futura sem padrão de má conduta estabelecido. Todas as fontes abaixo são caminhos relacionados ainda não utilizados; o Radar não investiga pessoas nem infere irregularidade.",
  stages:[
   {id:"hipotese",label:"Delimitação da hipótese e critérios",status:"planejado",evidence:["Definir pergunta verificável, período, recorte institucional e critérios antes de buscar nomes ou processos","Separar reclamação, processo, decisão, sanção e resultado definitivo"],sources:["evo-protocolo"]},
   {id:"processos",label:"Processos judiciais públicos",status:"planejado",evidence:["DataJud pode orientar metadados por tribunal, classe, assunto e movimentos públicos","Metadados não substituem leitura processual; sigilo, homônimos e dados pessoais exigem cautela"],sources:["evo-datajud"]},
   {id:"profissionais",label:"Profissionais, vínculos e estabelecimentos",status:"planejado",evidence:["CNES pode indicar vínculos e estabelecimentos cadastrados como ponto de partida","Cadastro não comprova atendimento, conduta, escala real nem presença em uma data específica"],sources:["evo-cnes-prof","evo-cnes"]},
   {id:"responsabilizacao",label:"Decisões e responsabilização profissional",status:"planejado",evidence:["Conselhos profissionais, diários oficiais e decisões públicas são caminhos documentais possíveis","Ausência de resultado público não prova inexistência de apuração; sanções e recursos precisam ser lidos no contexto"],sources:["evo-conselhos","evo-diario"]},
   {id:"validacao",label:"Validação e direito de resposta",status:"planejado",evidence:["Qualquer padrão só pode ser formulado após checagem documental, contraditório, direito de resposta e revisão jurídica","Não publicar listas de pessoas nem cruzamentos nominativos automáticos no Radar"],sources:["evo-protocolo"]}
  ],
  sources:[
   {id:"evo-protocolo",name:"Protocolo editorial e jurídico da apuração",type:"Caminho metodológico",status:"planejada",detail:"Definir hipótese, critérios, minimização de dados pessoais, direito de resposta e revisão jurídica antes de qualquer busca nominativa."},
   {id:"evo-datajud",dataset:"datajud-api-publica",name:"CNJ — API Pública do DataJud",type:"Base pública relacionada",status:"planejada",detail:"Caminho para metadados de processos públicos; não fornece peças integrais nem autoriza inferência de culpa."},
   {id:"evo-cnes-prof",dataset:"cnes-profissionais",name:"CNES — Profissionais por estabelecimento",type:"Base pública relacionada",status:"planejada",detail:"Caminho para vínculos cadastrados; não comprova atuação em evento específico nem qualidade assistencial."},
   {id:"evo-cnes",dataset:"cnes",name:"CNES — Estabelecimentos de Saúde",type:"Base pública relacionada",status:"planejada",detail:"Caminho para caracterizar estabelecimentos; cadastro não comprova oferta real de serviço em determinada data."},
   {id:"evo-conselhos",name:"Conselhos profissionais e decisões públicas",type:"Caminho documental relacionado",status:"planejada",detail:"Consultar apenas canais oficiais e decisões publicáveis, respeitando sigilo, recursos e contexto."},
   {id:"evo-diario",dataset:"bahia-doe",name:"Bahia — Diário Oficial",type:"Fonte documental relacionada",status:"planejada",detail:"Caminho para atos públicos; resultados exigem leitura e confirmação no documento original."}
  ]
 }
};
