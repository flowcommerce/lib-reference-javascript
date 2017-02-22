package main

import (
	"github.com/flowcommerce/tools/executor"
	"fmt"
	"os"
	"os/user"
)

func main() {
	usr, _ := user.Current()
	if _, err := os.Stat(fmt.Sprintf("%s/.npmrc", usr.HomeDir)); os.IsNotExist(err) {
		fmt.Println(".npmrc file not found. Please get it from keys/services/.npmrc and copy it to ~/.npmrc.")
		os.Exit(1)
	}
	executor := executor.Create("lib-reference-javascript")
	executor = executor.Add("git checkout master")
	executor = executor.Add("git pull origin master")
	executor = executor.Add("npm --no-git-tag-version version patch")
	executor = executor.Add("git commit -a -m 'autocommit: increment version'")
	executor = executor.Add("git push origin master")
	executor = executor.Add("dev tag")
	executor = executor.Add("npm install && npm publish")
	executor.Run()
}
