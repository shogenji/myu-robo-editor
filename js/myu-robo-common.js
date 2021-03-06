let device = undefined;
let isConnected = false;
let deviceFilter = {    // Filter on devices with the MYU robo.
    vendorId: 0x04d8,   // Microchip Technology Inc.
    productId: 0xfa8b,  // MYUUSB
};
let requestParams = { filters: [deviceFilter] };

async function connect() {
    console.log(event.type);
    
    if (isConnected == true) {
        return;
    }

    try {
        [device] = await navigator.hid.requestDevice(requestParams);
        if (!device) {  // Cancelled
            return;
        }
    } catch (error) {
        console.error(error.name, error.message);
    }

    if (!device.opened) {
        try {
            await device.open();
        } catch (error) {
            console.error(error.name, error.message);
        }   
    }

    isConnected = true;    

    document.getElementById("deviceStatus").innerText = device.productName + "に接続しました。";

    setButtonStyle();
}

async function handleConnectedDevice(e) {
    console.log("Device connected: " + e.device.productName);
}

async function handleDisconnectedDevice(e) {
    console.log("Device disconnected: " + e.device.productName);

    isConnected = false;

    document.getElementById("deviceStatus").innerText = "接続されていません。";
    
    setButtonStyle();
}

function handleInputReport(e) {
    console.log(e.device.productName + ": got input report " + e.reportId);
    console.log(new Uint8Array(e.data.buffer));
}
  
navigator.hid.addEventListener("connect", handleConnectedDevice);
navigator.hid.addEventListener("disconnect", handleDisconnectedDevice);
