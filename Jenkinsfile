pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm i node-sass'
                sh 'npm install' 
                sh 'npm audit fix'
                sh 'npm run build'
            }   
        }
        stage('Deploy') {
            steps{
                sh 'rm -rf /var/www/react-blog-app'
                sh 'cp -r ${WORKSPACE}/build/ /var/www/react-blog-app'
            }
        }
    }
}