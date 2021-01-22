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
    //An array for the time slots
    var times = [9,10,11,12,13,14,15,16,17,18,19,20];

    //Set today's date
    $("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

    //retrieve the current hour
    var now = parseInt(moment().format('h'));


    //Variables to keep adding rows
    function createTime()    {
        for (var i = 0; i < times.length; i++)  {
            var tRow = $("<tr>");
            var tData = $("<td>");

            if (times[i] <= now) {
                tRow.addClass("row time-block past");
                tRow.attr("colspan","800");
                $(".timeslots").append(tRow);
                $(".time-block").append(tData);
                tData.addClass("hour");

            }







            tRow.addClass("row time-block");


            // div.attr("data-time", times[i])
            
            // $(".timeslots").append(div);
            
            
            // if (times[i] < now) {
            //     div.addClass("past");
            //     $(".time-block").append(span);
            // }
            // else    {
            //     div.addClass("future");
            //     $(".time-block").append(span);
            // }

        };



    }

    createTime();
    






}) //End of document ready

