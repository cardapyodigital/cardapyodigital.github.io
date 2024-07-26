
const clipboard = new ClipboardJS('.botao')

clipboard.on('success', function(e) {
    alert("adicionar ao pedido")
});

clipboard.on('error', function(e) {
    alert("Falha ao copiar")
});

