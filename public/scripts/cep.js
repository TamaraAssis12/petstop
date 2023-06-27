function pesquisacep(valor) {

    // Verifica se o valor é válido (CEP com 8 dígitos)
    if (valor.length === 8) {

        // Cria uma URL para a consulta do CEP
        const url = `https://viacep.com.br/ws/${valor}/json/`;

        // Realiza a requisição para obter os dados do CEP
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!data.erro) {
                    // Preenche os campos com os valores retornados
                    document.getElementById("rua").value = data.logradouro;
                    document.getElementById("bairro").value = data.bairro;
                    document.getElementById("cidade").value = data.localidade;
                    document.getElementById("uf").value = data.uf;
                }
            })
            .catch(error => {
                console.error("Erro na requisição do CEP:", error);
            });
    }
}
