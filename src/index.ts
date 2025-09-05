import { Command } from "commander"

const templateCommand = new Command()

templateCommand
	.name("template")
	.description("template command")
	.action(() => {
		console.log("template command")
	})

export default templateCommand