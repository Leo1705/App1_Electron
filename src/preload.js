//preload accesss script
const {
    ipcRenderer,
    contextBridge
} = require('electron');


let indexBridge = {
    ipcRenderer: {
        ...ipcRenderer,
        on: ipcRenderer.on
    },
}


contextBridge.exposeInMainWorld("api", indexBridge);