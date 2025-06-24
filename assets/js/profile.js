//request cover variables
const coverReqModal = document.getElementById("req-cover-modal");
const getCoverReqBtns = document.querySelectorAll(".req-cover");
const coverReqConfirmBtn = document.getElementById("req-cover-confirm");
const coverReqCloseBtn = document.getElementById("req-cover-close");
const coverReqDisclaimer = document.getElementById("req-cover-msg");

//request trade variables
const tradeReqModal = document.getElementById("req-trade-modal");
const getTradeReqBtns = document.querySelectorAll(".req-trade");
const tradeReqConfirmBtn = document.getElementById("req-trade-confirm");
const tradeReqCloseBtn = document.getElementById("req-trade-close");
const tradeReqDisclaimer = document.getElementById("req-trade-msg");

//request time off variables
const timeReqModal = document.getElementById("req-time");
const timeReqBtn = document.getElementById("time-req-btn");
const timeReqTimeBox = document.getElementById("dates-only");
const timeReqConfirmBtn = document.getElementById("req-time-confirm");
const timeReqCloseBtn = document.getElementById("req-time-close");
const timeReqDisclaimer = document.getElementById("req-time-msg");

//claim open shift variables
const openShiftModal = document.getElementById("open-shift-modal");
const getOpenShiftBtns = document.querySelectorAll(".claim-Open");
const openShiftConfirmBtn = document.getElementById("open-shift-confirm");
const openShiftCloseBtn = document.getElementById("open-shift-close");

//claim cover variables
const coverShiftModal = document.getElementById("claim-cover-modal");
const getCoverShiftBtns = document.querySelectorAll(".claim-cover");
const coverShiftConfirmBtn = document.getElementById("cover-shift-confirm");
const coverShiftCloseBtn = document.getElementById("cover-shift-close");

//offer trade variables
const tradeShiftModal = document.getElementById("offer-trade-modal");
const getTradeShiftBtns = document.querySelectorAll(".offer-trade");
const getTradeShiftOptions = document.querySelectorAll(".trade-shift-option");
const tradeShiftMsg = document.getElementById("trade-message");
const tradeShiftConfirmBtn = document.getElementById("trade-shift-confirm");
const tradeShiftClearBtn = document.getElementById("trade-shift-clear");
const tradeShiftCloseBtn = document.getElementById("trade-shift-close");

//edit availability variables
const avModal = document.getElementById("av-edit-modal");
const avEditBtn = document.getElementById("av-edit");
const avCloseBtn = document.getElementById("av-edit-close");
const avEditConfirmBtn = document.getElementById("av-edit-confirm");
const getAvAllDayBtns = document.querySelectorAll(".allday-trigger");
const getAvAddBtns = document.querySelectorAll(".av-add-button");
const getAvInfo = document.querySelectorAll(".av-input-group");
const avEffectiveDate = document.getElementById("av-effective");
const avDisclaimer = document.getElementById("av-edit-msg");

//edit info variables
const infoModal = document.getElementById("info-edit-modal");
const infoEditBtn = document.getElementById("info-edit");
const infoCloseBtn = document.getElementById("edit-info-close");
const infoConfirmBtn = document.getElementById("edit-info-confirm");

//cancellation modal variables
const cancelModal = document.getElementById("cancel-modal");
const cancelConfirmBtn = document.getElementById("cancel-confirm");
const cancelCloseBtn = document.getElementById("cancel-close");
const getCancelBtns = document.querySelectorAll(".cancel-btn");

//confirmation modal variables
const confirmModal = document.getElementById("confirm-modal");
const confirmModalInfo = document.getElementById("confirm-modal-info");
const confirmOkayBtn = document.getElementById("confirm-modal-button");

//error modal variables
const errorModal = document.getElementById("error-modal");
const errorBtn = document.getElementById("error-modal-button");

//settings variables
const settingsSaveBtn = document.getElementById("settings-save-btn")
const getAllSettings = document.querySelectorAll(".single-setting");
const homepageSync = document.getElementById("homepage-sync");

//form variables
var setFormType = document.getElementById("info-type");
var setFormInfo = document.getElementById("info-main");
var submitBtn = document.getElementById("form-btn");
var itemBtnID;

//request cover visual functions
//this is the blueprint for how a lot of the modal functions interact with each other
//refer back to this section when necessary

function coverReqActivate(e)
{
    //get the link and date info
    //assign link to a holding attribute to pass on later
    //display date in modal
    //activate modal
    itemBtnID = e.target.parentElement.parentElement.id;
    var itemDate = e.target.parentElement.parentElement.dataset.itemdate;
    var date = document.getElementById("req-cover-date");
    var time = document.getElementById("req-cover-time");

    var fields = itemDate.split(": ");
    date.innerText = fields[0];
    time.innerText = fields[1];

    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = "request-cover";
    coverReqModal.style.display = "inline-block";
};

function coverReqConfirm()
{
    //if disclaimer checked, proceed to confirmation
    //else throw alert
    if(coverReqDisclaimer.checked === true)
    {
        coverReqModal.style.display = "none";
        //submitBtn.click();
        //confirmModalActivate();
    }
    else
    {
        alert("Please acknowledge the disclaimer before placing your request.")
    }
};

function coverReqClose()
{
    coverReqModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

getCoverReqBtns.forEach((btn) =>
{
    btn.addEventListener("click", coverReqActivate)
});

//request trade visual functions

function tradeReqActivate(e)
{
    itemBtnID = e.target.parentElement.parentElement.id;
    var itemDate = e.target.parentElement.parentElement.dataset.itemdate;
    var date = document.getElementById("req-trade-date");
    var time = document.getElementById("req-trade-time");

    var fields = itemDate.split(": ");
    date.innerText = fields[0];
    time.innerText = fields[1];

    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = "request-trade";
    tradeReqModal.style.display = "inline-block";
};

function tradeReqConfirm()
{
    //if disclaimer checked, proceed to confirmation, if not, throw alert
    if(tradeReqDisclaimer.checked === true)
    {
        tradeReqModal.style.display = "none";
        //submitBtn.click();
        //confirmModalActivate();
    }
    else
    {
        alert("Please acknowledge the disclaimer before placing your request.")
    }
};

function tradeReqClose()
{
    tradeReqModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

getTradeReqBtns.forEach((btn) =>
{
    btn.addEventListener("click", tradeReqActivate)
});

//request time off visual functions

function timeReqActivate()
{
    timeReqModal.style.display = "inline-block";
};

function timeReqConfirm()
{
    //checks:
    //1) there are values in the date inputs
    //2) that the start date is after the current date
    //3) that the end date is after the start date
    var startDate = document.getElementById("start-date").value;
    var startTime = document.getElementById("start-time").value + ":00";
    var endDate = document.getElementById("end-date").value;
    var endTime = document.getElementById("end-time").value + ":00";

    console.log(startDate, startTime, endDate, endTime);

    var today = new Date();
    var tDay = String(today.getDate()).padStart(2, '0');
    var tMonth = String(today.getMonth() + 1).padStart(2, '0');
    var tYear = today.getFullYear();
    today = tYear + tMonth + tDay;

    var sDateSplit = startDate.split("-");
    var sYear = sDateSplit[0];
    var sMonth = sDateSplit[1];
    var sDay = sDateSplit [2];
    var sDateComp = sYear + sMonth + sDay;

    var eDateSplit = endDate.split("-");
    var eYear = eDateSplit[0];
    var eMonth = eDateSplit[1];
    var eDay = eDateSplit[2];
    var eDateComp = eYear + eMonth + eDay;

    var sTimeSplit = startTime.split(":");
    var sHours = sTimeSplit[0];
    var sMins = sTimeSplit[1];
    var sSecs = sTimeSplit[2];
    var sTimeComp = sHours + sMins + sSecs;

    var eTimeSplit = endTime.split(":");
    var eHours = eTimeSplit[0];
    var eMins = eTimeSplit[1];
    var eSecs = eTimeSplit[2];
    var eTimeComp = eHours + eMins + eSecs;

    var timeoffNote = document.getElementById("timeoff-note").value;

    if (!startDate)
    {
        alert("You need to select a start date.");
        return;
    }
    
    if (!endDate)
    {
        alert("You need to select an end date.");
        return;
    }

    if (sDateComp <= today)
    {
        alert("You need to pick a start date that is after the current date.");
        return;
    }

    if (eDateComp < sDateComp)
    {
        alert("You need to pick an end date that is after the start date.");
        return;
    }

    //validate dates and times >> check disclaimer >> send data to server >> activate confirmation
    
    if (timeReqTimeBox.checked === false)
    {
        startTime = "00:00:00";
        endTime = "23:59:59";

        if (timeReqDisclaimer.checked === true)
        {
            setFormType.innerText = "request-timeoff";
            setFormInfo.innerText = `${startDate} ${startTime}, ${endDate} ${endTime} & ${timeoffNote}`;
            //submitBtn.click();
        }
        else
        {
            alert("You need to acknowledge the disclaimer before placing your request.");
            return;
        }
    }
    else
    {
        if (startTime === ":00")
        {
            alert("You need to enter a starting time.");
            return;
        }

        if (endTime === ":00")
        {
            alert("You need to enter an end time.");
            return;
        }

        //check start time against end time for single day off cases
        if (sDateComp === eDateComp)
        {
            if (sTimeComp >= eTimeComp)
            {
                alert("You need to select an ending time that is after your starting time.")
                return;
            }
        }

        if (timeReqDisclaimer.checked === true)
        {
            setFormType.innerText = "request-timeoff";
            setFormInfo.innerText = `${startDate} ${startTime}, ${endDate} ${endTime} & ${timeoffNote}`;
            //submitBtn.click();
        }
        else
        {
            alert("You need to acknowledge the disclaimer before placing your request.");
            return;
        }
    }
};

function timeReqTime()
{
    //if checkbox is clicked
    //check true or false
    //and display time boxes accordingly
    var start = document.getElementById("time-one");
    var end = document.getElementById("time-two");

    if(timeReqTimeBox.checked === true)
    {
        start.style.display = "grid";
        end.style.display = "grid";
    }
    else
    {
        start.style.display = "none";
        end.style.display = "none";
    }
};

function timeReqClose()
{
    timeReqModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

//claim open shift visual functions
function openShiftActivate(e)
{
    //get the aspid of the shift the button was pulled from
    //find the numbers after the =
    //assign that value to the aspid of the modal-confirm button
    //... keeping above for documentation
    //new: put the whole id from the page button
    //into the modal
    //additional info needed: get displayed date to display in modal
    itemBtnID = e.target.parentElement.id;
    var itemDate = e.target.parentElement.dataset.itemdate;
    var date = document.getElementById("open-shift-date");
    var time = document.getElementById("open-shift-time");

    var fields = itemDate.split(": ");
    date.innerText = fields [0];
    time.innerText = fields [1];

    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = "claim-Open";

    openShiftModal.style.display = "inline-block";
};

function openShiftConfirm()
{
    openShiftModal.style.display = "none";
    //submitBtn.click();
    //confirmModalActivate();
};

function openShiftClose()
{
    openShiftModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

getOpenShiftBtns.forEach((btn) =>
{
    btn.addEventListener("click", openShiftActivate);
});

//claim cover visual functions
function coverShiftActivate(e)
{
    itemBtnID = e.target.parentElement.id;
    var itemDate = e.target.parentElement.dataset.itemdate;
    var name = document.getElementById("cover-shift-name");
    var date = document.getElementById("cover-shift-date");
    var time = document.getElementById("cover-shift-time");

    var fields = itemDate.split(": ");
    name.innerText = fields [0];
    date.innerText = fields [1];
    time.innerText = fields [2];

    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = "claim-cover";
    coverShiftModal.style.display = "inline-block";
};

function coverShiftConfirm()
{
    coverShiftModal.style.display = "none";
    //submitBtn.click();
    //confirmModalActivate();
};

function coverShiftClose()
{
    coverShiftModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

getCoverShiftBtns.forEach((btn) =>
{
    btn.addEventListener("click", coverShiftActivate)
});

//offer trade visual functions

function tradeShiftActivate(e)
{
    itemBtnID = e.target.parentElement.id;
    var itemDate = e.target.parentElement.dataset.itemdate;
    var name = document.getElementById("trade-shift-name");
    var date = document.getElementById("trade-shift-date");
    var time = document.getElementById("trade-shift-time");

    setFormType.innerText = "offer-trade";

    var fields = itemDate.split(": ");
    name.innerText = fields [0]
    date.innerText = fields [1];
    time.innerText = fields [2];

    //check all available shifts data-itemdate against the button data-itemdate

    var shifts = document.querySelectorAll(".trade-shift-option");
    shifts.forEach((shift) =>
    {
        if (itemDate === shift.dataset.itemdate)
        {
            shift.parentElement.innerHTML = `<div class="claimed trade-option-conflict" title="You can not trade for the same shift."> ${itemDate} </div>`
        }
    })
    
    tradeShiftModal.style.display = "inline-block";
};

// function tradeShiftModalChecked()
// {
//     //push all checkboxes to an array
//     allShifts = [];
//     var selectedShifts = document.querySelectorAll(".trade-shift-option");
//     selectedShifts.forEach((shift) =>
//     {
//         if(shift.checked === true)
//         {
//             allShifts.push(1);
//         }
//         else
//         {
//             allShifts.push(0);
//         }
//     });

//     //check for any true value
//     function checkShiftTrue(shift)
//     {
//         return shift > 0;
//     };

//     //if there is at least one true value, add href to confirm button
//     if (allShifts.some(checkShiftTrue) === true)
//     {
//         var link = tradeShiftConfirmBtn.parentElement.dataset.holding;
//         tradeShiftConfirmBtn.parentElement.href = link;
//     }
//     else
//     {
//         tradeShiftConfirmBtn.parentElement.removeAttribute("href");
//     }  
// };

function tradeShiftConfirm()
{
    //push all checkboxes to an array
    allShifts = [];
    checkedShifts = [];
    var selectedShifts = document.querySelectorAll(".trade-shift-option");
    selectedShifts.forEach((shift) =>
    {
        if(shift.checked === true)
        {
            allShifts.push(1);
            checkedShifts.push(shift.parentElement.parentElement.id);
        }
        else
        {
            allShifts.push(0);
        }
    });

    //check for any true value
    function checkShiftTrue(shift)
    {
        return shift > 0;
    };

    //proceed if there is a checked shift, throw alert if not
    if (allShifts.some(checkShiftTrue) === true)
    {
        setFormType.innerText = "trade-offer";
        setFormInfo.innerText = `${itemBtnID},${checkedShifts}`;
        //submitBtn.click();
        tradeShiftModal.style.display = "none";
        //tradeShiftClear();
        //confirmModalActivate();
    }
    else
    {
        alert("You need to select at least one shift to proceed.")
    }
};

function tradeShiftClear()
{
    var selectedShifts = document.querySelectorAll('input[type="checkbox"]');
    selectedShifts.forEach((shift) =>
    {
        shift.checked = false;
    });
};

function tradeShiftClose()
{
    tradeShiftClear();
    setFormInfo.innerText = "";
    setFormType.innerText = "";
    tradeShiftModal.style.display = "none";
};

getTradeShiftBtns.forEach((btn) =>
{
    btn.addEventListener("click", tradeShiftActivate);
});

// getTradeShiftOptions.forEach((box) =>
// {
//     box.addEventListener("click", tradeShiftModalChecked);
// });

//edit info modal

function infoEditActivate()
{
    infoModal.style.display = "inline-block";
};

function infoClose()
{
    infoModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

function infoConfirm()
{
    //gather all the data and feed it into the form
    empInfo = [];
    inputs = document.querySelectorAll(".info-list-item")
    inputs.forEach((input) =>
    {
        empInfo.push(`(${input.value})`);
    });
    setFormType.innerText = "set-employeeinfo";
    setFormInfo.innerText = `${empInfo}`;
    //submitBtn.click();
};

//edit availability modal

function avEditActivate()
{
    avModal.style.display = "inline-block";
};

function avEditConfirm()
{
    //make sure that edit button isnt live if theres a pending edit
    //checks:
    //there is data or a checked box in every slot
    //all times are chronological
    //disclaimer is checked
    
    var startDate = document.getElementById("av-effective").value;

    var today = new Date();
    var tDay = String(today.getDate()).padStart(2, '0');
    var tMonth = String(today.getMonth() + 1).padStart(2, '0');
    var tYear = today.getFullYear();
    today = tYear + tMonth + tDay;

    var sDateSplit = startDate.split("-");
    var sYear = sDateSplit[0];
    var sMonth = sDateSplit[1];
    var sDay = sDateSplit [2];
    var sDateComp = sYear + sMonth + sDay;

    if(!startDate)
    {
        alert(`Please provide an effective date for your new availability.`);
        return;
    }

    if(sDateComp <= today)
    {
        alert(`Please select an effective date that is after the current date.`)
        return;
    }
    
    weekInfo = [];
    for (let day of getAvInfo)
    {
        //if (fullday is checked)
        //{set times to 00:00 and 23:59 and push to array}
        //else if (fullday is not checked)
        //{pull times from input and push to array }
        //else
        //{alert("You need to fill in all availability slots before proceeding.")}
        //return;
        var radioBtn = day.querySelector(`input[type=radio]:checked`);
        var noteContent = day.lastElementChild.lastElementChild.value;
        var dayCheckBox = day.firstElementChild.children[1].firstElementChild.firstElementChild.firstElementChild;
        var radioBtnInfo;
        var startTime;
        var endTime;

        if (!radioBtn)
        {
            alert("Please fill out all available fields before continuing.");
            return;
        }
        if (dayCheckBox.checked === true)
        {
            startTime = "00:00:00"
            endTime = "23:59:59"
            radioBtnInfo = radioBtn.nextElementSibling.innerText;
        }
        else if (dayCheckBox.checked === false)
        {
            startTime = day.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.value + ":00";
            endTime = day.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.value + ":00";
            radioBtnInfo = radioBtn.nextElementSibling.innerText;
            
            if (startTime === ":00" || endTime === ":00")
            {
                alert("Please fill out all available fields before continuing.");
                return;
            }
        }
        else
        {
            dayName = day.firstElementChild.firstElementChild.innerText;
            alert(`An error ocurred while fetching time information for ${dayName}, please try again.`)
            return;
        }
        console.log(startTime, endTime, noteContent, radioBtnInfo);
        weekInfo.push("[" + radioBtnInfo + ": " + startTime + "-" + endTime + " & " + noteContent + "]");
    };

    if (avDisclaimer.checked === true)
    {
        setFormType.innerText = "set-availability";
        setFormInfo.innerText = `${weekInfo},${startDate}`;
        //submitBtn.click();
    }
    else
    {
        alert("You need to acknowledge the disclaimer before placing your request.");
        return;
    }
    //avModal.style.display = "none";
};

function avEditClose()
{
    avModal.style.display = "none";
};

function avAllDay(btn)
{
    //removes hour selection
    var avDayId = btn.target.id;
    var btnCheck = document.getElementById(avDayId);
    switch (avDayId)
    {
        case "sun-allday":
            var div = document.getElementById("sun-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        case "mon-allday":
            var div = document.getElementById("mon-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        case "tue-allday":
            var div = document.getElementById("tue-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        case "wed-allday":
            var div = document.getElementById("wed-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        case "thu-allday":
            var div = document.getElementById("thu-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        case "fri-allday":
            var div = document.getElementById("fri-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        case "sat-allday":
            var div = document.getElementById("sat-select");
            if (btnCheck.checked === true)
            {
                div.style.display = "none";
            }
            else {div.style.display = "grid"};
            break;
        default:
            alert("Something went wrong");
            break;
    }
};

getAvAllDayBtns.forEach((btn) =>
{
    btn.addEventListener("click", avAllDay);
});

function avAddSlot(btn)
{
    var avDayId = btn.target.id;
    console.log(avDayId);
    switch (avDayId)
    {
        case "addsun":
            console.log("Show additional timeslot.");
            break;
        case "addmon":
            console.log("Show additional timeslot.");
            break;
        case "addtue":
            console.log("Show additional timeslot.");
            break;
        case "addwed":
            console.log("Show additional timeslot.");
            break;
        case "addthur":
            console.log("Show additional timeslot.");
            break;
        case "addfri":
            console.log("Show additional timeslot.");
            break;
        case "addsat":
            console.log("Show additional timeslot.");
            break;
        default:
            alert("Something went wrong.")
            break;
    }
    //switch statement based on id of add button?
    //when case id===addsun
    //reveal sunday's second hour selection and replace + with - (?)
    /* html for the appended div (tested as hardcode)
    <div class="av-hour-set">
        <label for="sun-av-start2"></label>
        <input type="time" id="sun-av-start2" name="sun-av-start2"/>
        <p class="text-center">to</p>
        <label for="sun-av-end2"></label>
        <input type="time" id="sun-av-end2" name="sun-av-end2"/>
    </div>*/
};

getAvAddBtns.forEach((btn) =>
{
    btn.addEventListener("click", avAddSlot);
});

//cancel

function cancelModalActivate(e)
{
    var shiftType = e.target.dataset.shifttype;
    var displayShiftType = document.getElementById("cancel-request-type");
    displayShiftType.innerText = shiftType;

    var shiftDate = e.target.parentElement.dataset.itemdate;
    var displayShiftDate = document.getElementById("cancel-shift-date");
    displayShiftDate.innerText = shiftDate;

    var itemBtnID = e.target.parentElement.id;
    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = "cancel-req";

    cancelModal.style.display = "inline-block";
};

function cancelConfirm()
{
    cancelModal.style.display = "none";
    submitBtn.click();
};

function cancelClose()
{
    cancelModal.style.display = "none";
    setFormInfo.innerText = "";
    setFormType.innerText = "";
};

getCancelBtns.forEach((btn) =>
{
    btn.addEventListener("click", cancelModalActivate)
});

//confirmation

function confirmModalActivate()
{
    confirmModal.style.display = "inline-block";
};

function confirmModalInfoActivate()
{
    confirmModalInfo.style.display = "inline-block";
};

function confirmModalClose()
{
    confirmModal.style.display = "none"
    location.reload(true);
};

function errorModalClose()
{
    errorModal.style.display = "none"
};

function saveSettings()
{
    settingsChecked = [];
    getAllSettings.forEach((box) =>
        {
            if (box.checked = true)
            {
                settingsChecked.push(1);
            }
            else if (box.checked = false)
            {
                settingsChecked.push(0);
            }
            else
            {
                alert("An error occurred when saving your settings. Please try again.");
                return;
            }
        })
    setFormType.innerText = "settings";
    setFormInfo.innerText = settingsChecked;
    //submitBtn.click();
};

//function calls
coverReqConfirmBtn.addEventListener("click", coverReqConfirm);
coverReqCloseBtn.addEventListener("click", coverReqClose);
tradeReqConfirmBtn.addEventListener("click", tradeReqConfirm);
tradeReqCloseBtn.addEventListener("click", tradeReqClose);
timeReqBtn.addEventListener("click", timeReqActivate);
timeReqTimeBox.addEventListener("click", timeReqTime);
timeReqConfirmBtn.addEventListener("click", timeReqConfirm);
timeReqCloseBtn.addEventListener("click", timeReqClose)
openShiftConfirmBtn.addEventListener("click", openShiftConfirm);
openShiftCloseBtn.addEventListener("click", openShiftClose);
coverShiftConfirmBtn.addEventListener("click", coverShiftConfirm);
coverShiftCloseBtn.addEventListener("click", coverShiftClose);
tradeShiftConfirmBtn.addEventListener("click", tradeShiftConfirm);
tradeShiftClearBtn.addEventListener("click", tradeShiftClear);
tradeShiftCloseBtn.addEventListener("click", tradeShiftClose);
infoEditBtn.addEventListener("click", infoEditActivate);
infoConfirmBtn.addEventListener("click", infoConfirm);
infoCloseBtn.addEventListener("click", infoClose);
avEditBtn.addEventListener("click", avEditActivate);
avEditConfirmBtn.addEventListener("click", avEditConfirm);
avCloseBtn.addEventListener("click", avEditClose);
cancelConfirmBtn.addEventListener("click", cancelConfirm);
cancelCloseBtn.addEventListener("click", cancelClose);
confirmOkayBtn.addEventListener("click", confirmModalClose);
errorBtn.addEventListener("click", errorModalClose);
settingsSaveBtn.addEventListener("click", saveSettings);