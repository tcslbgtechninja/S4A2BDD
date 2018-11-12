node('master'){
    
    stage('SCM BDD Checkout'){
		git 'https://github.com/techninjas4/assignment2-BDD'                   
	}
	
	stage('Maven Build & Tests Execution'){
		sh 'mvn clean install'	                         
	}
	
	stage('Generate BDD Report'){
		cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'                
	}

}
