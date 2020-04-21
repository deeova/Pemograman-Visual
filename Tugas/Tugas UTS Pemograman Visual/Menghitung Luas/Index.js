const electron = require("electron");
const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;
const {
    v4: uuidv4
} = require('uuid');
uuidv4();

let HomeWindow;
let KelilingJGWindow;
let LuasJGWindow;
let LuasKerWindow;
let LuasKubWindow;
let LuasPSWindow;
let LuasTabWindow;
let AboutWindow;

let allApointment = [];

app.on("ready", () => {
    HomeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        title: "Aplikasi Hitung Luas Bangun Datar"
    });

    HomeWindow.loadURL(`file://${__dirname}/Home.html`);
    HomeWindow.on("closed", () => {

        app.quit();
        HomeWindow = null;
    });
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);

});

const LuasJGWindowCreator = () => {
    LuasJGWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Jajar Genjang"
    });

    LuasJGWindow.setMenu(null);
    LuasJGWindow.loadURL(`file://${__dirname}/LuasJG.html`);
    LuasJGWindow.on("closed", () => (LuasJGWindow = null));
};

const KelilingJGWindowCreator = () => {
    KelilingJGWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Keliling Jajar Genjang"
    });

    KelilingJGWindow.setMenu(null);
    KelilingJGWindow.loadURL(`file://${__dirname}/KelilingJG.html`);
    KelilingJGWindow.on("closed", () => (KelilingJGWindow = null));
};

const LuasKubWindowCreator = () => {
    LuasKubWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kubus"
    });

    LuasKubWindow.setMenu(null);
    LuasKubWindow.loadURL(`file://${__dirname}/LuasKub.html`);
    LuasKubWindow.on("closed", () => (LuasKubWindow = null));
};

const LuasPSWindowCreator = () => {
    LuasPSWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Prisma Segitiga"
    });

    LuasPSWindow.setMenu(null);
    LuasPSWindow.loadURL(`file://${__dirname}/LuasPS.html`);
    LuasPSWindow.on("closed", () => (LuasPSWindow = null));
};

const LuasTabWindowCreator = () => {
    LuasTabWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Tabung"
    });

    LuasTabWindow.setMenu(null);
    LuasTabWindow.loadURL(`file://${__dirname}/LuasTab.html`);
    LuasTabWindow.on("closed", () => (LuasTabWindow = null));
};

const LuasKerWindowCreator = () => {
    LuasKerWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "Luas Kerucut"
    });

    LuasKerWindow.setMenu(null);
    LuasKerWindow.loadURL(`file://${__dirname}/LuasKer.html`);
    LuasKerWindow.on("closed", () => (LuasKerWindow = null));
};

const AboutWindowCreator = () => {
    AboutWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        },
        width: 600,
        height: 400,
        title: "About"
    });

    AboutWindow.setMenu(null);
    AboutWindow.loadURL(`file://${__dirname}/About.html`);
    AboutWindow.on("closed", () => (AboutWindow = null));
};

ipcMain.on("appointment:request:Home", event => {
    console.log("Selamat Datang di Website Perhitungan");
});

ipcMain.on("appointment:request:LuasJG", event => {
    console.log("Luas Jajar Genjang");
});

ipcMain.on("appointment:request:KelilingJG", event => {
    console.log("Keliling Jajar Genjang");
});

ipcMain.on("appointment:request:LuasKer", event => {
    console.log("Luas Kerucut");
});

ipcMain.on("appointment:request:LuasKub", event => {
    console.log("Luas Kubus");
});

ipcMain.on("appointment:request:LuasPS", event => {
    console.log("Luas Prisma Segitiga");
});

ipcMain.on("appointment:request:LuasTab", event => {
    console.log("Luas Tabung");
});


const menuTemplate = [{
        label: "Menghitung Luas Bangun Datar",
        submenu: [{
                label: "Luas Jajar Genjang",

                click() {
                    LuasJGWindowCreator()
                }
            },
            {
                label: "Keliling Jajar Genjang",

                click() {
                    KelilingJGWindowCreator()
                },
            },
            {
                label: "Luas Kubus",

                click() {
                    LuasKubWindowCreator()
                },
            },
            {
                label: "Luas Prisma Segitiga",

                click() {
                    LuasPSWindowCreator()
                },
            },
            {
                label: "Luas Tabung",

                click() {
                    LuasTabWindowCreator()
                },
            },
            {
                label: "Luas Kerucut",

                click() {
                    LuasKerWindowCreator()
                },
            },
        ]
    },
    {
        label: "View",
        submenu: [{
            role: "reload"
        }]
    }
]