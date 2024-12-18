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
        containerTemplate(name: 'nodejs', image: "flowdocker/node16_builder", resourceRequestCpu: '1', resourceRequestMemory: '4Gi', command: 'cat', ttyEnabled: true, runAsUser: '1000'),
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
      environment {
        NPM_TOKEN = credentials('jenkins-npm-automation-token')
      }
      steps {
        container('nodejs') {
          script {
            sh(script: 'node --version')
            sh(script: 'npm --version')
            sh(script: 'echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > .npmrc')
            sh(script: 'NODE_ENV=development npm ci')
            sh(script: 'npm run test')
            sh(script: 'npm run lint')
          }
        }
      }
    }
  }
}