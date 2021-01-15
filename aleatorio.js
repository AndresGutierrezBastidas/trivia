function numeroAleatorioDecimales(min, max) {
    var num =Math.floor( Math.random() * (max - min+1)+min);
    return num;
  }
const a = numeroAleatorioDecimales(1, 3)
console.log(a)