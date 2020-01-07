console.log("page load")
var needSave = [];
var gotten = localStorage.getItem("message")
gotten = JSON.parse(gotten);
console.log("Saved Package", gotten);
if (!gotten) {
    localStorage.setItem("message", JSON.stringify(needSave));
    gotten = localStorage.getItem("message")
    console.log("built storage container", JSON.parse(gotten));
    gotten = JSON.parse(gotten);
}
var list = $("<ul>");
for (i = 0; i < gotten.length; i++) {
    console.log(gotten[i]);
    var owner = $("<li>")
    var first = $("<p>").text(gotten[i].first);
    var last = $("<p>").text(gotten[i].last);
    var email = $("<p>").text(gotten[i].email);
    var phone = $("<p>").text(gotten[i].phone);
    var message = $("<p>").text(gotten[i].message);
    owner.append(first, last, email, phone, message);
    list.append(owner);
    console.log(owner);

}
$("#messages").empty();
$("#messages").html(list)
$(document).on("click", "#submit", (event) => {
    event.preventDefault();
    console.log("clicked");
    var data = {
        first: $("#first-name").val().trim(),
        last: $("#last-name").val().trim(),
        email: $("#email").val().trim(),
        phone: $("#phone").val().trim(),
        message: $("#message").val().trim()
    }
    console.log(data);
    console.log(gotten, data);
    gotten.push(data);
    console.log("This is the array to stringify", gotten);
    console.log("parsed?", gotten);
    console.log("stringified", JSON.stringify(gotten));
    localStorage.setItem("message", JSON.stringify(gotten));
    gotten = localStorage.getItem("message");
    console.log("Retrieved Data", gotten);
    console.log("parsed retrieval", JSON.parse(gotten));
    location.reload()
})