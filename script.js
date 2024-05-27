document.getElementById('calculate').addEventListener('click', function() {
    const dollars = parseFloat(document.getElementById('dollars').value);
    const crypto = document.getElementById('crypto').value;

    if (isNaN(dollars) || dollars <= 0) {
        alert('Veuillez entrer le montant en Dollars');
        return;
    }

    // Cryptocurrency prices in USD
    const prices = {
        bitcoin: 662.2, // average of the three values
        ethereum: 652.02, // example value
        litecoin: 660.3, // example value
        usdt: 653,
    };

    const price = prices[crypto];
    const amount = (dollars * price)*1.015;

    document.getElementById('result').innerText = `Vous devrez acheter pour ${amount} F CFA`;
});

