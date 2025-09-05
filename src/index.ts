import { Command } from "commander"

const {{name}}Command = new Command()

{{name}}Command
	.name("{{name}}")
	.description("{{name}} command")
	.action(() => {
		console.log("{{name}} command")
	})

export default {{name}}Command