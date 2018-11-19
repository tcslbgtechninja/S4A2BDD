node('BDDNode'){
    
    stage('SCM BDD Checkout'){
		git 'https://github.com/tcslbgtechninja/S4A2BDD'              
	}
	
	stage('Maven Build for BDD Execution'){
		def mvnHome = tool name: 'maven-3', type: 'maven'
		def mvnCMD = "${mvnHome}/bin/mvn"
		sh "${mvnCMD} clean install"
	}
	
	stage('Generate BDD Report'){
		cucumber fileIncludePattern: '**/cucumber.json', jsonReportDirectory: '/home/ajaydasari/eclipse-workspace/CucumberTests/target', sortingMethod: 'ALPHABETICAL'                
	}

}
