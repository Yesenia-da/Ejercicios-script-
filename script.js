let hora = new Date().getHours(); 
if (hora >= 6 && hora < 12) {
    document.write("Buenos días");
} else if (hora >= 12 && hora < 18) {
    document.write("Buenas tardes");
} else {
    document.write("Buenas noches");
}
