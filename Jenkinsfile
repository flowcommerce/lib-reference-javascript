properties([pipelineTriggers([githubPush()])])

pipeline {
  options {
    disableConcurrentBuilds()
    buildDiscarder(logRotator(numToKeepStr: '10'))
    timeout(time: 30, unit: 'MINUTES')
  }

  agent {
    kubernetes {
      inheritFrom 'default'

      containerTemplates([
        containerTemplate(name: 'nodejs', image: "flowdocker/node12_builder:0.2.27", resourceRequestCpu: '1', resourceRequestMemory: '4Gi', command: 'cat', ttyEnabled: true, runAsUser: '1000'),
      ])
    }
  }

  environment {
    ORG      = 'flowcommerce'
    NPM_TOKEN = credentials('jenkins-npm-automation-token')
  }

  stages {
    stage('Checkout') {
      steps {
        checkoutWithTags scm

        script {
          VERSION = new flowSemver().calculateSemver() //requires checkout
        }
      }
    }

    stage('Lint') {
    //   when { not { branch 'main' } }
      steps {
        container('nodejs') {
          script {
            sh(script: 'npm ci')
            sh(script: 'npm run lint')
            sh(script: 'npm run test')
          }
        }
      }
    }
  }
}