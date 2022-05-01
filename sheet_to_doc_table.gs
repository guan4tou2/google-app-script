var doc=DocumentApp.create("sign table");
body.clear();
let cells = [
  ['','','','','',''],
  ['職稱','班級','學號','姓名','簽到','便當']
];
var style = {};
style[DocumentApp.Attribute.HORIZONTAL_ALIGNMENT] =DocumentApp.HorizontalAlignment.CENTER;
style[DocumentApp.Attribute.VERTICAL_ALIGNMENT] =DocumentApp.VerticalAlignment.CENTER;
style[DocumentApp.Attribute.FONT_FAMILY] = '標楷體';
style[DocumentApp.Attribute.FONT_SIZE] = 16;
body.appendTable(cells).setAttributes(style);

function Doc(ID,CLASS,NAME) {
  
  var table=body.getTables();
  var newrow=table[0].appendTableRow().setAttributes(style);
  newrow.appendTableCell().setText("學生").setWidth(25*2);
  newrow.appendTableCell().setText(CLASS).setWidth(25*3);
  newrow.appendTableCell().setText(ID).setWidth(25*3.5);
  newrow.appendTableCell().setText(NAME).setWidth(25*3);
  newrow.appendTableCell();
  newrow.appendTableCell().setText("葷/素").setWidth(25*2);
}

function myFunction() {
  var SpreadSheet = SpreadsheetApp.openById("");
  var Sheet = SpreadSheet.getSheetByName("");
  
  var ID=Sheet.getRange("B1:B").getValues().filter(String);
  var CLASS=Sheet.getRange("C1:C").getValues().filter(String);
  var NAME=Sheet.getRange("D1:D").getValues().filter(String);

  for(let i=1;i<ID.length;i++){
    Doc(ID[i],CLASS[i],NAME[i]);
  }
  
}






