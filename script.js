window.onload = function() { //when page loads
    const date = new Date();
    //output our date in M/D/Y
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    document.getElementsByClassName("date")[0].innerHTML = dateString;
    
}
const currencies = ["USD", "JPY", "EUR", "CNY", "CAD", "AUD", "GBP"];

let imageList = [];

for (let i = 0; i < currencies.length; i++) {
  let image = new Image(70, 70);
  switch (currencies[i]) {

        case "USD":
          image = "data:image/png;base64,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";
          break;
        case "JPY":
          image = "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/640px-Flag_of_Japan.svg.png";
          break;
        case "EUR":
          image = "https://libertyflagandbanner.com/wp-content/uploads/2015/08/europe-flag.jpg";
          break;
        case "CNY":
          image = "https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg";
          break;
        case "CAD":
          image = "data:image/png;base64,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";
          break;
        case "AUD":
          image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAACqCAMAAABVlWm8AAAACVBMVEXIEC7////aYHQhaz+vAAAAgUlEQVR4nO3bAQ3AMAzAsH78QQ/AAXRSbAYBkBkAAAAAAAAAAAAAAAAA4Dmnbb42/W362/S36W/T36a/TX+b/jb9bfrb9Lfpb9Pfpr9Nf5v+Nv1t+tv0t+lv09+mv01/m/42/W362/S35fu3B8Rl2/spAAAAAAAAAAAAAAAAAPB3Aee3O8UTMv89AAAAAElFTkSuQmCC";
          break;
        case "GBP":
          image = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
          break;
        default:
          break;
      }
      imageList[currencies[i]] = image;
    }
    
    function getImageUrl(currency) {
        return imageList[currency];
    }
    
    function switchImage() {
        const select = document.getElementById("before");
        const selectedCurrency = select.options[select.selectedIndex].value;
        const image = document.getElementById("myImage");
        image.src = getImageUrl(selectedCurrency);
    }
    
    function switchImage2() {
        const select = document.getElementById("after");
        const selectedCurrency = select.options[select.selectedIndex].value;
        const image = document.getElementById("myImage2");
        image.src = getImageUrl(selectedCurrency);
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

