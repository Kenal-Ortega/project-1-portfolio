//HAMBURGER FUNCTION
const $burger = $(".burger")
const $right1 = $(".right1")
let show = false;

const showMenu = (event) => {
    if (show) {
        $right1.each(function(index){
            $(this).css("display","none")
        })
        show = false
    } else {
        $right1.each(function(index){
            $(this).css("display","block")
        })
        show = true
    }
}

$burger.on("click", showMenu)



//JSON
const url = "https://spreadsheets.google.com/feeds/list/1hKH-79ODVGCyHQwK9eGJwTrgQe5k758CcZEnncL9MUI/od6/public/values?alt=json"

fetch(url)
    .then(response => response.json())
    .then(data => {
        //console.log("data", data)
        console.log(data.feed.entry)
        const projects = data.feed.entry.map(entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
        })
        //console.log(projects)
        app(projects)

})

const app = (data => {
    console.log("app is running")
    console.log(data)

    const createProjectElement = (project) => {
        const $div = $("<div>")
        $div.append($("<h2>").text(project.title))
        $div.append($("<p>").text(project.description))
        $div.append($("<img>").attr("src", project.image))
        $div.append($("<a>").attr("href", project.url))
        return $div

    }

    //$("body").append(createProjectElement(data[0]))

    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $("body").append($projectDiv)
    })



})