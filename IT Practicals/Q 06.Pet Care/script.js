document.getElementById('petForm').addEventListener('submit', (e)=>{
        e.preventDefault();

        const type = document.getElementById('type').value;
        const name = document.getElementById('name').value;
        const age = parseInt(document.getElementById('age').value);
        const weight = parseInt(document.getElementById('weight').value);
        const like = document.getElementById('like').value;

        const pet = {
                name,
                age,
                weight,
                type,
                like
        };

        console.log(pet);
        console.log(JSON.stringify(pet,null,5));
})