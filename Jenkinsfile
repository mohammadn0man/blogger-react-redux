pipeline {

try {
    stage('Checkout') {
      checkout scm
    }
    stage('Environment') {
      sh 'git --version'
      echo "Branch: ${env.BRANCH_NAME}"
      sh 'docker -v'
      sh 'printenv'
    }
    stage('Build Docker test'){
     sh 'docker build -t react-test -f Dockerfile.test --no-cache .'
    }
    stage('Docker test'){
      sh 'docker run --rm react-test'
    }
    stage('Clean Docker test'){
      sh 'docker rmi react-test'
    }
    stage('Deploy'){
      if(env.BRANCH_NAME == 'master'){
        sh 'docker build -t react-app --no-cache .'
        sh 'docker tag react-app localhost:5000/react-app'
        sh 'docker push localhost:5000/react-app'
        sh 'docker rmi -f react-app localhost:5000/react-app'
      }
    }
  }
  catch (err) {
    throw err
  }

    // agent {
    //     docker {
    //         image 'node:6-alpine'
    //         args '-p 3000:3000'
    //     }
    // }
    //  environment {
    //         CI = 'true'
    //     }
    // stages {
    //     stage('Build') {
    //         steps {
    //             sh 'npm install'
    //         }
    //     }
    //     // stage('Test') {
    //     //     steps {
    //     //         sh' ls -l ./jenkins/scripts'
    //     //         sh './jenkins/scripts/test.sh'
    //     //     }
    //     // }
    //     stage('Deliver') {
    //         steps {
    //             sh './jenkins/scripts/deliver.sh'
    //             input message: 'Finished using the web site? (Click "Proceed" to continue)'
    //             sh './jenkins/scripts/kill.sh'
    //         }
    //     }
    // }
}
