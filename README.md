# 🎲 Projeto Sorteador

> **Sorteador ACS Digital DevClub** — Uma aplicação web interativa para sorteio de números únicos, com interface temática dark e visual animado.

---

## 🚀 Tecnologias Utilizadas

|Tecnologia | Uso |
|---|---|
| **HTML5** | Estrutura semântica da página |
| **CSS3 (Vanilla)** | Estilização completa com Flexbox |
| **JavaScript (ES6+)** | Lógica de sorteio e manipulação do DOM |

> Projeto 100% frontend — sem frameworks, sem dependências externas. Puro HTML, CSS e JS.

---

## 🎨 Visual e Identidade

A interface foi pensada para ter uma aparência moderna e temática:

- 🌑 **Fundo preto total** (`#000000`) como cenário principal
- 🟡 **Paleta dourada/amarelada** (`#aaa40e`) como cor de destaque — usada no botão e nas caixinhas de resultado
- ✨ **GIF animado** de um cubo 3D girando como elemento de cabeçalho, com `drop-shadow` branco para brilho
- 💡 **Text-shadow** no título para efeito de neon suave
- 🖋️ Fonte **Poppins** para uma tipografia clean e moderna

---

## 🧮 Como o Sorteio Funciona

O usuário preenche três campos:

1. **Quantos números sortear** — define a quantidade (padrão: 1)
2. **Mínimo** — valor inicial do intervalo
3. **Máximo** — valor final do intervalo

Ao clicar em **"Sortear Agora!"**, a função `sortearNumeros()` é executada com as seguintes garantias:

- ✅ Todos os números sorteados são **únicos** (sem repetição)
- ✅ Validação de intervalo inválido (min ≥ max, valores ≤ 0)
- ✅ Validação se a quantidade pedida **supera o intervalo disponível**
- ✅ Resultados exibidos em **ordem crescente** (`sort`)

```js
// Algoritmo de sorteio sem repetição
while (numeros.length < qnt) {
    let num = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    if (!numeros.includes(num)) {
        numeros.push(num);
    }
}
```

---

## 🏆 Como o Resultado é Exibido

Os números sorteados aparecem em **caixinhas individuais** com fundo dourado, geradas e ordenadas dinamicamente pelo JavaScript:

```js
resultado.innerHTML = numeros
    .sort((a, b) => a - b)
    .map(n => `<span class="numero-box">${n}</span>`)
    .join('');
```

### Lógica do Label (Singular vs Plural)

| Quantidade | Label exibido |
|---|---|
| 1 número | `Sortudo:` |
| 2 ou mais | `Sortudos:` |

### Layout Adaptável

| Quantidade sorteada | Layout do resultado |
|---|---|
| Até 6 números | Label e caixinhas **na mesma linha** |
| Mais de 6 números | Label **acima** das caixinhas (coluna) |

Essa adaptação é feita via JavaScript adicionando/removendo a classe CSS `.vertical` no container:

```
js
if (qnt > 6) {
    line3.classList.add('vertical');
} else {
    line3.classList.remove('vertical');
}
```

---

## ▶️ Como Executar

Não requer instalação. Clique aqui para executar: <br>
<a href='https://alissoncaxias.github.io/sorteador-acs'>
    <img src='https://img.shields.io/badge/-Sorteador%20ACS%20Digital-628f89?style=for-the-badge'>
</a>

---

## 👨‍💻 Autoria

Desenvolvido por mim **Alisson Caxias** como parte das trilhas **Aula de JS na DevClub**.
