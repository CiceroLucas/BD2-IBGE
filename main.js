const pesquisaCidade = async() => {
    const cidade = document.getElementById('cidade').value
    const urlSvg = `http://localhost:3000/getSvg/${cidade}`
    const dadosSvg = await fetch(urlSvg)
    const svg = await dadosSvg.json()
    const path = document.querySelector('#SVG')
    path.setAttribute("d", svg[0].st_assvg)

    const urlViewBox = `http://localhost:3000/getViewBox/${cidade}`
    const dadosViewBox = await fetch(urlViewBox)
    const viewBox = await dadosViewBox.json()
    const view = document.querySelector("#vbox")
    view.setAttribute("viewBox", viewBox[0].getviewbox)
}

document.getElementById('cidade').addEventListener('focusout', pesquisaCidade)
