import React from "react";

class SetupWallet extends React.Component {
  state = {
    message: ""
  };

  onClick = () => {
    this.setState({ message: "Install MetaMask Wallet to take the test !" });
  };

  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          Rule is simple, the web auto connect to your MetaMask wallet, anyone
          can send their ether, a random winner will take them all !
        </p>
        <p>
          You don't have MetaMask wallet, get one{" "}
          <a href={"https://metamask.io/"} target="_blank">
            here
          </a>
          .
        </p>
        <p>
          Get free eth on rinkeby network{" "}
          <a href={"https://faucets.chain.link/rinkeby"} target="_blank">
            here
          </a>{" "}
          to take the test.
        </p>
        <h4>Want to try your luck?</h4>
        <div>
          <label>Amount of ether to enter</label>
          <br></br>
          <input />
        </div>
        <button onClick={this.onClick} className="button">
          Enter
        </button>
        <hr />
        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winner!</button>{" "}
        <span>(Only manager can run)</span>
        <hr />
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default SetupWallet;
