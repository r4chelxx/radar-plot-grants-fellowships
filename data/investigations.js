window.RADAR_PARTS=window.RADAR_PARTS||{};
window.RADAR_PARTS.investigations={
 "violencia-obstetrica":{
  updated:"2026-09-26",
  note:"Mapa reconstruído a partir do histórico de apuração do PLOT. SIM/SINASC não constam como dados obtidos.",
  stages:[
   {id:"mortalidade",label:"Mortalidade materna, fetal e neonatal",status:"parcial",evidence:["Dados recebidos da SESAB por respostas/retornos da apuração","Há campos incompletos e tipo de parto não informado/ignorado"],sources:["vo-sesab-respostas"]},
   {id:"rede",label:"Rede e estabelecimentos",status:"em_apuracao",evidence:["Unidades e maternidades fazem parte do recorte de responsabilização e assistência"],sources:[]},
   {id:"manifestacoes",label:"Manifestações e violência obstétrica",status:"em_apuracao",evidence:["Pedido à Ouvidoria SUS-BA segue como frente de acesso à informação; não tratar ausência de resposta como dado obtido"],sources:[]},
   {id:"responsabilizacao",label:"Responsabilização institucional",status:"parcial",evidence:["MP-BA/CESAU respondeu que não há centralização/taxonomia suficiente para o levantamento estadual pretendido","DPE-BA permanece como frente de apuração"],sources:["vo-mpba-cesau"]},
   {id:"comite",label:"Comitê e vigilância da mortalidade",status:"em_apuracao",evidence:["Frentes DIVEP/CEPOIF e pedidos de informação ainda têm lacunas"],sources:[]}
  ],
  sources:[
   {id:"vo-sesab-respostas",dataset:"plot-vo-sesab-recebidos",name:"SESAB — dados recebidos na apuração",type:"LAI / planilhas oficiais",status:"usada",detail:"Óbitos maternos, fetais e neonatais recebidos no curso da apuração. Não confundir com obtenção direta de SIM/SINASC."},
   {id:"vo-mpba-cesau",dataset:"plot-vo-mpba-cesau",name:"MP-BA / CESAU — resposta institucional",type:"Resposta oficial",status:"usada",detail:"Resposta sobre procedimentos e limites de centralização do MP-BA."},
   {id:"vo-sim-sinasc",name:"SIM / SINASC",type:"Bases públicas",status:"nao_obtida",detail:"Levantadas como fontes possíveis, mas não registrar como dados obtidos nesta investigação."}
  ]
 },
 "data-centers":{
  updated:"2026-09-26",
  note:"Investigação avançada, com base própria e Gentio do Ouro como caso-piloto.",
  stages:[
   {id:"empreendimentos",label:"Empreendimentos, empresas e estrutura societária",status:"estruturado",evidence:["Base própria de empreendimentos em construção e validação","Gentio do Ouro usado como caso-piloto"],sources:["dc-base-propria","dc-aneel-atos"]},
   {id:"energia",label:"Energia, conexão e transmissão",status:"em_apuracao",evidence:["Atos regulatórios e infraestrutura elétrica já integram a apuração","Divergência documental de extensão de conexão do SRNA Chuí permanece registrada","SIGET foi catalogado como fonte complementar para linhas, subestações, contratos, módulos e pontos de conexão; SAMP pode apoiar testes sobre mercado, demanda e agentes acessantes"],sources:["dc-aneel-atos","dc-delano","dc-siget","dc-samp"]},
   {id:"agua",label:"Água e disponibilidade hídrica",status:"em_apuracao",evidence:["SNIRH/ANA, outorgas e licenciamento compõem a frente hídrica; documentos específicos por empreendimento ainda precisam ser fechados"],sources:["dc-ana","dc-inema"]},
   {id:"licenciamento",label:"Licenciamento e governança ambiental",status:"em_apuracao",evidence:["SEIA/INEMA e atos ambientais são frente ativa; documentação específica ainda incompleta"],sources:["dc-inema"]},
   {id:"territorio",label:"Território e impactos locais",status:"em_apuracao",evidence:["Semiárido baiano é o recorte principal; Igaporã, Caetité e Gentio do Ouro já aparecem na apuração"],sources:["dc-base-propria"]},
   {id:"incentivos",label:"Incentivos, dinheiro público e política setorial",status:"em_apuracao",evidence:["Redata e incentivos fiscais integram a investigação; PL 278/2026 acompanhado"],sources:["dc-base-propria"]},
   {id:"trabalho",label:"Empregos e efeitos econômicos",status:"em_apuracao",evidence:["Empregos permanentes e cadeia econômica são hipóteses de verificação, não conclusão fechada"],sources:["dc-delano"]}
  ],
  sources:[
   {id:"dc-base-propria",dataset:"plot-datacenters-base",name:"PLOT. — base própria de data centers no semiárido baiano",type:"Base própria",status:"usada",detail:"Empreendimentos, empresas, municípios, atos e variáveis documentais consolidados durante a apuração."},
   {id:"dc-aneel-atos",dataset:"datacenters-aneel-mme-atos",name:"ANEEL/MME — atos e registros regulatórios",type:"Documentos e sistemas oficiais",status:"usada",detail:"Inclui atos usados na verificação de geração, conexão e infraestrutura; preservar divergências entre documentos."},
   {id:"dc-ana",dataset:"ana-snirh-usos-agua",name:"ANA / SNIRH",type:"Sistemas oficiais",status:"usada",detail:"Fontes hídricas incorporadas à frente de água; cada extração deve preservar produto e variável utilizados."},
   {id:"dc-inema",dataset:"seia-bahia",name:"INEMA / SEIA",type:"Processos, atos e sistemas oficiais",status:"usada",detail:"Licenciamento, outorga e documentação ambiental consultados como frente ativa."},
   {id:"dc-delano",dataset:"plot-datacenters-delano",name:"Entrevista com Delano — energia e sistema elétrico",type:"Entrevista técnica",status:"usada",detail:"Fonte técnica para geração renovável, transmissão, grandes cargas e curtailment; orienta documentos a buscar e não prova fatos específicos dos projetos."},{id:"dc-siget",dataset:"aneel-siget",name:"ANEEL — SIGET",type:"Base pública complementar",status:"planejada",detail:"Fonte complementar recém-catalogada para testar infraestrutura de transmissão, subestações, linhas, módulos e pontos de conexão."},{id:"dc-samp",dataset:"aneel-samp",name:"ANEEL — SAMP",type:"Base pública complementar",status:"planejada",detail:"Fonte complementar recém-catalogada para mercado, consumo/demanda e identificação de agentes acessantes; requer teste de granularidade para o recorte da investigação."}
  ]
 },
 "futebol":{
  updated:"2026-09-26",
  note:"Base própria cobre convocações entre 01/01/2020 e 22/08/2026 e é auditada por evento.",
  stages:[
   {id:"convocacoes",label:"Convocações e eventos",status:"estruturado",evidence:["Eventos individualizados e jogadoras separadas por convocação","Duplicidade entre eventos não é tratada como erro"],sources:["fut-cbf","fut-base-propria"]},
   {id:"jogadoras",label:"Jogadoras e origem",status:"estruturado",evidence:["Aba Jogadoras auditada contra as convocações"],sources:["fut-base-propria"]},
   {id:"trajetorias",label:"Trajetórias e clubes",status:"em_apuracao",evidence:["Carreiras no Brasil/exterior em verificação e expansão"],sources:["fut-base-propria"]},
   {id:"historico",label:"Linha do tempo histórica",status:"em_apuracao",evidence:["Pesquisa histórica inclui imprensa e episódios de organização/repressão; afirmações secundárias são auditadas"],sources:["fut-base-propria"]},
   {id:"estrutura",label:"Estrutura, investimento e desigualdades",status:"em_apuracao",evidence:["Cruzar circulação de atletas, clubes, competições, calendário, audiência e investimento permanece como frente investigativa"],sources:["fut-base-propria"]}
  ],
  sources:[
   {id:"fut-base-propria",dataset:"plot-futebol-base",name:"PLOT. — base própria do futebol feminino",type:"Base própria",status:"usada",detail:"Convocações, atletas, carreiras, clubes, competições, linha do tempo, fontes e controle de verificação."},
   {id:"fut-cbf",dataset:"cbf-convocacoes-feminina",name:"CBF — convocações oficiais da Seleção Brasileira Feminina",type:"Fonte primária",status:"usada",detail:"Fonte primária para auditoria das convocações e composição dos eventos no recorte 2020–22/08/2026."}
  ]
 },
 "educacao":{
  updated:"2026-09-26",
  note:"Pauta CEP-escola foi submetida ao Jeduca e rejeitada; segue disponível para desenvolvimento. Fontes propostas no pitch não são automaticamente tratadas como já utilizadas.",
  stages:[
   {id:"hipotese",label:"Hipótese territorial",status:"estruturado",evidence:["Recorte definido: escolas públicas municipais de ensino fundamental em Salvador","Pergunta central relaciona território e oportunidades educacionais"],sources:["edu-pitch"]},
   {id:"escolas",label:"Base georreferenciada de escolas",status:"planejado",evidence:["Censo Escolar/Inep foi definido como caminho de dados, mas o histórico recuperado não comprova ainda extração/análise efetiva"],sources:[]},
   {id:"territorio",label:"Setores censitários e território",status:"planejado",evidence:["Cruzamento com setores censitários do IBGE foi definido metodologicamente; não marcar como concluído sem evidência de execução"],sources:[]},
   {id:"indicadores",label:"Indicadores de infraestrutura e oportunidades",status:"planejado",evidence:["IDEB, docentes, biblioteca, laboratório, internet, quadra, climatização, integral e AEE foram variáveis cogitadas"],sources:[]}
  ],
  sources:[
   {id:"edu-pitch",dataset:"plot-educacao-cep-escola",name:"PLOT. — pauta CEP-escola / submissão Jeduca",type:"Documento editorial",status:"usada",detail:"Define recorte, hipótese e método proposto; não equivale a base de dados já analisada."}
  ]
 },
 "laudemio":{
  updated:"2026-09-26",
  note:"Projeto multimídia/data visualization em expansão; já há matrículas e referências arquivísticas concretas.",
  stages:[
   {id:"matriculas",label:"Matrículas e imóveis",status:"em_apuracao",evidence:["Conjunto inicial de matrículas já analisado; matrícula de apartamento não deve ser tratada como perímetro integral do edifício"],sources:["lau-matriculas"]},
   {id:"territorio",label:"Perímetro e transformação territorial",status:"em_apuracao",evidence:["Objetivo é reconstruir localidades e observar transformação temporal; perímetro ainda não está fechado"],sources:["lau-matriculas","lau-apeb"]},
   {id:"titulares",label:"Igrejas, mosteiros e titulares",status:"em_apuracao",evidence:["Relações dominiais e aforamentos estão sendo reconstruídos a partir de registros e arquivos"],sources:["lau-matriculas","lau-apeb"]},
   {id:"transacoes",label:"Laudêmio, transmissões e dinheiro",status:"em_apuracao",evidence:["Escopo busca localizar prédios/apartamentos e relações de cobrança em escala, não apenas casos isolados"],sources:["lau-matriculas"]},
   {id:"temporal",label:"Transformação temporal observável",status:"planejado",evidence:["Comparação temporal por cartografia/imagens históricas foi definida como próxima versão; ferramentas cogitadas não devem ser marcadas como usadas sem comprovação"],sources:[]}
  ],
  sources:[
   {id:"lau-matriculas",dataset:"plot-laudemio-matriculas",name:"Registros de imóveis — matrículas já incorporadas à apuração",type:"Documentos registrais",status:"usada",detail:"Inclui 16.511, 16.505, 2.887, 49.294, 42.177, 36.058, 27.165, 23.991 e 19.258 (matrícula-mãe a investigar)."},
   {id:"lau-apeb",dataset:"apeb-aforamentos-codices",name:"APEB — códices de aforamentos",type:"Fonte arquivística",status:"usada",detail:"Referências registradas: Códice 158, fls. 11 e 24; Códice 165, f. 64; Códice 347 com páginas ainda a identificar."}
  ]
 }
};