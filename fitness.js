
/* FITNESS PROJECT JAVASCRIPT FILE */
const cells = document.querySelectorAll('.tableCell');

for(let cell of cells){
    cell.addEventListener('click', function(){
        document.getElementById('inputBox').remove();
        const div = document.createElement('div');
        div.id = 'inputBox'
        const content = generateDivContent(cell);        

        document.querySelector('main').appendChild(div);
    });
}

function generateDivContent(cell){

}
