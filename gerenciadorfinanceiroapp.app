# Gerenciador Financeiro APP 

(https://finapp.bragherstudio.com/view22/index.html)

/Users/quintinnodigital/Desktop/gerenciadorfinanceiroapp/android/app/build/outputs/apk/debug

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

    -- Comandos

        export CAPACITOR_ANDROID_STUDIO_PATH=/opt/android-studio/bin/studio.sh
        export PATH=$PATH:/opt/gradle-8.2/bin

        ionic build
        ionic capacitor copy android
        ionic capacitor open android
        ionic capacitor run android -l --external