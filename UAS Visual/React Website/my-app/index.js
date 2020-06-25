const electron = require("electron")
const fs = require("fs")
const uuid = require("uuid")

const {
    app,
    BrowserWindow,
    ipcMain,
    Menu
} = electron

let mainWindow;
let listWindow;

let allAppointments = []

fs.readFile("db.json", (err, jsonAppointments) => {
    if (!err) {
        const oldAppointments = JSON.parse(jsonAppointments)
        allAppointments = oldAppointments
    }
})

const createWindow = () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 1000,
        height: 1000,
        title: "HEAVY MerchShop",
    })
    const starUrl =
        process.env.ELECTRON_START_URL || `file://${__dirname}/build/index.html`

    mainWindow.loadURL(starUrl)

    mainWindow.on("closed", () => {
        const jsonAppointments = JSON.stringify(allAppointments)
        fs.writeFileSync("db.json", jsonAppointments)

        app.quit()
        mainWindow = null
    })

    if (process.env.ELECTRON_START_URL) {
        const mainMenu = Menu.buildFromTemplate(menuTemplate)
        Menu.setApplicationMenu(mainMenu)
    } else {
        Menu.setApplicationMenu(null)
    }
}

app.on("ready", createWindow)

const listWindowCreator = () => {
    listWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "All Appointments"
    });

    listWindow.setMenu(null);
    listWindow.loadURL(`file://${__dirname}/src/Product.js`);
    listWindow.on("closed", () => (listWindow = null));
};

ipcMain.on("appointment:create", (event, appointment) => {
    appointment["id"] = uuid()
    appointment["done"] = 0

    allAppointments.push(appointment)
})

ipcMain.on("appointment:request:list", (event) => {
    mainWindow.webContents.send("appointment:response:list", allAppointments)
})

ipcMain.on("appointment:request:main", event => {
    console.log("Welcome to HEAVY Merch Shop");
});

/* ipcMain.on("appointment:done", (event, id) => {
    allAppointments.forEach(appointment => {
        if (appointment.id === id) appointment.done = 1
    })

    sendTodayAppointments()
})

const sendTodayAppointments = () => {
    const today = new Date().toISOString().slice(0, 10)
    const filtered = allAppointments.filter(
        (appointment) => appointment.date === today
    )

    mainWindow.webContents.send("appointment:response:today", filtered)
} */

const menuTemplate = [{
    label: "File",
    submenu: [{
        label: "All Apointments",
        click() {
            listWindowCreator();
        }
    }],
},
{
    label: "View",
    submenu: [{
        role: "reload"
    }, {
        role: 'toggledevtools'
    }],
},
{
    label: "Quit",
    accelerator: process.platform === "darwin" ? "Command+Q" : "Ctrl + Q",
    click() {
        app.quit();
    }
}]