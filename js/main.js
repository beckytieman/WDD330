const links = [
    {
        label: "Week 01: Notes and Practice Code",
        url: "week01/story_editor.html"
    },
    {
        label: "Week 02: coming soon...",
        url: "week02/week02.html"
    }
];

var ol = document.querySelector("ol");

for (var i of links){
    var li = document.createElement("li");
    var urlLink = document.createElement("a");
    urlLink.setAttribute("href", i.url);
    urlLink.textContent = i.label;
    li.appendChild(urlLink);
    ol.appendChild(li);
}