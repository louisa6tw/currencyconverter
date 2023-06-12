
window.onload = function() { //when page loads
    const date = new Date();
    //output our date in M/D/Y
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    document.getElementsByClassName("date")[0].innerHTML = dateString;
}
const btn = document.getElementById("convert-button");
btn.addEventListener("click", function() {
    var amount = document.getElementById("amount").value;
    var from = document.getElementById("before").value;
    var to = document.getElementById("after").value;

    axios.get(`http://localhost:3000/convert?from=${from}&to=${to}&amount=${amount}`)
    .then(response => {
        console.log(response.data); // log the response data

            var result = response.data.result;
            document.getElementById("result").innerText = "Result: " + result + " " + to;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("result").innerText = "Conversion error";
        });
});
