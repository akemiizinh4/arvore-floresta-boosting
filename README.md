# Árvore, floresta ou boosting?

Artigo técnico que compara **Árvore de Decisão**, **Random Forest** e **XGBoost** num detector de intrusão em redes, usando o conjunto de dados NSL-KDD, e justifica qual modelo escolher.

**Página publicada:** https://akemiizinh4.github.io/arvore-floresta-boosting/

## Autores

- Davi Gabriel Borges dos Santos ([@DaviGabriel07](https://github.com/DaviGabriel07))
- Fernanda Akemi Martins Sanpei ([@akemiizinh4](https://github.com/akemiizinh4))
- Geziel de Andrade ([@GzTop1](https://github.com/GzTop1))
- Hendrick Ambriola ([@hendrick-constant](https://github.com/hendrick-constant))
- Isaac William ([@isaacwbraz](https://github.com/isaacwbraz))

## Estrutura

```
index.html               página do artigo
estilos/estilo.css       estilos
js/indice.js             destaca no índice a seção que está na tela
imagens/                 figuras geradas pelo notebook
notebooks/experimento.ipynb   experimento completo, com as saídas
requirements.txt         versões das bibliotecas
QUADRO_OBSERVACAO.md     quadro de observação (referências, decisões do grupo)
LICENSE                  licenças (MIT para o código, CC BY 4.0 para o texto)
```

## Como reproduzir o experimento

**Opção 1: Google Colab (mais fácil)**

1. Abra o [Google Colab](https://colab.research.google.com) e faça upload de `notebooks/experimento.ipynb`.
2. Clique em *Ambiente de execução → Executar tudo*.
3. Os dados são baixados automaticamente. A busca de hiperparâmetros leva de 15 a 30 minutos.

**Opção 2: no seu computador**

Usamos Python 3.13.

```bash
git clone https://github.com/akemiizinh4/arvore-floresta-boosting.git
cd arvore-floresta-boosting
python -m venv .venv
source .venv/bin/activate        # no Windows: .venv\Scripts\activate
pip install -r requirements.txt
jupyter notebook notebooks/experimento.ipynb
```

Versões usadas: scikit-learn 1.6.1, xgboost 3.4.1, pandas 2.2.3, numpy 2.1.3.

A semente é fixa (`SEED = 42`), então os números devem ser os mesmos da página. Pequenas diferenças nos **tempos** são esperadas, porque dependem da máquina.

## Dados

Usamos o **NSL-KDD** (Canadian Institute for Cybersecurity, University of New Brunswick), com a divisão oficial: `KDDTrain+` para treino e `KDDTest+` para teste.

- Fonte oficial: https://www.unb.ca/cic/datasets/nsl.html
- O notebook baixa os arquivos de um espelho público no GitHub: https://github.com/jmnwong/NSL-KDD-Dataset

Os dados **não** estão neste repositório. Nenhum tráfego real de rede ou endereço IP foi usado.

## Créditos

- Figuras dos resultados: geradas pelo nosso notebook (licença CC BY 4.0).
- Esquemas de bagging e boosting e o caminho de decisão da abertura: desenhados por nós em SVG.
- Fontes: Bricolage Grotesque, JetBrains Mono e Source Serif 4 (Google Fonts, SIL Open Font License).
- Destaque de sintaxe: [Prism](https://prismjs.com) (licença MIT).
- Referências principais: Breiman (2001), Chen e Guestrin (2016), Tavallaee et al. (2009). A lista completa está no final da página.

## Licença

Texto e figuras: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/deed.pt-br). Código: MIT. Veja o arquivo [LICENSE](LICENSE).
