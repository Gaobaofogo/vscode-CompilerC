import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

		// Provides an interface to the window the user is currently in
		let editor = vscode.window.activeTextEditor;

		// If the window is open (check required)
		if (editor) {

			const file_name = editor.document.fileName; // Absolute path of the file that is open
			const compile_file = file_name.slice(0, -2); // Absolute path of the compiled file to be created
			
			const terminal = vscode.window.createTerminal(); // Create as integrated terminal
			terminal.sendText(`gcc ${file_name} -o ${compile_file}`); // Send command 'gcc file.c -o file'
			terminal.sendText('clear'); // Send command 'clear' only for aesthetic reasons
			terminal.sendText(`${compile_file}`); // Execute the compiled file
			terminal.show(); // Show the terminal on screen
		}

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
