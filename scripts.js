const qntAsortear = document.getElementById('qntAsortear');
const min = document.getElementById('min');
const max = document.getElementById('max');
const btn = document.querySelector('button');

btn.addEventListener('click', sortearNumeros);

function sortearNumeros(){
    let qnt = Number(qntAsortear.value)||1;
    let minimo = Number(min.value);
    let maximo = Number(max.value);

    const totalDisponiveis = maximo - minimo + 1;

    if (minimo <= 0 || maximo <= 0 || minimo >= maximo) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    if (qnt > totalDisponiveis) {
        alert(`Não é possível sortear ${qnt} números únicos entre ${minimo} e ${maximo}.\nMáximo possível: ${totalDisponiveis}.`);
        return;
    }

    let numeros = [];
    while (numeros.length < qnt) {
        let num = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
        if (!numeros.includes(num)) {
            numeros.push(num);
        }
    }
    const labelResultado = document.getElementById('labelResultado');
    const resultado = document.getElementById('resultado');
    const line3 = document.querySelector('.line3');

    labelResultado.textContent = qnt === 1 ? 'Sortudo:' : 'Sortudos:';
    resultado.innerHTML = numeros.sort((a, b) => a - b).map(n => `<span class="numero-box">${n}</span>`).join('');

    if (qnt > 6) {
        line3.classList.add('vertical');
    } else {
        line3.classList.remove('vertical');
    }
}