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
                sh 'cd UI; nohup DB_HOST="dbmysql.cx02uzagq3fl.us-west-1.rds.amazonaws.com" DB_USER="dbadmin" DB_PASS="dbpass1234567!" DB_NAME="movie_db" node server.js &'
				sh 'cd UI; npm test'
            }

        }
    }
}

