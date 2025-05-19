// Asegúrate de que la librería de Thirdweb esté cargada en tu HTML
const { ThirdwebSDK } = window.TW;

// Define tu Client ID y Secret Key aquí (NO lo compartas públicamente)
const clientId = 'c93bf0ad6631d161f528283c1d200602';
const secretKey = process.env.SECRET_KEY;
console.log("Secret Key: ", secretKey);

// Conexión a Thirdweb usando la API Key y Client ID para autenticación
const sdk = new ThirdwebSDK('goerli', { clientId, secretKey });

// Elementos del DOM
const createTokenBtn = document.getElementById('createTokenBtn');
const tokenNameInput = document.getElementById('tokenName');
const tokenSymbolInput = document.getElementById('tokenSymbol');
const statusDiv = document.getElementById('status');

// Función para crear el token
async function createToken() {
    // Obtenemos los valores del formulario
    const tokenName = tokenNameInput.value;
    const tokenSymbol = tokenSymbolInput.value;

    if (!tokenName || !tokenSymbol) {
        statusDiv.innerHTML = "Por favor, ingrese un nombre y un símbolo para el token.";
        return;
    }

    try {
        // Crear el token ERC20 en Thirdweb
        const token = await sdk.deployToken({
            name: tokenName,
            symbol: tokenSymbol,
            primarySaleRecipientAddress: "0x0000000000000000000000000000000000000000", // Cambia esta dirección según sea necesario
        });

        // Mostrar éxito
        statusDiv.innerHTML = `Token creado exitosamente: <br> Nombre: ${tokenName} <br> Símbolo: ${tokenSymbol} <br> Dirección del Token: ${token.address}`;
    } catch (error) {
        // Manejo de errores
        statusDiv.innerHTML = `Error al crear el token: ${error.message}`;
    }
}

// Evento del botón para crear el token
createTokenBtn.addEventListener('click', createToken);
