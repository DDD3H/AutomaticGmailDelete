function myFunction() {
  var delayDays = 40; //削除日数
  var deleteLabel = "あああああ"; //ここにラベル名を入力
  var deleteThreads = GmailApp.search('older_than:'+delayDays+'d -is:starred label:'+ deleteLabel);

   for (var i = 0; i < deleteThreads.length; i++) {
    deleteThreads[i].moveToTrash();
  }

}
