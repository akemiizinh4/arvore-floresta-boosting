# Quadro de observação

## Referência 1: DataCamp, "Aprendizado em conjunto em Python: guia prático para Random Forest e XGBoost"

https://www.datacamp.com/pt/tutorial/ensemble-learning-python-guide

| Elemento | O que observamos | Por que funciona (ou não) |
|---|---|---|
| Título e resumo | Título diz o assunto e as duas técnicas; tempo de leitura visível. | O leitor sabe em segundos se o texto é para ele. |
| Autoria e datas | Mostra "última atualização"; não encontramos autor individual em destaque. | A data ajuda; a falta de autor reduz a confiança. **Nós vamos mostrar os dois.** |
| Ordem das seções | Conceito (viés × variância) → bagging × boosting → dados → Random Forest → XGBoost → comparação → quando usar cada um → FAQ. | A teoria vem antes do código, mas cada técnica tem "como funciona" e "treino e avaliação" separados. |
| Figuras | Diagramas do fluxo de bagging e de boosting; alvo de dardos para viés e variância. | Cada figura explica uma ideia só. |
| Código | Python com scikit-learn e XGBoost, `GridSearchCV`, relatório de classificação, gráfico de importância. | Código curto, executável, perto do texto que o explica. |
| Dados | Dry Bean (UCI), 13.611 amostras, divisão 80/20 estratificada. | Divisão descrita com números. Não é um problema de redes. |
| Comparação | Tabelas de métricas gerais, F1 por classe e cenário recomendado para cada modelo. | A tabela "quando usar" é o que o leitor guarda. |
| Fechamento | Conclusão + FAQ. | O FAQ repete conceitos, útil para revisão. |

## Referência 2: Estudo multiclasse com NSL-KDD (Osco Vasquez, 2025, arXiv:2512.03200)

https://arxiv.org/abs/2512.03200

| Elemento | O que observamos | Por que funciona (ou não) |
|---|---|---|
| Problema | Detecção de intrusão multiclasse (Normal, DoS, Probe, R2L, U2R) no NSL-KDD. | É exatamente o nosso cenário: serve de contexto para os nossos números. |
| Modelos | Regressão Logística, Árvore, Random Forest e XGBoost. | Mesma família de comparação que a nossa. |
| Métricas | Acurácia, recall, F1, matriz de confusão e AUC-ROC. | Não se limita à acurácia. |
| Resultado | RF e XGBoost perto de 99% de acurácia; R2L e U2R são as classes mais difíceis. | Confirma o que vimos: no nosso teste, R2L e U2R tiveram recall abaixo de 20% nos três modelos. |
| O que falta ver | O resumo não deixa claro se o teste foi o KDDTest+ oficial ou uma divisão aleatória. | Ajuda a explicar por que nossos números (77% a 80% de acurácia no KDDTest+) são bem menores que ~99%: a forma de dividir os dados muda tudo. |

## Três decisões do grupo

1. **Vamos usar o KDDTest+ oficial como teste, e não uma divisão aleatória**, porque ele contém 17 tipos de ataque que não existem no treino. É o caso realista de um ataque novo passando despercebido, que é o problema que motiva o artigo.
2. **Vamos dar o mesmo orçamento de ajuste aos três modelos (15 combinações sorteadas, escolhidas pelo F1 em validação cruzada de 3 dobras, só no treino)** porque comparar uma árvore sem ajuste com um XGBoost ajustado não prova nada.
3. **Vamos mostrar uma árvore pequena funcionando antes de falar de florestas e boosting**, porque o público sabe Python mas não tem experiência com aprendizado de máquina (seguindo o DataCamp, que põe o conceito antes do código).

## Uma coisa que decidimos não fazer

**Não vamos balancear as classes nem reescolher o limiar de decisão usando o conjunto de teste.** Seria a forma mais rápida de "melhorar" o recall da Random Forest e do XGBoost, mas é vazamento de dados: o teste deixaria de medir o que um modelo faria com ataques nunca vistos. Mostramos a curva ROC só como diagnóstico, e deixamos o ajuste de limiar como trabalho futuro (precisa de um conjunto de validação com ataques novos).
