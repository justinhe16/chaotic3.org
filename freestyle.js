$(document).ready(function() {
  var engine = Random.engines.mt19937().autoSeed();
  concepts = ["Lauren","Yena","Cielo","Courtney","Melina","Brandon C.","Conor","Dominique","Manessah","Jack",
  "Bryan","Justine","Rahul","Karl","Collin","Allison","Avand","David L.","Erica","Judy","Kara","Sonia",
  "Emily Louie", "Emily Lu", "Sonali", "David N.", "Claire", "Elaine", "Trey", "SunHee", "Jerrel",
  "Caroline","JJ","Brandon T.","Nick","Diandra","Lexi","Julia","Alex","Angela","Brittany","Kyle",
  "Marissa", "Wayne","Conor","Justin", "NSFW Karl", "Kid Karl"]
  shapes = ["sad","happy","sexy","smooth","seductive","emotional","nostalgic","scared","angry",
  "disgusted","surprised","shameful","loving","cutesy"]
  textures = ["Deepthroat","Sicko Mode","Skin", "Kream","Superstar","Mission Statement", "I Like It",
  "Krippy Kush", "Missed My Exit","Bounce Back","BlackJack","Wild Thoughts","Lil Bit (K Camp Remix)",
  "You (AlexTbh)", "Just A Picture", "Lotus Eater","Lights On", "Still Feelin' It", "Pressed (Tyga)",
  "Down"]
  $('#concept').html(concepts[Random.integer(0,concepts.length-1)(engine)]);
  $('#shape').html(shapes[Random.integer(0,shapes.length-1)(engine)]);
  $('#texture').html(textures[Random.integer(0,textures.length-1)(engine)]);

  $("#randomize").click(function() {
    $('#concept').html(concepts[Random.integer(0,concepts.length-1)(engine)]);
    $('#shape').html(shapes[Random.integer(0,shapes.length-1)(engine)]);
    $('#texture').html(textures[Random.integer(0,textures.length-1)(engine)]);
  });
});
