pipeline {
  agent any
  triggers {
    githubPush()
  }
  tools {nodejs "NodeJs"}
    stages {
        stage('Checkout') {
            steps {
                echo 'Checkout...'
                sh 'rm -rf UI; git clone https://github.com/LabregoPT/movie-analyst-api.git UI'
            }

        }
        stage('Build') {
            steps {
                echo 'Build...'
                sh 'cd UI; npm install -g mocha; npm install --production=false'
            }

        }
        stage('Test') {
            steps {
                echo 'Testing...'
                                sh 'cd UI; nohup node server.js &; npm test'
            }

        }
    }
}