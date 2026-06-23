pipeline {
    agent any

    triggers {
        cron('0 3 * * *')
    }

    environment {
        IMAGE_NAME = 'projeto-api-node'
        CONTAINER_NAME = 'container-api-node'
        PORTA_HOST = '3000'
        PORTA_CONTAINER = '3000'
    }

    stages {
        stage('Limpeza (Cleanup)') {
            steps {
                script {
                    echo "Removendo container e imagem Node.js antigos se existirem..."
                    sh "docker rm -f ${CONTAINER_NAME} || true"
                    sh "docker rmi -f ${IMAGE_NAME} || true"
                }
            }
        }

        stage('Build da Imagem') {
            steps {
                echo "Construindo a nova imagem usando o Dockerfile do Node.js..."
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Deploy do Container') {
            steps {
                echo "Inicializando o container Node.js..."
                sh "docker run -d --name ${CONTAINER_NAME} -p ${PORTA_HOST}:${PORTA_CONTAINER} ${IMAGE_NAME}"
            }
        }
    }

    post {
        success {
            mail to: 'seu-email@gmail.com',
                 subject: "✅ Sucesso: Pipeline ${JOB_NAME} - Build #${BUILD_NUMBER}",
                 body: "Olá! O Job do Node.js foi executado com sucesso. O novo container está ativo na porta ${PORTA_HOST}."
        }
        failure {
            mail to: 'seu-email@gmail.com',
                 subject: "❌ Falha: Pipeline ${JOB_NAME} - Build #${BUILD_NUMBER}",
                 body: "Atenção! Ocorreu um erro no build do Node.js. Verifique o Console Output no Jenkins."
        }
    }
}