const form = document.getElementById('encrypt-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // get the form data
    const data = {
        key: document.getElementById("key").value,
        message: document.getElementById("message").value
    }

    // make http post request to /api/encrypt
    fetch('/api/encrypt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(function (response) {
        // check status code and fail if error
        if (!response.ok) Promise.reject(response);
        
        return response.json();
    })
    .then(presentEncryptResults)
    .catch(function (error) {
        // dump error to the console
        console.warn(error);
    });
})

/*
    Called by AJAX when a response has been received from
    the backend /api/encrypt
*/
function presentEncryptResults(res) {
    console.log(res);
}