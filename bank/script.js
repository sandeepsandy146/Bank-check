function update() {
    let accno = document.getElementById("accno").value;
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    document.getElementById('Date').textContent = new Date().getDate().toString().padStart(2, '0') + '-' + monthNames[new Date().getMonth()] + '-' + new Date().getFullYear();
    document.getElementById("accfill").innerText = accno;
    document.getElementById("HolderName").innerText = name;
    document.getElementById("ammunt").innerText = amount;
    document.getElementById("words").innerText = convertToWords(amount);
}
function convertToWords(amount) {
    const one = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const teen = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const ten = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    let words = "";
    if (amount === 0) {
        return "Zero";
    } else if (amount >= 1 && amount <= 9) {
        words += one[amount];
    } else if (amount >= 10 && amount <= 19) {
        words += teen[amount - 10];
    } else if (amount >= 20 && amount <= 99) {
        const tens = Math.floor(amount / 10);
        const ones = amount % 10;
        words += ten[tens];
        if (ones > 0) {
            words += " " + one[ones];
        }
    } 
    else if (amount >= 100 && amount <= 999) {
        const hundreds = Math.floor(amount / 100);
        const remain = amount % 100;
        words += one[hundreds] + " Hundred";
        if (remain > 0) {
            words += " and " + convertToWords(remain);
        }
    } 
    else if (amount === 1000) {
        words = "One Thousand";
    }
    return words;
}
