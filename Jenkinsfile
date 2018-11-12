node('master'){
    
    stage('SCM BDD Checkout'){
		git 'https://github.com/techninjas4/assignment2-BDD'                   
	}
	
	stage('Maven Build & Tests Execution'){
		def mvnHome = tool name: 'maven-3', type: 'maven'
		def mvnCMD = "${mvnHome}/bin/mvn"
		sh "${mvnCMD} clean install"	                         
	}
	
	stage('Generate BDD Report'){
		cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'                
	}

}
