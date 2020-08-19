const cpf = document.getElementById("cpf")



cpf.addEventListener('input', function () {
  if (cpf.value.length == 3) this.value += "."
  if (cpf.value.length == 7) this.value += "."
  if (cpf.value.length == 11) this.value += "-"
})

