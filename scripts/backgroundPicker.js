$(document).ready(function(){
    const container = $(".furtuneTelling");

    container.load('fortuneTellingHall.html');

    let fileToLoad = " ";

    $("button").click(function(){
        $(".futureBackground").removeClass().addClass("futureBackground");
        container.children("p").removeClass();
        $("button").removeClass();

        if($(".futureBackground").is("img"))
        {
            $(".futureBackground").replaceWith("<video class='futureBackground' autoplay loop>");
        }

        switch(parseInt(this.id))
        {
            case 1:
            {
                fileToLoad = "fortuneTellingHall.html";
                $(".futureBackground").attr("src", "./videos/crystalBall.mp4");

                break;
            }

            case 2:
            {
                fileToLoad = "fortuneOurselves.html";
                $(".futureBackground").attr("src", "./videos/ourFuture.mp4");
                $(".futureBackground").addClass("darkenedVideo");

                break;
            }

            case 3:
            {
                fileToLoad = "fortuneFriendship.html";
                $(".futureBackground").replaceWith("<img src='./Images/drawing.jpg' class='futureBackground'>");
                $("button").addClass("darkFont");

                break;
            }

            case 4:
            {
                fileToLoad = "fortuneEnding.html";
                $(".futureBackground").attr("src", "");

                break;
            }
        }

        container.load(`${fileToLoad}`, function(){
            let fortuneContent = container.find(".fortuneContent");

            if(fortuneContent.length !== 0)
            {
                $(".fortuneContent").css("display", "block").html(fortuneContent.html());
                container.find(".fortuneContent").remove();

                delete fortuneContent;
            }
            else
            {
                $(".fortuneContent").css("display", "none");
            }
        });
    });
});