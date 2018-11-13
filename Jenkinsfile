node('UbuntuBDD'){
    
    //stage('SCM BDD Checkout'){
		//git 'https://github.com/techninjas4/assignment2-BDD'              
	//}
	
	stage('Maven Build & BDD Execution'){
		//def mvnHome = tool name: 'maven-3', type: 'maven'
		//def mvnCMD = "${mvnHome}/bin/mvn"
		//sh "${mvnCMD} clean install"
		sh 'cd /home/ajaydasari/eclipse-workspace/CucumberTests/mvn clean install'	                         
	}
	
	stage('Generate BDD Report'){
		cucumber fileIncludePattern: '**/*.json', sortingMethod: 'ALPHABETICAL'                
	}

}
