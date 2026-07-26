document
.getElementById("connect")
.onclick = async () => {

    await conectarWallet();

    await cargarToken();

    await cargarStaking();

    alert("Wallet y contratos conectados");

};



document
.getElementById("balance")
.onclick = async () => {

    const balance =
        await balanceToken();


    document.getElementById(
        "balanceValor"
    ).innerHTML =
        "Balance: " +
        ethers.formatEther(balance);

};



document
.getElementById("approve")
.onclick = async () => {

    const amount =
        document.getElementById(
            "approveAmount"
        ).value;


    const wei =
        ethers.parseEther(amount);


    await aprobarStaking(wei);


    alert(
        "Aprobación realizada"
    );

};

document
.getElementById("stake")
.onclick = async () => {

    const amount =
        document.getElementById(
            "stakeAmount"
        ).value;

    const dias =
        document.getElementById(
            "stakeDays"
        ).value;


    const wei =
        ethers.parseEther(amount);


    await hacerStake(
        wei,
        dias
    );


    alert(
        "Stake realizado"
    );

};

document
.getElementById("myStake")
.onclick = async () => {

    const id =
        document.getElementById(
            "stakeId"
        ).value;

    const stake =
        await verStake(id);


    document.getElementById(
        "stakeInfo"
    ).innerHTML =
        `
        Cantidad: ${ethers.formatEther(stake[0])} STK<br>
        Inicio: ${new Date(Number(stake[1]) * 1000)}<br>
        Expira: ${new Date(Number(stake[2]) * 1000)}
        `;

};

/*
document
.getElementById("withdraw")
.onclick = async () => {

    const id =
        document.getElementById(
            "withdrawId"
        ).value;


    await retirarStake(id);


    alert(
        "Stake retirado"
    );

};
*/