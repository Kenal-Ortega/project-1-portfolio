# Project Proposal

## Live Website
https://dreamy-kilby-bc65ba.netlify.app/

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete

## Project Description
My project will be a landing page about me for potential employers. It will include an about me, contact information and, previous work experience. I’ve looked over some sites to use as reference and I really liked this one https://dietoself86.github.io/project-1-portfolio/. I’m not sure if my project will resemble this, but I will be going for that clean-cut look, especially since I don’t think I have much to put on the page.

## Google Sheet
- [Projects](https://docs.google.com/spreadsheets/d/1V1M3Eq1NXH2PNmeTlVviRhEjX9kenq769Vo2P5mMtro/edit#gid=0)

## Wireframes
- [Desktop](https://res.cloudinary.com/dlcjnygpy/image/upload/v1594664456/20200710_200705_zjlekt.jpg)
- [Tablet](https://res.cloudinary.com/dlcjnygpy/image/upload/v1594664429/20200710_200656_gj3hf9.jpg)
- [Mobile](https://res.cloudinary.com/dlcjnygpy/image/upload/v1594664399/20200710_200643_gz9fdj.jpg)

## Time/Priority Matrix 
- [Graphic](https://res.cloudinary.com/dlcjnygpy/image/upload/v1594664308/20200710_204051_g3cwsa.jpg)


|Deliverable	| Status	| Time Spent |
| --- | :---: |  :---: | 
| Fri, July 10 | Project Proposal	| Complete | 8 hrs |
| Mon, July 13 | Compile List of Projects and connect using API | Complete | -hr |
| Tues, July 14 | HTML & CSS built | Complete | -hr |
| Wed, July 15 | Responsiveness & hamburger menu | Complete | -hr |
| Thurs, July 16 | Finishing touches and Post MVP | Complete | -hr |	
| Fri, July 17 | Depoly website | Complete | -hr |		
 
## MVP/Post MVP

#### MVP
 Hamburger menu when on mobile
	Interactive buttons
	Fonts from google
	Pictures 
	Adaptive for multiple screen sizes


#### Post MVP
 Bootstrap for site
	Background image 
	Gifs


## Functional Components

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| "About Me" section (including photo and bio)  | H | 2hrs | 4hr | 4hr|
| Naviagation bar | M | 1.5hrs | 1hr | 1hr|
| Styling navigation bar & "About Me" with grid and flexbox | H | 3hrs | 3hr | 3hr|
| Creating the "Projects" section with descriptions displayed on top of the pictures | H | 2hrs| 3hr | 3hr |
| Styling "Project" section with grid and flexbox | M | 4hrs | 4hr | 4hr|
| "Contact Me" section and input fields| H | 4hrs | 3hr | 3hr|
| Working with API | H | 6hrs | 2hr | 2hr |
| Ensuring responsive for desktop | H | 2hrs | 1hr | 1hr|
| Ensuring responsive for iPad | H | 2hrs | 3hr | 3hr|
| Ensuring responsive for mobile | H | 2hrs | 4hr | 4hr|
| Hamburger menu | H | 2hrs | 3hr | 3hr|
| Deploying website | H | 2hr | 2hr | 2hr|
| Total | - | 32.5hrs | 33hr | 33hr |


#### Post MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|Convert to Bootstrap | L | 5hrs | N/A | N/A|
|Gifs| L | 3hrs | N/A | N/A|
| Total | - | 8hrs | N/A | N/A | 

## Additional Libraries
 - jQuery
 
 - JSON
 
 - Google Fonts
 
 - Font Awesome
 
 ## Code Snippet


#### Applying JSON to my code
```
//RESOURCE CLASS WORK
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
    //console.log("app is running")
    //console.log(data)

    const createProjectElement = (project) => {
        const $div = $("<div>")
        $div.append($("<h4 class='center1'>").text(project.title))
       // $div.append($("<p>").text(project.description))
        $div.append($("<img>").attr("src", project.image))
        $div.append($("<a class='plink'>").attr("href", project.url).text("LINK >>"))
        return $div
    }

    //$("body").append(createProjectElement(data[0]))

    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $(".projects").append($projectDiv)
    })



})
```

## Issues and Resolutions
 
#### Getting the Hamburger menu to work. Everything was written out fine but, I had 2 fatal flaws. 1) I invoked the function showMenu with parameters. 2) I had a word misspelled. After hours searching I finally saw my flaw.

```
//HAMBURGER FUNCTION
//RESOURCE https://www.youtube.com/watch?v=1GeSOP7kHuw&feature=youtu.be

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
```



 
