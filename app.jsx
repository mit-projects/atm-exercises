const ATMDeposit = ({ onChange, isDeposit }) => {

  return (
    <label className="label huge">
      <input type="number" width="200" onChange={onChange}></input>
      <input type="submit" width="200" value="Submit"></input>
    </label>
  );
};

const ATMButton = ({ label, handleAtmClick }) => {
  return (
    <button onClick={handleAtmClick} id={label}>{label}</button>
  )
}

const Account = () => {
  let deposit = 0; // state of this transaction
  const [totalState, setTotalState] = React.useState(0);
  const [mode, setMode] = React.useState('');

  let balance = totalState;
  const handleChange = event => {
    deposit = Number(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTotal = totalState;
    if (mode == "Deposit") newTotal += deposit;
    else if (mode == "Withdrawal" && deposit <= totalState) newTotal -= deposit;
    setTotalState(newTotal);
    setMode('');
  };

  const handleAtmClick = (e) => {
    setMode(e.target.id);
  }

  return (
    <div className="screen">
      <span id="welcome-msg">Welcome to the ATM</span>
      <form onSubmit={handleSubmit}>
        <p id="total">Your balance: ${balance}</p>
        {mode && <ATMDeposit onChange={handleChange} />}
        {!mode && <>
          <ATMButton label={'Deposit'} handleAtmClick={handleAtmClick} />
          <ATMButton label={'Withdrawal'} handleAtmClick={handleAtmClick} />
        </>
        }
      </form>
    </div>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
