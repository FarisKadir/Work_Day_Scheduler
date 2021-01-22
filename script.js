/*Psuedocode
When the page loads
    Display the current date at the top - Done
    Display timeslots for each hour of the day
        Each timeslot should contain:
            A time, ex: 9 am
                Assign a color to the time slot boxes:
                    The current time's timeslot should have a red background.
                    Any timeslots that are in the past should have a gray background.
                        Would need to capture the current time.
                    Any timeslots that are in the future should have a green background.
                The boxes only have borders on the top, bottom, and left.
                
            An input box to type in events.
            A save button.
                When the save button is clicked it should save the entry from the input box to local storage.
*/

//start of document ready
$(document).ready(function()    {

    //Set today's date
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));
    var now = moment();


    //Variables to keep adding rows
    function createTime()    {
        var times = [9,10,11,12,1,2,3,4,5];
        var now = moment();
        


        for (var i = 0; i < times.length; i++)  {
            var div = $("div");
            div.addClass("row time-block");
            div.attr("data-time", times[i])
            $(".container").append(div);
            // $(".container").append("<div class ='row timeblock' id=" + times[i] + "></div>");
            // if (times[i] < now) {
            //     div.addClass("past");
            // }
            // console.log(i);
        };



    }

    createTime();
    






}) //End of document ready

