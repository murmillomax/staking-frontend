let stakingContract;


async function cargarStaking() {

    const artifact = await fetch(
        "../abi/Staking.json"
    )
    .then(r => r.json());


    stakingContract = new ethers.Contract(
        STAKING_ADDRESS,
        artifact.abi,
        window.signer
    );


    console.log(
        "Staking cargado:",
        stakingContract
    );


    return stakingContract;
}



async function hacerStake(amount, dias) {

    const tx = await stakingContract.stake(
        amount,
        dias
    );


    await tx.wait();


    console.log(
        "Stake realizado"
    );
}



async function verStake(id) {

    const address =
        await window.signer.getAddress();


    const stake =
        await stakingContract.getStake(
            address,
            id
        );


    console.log(
        "Stake:",
        stake
    );


    return stake;
}



async function retirarStake(id) {

    const tx =
        await stakingContract.withdraw(id);


    await tx.wait();


    console.log(
        "Stake retirado"
    );
}

async function verTodosLosStakes(){

    const address =
        await window.signer.getAddress();


    const total =
        await stakingContract.getNumStakes(address);


    console.log(
        "Total stakes:",
        total.toString()
    );


    for(
        let i = 0;
        i < total;
        i++
    ){

        const stake =
            await stakingContract.getStake(
                address,
                i
            );


        console.log(
            "Stake ID:",
            i,
            stake
        );

    }
}

