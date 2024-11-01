var s=0;
var text='Preview';
var special_character='';
var width=[32];
var height=[11];
var border=[''];
var border_size=[1];
var border_type=['solid'];
var border_color=['#004F72'];
var border_radius=[4];
var border_radius_style=[''];
var val1=[4];
var val2=[4];
var val3=[4];
var val4=[4];
var font_color=['#E5FFFF'];
var font_size=[13];
var font_name=['Arial, Helvetica, sans-serif'];
var background=[];
var back_start=['#3BA4C7'];
var back_end=['#1982A5'];
var box_shadow_out=[];
var outside_color=['#bababa'];
var out_shadow_x=[0];
var out_shadow_y=[0];
var out_shadow_blur=[0];
var in_color=['#ffffff'];
var in_shadow_x=[0];
var in_shadow_y=[0];
var in_shadow_blur=[1];
var opacity=[100];
var opacity_style=[];
var text_shadow=[];
var font_shadow=['#bababa'];
var font_shadow_x=[0];
var font_shadow_y=[0];
var font_shadow_spread=[0];
var transition_style='';
var transition_second=0;
var transition_type='none';
var transition_function='linear';
var style=[];
var hover=0;
var press=0;
var grab=0;
jQuery(document).ready(function($){
	$(".button").click(function(event) {
	  event.preventDefault();
	});
	
	//Title //
	$('.title').click(function(){ $(this).parent().find('ol').slideToggle();});
	//top header //
	$('#header_buttons li').click(function(){ $('#header_buttons li').removeClass().addClass('NO');  $(this).removeClass().addClass('Active');  });
	
	//change the title
	$('.text').live('keyup',function(){ text=$(this).attr('value');$('.button').html(text+special_character); changes();}); // remember to change this little function in menu maker as well
	
	//sliders 
	slides('width',0,100);
	slides('height',0,100);
	slides('border_size',0,50);
	slides('border_radius',0,50);
	slides('font_size',0,50);
	slides('out_shadow_x',-20,20);
	slides('out_shadow_y',-20,20);
	slides('out_shadow_blur',-20,20);
	slides('in_shadow_x',-20,20);
	slides('in_shadow_y',-20,20);
	slides('in_shadow_blur',-20,20);
	slides('opacity',0,100);
	slides('font_shadow_x',-20,20);
	slides('font_shadow_y',-20,20);
	slides('font_shadow_spread',0,20);
	$('#transition_second').slider({ from: 0, to: 1, step: .01,round:2, dimension: '&nbsp;s', skin: "plastic" ,onstatechange: function( value ){transition_second=value; changes();}});
	//colors 
	color('font_color');
    color('border_color');
	color('back_start');
 	color('back_end');
	color('outside_color');
	color('in_color');
	color('font_shadow');
    // selection changes
	$('#border_style').live('change',function(){
		border_type[s]=$(this).val(); 
		if(border_type[s]=='none')$('#border_size').slider('value',0);
		changes();
		});
	$('#font_name').live('change',function(){
		font_name[s]=$(this).val(); changes();
	});
	$('#special_character').live('change',function(){
		special_character='&nbsp;'+$(this).val();
		if(special_character=='&nbsp;none')special_character='';
		 $('.button').html(text+special_character);
		 changes();
	});
	$('#transition_type').live('change',function(){
		transition_type=$(this).val(); changes();
	});
	$('#transition_function').live('change',function(){
		transition_function=$(this).val(); changes();
	});
	// change each side of border
	$('.s1,.s2,.s3,.s4').live('keyup',function(){
		 val1[s]=$('.s1').val();
		 val2[s]=$('.s2').val();
		 val3[s]=$('.s3').val();
		 val4[s]=$('.s4').val();
					changes();
					return false;
	});
	// Header statues click normal , hover and pressed
	$('#header_buttons li').eq(0).click(function(){
		$('#left_ul li').eq(0).slideDown('fast');
		s=0;
		make_slide_color_change();
	});
 	$('#header_buttons li').eq(1).click(function(){
		$('#left_ul li').eq(0).slideUp('fast');
		s=1;
		if(hover==0){make_changes_transfer(1);}
		hover=1;
		make_slide_color_change();
		//----auto change the button to normal
		//====================================
	});
	//--------------------------------------
	$('#header_buttons li').eq(2).click(function(){
		$('#left_ul li').eq(0).slideUp('fast');
		s=2;
		if(hover==0)make_changes_transfer(1);
		if(press==0)make_changes_transfer(2);
		press=1;
		make_slide_color_change();
		//====================================
	});
	
	
	// testing preview when cursor moves to right side
	$('#right').hover(function(){
			$('#right_c').css('border','none'); 
			$('#right_c span').hide(); 
			$('.button').attr('style',style[0]+transition_style);
			if(hover==1){
			
			
			$('.button').mouseover(function(){$('.button').attr('style',style[1]+transition_style);  });
			$('.button').mouseleave(function(){ $('.button').attr('style',style[0]+transition_style);   });
			
			}
			if(press==1){
			
			$('.button').mousedown(function(){ $('.button').attr('style',style[2]+transition_style)});
			$('.button').mouseup(function(){ 
				if(hover==1)$('.button').attr('style',style[1]+transition_style); 
				else $('.button').attr('style',style[0]+transition_style); 	
			   });	
			}
	},function(){$('.button').attr('style',style[s]); $('#right_c').css({'border-bottom':'#999 1px solid'}); $('#right_c span').show();});
	
	//get the source code	
	$('#grab').live('click',function(){
		if(grab==0){grab=1;
		$('#right_b li').eq(0).find('textarea').text('<a href="#" class="button"/>'+text+special_character+'</a>');
		var outcss = '.button{\n text-decoration:none; \n text-align:center; '+style[0]+' '+transition_style+'}';
		if(hover==1 && press==0)outcss = '.button{text-decoration:none; text-align:center; '+style[0]+' '+transition_style+'}.button:hover{'+style[1]+'}';
		if(hover==0 && press==1)outcss = '.button{text-decoration:none; text-align:center; '+style[0]+' '+transition_style+'}.button:active{'+style[2]+'}';
		if(hover==1 && press==1)outcss = '.button{text-decoration:none; text-align:center; '+style[0]+' '+transition_style+'}.button:hover{'+style[1]+'}.button:active{'+style[2]+'}';
		
		
		$('#right_b li').eq(1).find('textarea').text(outcss);
		$('#right_b').slideDown(function(){$('#right_b ol').fadeIn('fast');});
		}else changes();
	});
// function are below ///
function changes(){
// remove grab ----
if(grab==1){
	grab=0;
	$('#right_b ol').hide();
		$('#right_b').fadeOut('fast');	
}
//-----------------
// STYLE == BORDER
if(border_size[s]==0 ){
	border_type[s]='none'; 
	$('#border_style').attr('value','none');  
	border[s]='none'; 
}else{
	 border[s]=border_type[s]+' '+border_size[s]+'px '+border_color[s];
}
if(border_type[s]=='none'){
border[s]='none';
}
//===== STYLE= Radius===
if(val1[s]==val2[s] && val2[s]==val3[s] && val3[s]==val4[s]){
	$('.s1,.s2,.s3,.s4').val(border_radius[s]);  
		if(border_radius[s]==0)border_radius_style[s]='';
		else{border_radius_style[s]='-webkit-border-radius:'+border_radius[s]+'px;\n -moz-border-radius:'+border_radius[s]+'px; \n border-radius: '+border_radius[s]+'px;';
		} 
}else{
 border_radius_style[s]='-webkit-border-radius:'+val1[s]+'px '+val2[s]+'px '+val4[s]+'px '+val3[s]+'px; \
	 				 border-radius: '+val1[s]+'px '+val2[s]+'px '+val4[s]+'px '+val3[s]+'px; \
					-moz-border-radius-topleft:'+val1[s]+'px; \
					-moz-border-radius-topright:'+val2[s]+'px; \
					-moz-border-radius-bottomleft:'+val3[s]+'px; \
					-moz-border-radius-bottomright:'+val4[s]+'px; ';
}
//\\=====================================
//============================================
// STYLE == FONT SHADOW
  if(font_shadow_x[s]==0 && font_shadow_y[s]==0 && font_shadow_spread[s]==0)text_shadow[s]='';
  else{
  text_shadow[s]='text-shadow: '+font_shadow_x[s]+'px '+font_shadow_y[s]+'px '+font_shadow_spread[s]+'px '+font_shadow[s]+'; \n filter: dropshadow(color='+font_shadow[s]+', offx='+font_shadow_x[s]+', offy='+font_shadow_y[s]+');';}
//============================================
// STYLE == BACKGROUND COLOR
 if(back_start[s]==back_end[s])background[s]='background:'+back_start[s]+';';
 else{
	background[s]=
   'background-color:'+back_start[s]+'; \n \
background-image: -moz-linear-gradient(top, '+back_start[s]+' 0%, '+back_end[s]+' 100%); \n \
background-image: -webkit-linear-gradient(top, '+back_start[s]+' 0%, '+back_end[s]+' 100%); \n \
background-image: -o-linear-gradient(top, '+back_start[s]+' 0%, '+back_end[s]+' 100%); \n \
background-image: -ms-linear-gradient(top, '+back_start[s]+' 0% ,'+back_end[s]+' 100%); \n \
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\''+back_end[s]+'\', endColorstr=\''+back_end[s]+'\',GradientType=0 ); \n \
background-image: linear-gradient(top, '+back_start[s]+' 0% ,'+back_end[s]+' 100%);  '; 
 }
//============================================
// STYLE==OUTSIDE / INSIDE SHADOW
if(out_shadow_x[s]==0 && out_shadow_y[s]==0 && out_shadow_blur[s]==0 ) {
	if(in_shadow_x[s]==0 && in_shadow_y[s]==0 && in_shadow_blur[s]==0 ){
		box_shadow_out[s]='';
	}else{
	box_shadow_out[s]=
'-webkit-box-shadow:inset '+in_shadow_x+'px '+in_shadow_y+'px '+in_shadow_blur+'px '+in_color+';  \
-moz-box-shadow:inset '+in_shadow_x[s]+'px '+in_shadow_y[s]+'px '+in_shadow_blur[s]+'px '+in_color[s]+';  \
box-shadow:inset '+in_shadow_x[s]+'px '+in_shadow_y[s]+'px '+in_shadow_blur[s]+'px '+in_color[s]+'; ';	
	}
	
}
else{
if(in_shadow_x[s]==0 && in_shadow_y[s]==0 && in_shadow_blur[s]==0 ){
box_shadow_out[s]=
'-webkit-box-shadow:'+out_shadow_x[s]+'px '+out_shadow_y[s]+'px '+out_shadow_blur[s]+'px '+outside_color[s]+';  \
-moz-box-shadow: '+out_shadow_x[s]+'px '+out_shadow_y[s]+'px '+out_shadow_blur[s]+'px '+outside_color[s]+';  \
box-shadow:'+out_shadow_x[s]+'px '+out_shadow_y[s]+'px '+out_shadow_blur[s]+'px '+outside_color[s]+'; ';
}
else{
box_shadow_out[s]=
'-webkit-box-shadow:'+out_shadow_x[s]+'px '+out_shadow_y[s]+'px '+out_shadow_blur[s]+'px '+outside_color[s]+', inset '+in_shadow_x[s]+'px '+in_shadow_y[s]+'px '+in_shadow_blur[s]+'px '+in_color[s]+'; \
\n -moz-box-shadow: '+out_shadow_x[s]+'px '+out_shadow_y[s]+'px '+out_shadow_blur[s]+'px '+outside_color[s]+',  inset '+in_shadow_x[s]+'px '+in_shadow_y[s]+'px '+in_shadow_blur[s]+'px '+in_color[s]+';  \
\n box-shadow:'+out_shadow_x[s]+'px '+out_shadow_y[s]+'px '+out_shadow_blur[s]+'px '+outside_color[s]+', inset '+in_shadow_x[s]+'px '+in_shadow_y[s]+'px '+in_shadow_blur[s]+'px '+in_color[s]+'; ';	
}
}
//==== STYLE = opacity 
if(Number(opacity[s])!=100){opacity_style[s]='opacity:'+Number(opacity[s])/100+'; \n -ms-filter: progid:DXImageTransform.Microsoft.Alpha(Opacity='+Number(opacity[s])+'); \n filter: alpha(opacity='+Number(opacity[s])+');';}else opacity_style[s]='';
//=============================================
//===== STYLE = Transition ====================
if((hover==1 || press==1) && transition_type!='none'){
transition_style=
' -webkit-transition: '+transition_type+' '+transition_second+'s '+transition_function+';\
\n -moz-transition:  '+transition_type+' '+transition_second+'s '+transition_function+';\
\n -o-transition:  '+transition_type+' '+transition_second+'s '+transition_function+';\
\n transition:  '+transition_type+' '+transition_second+'s '+transition_function+';';
}else transition_style='';

//=============================================
style[s] =
'\n padding:'+height[s]+'px '+width[s]+'px; \
\n border:'+border[s]+'; \
\n '+border_radius_style[s]+' \
\n font:'+font_size[s]+'px '+font_name[s]+'; \
\n font-weight:bold; \
\n color:'+font_color[s]+'; \
\n '+background[s]+' \
\n '+box_shadow_out[s]+' \
\n '+opacity_style[s]+' \
\n '+text_shadow[s]; 

  $('.button').attr('style',style[s]);
  $('#right_c').width($('.button').outerWidth()).height($('.button').outerHeight()+20);
  $('#right_c span').html('&nbsp;'+$('.button').outerWidth()+' px&nbsp;').css({'margin-left':Number($('.button').outerWidth())/2-23+'px'});
}
//function for making slider --------------------------
function slides(name,start,end){
	$('#'+ name).slider({ from: start, to: end, step: 1, dimension: '&nbsp;px', skin: "plastic" ,onstatechange: function( value ){
	switch (name) {
		case 'border_size':if(value!=0 && border_type[s]=='none'){border_type[s]='solid'; $('#border_style').attr('value','solid'); } border_size[s]=value; break;
		case 'width': width[s]=value;  break;
		case 'height': height[s]=value;  break;
		case 'border_radius': border_radius[s]=value; val1[s]=val2[s]=val3[s]=val4[s]=border_radius[s]; break;
		case 'font_size': font_size[s]=value; break;
		case 'out_shadow_x':out_shadow_x[s]=value; break;
		case 'out_shadow_y':out_shadow_y[s]=value; break;
		case 'out_shadow_blur':out_shadow_blur[s]=value; break;
		case 'in_shadow_x':in_shadow_x[s]=value; break;
		case 'in_shadow_y':in_shadow_y[s]=value; break;
		case 'in_shadow_blur':in_shadow_blur[s]=value; break;
		case 'opacity': opacity[s]=value; break;
		case 'font_shadow_x':font_shadow_x[s]=value; break;
		case 'font_shadow_y':font_shadow_y[s]=value; break;
		case 'font_shadow_spread':font_shadow_spread[s]=value; break;
		case 'transition_second':transition_second=value; break;
	};changes();}});
}
//function for color  
function color(name){
	$('#'+name).miniColors({
    change: function(hex, rgb) {
		switch(name){
		case 'font_color':font_color[s]=hex; break;	
		case 'border_color':border_color[s]=hex; break;
		case 'back_start':back_start[s]=hex; break;
		case 'back_end':back_end[s]=hex; break;	
		case 'outside_color':outside_color[s]=hex; break;
		case 'in_color':in_color[s]=hex; break;
		case 'font_shadow' : font_shadow[s]=hex; break;
		}
	 changes();
}});
}

function make_changes_transfer(d){
width[d]=width[0];
height[d]=height[0];
border[d]=border[0];
border_size[d]=border_size[0];
border_type[d]=border_type[0];
border_color[d]=border_color[0];
border_radius[d]=border_radius[0];
val1[d]=val1[0];
val2[d]=val2[0];
val3[d]=val3[0];
val4[d]=val4[0];
font_color[d]=font_color[0];
font_size[d]=font_size[0];
font_name[d]=font_name[0];
background[d]=background[0];
back_start[d]=back_start[0];
back_end[d]=back_end[0];
box_shadow_out[d]=box_shadow_out[0];
outside_color[d]=outside_color[0];
out_shadow_x[d]=out_shadow_x[0];
out_shadow_y[d]=out_shadow_y[0];
out_shadow_blur[d]=out_shadow_blur[0];
in_color[d]=in_color[0];
in_shadow_x[d]=in_shadow_x[0];
in_shadow_y[d]=in_shadow_y[0];
in_shadow_blur[d]=in_shadow_blur[0];
opacity[d]=opacity[0];
text_shadow[d]=text_shadow[0];
font_shadow[d]=font_shadow[0];
font_shadow_x[d]=font_shadow_x[0];
font_shadow_y[d]=font_shadow_y[0];
font_shadow_spread[d]=font_shadow_spread[0];
	
}
function make_slide_color_change(){
		$('#width').slider('value',width[s]);
		$('#height').slider('value',height[s]);
		$('#border_size').slider('value',border_size[s]);
		if(val1[s]==val2[s] && val2[s]==val3[s] && val3[s]==val4[s]){
			$('#border_radius').slider('value',border_radius[s]);
		}else{
		$('.s1').val(val1[s]);
		$('.s2').val(val2[s]);
		$('.s3').val(val3[s]);
		$('.s4').val(val4[s]);}
		$('#font_size').slider('value',font_size[s]);
		$('#out_shadow_x').slider('value',out_shadow_x[s]);
		$('#out_shadow_y').slider('value',out_shadow_y[s]);
		$('#out_shadow_blur').slider('value',out_shadow_blur[s]);
		$('#in_shadow_x').slider('value',in_shadow_x[s]);
		$('#in_shadow_y').slider('value',in_shadow_y[s]);
		$('#in_shadow_blur').slider('value',in_shadow_blur[s]);
		$('#font_shadow_x').slider('value',font_shadow_x[s]);
		$('#font_shadow_y').slider('value',font_shadow_y[s]);
		$('#font_shadow_spread').slider('value',font_shadow_spread[s]);
		$('#opacity').slider('value',opacity[s]);
		$('#font_color').miniColors('value',font_color[s]);
		$('#border_color').miniColors('value',border_color[s]);
		$('#back_start').miniColors('value',back_start[s]);
		$('#back_end').miniColors('value',back_end[s]);
		$('#outside_color').miniColors('value',outside_color[s]);
		$('#in_color').miniColors('value',in_color[s]);
		$('#font_shadow').miniColors('value',font_shadow[s]);
		$('#font_name').val(font_name[s]);
		$('#border_style').val(border_type[s]);
		return false;
}
});
