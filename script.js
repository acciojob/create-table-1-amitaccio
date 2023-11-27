function insert_Row() {
    const table = document.getElementById("sampleTable");
	// create and insert the table at desired position.
	var newRow = table.insertRow(0);
	// insert cell at 0 and 1 index places.
   var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
	 cell1.innerText = "New Cell1";
  cell2.innerText = "New Cell2";
  
  
}
