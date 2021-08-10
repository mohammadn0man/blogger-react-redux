pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                sh 'sudo npm install' 
                sh 'sudo npm run build'
            }   
        }
        stage('Deploy') {
            steps{
                sh 'sudo rm -rf /var/www/react-blog-app'
                sh 'sudo cp -r ${WORKSPACE}/build/ /var/www/react-blog-app'
            }
        }
    }
}