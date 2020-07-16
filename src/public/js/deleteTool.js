const toolTable = document.querySelector('#tools');
toolTable.addEventListener('click', (event) => {
    let clickedElement = event.target;

    if (clickedElement.dataset.type == 'deletion') {
        let toolId = clickedElement.dataset.ref;
        fetch(`http://localhost:3001/teste_marko/delete/${toolId}`, { method: 'DELETE' })
            .then(res => {
                let tr = clickedElement.closest(`#tool_${toolId}`);
                tr.remove();
            })
            .catch(erro => console.log('errou'));
    }
});
