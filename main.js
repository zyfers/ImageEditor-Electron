const { BrowserWindow, app } = require('electron')

let win = null;

// will be fired when application is ready
let createWindow = () => {
    win = new BrowserWindow({
        width: 700,
        height: 500,
        frame: false,
        webPreferences: { nodeIntegration: true }
    })

    // dirname is for windows (make relative or add mac path)
    win.loadURL(`file://${__dirname}/index.html`)
    // win.webContents.openDevTools();
}

app.on('ready', createWindow)