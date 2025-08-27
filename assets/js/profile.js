//this file is for all the page handling javascript
//the modals still contained on this page are the simplest ones
//ex: "confirm action y/n"

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

//trade response variables
const getTradeOfferOptions = document.querySelectorAll(".trade-radio-option");
const tradeOfferSaveBtn = document.getElementById("trade-options-save-btn")

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

function saveTradeOfferSelections()
{
    selectionArray = [];
    checkArray = [];
    var shiftID = tradeOfferSaveBtn.parentElement.id;
    var checkValue = 0;

    //check for checked buttons
    //push value into array
    //if accept already exists in array, throw error and return
    getTradeOfferOptions.forEach((option) =>
    {
        if (option.checked === true)
        {
            checkArray.push(option.value);
            selectionArray.push(option.id);
        }
    });

    console.log(checkArray);
    var duplicates = checkArray.filter((item, index) => index !== checkArray.indexOf(item));
    console.log(duplicates);

    for(value of duplicates)
    {
        if(value === "accept")
        {
            checkValue = 1;
        }
    }

    if(checkValue === 1)
    {
        alert('You can only accept one trade offer.')
        return;
    }
    else if(checkValue === 0)
    {
        setFormInfo.innerText = `${shiftID},${selectionArray}`;
        setFormType.innerText = "trade-offer-selections";
        //submitBtn.click();
    }
    else
    {
        alert('Something went wrong with your selections. Please try again.')
        return;
    } 
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

//-------------------------------------------------------confirmation

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

//-----------------------------------------------------------error

function errorModalClose()
{
    errorModal.style.display = "none"
};

//------------------------------------------------------------settings

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

openShiftConfirmBtn.addEventListener("click", openShiftConfirm);
openShiftCloseBtn.addEventListener("click", openShiftClose);

coverShiftConfirmBtn.addEventListener("click", coverShiftConfirm);
coverShiftCloseBtn.addEventListener("click", coverShiftClose);

tradeOfferSaveBtn.addEventListener("click", saveTradeOfferSelections);

confirmOkayBtn.addEventListener("click", confirmModalClose);

errorBtn.addEventListener("click", errorModalClose);

settingsSaveBtn.addEventListener("click", saveSettings);