const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea la finestra del browser
  const win = new BrowserWindow({
    width: 325,
    height: 324,
    maxWidth: 325,
    maxHeight: 324,
    minWidth: 325,
    minHeight: 324,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html')
  //win.loadFile('index.html')

  // Apre il Pannello degli Strumenti di Sviluppo.
  //win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Alcune API possono essere utilizzate solo dopo che si verifica questo evento.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // Su macOS è comune che l'applicazione e la barra menù 
  // restano attive finché l'utente non esce espressamente tramite i tasti Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // Su macOS è comune ri-creare la finestra dell'app quando
  // viene cliccata l'icona sul dock e non ci sono altre finestre aperte.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. Si può anche mettere il codice in file separati e richiederlo qui.