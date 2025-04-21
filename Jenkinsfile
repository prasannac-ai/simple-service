pipeline {
    agent any

    stages {
        
         stage('Git Clone') {
            steps {
                
                 git branch: 'main', url: 'https://github.com/prasannac-ai/simple-service.git'
               
            }
        }
        stage('run test') {
            steps {
                sh "newman run FastAPI.postman_collection_pass.json"
            }
        }
    }
}
