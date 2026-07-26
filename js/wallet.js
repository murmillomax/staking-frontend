window.provider = null;
window.signer = null;


async function conectarWallet() {

    if (!window.ethereum) {
        alert("MetaMask no está instalado");
        return;
    }


    await window.ethereum.request({
        method: "eth_requestAccounts"
    });


    window.provider = new ethers.BrowserProvider(
        window.ethereum
    );


    window.signer = await window.provider.getSigner();


    console.log(
        "Wallet:",
        await window.signer.getAddress()
    );


    return window.signer;
}