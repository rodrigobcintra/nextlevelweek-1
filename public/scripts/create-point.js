function populateUfs(){
    // selecionando no documento o nome uf
    var ufSelect = document.querySelector("select[name=uf")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    // função anonima - arrow function
    // que transforma o retorno da api do site em .json
    .then(res => res.json())
    .then(states => {
        // popular a caixa seletora com as ufs
        for(var state of states){
            // retornar o conteudo html do elemento
            // ${} valor injetado
            // é necessario esta entre `` para poder injetar 
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

function getCities(event){
    // select e input como argumentos nao sao necessarios
    var citySelect = document.querySelector("select[name=city]")
    var stateInput = document.querySelector("input[name=state]")
    var ufValue = event.target.value
    // armazenar o numero do index do evento 
    var indexOfSelectidState = event.target.selectedIndex
    // colocar o texto com o nome do estado selecionado no stateInput
    stateInput.value = event.target.options[indexOfSelectidState].text
    var url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for(var city of cities){
            // adicionando cidades ao seletor
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

function handleSelectedItem(event){
    const itemLi = event.target
    // adicionar ou remover uma classe selecionada
    itemLi.classList.toggle("selected")
    const itemId = event.target.dataset.id
    console.log("Item ID: ", itemId)
    // verificar se existem itens selecionados
    // se sim, pegar estes
    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })
    // se ja estiver selecionado, retirar da seleção
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
    }
    // se não estiver selecionado, adicionar a seleção
    else{
        selectedItems.push(itemId)
    }
    console.log("selectedItems: ", selectedItems)
    // atualizar o campo escolhido com os itens selecionados
    collectedItems.value = selectedItems
}

populateUfs()
// "escuta" por mudança no 
// nome uf e passa esta mudança para a função
document
.querySelector("select[name=uf")
.addEventListener("change", getCities)
// itens para coleta
// pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")
for(var item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}
const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []