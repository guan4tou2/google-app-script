function GetChiDate()
{
    var d=new Date();
    var yy=d.getUTCFullYear();
    var mm=d.getUTCMonth()+1;
    var dd=d.getUTCDate();
    var ChiDate=yy+'/'+mm+'/'+dd;
    return ChiDate;
}

function myFunction() {
  var SpreadSheet = SpreadsheetApp.openById("");
  var Sheet = SpreadSheet.getSheetByName("");
  
  var li=Sheet.getRange("A1:A").getValues().filter(String).length;
  var time1=Sheet.getRange("B1:B").getValues();

  for(let i=0;i<li;i++){
    if(time1[i]==""){
      Sheet.getRange(i+1,2).setValue(GetChiDate());
    }
  }
}
