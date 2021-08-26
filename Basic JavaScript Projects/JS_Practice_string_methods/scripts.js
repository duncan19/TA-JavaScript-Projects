function full_Sentence() {
  var part_1= "I have "
  var part_2= "made this "
  var part_3= "into a "
  var part_4= "complete  "
  var part_5= "sentence."
  var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5)
  document.getElementById("Concatenate").innerHTML = whole_sentence
}
