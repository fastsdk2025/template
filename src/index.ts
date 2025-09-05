import { Command } from "commander"

const {{camelCase name}}Command = new Command()

{{camelCase name}}Command
	.name("{{kebabCase name}}")
	.description("{{kebabCase name}} command")
	.action(() => {
		console.log("{{kebabCase name}} command")
	})

export default {{camelCase name}}Command