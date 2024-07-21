
const clipboard = new ClipboardJS('.botao')

clipboard.on('success', function(e) {
    alert("copiado")
});

clipboard.on('error', function(e) {
    alert("Falha ao copiar")
});
