let querCoxinha = prompt("Você deseja comer mais uma coxinha? Digite S para sim e N para não.")
let preco = Number(0)

while(querCoxinha === "S"){
    querCoxinha = (prompt("Você deseja comer mais uma coxinha? Digite S para sim e N para não.")).toLocaleUpperCase()
    preco = preco + 2.50
    console.log(preco)
    if(querCoxinha === "N"){
        alert(`O valor total é R$ ${preco}`)
    }
}