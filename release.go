package main

import (
	"github.com/flowcommerce/tools/executor"
)

func main() {
	executor := executor.Create("lib-reference-javascript")
	executor = executor.Add("git checkout main")
	executor = executor.Add("git pull origin main")
	executor = executor.Add("npm install")
	executor = executor.Add("npm run lint")
	executor = executor.Add("npm run build")
	executor = executor.Add("git add data")
	executor = executor.Add("git commit -m \"autocommit: version `sem-info tag next`\" --allow-empty")
	executor = executor.Add("dev tag --label micro")
	executor = executor.Add("git push origin main")
	executor = executor.Add("npm publish")
	executor.Run()
}
