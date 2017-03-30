package main

import (
	"github.com/flowcommerce/tools/executor"
)

func main() {
	executor := executor.Create("lib-reference-javascript")
	executor = executor.Add("git checkout master")
	executor = executor.Add("git pull origin master")
	executor = executor.Add("npm run lint")
	executor = executor.Add("npm run build")
	executor = executor.Add("dev tag --label micro")
	executor = executor.Add("git push origin master")
	executor = executor.Add("npm publish")
	executor.Run()
}
