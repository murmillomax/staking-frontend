let tokenContract;


async function cargarToken() {

    const artifact = await fetch(
        "../abi/Token.json"
    )
    .then(r => r.json());


    tokenContract = new ethers.Contract(
        TOKEN_ADDRESS,
        artifact.abi,
        window.signer
    );


    console.log(
        "Token cargado:",
        tokenContract
    );


    return tokenContract;
}



async function balanceToken() {

    const address =
        await signer.getAddress();


    const balance =
        await tokenContract.balanceOf(address);


    console.log(
        "Balance STK:",
        balance.toString()
    );


    return balance;

}



async function aprobarStaking(amount) {


    const tx =
        await tokenContract.approve(
            STAKING_ADDRESS,
            amount
        );


    await tx.wait();


    console.log(
        "Aprobación realizada"
    );

}