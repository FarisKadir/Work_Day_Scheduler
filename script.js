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

    //Get today's date
    var today = moment().format("dddd, MMMM Do, YYYY");
    var now = moment().format('LT');
    console.log("This is the current time: " + now);

    //An array for the time slots
    var times = [9,10,11,12,13,14,15,16,17]

   
    var slot = moment().set({"hour": 9, "minute": 00, "seconds": 00, "millisecond": 00}).format('LT');

    console.log("This is the timeslot: " + slot);

    console.log(now +" " + slot);



    // if (moment(slot).isBefore(now))    {
    //     console.log("Current Time: " + now);
    //     console.log("Timeslot: " + slot);
    //     console.log("This is in the past");
    // }
    // else if (now === slot) {
    //     console.log("Today's date/time: " + now);
    //     console.log("Timeslot: " + slot);
    //     console.log("This is the present")
    // }
    // else if (slot > now)    {
    //     console.log("Today's date/time: " + now);
    //     console.log("Timeslot: " + slot);
    //     console.log("This is in the future")
    // }


    //Set today's date
    $("#currentDay").text(today);

    //retrieve the current hour



    //Variables to keep adding rows
    function createTime()    {
        var tRow = $("<tr>");
        var tData = $("<td>");
        function createRow(x)   {
            tRow.addClass("row time-block " + x);
            tRow.attr("colspan","800");
            $(".timeslots").append(tRow);
            $(".time-block").append(tData);
            tData.addClass("hour");
        }

        for (var i = 0; i < times.length; i++)  {
            if (times[i] < now) {
               createRow("past");
               console.log("This is in the past");
               break;
            }
            else if (times[i] === now)  {
                createRow("present");
                console.log("This is in the present");
                break;
            }
            else    {
                createRow("future");
                console.log("This is in the future");
                break;
            }

            tRow.addClass("row time-block");

        };



    }
//End of document ready
});
