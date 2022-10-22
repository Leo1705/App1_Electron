const {
    ipcRenderer
} = require("electron/renderer");

//renderer script
function Klick() {

    let button1_click = api.ipcRenderer.sendSync('chat', {
        messsage: "You clicked Button 1"
    })
    document.getElementById("info23").innerHTML = button1_click;
    console.log(button1_click);
}

function Klick2() {
    let button2_click = api.ipcRenderer.send("maintorender", {
        message2: "You clicked Button 2"
    })

}

function Klick3() {
    let button3_click = api.ipcRenderer.invoke("maintorender", {
        message3: "You clicked Button 3"
    })

}
//invoke ako pukne funckija ke produzi da raboti program, a sendSync ke ga blokira cel program - ke se koriti samo kd si 100% siguran
//napravi edno ss sendSync edno ss Invoke, ime na kanal maintorender, na kraj sve toj sto ke ga napravis tuja da ga prepravis ss dev extreme - sss jquery ili react...