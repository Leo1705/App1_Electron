//back-end script
const {
  app,
  BrowserWindow,
  ipcMain
} = require('electron');
const path = require('path');



var mainPage = "src/index.html";

function createWindow() {
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      devTools: true,
      worldSafeExecuteJavaScript: true,
      allowRunningInsecureContent: false,
      maximizable: true,
      show: false
    },

  });
  mainWin.maximize()
  mainWin.loadFile(mainPage);
  mainWin.once('ready-to-show', () => {

    mainWin.show();
  });
}


ipcMain.on("chat", (event, args) => {
  let message = args.messsage;
  event.returnValue = message;

})
ipcMain.on("maintorender", (event, args) => {
  let message2 = args.message2;
  event.returnValue = message2;
  console.log(message2);
})
ipcMain.handle("maintorender", (event, args) => {
  let message3 = args.message3;

  event.returnValue = message3;
  console.log(message3);
})

app.on('ready', createWindow);