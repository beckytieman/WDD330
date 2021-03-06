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
        label: "Week 05: Testing and Debugging",
        url: "week05/week05.html"
    },
    {
        label: "Week 06: Todo App Challenge",
        url: "week06/week06.html"
    },
    {
        label: "Week 07: Notes and Team Code",
        url: "week07/week07.html"
    },
    {
        label: "Week 08: CSS Works ",
        url: "week08/week08.html"
    },
    {
        label: "Week 09:",
        url: "week09/week09.html"
    },
    {
        label: "Week 10: Notes from MDN",
        url: "week10/week10.html"
    },
    {
        label: "Final Project",
        url: "final/my-final.html"
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