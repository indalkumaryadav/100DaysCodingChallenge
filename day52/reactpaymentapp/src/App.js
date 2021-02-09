import logo from "./logo.svg";
import "./App.css";

function App() {
  const handle_payment_success = () => {};
  const show_razorpay = () => {};
  // this will load a script tag which will open up Razorpay payment card to make //transactions
  const loadScript = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    document.body.appendChild(script);
  };
  return (
    <div className="App">
      <h1>Registraioin Form</h1>
      <button>Click</button>
    </div>
  );
}

export default App;
