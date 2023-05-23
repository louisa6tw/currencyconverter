
window.onload = function() { //when page loads
    const date = new Date();
    //output our date in M/D/Y
    const dateString = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    document.getElementsByClassName("date")[0].innerHTML = dateString;
}
