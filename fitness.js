/* FITNESS PROJECT JAVASCRIPT FILE */
const cells = document.querySelectorAll('.tableCell');

for(let cell of cells){
    cell.addEventListener('click', () => {
        if(document.getElementById('inputBox')){
            document.getElementById('inputBox').remove();
        }
        const div = document.createElement('div');
        div.id = 'inputBox'
        div.innerHTML += 'Enter meal: '
        addDivContent(div, cell);
        document.querySelector('main').appendChild(div);
    });
}

function addDivContent(div, cell){
    const textInput = document.createElement('input');
    const submitButton = document.createElement('button');
    textInput.placeholder = 'Meal';
    submitButton.textContent = 'Add';
    textInput.type = 'text';
    submitButton.addEventListener('click', () => {
        cell.textContent = textInput.value;
        div.remove();
    });
    div.appendChild(textInput);
    div.appendChild(submitButton);
}
