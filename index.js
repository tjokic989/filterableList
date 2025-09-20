// Filterable list

const filterInput = document.getElementById("filterInput");
const filterList = document.querySelectorAll("li");

filterInput.addEventListener('input', () =>{
    const text = filterInput.value.toLowerCase();
    filterList.forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(text) ? '' : 'none'
    });
});