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

//form variables
var setFormType = document.getElementById("info-type");
var setFormInfo = document.getElementById("info-main");
var submitBtn = document.getElementById("form-btn");
var itemBtnID;

//request cover visual functions

function coverReqActivate(e)
{
    //get the link and date info
    //assign link to a holding attribute to pass on later
    //display date in modal
    //activate modal
    itemBtnID = e.target.parentElement.parentElement.parentElement.id;
    var itemDate = e.target.parentElement.parentElement.parentElement.dataset.itemdate;
    var date = document.getElementById("req-cover-date");
    var time = document.getElementById("req-cover-time");
    console.log(itemBtnID, itemDate);

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
    itemBtnID = e.target.parentElement.parentElement.parentElement.id;
    var itemDate = e.target.parentElement.parentElement.parentElement.dataset.itemdate;
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

//cancel

function cancelModalActivate(e)
{
    var shiftType = e.target.dataset.shifttype;
    var displayShiftType = document.getElementById("cancel-request-type");
    displayShiftType.innerText = shiftType;

    var shiftDate = e.target.parentElement.parentElement.dataset.itemdate;
    var displayShiftDate = document.getElementById("cancel-shift-date");
    displayShiftDate.innerText = shiftDate;

    var itemBtnID = e.target.parentElement.parentElement.id;
    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = "cancel-req";

    cancelModal.style.display = "inline-block";
};

function cancelConfirm()
{
    cancelModal.style.display = "none";
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

//confirm

function confirmModalActivate()
{
    confirmModal.style.display = "inline-block";
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

coverReqConfirmBtn.addEventListener("click", coverReqConfirm);
coverReqCloseBtn.addEventListener("click", coverReqClose);
tradeReqConfirmBtn.addEventListener("click", tradeReqConfirm);
tradeReqCloseBtn.addEventListener("click", tradeReqClose);
cancelConfirmBtn.addEventListener("click", cancelConfirm);
cancelCloseBtn.addEventListener("click", cancelClose);
confirmOkayBtn.addEventListener("click", confirmModalClose);
errorBtn.addEventListener("click", errorModalClose);