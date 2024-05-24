function generateBill() {
    const numUnits = parseFloat(document.getElementById('numUnits').value);
    const chargesPerUnit = parseFloat(document.getElementById('chargesPerUnit').value);
    const netAmount = numUnits * chargesPerUnit;
    const latePaymentSurcharge = netAmount * 0.05; // 5% late payment surcharge
    const grossAmount = netAmount + latePaymentSurcharge;

    // Display the calculated amounts
    document.getElementById('netAmount').value = netAmount.toFixed(2);
    document.getElementById('latePaymentSurcharge').value = latePaymentSurcharge.toFixed(2);
    document.getElementById('grossAmount').value = grossAmount.toFixed(2);
}