document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('user-input-form');
    const inputData = document.getElementById('input-data');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const number = document.getElementById('number').value;
        const nrPages = document.getElementById('nrPages').value;
        const company = document.getElementById('company').value;
        
        inputData.innerHTML = `
            <h2>Input Data:</h2>
            <p>Number: ${number}</p>
            <p>Nr. of Pages: ${nrPages}</p>
            <p>Company: ${company}</p>
        `;
    });
});
