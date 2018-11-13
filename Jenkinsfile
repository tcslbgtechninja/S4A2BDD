node('UbuntuBDD'){
    
    //stage('SCM BDD Checkout'){
		//git 'https://github.com/techninjas4/assignment2-BDD'              
	//}
	
	stage('Maven Build & BDD Execution'){
		//def mvnHome = tool name: 'maven-3', type: 'maven'
		//def mvnCMD = "${mvnHome}/bin/mvn"
		//sh "${mvnCMD} clean install"
		sh 'mvn clean install -f /home/ajaydasari/eclipse-workspace/CucumberTests/pom.xml'	                         
	}
	
	stage('Generate BDD Report'){
		cucumber buildStatus: "UNSTABLE", fileIncludePattern: "**/cucumber.json", jsonReportDirectory: "target", sortingMethod: 'ALPHABETICAL'                
	}

}
