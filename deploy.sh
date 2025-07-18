#!/bin/bash

# 🚀 Script de Deploy para GitHub Pages
# Execute este script para fazer o deploy do seu portfólio

echo "🚀 Iniciando deploy do Portfolio Vue 3..."

# Verificar se há mudanças não commitadas
if [[ -n $(git status --porcelain) ]]; then
    echo "📝 Adicionando arquivos modificados..."
    git add .
    
    echo "💾 Fazendo commit..."
    read -p "📝 Digite a mensagem do commit: " commit_message
    git commit -m "$commit_message"
fi

# Fazer push para GitHub
echo "⬆️ Enviando para GitHub..."
git push

echo "✅ Deploy concluído!"
echo "🌐 Seu site estará disponível em alguns minutos em:"
echo "   https://skti-dev.github.io/portfolio-vue-3/"
echo ""
echo "📊 Acompanhe o progresso em:"
echo "   https://github.com/skti-dev/portfolio-vue-3/actions"
