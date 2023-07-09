# Gerenciador Financeiro APP 

(https://finapp.bragherstudio.com/view22/index.html)

/home/Quintinno/Desenvolvimento/gerenciadorfinanceiroapp/android/app/build/outputs/apk/debug

https://pgicons.abiro.com/

    -- Funcionalidades

    -- Tarefas

        feature: Implementar tela de Monitoramento Financeiro
        feature: Implementar cadastro de Lançamento Financeiro (Receita)
        feature: Implementar tela de gerenciamento de pessoas do sistema
        GERFIN29062023130143

        GERFIN02072023204537
            feature: Implementar upload de anexos de Receitas

        GERFIN04072023165615

            feature: Implementar tela de Configuração do Usuário
            feature: Implementar atualização de imagem do perfil
            feature: Implementar Dark Mode

                npm install @capacitor/camera
                npm install @ionic/pwa-elements

        GERFIN05072023162859

            feature: Implementar Modelagem de Paramêtros do Ususário

    -- Comandos

        export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
        export PATH=$PATH:/opt/gradle-8.2/bin

        ionic build
        npx capacitor sync
        ionic capacitor copy android
        ionic capacitor open android
        ionic capacitor run android -l --external