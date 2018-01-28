// Select color input
var color = $("#colorPicker");
// Select size input
var row = $("<tr></tr>");
var cell = $("<td></td>");
var submit = $("input[type=submit]");

var grid = $("#pixelCanvas");


// When size is submitted by the user, call makeGrid()
submit.on("click", function makeGrid() {
  var gHeight = $("input#inputHeight").val();
  var gWidth = $("input#inputWeight").val();
// prevent the page from reloading
  event.preventDefault();
// clear previous grid
  $("#pixelCanvas").children().remove();

  for (var r=0; r < gHeight; r++) {
    $(grid).append(row.clone().each(function() {
        for (var c = 0; c < gWidth; c++) {
          $(this).append(cell.clone());
      }
  }))
}
})

// Paint the cell if it's clicked
grid.mouseover(function() {
  $(this).find("td").on("click", function() {
    $(this).css("background-color", color.val());
  })
})
