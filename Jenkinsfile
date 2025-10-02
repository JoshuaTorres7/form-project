pipeline {
    agent any

    tools {
        nodejs "NodeJS" // Make sure Jenkins has a NodeJS tool configured
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/JoshuaTorres7/form-project.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }
        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker Build & Push') {
            steps {
                script {
                    docker.build("react-app:${env.BUILD_NUMBER}")
                }
            }
        }
    }
}
