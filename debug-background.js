// SCRIPT DE DEBUG PARA TESTAR O FUNDO ANIMADO
// Cole este código no console do navegador (F12 -> Console -> Cole e aperte Enter)

console.log("🔍 INICIANDO DEBUG DO FUNDO ANIMADO...");

// Encontrar o container do fundo
const backgroundContainer = document.querySelector('.background-nebula-container');
const contentContainer = document.querySelector('.content-container');

if (!backgroundContainer) {
    console.error("❌ ERRO: Container do fundo (.background-nebula-container) não encontrado!");
} else {
    console.log("✅ Container do fundo encontrado:", backgroundContainer);
}

if (!contentContainer) {
    console.error("❌ ERRO: Container do conteúdo (.content-container) não encontrado!");
} else {
    console.log("✅ Container do conteúdo encontrado:", contentContainer);
}

if (backgroundContainer && contentContainer) {
    // Verificar estilos atuais
    const bgStyles = window.getComputedStyle(backgroundContainer);
    const contentStyles = window.getComputedStyle(contentContainer);
    
    console.log("📊 ESTADO ATUAL:");
    console.log("Fundo - Position:", bgStyles.position);
    console.log("Fundo - Z-Index:", bgStyles.zIndex);
    console.log("Fundo - Visibility:", bgStyles.visibility);
    console.log("Fundo - Opacity:", bgStyles.opacity);
    console.log("Conteúdo - Z-Index:", contentStyles.zIndex);
    
    // TESTE DO Z-INDEX
    console.log("🧪 INICIANDO TESTE DO Z-INDEX...");
    console.log("Mudando z-index do fundo de", bgStyles.zIndex, "para 9999");
    
    // Guardar valor original
    const originalZIndex = backgroundContainer.style.zIndex || bgStyles.zIndex;
    
    // Mudar para 9999
    backgroundContainer.style.zIndex = "9999";
    
    setTimeout(() => {
        console.log("⏱️ O fundo animado apareceu NA FRENTE de tudo?");
        console.log("Se SIM: O problema é z-index. O fundo estava lá, mas preso atrás de algo.");
        console.log("Se NÃO: Problema mais fundamental de posicionamento ou CSS de animação.");
        
        setTimeout(() => {
            // Restaurar valor original
            backgroundContainer.style.zIndex = originalZIndex;
            console.log("↩️ Z-index restaurado para:", originalZIndex);
        }, 3000);
    }, 1000);
}

// Verificar se as bolhas existem
const blobs = document.querySelectorAll('.blob');
console.log(`🎈 Bolhas encontradas: ${blobs.length}`);
blobs.forEach((blob, index) => {
    const styles = window.getComputedStyle(blob);
    console.log(`Bolha ${index + 1} - Display: ${styles.display}, Opacity: ${styles.opacity}, Filter: ${styles.filter}`);
});
