
const clipboard = new ClipboardJS('.botao')

clipboard.on('success', function(e) {
    alert("copiado com sucesso, adicione ao pedido")
});

clipboard.on('error', function(e) {
    alert("Falha ao copiar")
});

