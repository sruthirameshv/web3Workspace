import React from 'react';
import { useContractKit } from '@celo-tools/use-contractkit';
import { ContractKitProvider, Alfajores, NetworkNames } from '@celo-tools/use-contractkit';
import '@celo-tools/use-contractkit/lib/styles.css';

// Connect to celo blockchain where the contract is deployed
// Pre-req: yarn add web3 and import it here
//const kit =  ContractKit.newKitFromWeb3(web3);

function App () {
  const { address, connect } = useContractKit()
  const { kit } = useContractKit();
  // const { web3 } = kit.web3;
  const { network, updateNetwork } = useContractKit();
  return (
    <main>
      <h1>Celo DNS DApp</h1>
      <p>{address}</p>
      <div>Currently connected to {network.name}</div>;
      <button onClick={connect}>Click here to connect your wallet</button>
    </main>
  )
}

  /* Get account summary 
  async function getAccountSummary() {
    const accounts = await kit.contracts.getAccounts();
    await accounts.getAccountSummary(address);
  }
}

async function balanceOf() {
  let contract = await kit.contracts.getGoldToken();
  let balanceOf = await contract.balanceOf(account.address);
  console.log(`${balanceOf}`);
}*/

/*Transfer 0.1 ether
let value = 0.1
async function transfer() {
  let amount = kit.web3.utils.toWei(value, "ether");
  let contract = await kit.contracts.getGoldToken();
  let transaction = await contract.transfer(address, amount).send({ from: account.address });
  let receipt = await transaction.waitReceipt();
  let balance = await contract.balanceOf(account.address);

  console.log(
    `Transaction: https://alfajores-blockscout.celo-testnet.org/tx/${receipt.transactionHash}/`,
    "\n",
    `Balance: ${kit.web3.utils.fromWei(balance.toString(), "ether")}`
  );
}
*/

function WrappedApp() {
  return (
    <ContractKitProvider
      dapp={{
          name: "My DNS dApp",
          description: "Test code for DNS service in Celo",
          url: "https://example.com",
        }}
    >
      <App />
    </ContractKitProvider>
  );
}
export default WrappedApp;
