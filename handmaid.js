$('document').ready(function(){
  EP = 0;
  Evidence = 1;
  Context = 0;
  Def = 0;
  Picture = 0;
  Vocabulary = 1;
  LiteraryElement = 1;
  Question = 0;
  Answer = 0;
  
  question();
  evidence();
  
  var vid = document.getElementById("trailer"); 
  $('#playVideo').hide();
  vid.play();
  $('#pauseVideo').click(function(){
    $('#pauseVideo').hide();
    $('#playVideo').show();
    vid.pause();
  });
  $('#playVideo').click(function(){
    $('#playVideo').hide();
    $('#pauseVideo').show();
    vid.play();
  });
  
  
  $('#essentialParagraphPanel').html('<h4>My nakedness is strange to me already. My body seems outdated. Did I really wear bathing suits, at the beach? I did, without thought, among men, without caring that my legs, my arms, my thighs and back were on display, could be seen. Shameful, immodest. I avoid looking down at my body, not so much because it\’s shameful or immodest but because I don\’t want to see it. I don\’t want to look at something that determines me so completely.</h4> <br><h4>I step into the water, lie down, let it hold me. The water is soft as hands. I close my eyes, and she\’s there with me, suddenly, without warning, it must be the smell of the soap. I put my face against the soft hair at the back of her neck and breathe in, baby powder and child\'s washed flesh shampoo, with an undertone, the faint scent of urine. This is the age she is when i\'m in the bath. She comes back to me at different ages. This is how i know she\’s not really a ghost. If she were a ghost she would be the same age always. </h4><br> <p class="pageNumber">(page 63, lines 4 - 19)</p>');
  
  $('#pictureButton').html('Picture: Show');
  $('#pictureButton').css('background-color', 'rgba(102, 255, 102, 0.5)');
      
  $('#contextButton').html('Context:On');
  $('#contextButton').css('background-color', 'rgba(102, 255, 102, 0.5)');
  
  $('#SHDButton').html('Definition:Show');
  $('#SHDButton').css('background-color', 'rgba(102, 255, 102, 0.5)');
  document.getElementById("vocabPrevious").style.cursor = "not-allowed";
  
  document.getElementById("vocabPrevious").style.cursor = "not-allowed";
  document.getElementById("vocabNext").style.cursor = "pointer";
  document.getElementById('vocab1').classList.add('onButton');
  document.getElementById('vocab2').classList.remove('onButton');
  document.getElementById('vocab3').classList.remove('onButton');
  document.getElementById('vocab4').classList.remove('onButton');
  document.getElementById('vocab5').classList.remove('onButton');
  document.getElementById('vocab6').classList.remove('onButton');
  $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/immodest?s=t' target='_blank'>Immodest</a></strong> (adj.)</h3>");
  $('#picture').css('background-image', 'url(immodest.jpg)');
  $('#context').html("<hr><h4><strong>Context:</strong> I avoid looking down at my body, not so much because it’s shameful or <span class='vocabWord'>immodest</span> but because I don’t want to see it. (page 63)</h4>")
  $('#definition').html('<hr><h4><strong>Definition:</strong> Inappropriate based on bias. </h4>');
  
  document.getElementById("LEPrevious").style.cursor = "not-allowed";
  document.getElementById("LENext").style.cursor = "pointer";
  document.getElementById('LE1').classList.add('onButton');
  document.getElementById('LE2').classList.remove('onButton');
  document.getElementById('LE3').classList.remove('onButton');
  document.getElementById('LE4').classList.remove('onButton');
  document.getElementById('LE5').classList.remove('onButton');
  $('#LEType').html('<h4><strong>Type of Literary Element: </strong>Personification</h4>');
  $('#LEQuote').html('<h4><strong>Quote Found: </strong>I step into the water, lie down, let it hold me.</h4>');
  
  /*Video*/
  $('html,body,#video-container').animate({ scrollTop: $(document).height() * 0.9 - $(window).height() }, 500);

  /*Essential Paragraph*/
  $('#EPNext').click(function(){
    EP++;
    EPText();
  });
  $('#EPPrevious').click(function(){
    EP--;
    EPText();
  });
  
  /* Evidence */
  $('#eviPrevious').click(function(){
    Evidence--;
    evidence();
  })
  $('#eviNext').click(function(){
    Evidence++;
    evidence();
  })
  $('#evi1').click(function(){
    Evidence = 1;
    evidence();
  })
  $('#evi2').click(function(){
    Evidence = 2;
    evidence();
  })
  $('#evi3').click(function(){
    Evidence = 3;
    evidence();
  })
  $('#evi4').click(function(){
    Evidence = 4;
    evidence();
  })
  
  /*Vocabulary*/
  $('#SHDButton').click(function(){
    Def++;
    if(Def === 2){
      Def = 0;
    }
    if(Def === 0){
      $('#SHDButton').html('Definition:Show');
      $('#SHDButton').css('background-color', 'rgba(102, 255, 102, 0.5)');
      $('#definition').show();
    } else if(Def === 1){
      $('#SHDButton').html('Definition:Hide');
      $('#SHDButton').css('background-color', 'rgba(255, 51, 0, 0.5)');
      $('#definition').hide();
    }
  });
  
  $('#pronunciationButton').click(function(){
    if( Vocabulary === 1){
      $('#pronunciationVoice').html('<audio autoplay> <source src="immodest.m4a" type="audio/mpeg"></audio>');
    } else if( Vocabulary === 2){
      $('#pronunciationVoice').html('<audio autoplay> <source src="undertone.m4a" type"audio/mpeg"></audio>');
    } else if( Vocabulary === 3){
      $('#pronunciationVoice').html('<audio autoplay> <source src="faint.m4a" type"audio/mpeg"></audio>');
    } else if( Vocabulary === 4){
      $('#pronunciationVoice').html('<audio autoplay> <source src="scent.m4a" type"audio/mpeg"></audio>');
    } else if( Vocabulary === 5){
      $('#pronunciationVoice').html('<audio autoplay> <source src="confiscate.m4a" type"audio/mpeg"></audio>');
    } else if( Vocabulary === 6){
      $('#pronunciationVoice').html('<audio autoplay> <source src="meek.m4a" type"audio/mpeg"></audio>');
    }
  })
  
  $('#contextButton').click(function(){
    Context++;
    if(Context === 2){
      Context = 0;
    }
    if(Context === 0){
      $('#contextButton').html('Context:On');
      $('#contextButton').css('background-color', 'rgba(102, 255, 102, 0.5)');
      $('#context').show();
    } else if(Context ===1){
      $('#contextButton').html('Context:Off');
      $('#contextButton').css('background-color', 'rgba(255, 51, 0, 0.5)')
      $('#context').hide();
    }
  });
  $('#pictureButton').click(function(){
    Picture++;
    if ( Picture === 2 ){
      Picture =0;
    }
    if ( Picture === 0 ){
      $('#pictureButton').html('Picture: Show');
      $('#pictureButton').css('background-color', 'rgba(102, 255, 102, 0.5)');
      $('#picture').show();
    } else if ( Picture === 1 ){
      $('#pictureButton').html('Picture: Hide');
      $('#pictureButton').css('background-color', 'rgba(255, 51, 0, 0.5)')
      $('#picture').hide();
    }
  })
  
  $('#vocab1').click(function(){
    Vocabulary = 1;
    Vocab();
  });
  $('#vocab2').click(function(){
    Vocabulary = 2;
    Vocab();
  });
  $('#vocab3').click(function(){
    Vocabulary = 3;
    Vocab();
  });
  $('#vocab4').click(function(){
    Vocabulary = 4;
    Vocab();
  });
  $('#vocab5').click(function(){
    Vocabulary = 5;
    Vocab();
  });
  $('#vocab6').click(function(){
    Vocabulary = 6;
    Vocab();
  });
  $('#vocabPrevious').click(function(){
    Vocabulary--;
    Vocab();
  });
  $('#vocabNext').click(function(){
    Vocabulary++;
    Vocab();
  });
  
  //Literary Elemenet//
  $('#LEPrevious').click(function(){
    LiteraryElement--;
    LEText();
  });
  $('#LE1').click(function(){
    LiteraryElement = 1;
    LEText();
  });
  $('#LE2').click(function(){
    LiteraryElement = 2;
    LEText();
  });
  $('#LE3').click(function(){
    LiteraryElement = 3;
    LEText();
  });
  $('#LE4').click(function(){
    LiteraryElement = 4;
    LEText();
  });
  $('#LE5').click(function(){
    LiteraryElement = 5;
    LEText();
  });
  $('#LENext').click(function(){
    LiteraryElement++;
    LEText();
  });
  
  $('#questionNext').hide();
  $('#questionAns1').click(function(){
    Answer = 1;
    document.getElementById('questionAns1').classList.add('answer');
    document.getElementById('questionAns2').classList.remove('answer');
    document.getElementById('questionAns3').classList.remove('answer');
    document.getElementById('questionAns4').classList.remove('answer');
  });
  $('#questionAns2').click(function(){
    Answer = 2;
    document.getElementById('questionAns1').classList.remove('answer');
    document.getElementById('questionAns2').classList.add('answer');
    document.getElementById('questionAns3').classList.remove('answer');
    document.getElementById('questionAns4').classList.remove('answer');
  });
  $('#questionAns3').click(function(){
    Answer = 3;
    document.getElementById('questionAns1').classList.remove('answer');
    document.getElementById('questionAns2').classList.remove('answer');
    document.getElementById('questionAns3').classList.add('answer');
    document.getElementById('questionAns4').classList.remove('answer');
  });
  $('#questionAns4').click(function(){
    Answer = 4;
    document.getElementById('questionAns1').classList.remove('answer');
    document.getElementById('questionAns2').classList.remove('answer');
    document.getElementById('questionAns3').classList.remove('answer');
    document.getElementById('questionAns4').classList.add('answer');
  });
  $('#questionAnsConfirm').click(function(){
    questionAnswer();
  });
  $('#questionNext').click(function(){
    Question++;
    question();
    $('#questionNext').hide();
    $('#questionAnsConfirm').show();
    document.getElementById('questionAns1').classList.remove('answer');
    document.getElementById('questionAns2').classList.remove('answer');
    document.getElementById('questionAns3').classList.remove('answer');
    document.getElementById('questionAns4').classList.remove('answer');
    document.getElementById('questionAns1').classList.remove('wrongAns');
    document.getElementById('questionAns2').classList.remove('rightAns');
    document.getElementById('questionAns3').classList.remove('wrongAns');
    document.getElementById('questionAns4').classList.remove('wrongAns');
    document.getElementById('questionAns1').disabled = false;
    document.getElementById('questionAns2').disabled = false;
    document.getElementById('questionAns3').disabled = false;
    document.getElementById('questionAns4').disabled = false;
  });
});
  


function EPText(){
  if( EP === 3 ){
      EP = 0;
    } else if( EP === -1 ){
      EP = 2;
    }
    if( EP === 0 ){
      $('#essentialParagraphPanel').html('<h4>My nakedness is strange to me already. My body seems outdated. Did I really wear bathing suits, at the beach? I did, without thought, among men, without caring that my legs, my arms, my thighs and back were on display, could be seen. Shameful, immodest. I avoid looking down at my body, not so much because it\’s shameful or immodest but because I don\’t want to see it. I don\’t want to look at something that determines me so completely.</h4> <br><h4>I step into the water, lie down, let it hold me. The water is soft as hands. I close my eyes, and she\’s there with me, suddenly, without warning, it must be the smell of the soap. I put my face against the soft hair at the back of her neck and breathe in, baby powder and child\'s washed flesh shampoo, with an undertone, the faint scent of urine. This is the age she is when i\'m in the bath. She comes back to me at different ages. This is how i know she\’s not really a ghost. If she were a ghost she would be the same age always. </h4><br> <p class="pageNumber">(page 63, lines 4 - 19)</p>');
    } else if( EP === 1 ){
      $('#essentialParagraphPanel').html('<h4>I don\’t have those things anymore, the clothes and hair. I wonder what happened to all our things. Looted, dumped out, carried away. Confiscated.</h4> <br> <h4>I\’ve learned to do without a lot of things. If you have a lot of things, said Aunt Lydia, you get too attached to this material world and you forgot about spiritual values. You must cultivate poverty of spirit. Blessed are the meek. She didn\’t go on to say anything about inheriting the earth.</h4> <br> <p class="pageNumber">(page 64, lines 13 - 20)</p>');
    } else if( EP === 2 ){
      $('#essentialParagraphPanel').html('<h4>I cannot avoid seeing, now, the small tattoo on my ankle. Four digits and an eye, a passport in reverse. It\’s supposed to guarantee that I will never be able to fade, finally, into another landscape. I am too important, too scarce, for that. I am a national resource.</h4> <br> <h4>I pull the plug, dry myself, put on my red terrycloth robe. I leave today\’s dress here, where cora will pick it up to be washed. Back in the room i dress again. The white headdress isn\’t necessary  for the evening, because I won\’t be going out. Everyone in this house knows what my face looks like. The red veil goes on, though, covering my damp hair, my head, which has not been shaved. Where did I see that film, about the women, kneeling in the town square, hands holding them, their hair falling in clumps? What had they done? It must have been a long time ago, because I can’t remember.</h4> <br> <p class="pageNumber">(page 65, lines 3 - 15)</p>');
    }
}

function evidence(){
  if( Evidence === 0 ){
    Evidence === 1;
  } else if ( Evidence === 5 ){
    Evidence === 4;
  }
  if( Evidence === 1 ){
    document.getElementById("eviPrevious").style.cursor = "not-allowed";
    document.getElementById("eviNext").style.cursor = "pointer";
    document.getElementById('evi1').classList.add('onButton');
    document.getElementById('evi2').classList.remove('onButton');
    document.getElementById('evi3').classList.remove('onButton');
    document.getElementById('evi4').classList.remove('onButton');
    $('#evidence').html("<h4>I avoid looking down at my body, not so much because it’s shameful or immodest but because I don’t want to see it. I don’t want to look at something that determines me so completely. <br> <p class='pageNumber'>(page 63, lines 8 - 10)</p></h4>")
  } else if( Evidence === 2 ){
    document.getElementById("eviPrevious").style.cursor = "pointer";
    document.getElementById("eviNext").style.cursor = "pointer";
    document.getElementById('evi1').classList.remove('onButton');
    document.getElementById('evi2').classList.add('onButton');
    document.getElementById('evi3').classList.remove('onButton');
    document.getElementById('evi4').classList.remove('onButton');
    $('#evidence').html("<h4>I don’t have those things anymore, the clothes and hair. I wonder what happened to all our things. Looted, dumped out, carried away. Confiscated.</h4> <br> <p class='pageNumber'>(page 64, lines 13 - 15)</p>");
  } else if( Evidence === 3 ){
    document.getElementById("eviPrevious").style.cursor = "pointer";
    document.getElementById("eviNext").style.cursor = "pointer";
    document.getElementById('evi1').classList.remove('onButton');
    document.getElementById('evi2').classList.remove('onButton');
    document.getElementById('evi3').classList.add('onButton');
    document.getElementById('evi4').classList.remove('onButton');
    $('#evidence').html("<h4>I cannot avoid seeing, now, the small tattoo on my ankle. Four digits and an eye, a passport in reverse. It’s supposed to guarantee that I will never be able to fade, finally, into another landscape. I am too important, too scarce, for that. I am a national resource.</h4> <br> <p class='pageNumber'>(page 65, lines 3 - 6)</p>");
  } else if( Evidence === 4 ){
    document.getElementById("eviPrevious").style.cursor = "pointer";
    document.getElementById("eviNext").style.cursor = "not-allowed";
    document.getElementById('evi1').classList.remove('onButton');
    document.getElementById('evi2').classList.remove('onButton');
    document.getElementById('evi3').classList.remove('onButton');
    document.getElementById('evi4').classList.add('onButton');
    $('#evidence').html("<h4>The white headdress isn’t necessary for the evening, because I won’t be going out. Everyone in this house knows what my face looks like. </h4> <br> <p class='pageNumber'>(page 65, lines 9 - 11)</p>");
  } 
}

function Vocab(){
  if (Vocabulary === 0){
    Vocabulary = 1;
  } else if (Vocabulary === 1){
    document.getElementById("vocabPrevious").style.cursor = "not-allowed";
    document.getElementById("vocabNext").style.cursor = "pointer";
    document.getElementById('vocab1').classList.add('onButton');
    document.getElementById('vocab2').classList.remove('onButton');
    document.getElementById('vocab3').classList.remove('onButton');
    document.getElementById('vocab4').classList.remove('onButton');
    document.getElementById('vocab5').classList.remove('onButton');
    document.getElementById('vocab6').classList.remove('onButton');
    $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/immodest?s=t' target='_blank'>Immodest</a></strong> (adj.)</h3>");
    $('#picture').css('background-image', 'url(immodest.jpg)');
    $('#context').html("<hr><h4><strong>Context:</strong> I avoid looking down at my body, not so much because it’s shameful or <span class='vocabWord'>immodest</span> but because I don’t want to see it. (page 63)</h4>")
    $('#definition').html('<hr><h4><strong>Definition:</strong> Inappropriate based on bias. </h4>');
  } else if (Vocabulary === 2){
    document.getElementById("vocabPrevious").style.cursor = "pointer";
    document.getElementById("vocabNext").style.cursor = "pointer";
    document.getElementById('vocab1').classList.remove('onButton');
    document.getElementById('vocab2').classList.add('onButton');
    document.getElementById('vocab3').classList.remove('onButton');
    document.getElementById('vocab4').classList.remove('onButton');
    document.getElementById('vocab5').classList.remove('onButton');
    document.getElementById('vocab6').classList.remove('onButton');
    $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/undertone?s=t' target='_blank'>Undertone</a></strong> (n.)</h3>");
    $('#picture').css('background-image', 'url(undertone.jpg)');
    $('#context').html("<hr><h4><strong>Context:</strong> I put my face against the soft hair at the back of her neck and breathe in, baby powder and child's washed flesh shampoo, with an <span class='vocabWord'>undertone</span>, the faint scent of urine. (page 63)</h4>")
    $('#definition').html('<hr><h4><strong>Definition:</strong> Speak in a quiet tone.</h4>')
  } else if (Vocabulary === 3){
    document.getElementById("vocabPrevious").style.cursor = "pointer";
    document.getElementById("vocabNext").style.cursor = "pointer";
    document.getElementById('vocab1').classList.remove('onButton');
    document.getElementById('vocab2').classList.remove('onButton');
    document.getElementById('vocab3').classList.add('onButton');
    document.getElementById('vocab4').classList.remove('onButton');
    document.getElementById('vocab5').classList.remove('onButton');
    document.getElementById('vocab6').classList.remove('onButton');
    $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/faint?s=t' target='_blank'>Faint</a></strong> (adj.)</h3>");
    $('#picture').css('background-image', 'url(faint.jpg)');
    $('#context').html("<hr><h4><strong>Context:</strong> I put my face against the soft hair at the back of her neck and breathe in, baby powder and child's washed flesh shampoo, with an undertone, the <span class='vocabWord'>faint</span> scent of urine. (page 63)</h4>")
    $('#definition').html('<hr><h4><strong>Definition:</strong> Slight.</h4>')
  } else if (Vocabulary === 4){
    document.getElementById("vocabPrevious").style.cursor = "pointer";
    document.getElementById("vocabNext").style.cursor = "pointer";
    document.getElementById('vocab1').classList.remove('onButton');
    document.getElementById('vocab2').classList.remove('onButton');
    document.getElementById('vocab3').classList.remove('onButton');
    document.getElementById('vocab4').classList.add('onButton');
    document.getElementById('vocab5').classList.remove('onButton');
    document.getElementById('vocab6').classList.remove('onButton');
    $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/scent?s=t' target='_blank'>Scent</a></strong> (n.)</h3>");
    $('#picture').css('background-image', 'url(scent.jpg)');
    $('#context').html("<hr><h4><strong>Context:</strong> I put my face against the soft hair at the back of her neck and breathe in, baby powder and child's washed flesh shampoo, with an undertone, the faint <span class='vocabWord'>scent</span> of urine. (page 63)</h4>")
    $('#definition').html('<hr><h4><strong>Definition:</strong> The sense of smell.</h4>')
  } else if (Vocabulary === 5){
    document.getElementById("vocabPrevious").style.cursor = "pointer";
    document.getElementById("vocabNext").style.cursor = "pointer";
    document.getElementById('vocab1').classList.remove('onButton');
    document.getElementById('vocab2').classList.remove('onButton');
    document.getElementById('vocab3').classList.remove('onButton');
    document.getElementById('vocab4').classList.remove('onButton');
    document.getElementById('vocab5').classList.add('onButton');
    document.getElementById('vocab6').classList.remove('onButton');
    $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/confiscate?s=ts' target='_blank'>Confiscate</a></strong> (v.)</h3>");
    $('#picture').css('background-image', 'url(confiscate.jpg)');
    $('#context').html("<hr><h4><strong>Context:</strong> I wonder what happened to all our things. Looted, dumped out, carried away. <span class='vocabWord'>Confiscated</span>. (page 64)</h4>")
    $('#definition').html('<hr><h4><strong>Definition:</strong> Take someone’s property with authority.</h4>');
  } else if (Vocabulary === 6){
    document.getElementById("vocabPrevious").style.cursor = "pointer";
    document.getElementById("vocabNext").style.cursor = "not-allowed";
    document.getElementById('vocab1').classList.remove('onButton');
    document.getElementById('vocab2').classList.remove('onButton');
    document.getElementById('vocab3').classList.remove('onButton');
    document.getElementById('vocab4').classList.remove('onButton');
    document.getElementById('vocab5').classList.remove('onButton');
    document.getElementById('vocab6').classList.add('onButton');
    $('#vocabName').html("<h3><strong><a href='http://www.dictionary.com/browse/meek?s=t' target='_blank'>Meek</a></strong> (adj.)</h3>");
    $('#picture').css('background-image', 'url(meek.jpg)');
    $('#context').html("<hr><h4><strong>Context:</strong> You must cultivate poverty of spirit. Blessed are the <span class='vocabWord'>meek</span>. (page 64)</h4>")
    $('#definition').html('<hr><h4><strong>Definition:</strong> The sense of smell.</h4>')
  } else if (Vocabulary === 7){
    Vocabulary = 6;
  }
}
function LEText(){
  if ( LiteraryElement === 0){
    LiteraryElement = 1;
  } else if (LiteraryElement === 6){
    LiteraryElement = 5;
  } else if ( LiteraryElement === 1){
    document.getElementById("LEPrevious").style.cursor = "not-allowed";
    document.getElementById("LENext").style.cursor = "pointer";
    document.getElementById('LE1').classList.add('onButton');
    document.getElementById('LE2').classList.remove('onButton');
    document.getElementById('LE3').classList.remove('onButton');
    document.getElementById('LE4').classList.remove('onButton');
    document.getElementById('LE5').classList.remove('onButton');
    $('#LEType').html('<h4><strong>Type of Literary Element: </strong>Personification</h4>');
    $('#LEQuote').html('<h4><strong>Quote Found: </strong>I step into the water, lie down, let it hold me.</h4>');
  } else if ( LiteraryElement === 2){
    document.getElementById("LEPrevious").style.cursor = "pointer";
    document.getElementById("LENext").style.cursor = "pointer";
    document.getElementById('LE1').classList.remove('onButton');
    document.getElementById('LE2').classList.add('onButton');
    document.getElementById('LE3').classList.remove('onButton');
    document.getElementById('LE4').classList.remove('onButton');
    document.getElementById('LE5').classList.remove('onButton');
    $('#LEType').html('<h4><strong>Type of Literary Element: </strong>Repetition</h4>');
    $('#LEQuote').html('<h4><strong>Quote Found: </strong>I don’t want to see it. I don’t want to look at something that determines me so completely.</h4>');
  } else if ( LiteraryElement === 3){
    document.getElementById("LEPrevious").style.cursor = "pointer";
    document.getElementById("LENext").style.cursor = "pointer";
    document.getElementById('LE1').classList.remove('onButton');
    document.getElementById('LE2').classList.remove('onButton');
    document.getElementById('LE3').classList.add('onButton');
    document.getElementById('LE4').classList.remove('onButton');
    document.getElementById('LE5').classList.remove('onButton');
    $('#LEType').html('<h4><strong>Type of Literary Element: </strong>Imagery</h4>');
    $('#LEQuote').html("<h4><strong>Quote Found: </strong>I close my eyes, and she’s there with me, suddenly, without warning, it must be the smell of the soap. I put my face against the soft hair at the back of her neck and breathe in, baby powder and child's washed flesh shampoo, with an undertone, the faint scent of urine.</h4>");
  } else if ( LiteraryElement === 4){
    document.getElementById("LEPrevious").style.cursor = "pointer";
    document.getElementById("LENext").style.cursor = "pointer";
    document.getElementById('LE1').classList.remove('onButton');
    document.getElementById('LE2').classList.remove('onButton');
    document.getElementById('LE3').classList.remove('onButton');
    document.getElementById('LE4').classList.add('onButton');
    document.getElementById('LE5').classList.remove('onButton');
    $('#LEType').html('<h4><strong>Type of Literary Element: </strong>Rule of Three</h4>');
    $('#LEQuote').html('<h4><strong>Quote Found: </strong>Looted, dumped out, carried away.</h4>');
  } else if ( LiteraryElement === 5){
    document.getElementById("LEPrevious").style.cursor = "pointer";
    document.getElementById("LENext").style.cursor = "not-allowed";
    document.getElementById('LE1').classList.remove('onButton');
    document.getElementById('LE2').classList.remove('onButton');
    document.getElementById('LE3').classList.remove('onButton');
    document.getElementById('LE4').classList.remove('onButton');
    document.getElementById('LE5').classList.add('onButton');
    $('#LEType').html('<h4><strong>Type of Literary Element: </strong>Irony</h4>');
    $('#LEQuote').html('<h4><strong>Quote Found: </strong>It’s supposed to guarantee that I will never be able to fade, finally, into another landscape. I am too important, too scarce, for that. I am a national resource.</h4>');
  }
}
function questionAnswer(){
  if( Answer === 0 ){
      alert('Please Pick an Answer');
    } else {
      $('#questionAnsConfirm').hide();
      if( Question === 0){
        $('#questionNext').show();
      }
    }
    if( Answer === 1 ){
      document.getElementById('questionAns1').classList.add('wrongAns');
      document.getElementById('questionAns2').classList.add('rightAns');
      document.getElementById('questionAns1').classList.remove('answer');
      $('#questionVoice').html('<audio autoplay> <source src="no.mp3" type"audio/mpeg"></audio>');
      document.getElementById('questionAns1').disabled = true;
      document.getElementById('questionAns2').disabled = true;
      document.getElementById('questionAns3').disabled = true;
      document.getElementById('questionAns4').disabled = true;
    } else if( Answer === 2 ){
      document.getElementById('questionAns2').classList.add('rightAns');
      document.getElementById('questionAns2').classList.remove('answer');
      $('#questionVoice').html('<audio autoplay> <source src="yes.mp3" type"audio/mpeg"></audio>');
      document.getElementById('questionAns1').disabled = true;
      document.getElementById('questionAns2').disabled = true;
      document.getElementById('questionAns3').disabled = true;
      document.getElementById('questionAns4').disabled = true;
    } else if( Answer === 3 ){
      document.getElementById('questionAns3').classList.add('wrongAns');
      document.getElementById('questionAns2').classList.add('rightAns');
      document.getElementById('questionAns3').classList.remove('answer');
      $('#questionVoice').html('<audio autoplay> <source src="no.mp3" type"audio/mpeg"></audio>');
      document.getElementById('questionAns1').disabled = true;
      document.getElementById('questionAns2').disabled = true;
      document.getElementById('questionAns3').disabled = true;
      document.getElementById('questionAns4').disabled = true;
    } else if( Answer === 4 ){
      document.getElementById('questionAns4').classList.add('wrongAns');
      document.getElementById('questionAns2').classList.add('rightAns');
      document.getElementById('questionAns4').classList.remove('answer');
      $('#questionVoice').html('<audio autoplay> <source src="no.mp3" type"audio/mpeg"></audio>');
      document.getElementById('questionAns1').disabled = true;
      document.getElementById('questionAns2').disabled = true;
      document.getElementById('questionAns3').disabled = true;
      document.getElementById('questionAns4').disabled = true;
    }
}
function question(){
  if( Question === 0 ){
    $('#questionText').html("<h4>It can reasonably be inferred from quote “I don’t have those things anymore, the clothes and hair. I wonder what happened to all our things. Looted, dumped out, carried away. Confiscated.” that June (Offred):</h4>");
    $('#questionAns1').html("<h4><strong>A) </strong>Just experienced a robbery.</h4>");
    $('#questionAns2').html("<h4><strong>B) </strong>Received a new life from the unorthodox government.</h4>");
    $('#questionAns3').html("<h4><strong>C) </strong>Is ambivalent about losing her property.</h4>");
    $('#questionAns4').html("<h4><strong>D) </strong>Wants to get rid of everything.</h4>");
  } else if( Question === 1 ){
    $('#questionText').html("<h4>“It’s supposed to guarantee that I will never be able to fade, finally, into another landscape. I am too important, too scarce, for that. I am a national resource.” represents which <strong>literary elements?</strong></h4>");
    $('#questionAns1').html("<h4><strong>A) </strong>Sarcasm and Metaphor.</h4>");
    $('#questionAns2').html("<h4><strong>B) </strong>Irony and Repetition.</h4>");
    $('#questionAns3').html("<h4><strong>C) </strong>Mood and Rule of Three.</h4>");
    $('#questionAns4').html("<h4><strong>D) </strong>Simile and Plot.</h4>");
  }
}