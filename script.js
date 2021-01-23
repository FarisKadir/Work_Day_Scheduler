//start of document ready
$(document).ready(function()    {
    //Defining Global Variables

    //Get today's date
    var today = moment().format("dddd, MMMM Do, YYYY");

    //This also get's today's date but stores it in a different format.
    var today2 = moment().format("MM/DD/YYYY");

    //get the current hour in the 24 hour format
    var now = parseInt(moment().format("k"));


    ///Actions that take place when the page loads:

    //Set today's date in the header
    $("#currentDay").text(today);


    //Changes the color of the timeblock to past, present, future
    $("div").each(function()    {
        //Store the current data-mil value
        var dataMil = $(this).attr("data-mil");

        //
        if (typeof parseInt(dataMil) === "number")    {
            
            if (now > dataMil)  {
                $(this).addClass("past");
            }
            else if (now == dataMil)   {
                $(this).addClass("present");
            }
            else if (now < dataMil) {
                $(this).addClass("future");
            };
        }
    })


    //On Click Event

    $(".saveBtn").on("click",function() {
        var dataTime = $(this).attr("data-time")
        var userInput = $("#" + dataTime + "_tasks").val();
        var task = {
            date: today2,
            time: dataTime,
            task: userInput,
        };
        localStorage.setItem(today2 + " " + dataTime +"_tasks", JSON.stringify(task));
    })

    //Pre-Load existing tasks

    $("textarea").each(function()   {
        var id = $(this).attr("id");
        var key = today2 + " " + id;
        var obj = JSON.parse(localStorage.getItem(key));
        if (!!obj && obj.date === today2)    {
            $(this).val(obj.task);
        };
    })

});
//End of document ready
