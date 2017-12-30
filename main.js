var newsq="";
var activePatientBtn, theSameBtn, currentPage;

function ClickedItem(patientBtn){
  changeButtonActive(patientBtn);
  putContentAndShow();
}

function changeButtonActive(patientBtn){
  if(activePatientBtn){
    if(activePatientBtn.id == patientBtn.id){
      activePatientBtn.classList.toggle("active");
      theSameBtn = true;
    }else{
      activePatientBtn.classList.remove("active");
      activePatientBtn = patientBtn;
      activePatientBtn.classList.add("active");
    }
  }else{
    activePatientBtn = patientBtn;
    activePatientBtn.classList.add("active");
  }
}

function putContentAndShow(){
  var componentSection = document.getElementById("componentSection");
  var dashboard = document.getElementById("patientDashboard");
  setCheckCurrentPage()

  if(theSameBtn && !activePatientBtn.classList.contains("active")){
    componentSection.innerHTML = "";
    dashboard.style.display = "none";
  }else{
    componentSection.innerHTML = currentPage;
    dashboard.style.display = "block";
  }
}

function setCheckCurrentPage(){
  var demographics = document.getElementById("demographicsPageBtn");
  var visits = document.getElementById("visitsPageBtn");

  if(demographics.classList.contains("active")){
    currentPage = "<patient-demographics uuid='"+activePatientBtn.id+"'/>";
    return "demographics";
  }else if(visits.classList.contains("active")){
    currentPage = "<last-visits patientuuid='"+activePatientBtn.id+"'/>";
    return "visits";
  }else{
    demographics.classList.add("active");
    setCheckCurrentPage()
  }
}



function NewSearchQuery(){
  newsq = document.getElementById("searchQuery").value;

  if(newsq != document.getElementById("searchResults").sq){
    if(activePatientBtn){
      activePatientBtn.classList.remove("active");
      activePatientBtn = null;
    }
    document.getElementById("searchResults").sq = newsq;
  }
}


function activePageBtn(btn){
  removeActiveFromOthers(btn);
  btn.classList.add("active");
  putContentAndShow();
}

function removeActiveFromOthers(btn){
  if(btn.id == "demographicsPageBtn"){
    document.getElementById("visitsPageBtn").classList.remove("active");
  }else if(btn.id == "visitsPageBtn"){
    document.getElementById("demographicsPageBtn").classList.remove("active");
  }
}
