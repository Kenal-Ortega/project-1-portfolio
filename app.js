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