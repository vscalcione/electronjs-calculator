const { app, BrowserWindow } = require('electron');

function createWindow() {

  // Create browser window
  const win = new BrowserWindow({
    width: 325,
    height: 324,
    maxWidth: 325,
    maxHeight: 324,
    minWidth: 325,
    minHeight: 324,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // load the index.html file on the app
  win.loadURL('file://' + __dirname + '/index.html');

  // If the user needs to use dev-tools panel, uncomment the next line
  //win.webContents.openDevTools()
}

app.whenReady().then(createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});