# radar-plot-grants-fellowships
## Descoberta e classificação

`data/sources.js` registra canais monitorados (newsletters, organizações e veículos), com cadência de checagem. `data/datasets.js` registra recursos de dados identificáveis: conjunto, portal, catálogo, sistema ou fonte temática. `data/opportunities.js` registra chamadas concretas. Ferramentas de produção, como Datawrapper e React Simple Maps, ficam em `data/tools.js` e aparecem separadamente na Metodologia.

Quando uma chamada ou recurso for de fato encontrado em um canal monitorado, adicione `discoveredVia:["Nome exato da fonte"]` ao item. Para newsletters, registre também `discoveryUrl` com o link da edição quando disponível. O campo é opcional quando a origem da descoberta não está documentada; não deduza a relação pelo nome da organização. Mantenha `rules` (oportunidade) ou `url` (dados) apontando para o item específico e verifique as condições na origem oficial. Uma edição de newsletter pode gerar vários itens de classes diferentes, sem virar ela própria uma base de dados.

## Navegação editorial

A matriz de Pautas × oportunidades está em `#matriz` (menu “Matriz”) e o catálogo de ferramentas em `#ferramentas` (menu “Ferramentas”). Vínculos pessoais confirmados na matriz aparecem também na ficha da pauta quando a sessão está sincronizada.

## Mapa de apuração

Uma etapa do mapa só lista fontes explicitamente ligadas em `data/investigations.js`. Sugestões por metadados são pistas de busca e não comprovam uso, obtenção ou cobertura da etapa. Pautas sem mapa cadastrado permanecem sem mapa, sem inferência automática.
