//buttons needed:
//cancel-cover
//cancel-trade
//cancel-av-pending
//cancel-toff
//cancel-toff-pending

//cancellation modal variables
const cancelModal = document.getElementById("cancel-modal");
const cancelConfirmBtn = document.getElementById("cancel-confirm");
const cancelCloseBtn = document.getElementById("cancel-close");
const getCancelBtns = document.querySelectorAll(".cancel-btn");

//form variables
var setFormType = document.getElementById("info-type");
var setFormInfo = document.getElementById("info-main");
var submitBtn = document.getElementById("form-btn");
var itemBtnID;

function cancelModalActivate(e)
{
    var shiftType = e.target.dataset.shifttype;
    var shiftTypeText;
    switch (shiftType)
    {
        case "cover":
            shiftTypeText = "cover";
            break;
        case "trade":
            shiftTypeText = "trade";
            break;
        case "av-pending":
            shiftTypeText = "pending availability";
            break;
        case "toff":
            shiftTypeText = "time off";
            break;
        case "toff-pending":
            shiftTypeText = "pending time off";
            break;
        default:
            alert("Something went wrong.")
            return;
    }

    var displayShiftType = document.getElementById("cancel-request-type");
    displayShiftType.innerText = shiftTypeText;

    var shiftDate = e.target.parentElement.dataset.itemdate;
    var displayShiftDate = document.getElementById("cancel-shift-date");

    if (!shiftDate)
    {
        displayShiftDate.style.display = "none";
    }
    else
    {
        displayShiftDate.innerText = ` for ${shiftDate}`;
    }

    itemBtnID = e.target.id;
    setFormInfo.innerText = itemBtnID;
    setFormType.innerText = `cancel-${shiftType}`;

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

cancelConfirmBtn.addEventListener("click", cancelConfirm);
cancelCloseBtn.addEventListener("click", cancelClose);