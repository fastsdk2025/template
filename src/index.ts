import { Command } from "commander"

const {{name}}Command = new Command()

{{name}}Command
	.name("{{command_name}}")
	.description("{{command_name}} command")
	.action(() => {
		console.log("{{command_name}} command")
	})

export default {{name}}Command