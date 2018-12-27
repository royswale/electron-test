const {app, BrowserWindow, Notification} = require('electron')

let win

// console.log(Notification.isSupported())
// true

function createWindow() {
	win = new BrowserWindow({width: 800, height: 600})

	win.loadFile('index.html')

	win.webContents.openDevTools()

	win.on('close', () => {
		win = null
	})

	let no = new Notification({
		title: 'hello'
	})
	no.show();
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (win === null) {
		createWindow()
	}
})
