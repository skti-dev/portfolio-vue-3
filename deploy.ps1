# 🚀 Script de Deploy para GitHub Pages (Windows PowerShell)
# Execute: .\deploy.ps1

Write-Host "🚀 Iniciando deploy do Portfolio Vue 3..." -ForegroundColor Green

# Verificar se há mudanças não commitadas
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Adicionando arquivos modificados..." -ForegroundColor Yellow
    git add .
    
    $commitMessage = Read-Host "📝 Digite a mensagem do commit"
    Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
    git commit -m $commitMessage
}

# Fazer push para GitHub
Write-Host "⬆️ Enviando para GitHub..." -ForegroundColor Blue
git push

Write-Host "✅ Deploy concluído!" -ForegroundColor Green
Write-Host "🌐 Seu site estará disponível em alguns minutos em:" -ForegroundColor Cyan
Write-Host "   https://skti-dev.github.io/portfolio-vue-3/" -ForegroundColor White
Write-Host ""
Write-Host "📊 Acompanhe o progresso em:" -ForegroundColor Cyan
Write-Host "   https://github.com/skti-dev/portfolio-vue-3/actions" -ForegroundColor White
