import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.helloWorld', () => {

		let editor = vscode.window.activeTextEditor;

		if (editor) {

			const file_name = editor.document.fileName;
			const compile_file = file_name.slice(0, -2);
			
			const terminal = vscode.window.createTerminal();
			terminal.sendText(`gcc ${file_name} -o ${compile_file}`);
			terminal.sendText('clear');
			terminal.sendText(`${compile_file}`);
			terminal.show();
		}

	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
