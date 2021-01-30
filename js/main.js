const links = [
    {
        label: "Week 01: Notes and Practice Code",
        url: "week01/story_editor.html"
    },
    {
        label: "Week 02: JS Reading Notes",
        url: "week02/week02.html"
    },
    {
        label: "Week 03: JS Reading Notes + Reference Links",
        url: "week03/week03.html"
    },
    {
        label: "Week 04: Notes and Team Code",
        url: "week04/week04.html"
    },
    {
        label: "Week 05: Testing and Debugging (under construction)",
        url: "week04/week05.html"
    },
    {
        label: "Week 06: Coming Soon...",
        url: "week04/week06.html"
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