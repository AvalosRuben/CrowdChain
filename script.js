function toggleWalletMenu() {
  const menu = document.getElementById("walletMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function connectWallet(walletName) {
  alert("Conectando con " + walletName);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
async function connectWallet(walletName) {
  if (walletName === "Phantom") {
    if (window.solana && window.solana.isPhantom) {
      try {
        const resp = await window.solana.connect();
        alert("Conectado a Phantom con dirección: " + resp.publicKey.toString());
      } catch (err) {
        alert("Error al conectar Phantom: " + err.message);
      }
    } else {
      alert("Phantom no está instalado.");
    }
  } else if (walletName === "MetaMask") {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        alert("Conectado a MetaMask con dirección: " + accounts[0]);
      } catch (err) {
        alert("Error al conectar MetaMask: " + err.message);
      }
    } else {
      alert("MetaMask no está instalado.");
    }
  } else {
    alert("Wallet aún no soportada: " + walletName);
  }
}
