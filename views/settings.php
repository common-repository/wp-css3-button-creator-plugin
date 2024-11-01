<div class="wrap">
<?php if(!empty($this->message)):?>
<?php echo $this->message; ?>
<?php endif; ?>
	<div id="poststuff">
	    <div id="post-body">							
		    <div class="postbox">
                <div id="left">
                    <div id="left_h">
                      <ul id="header_buttons">
                       <li class="Active">Normal</li>
                       <li class="NO" >Hover</li>
                       <li class="NO">Pressed</li></ul>
                    </div>
    <ul id="left_ul"> 
     <li> 
      <abbr class="title">Text</abbr>
      <ol>
      <li>
      <label>Text : </label><input type="text" class="text" value="Preview"/>
      </li>
      <li>
      <label>Special Character : </label>
     <select id="special_character">
     <option>none</option>
     <option>➜</option>
     <option>➤</option>
     <option>➣</option>
     <option>☞</option>
     <option>↻</option>
     <option>➹</option>
     <option>☼</option>
     <option>♞</option>
     <option>♛</option>
     <option>♜</option>
     <option>☂</option>
     <option>☻</option>
     <option>✍</option>
     <option>✄</option>
     <option>✐</option>
     <option>✌</option>
     <option>✚</option>
     <option>☯</option>
     <option>⚒</option>
     <option>⚖</option>
     <option>☓</option>
     <option>✠</option>
     <option>⦿</option>
     <option>✺</option>
     <option>✓</option>
     <option>✔</option>
     <option>✖</option>
     <option>✘</option>
     <option>❤</option>
     <option>❂</option>
     <option>▶</option>
     <option>◀</option>
     <option>▼</option>
     <option>►</option>
     <option>✩</option>
     <option>✈</option>
     <option>✦</option>
     <option>⚛</option>
     <option>✝</option>
     <option>⚑</option>
     <option>⚐</option>
     <option>☸</option>
     </select>
     </li>
     </ol>
     </li>
    <li>
     <abbr class="title">Font</abbr>
     <ol><li>
     <label>Family Name :</label>
     <select id="font_name" style="width:160px">
        <option>Arial, Helvetica, sans-serif</option>
 		<option>Verdana, Geneva, sans-serif</option>
		<option>Georgia, "Times New Roman", Times, serif</option>
		<option>"Courier New", Courier, monospace</option>
		<option>Tahoma, Geneva, sans-serif</option>
		<option>"Trebuchet MS", Arial, Helvetica, sans-serif</option>
		<option>"Arial Black", Gadget, sans-serif</option>
		<option>"Times New Roman", Times, serif</option>
		<option>"Palatino Linotype", "Book Antiqua", Palatino, serif</option>
		<option>"Lucida Sans Unicode", "Lucida Grande", sans-serif</option>
		<option>"MS Serif", "New York", serif</option>
		<option>"Lucida Console", Monaco, monospace</option>
     </select>
     </li>
     <li>
     <label>Color : </label>
     <input type="text" id="font_color" size="4" value="#E5FFFF"/>
     </li>
     <li>
     <label>Size : </label>
     <span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="font_size" type="slider"  value="18" /></span>
     </li>
     </ol>
     </li>
     <li>
     <abbr class="title">Font Shadow</abbr>
       <ol>
        <li>
        <label>color : </label><input type="text" id="font_shadow" size="4" value="#bababa"/>
        </li>
        <li>
     <label>X : </label> <span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="font_shadow_x" type="slider"  value="0" /></span>
        </li>
        <li>
     <label>Y : </label> <span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="font_shadow_y" type="slider"  value="0" /></span> 
        </li>
        <li>
     <label>Spread : </label> <span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="font_shadow_spread" type="slider"  value="0" /></span>
        </li>
        </ol>
     </li>
     <li>
     <abbr class="title">Padding</abbr>
     <ol><li>
     <label>Left/Right :</label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="width" type="slider"  value="32" /></span>
      </li> 
      <li>
    <label>Up/Down :</label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="height" type="slider"  value="11" /></span>
     </li>
     </ol>
     </li>
    <li>
    <abbr class="title">Border</abbr>
    <ol>
    <li>
    <label>Size :</label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="border_size" type="slider"  value="1" /></span>
    </li>
    <li>
    <label>Type :</label>
    <select id="border_style" >
    <option>solid</option>
    <option>dashed</option>
    <option>dotted</option>
    <option>double</option>
    <option>groove</option>
    <option>inset</option>
    <option>outset</option>
    <option>ridge</option>
    <option>none</option>
    </select>
   
    </li>
    <li>
    <label>Border Color : </label><input type="text" id="border_color" size="4" value="#004F72"/>
    </li>
    <li>
    <label>border radius : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="border_radius" type="slider"  value="4" /></span> 
    </li>
    <li>
      <table style="position:relative;width:68px; height:30px; border:#000 1px solid; margin-left:22px;">
      <tr style=""><td><input type="text" size="2" maxlength="2" class="s1" /></td><td style=""><input type="text" size="2"  maxlength="2" class="s2" /></td></tr>
      <tr style=""><td><input type="text" size="2"  maxlength="2" class="s3"/></td><td style=""><input type="text" size="2"  maxlength="2" class="s4"/></td></tr>
      </table>
     </li>
     </ol>
     </li>
    <li>
    <abbr class="title">Background Color</abbr>
    <ol>
    <li>
    <label>Color : </label><input type="text" id="back_start" size="4" value="#3BA4C7"/>    → <input type="text" id="back_end" size="4" value="#1982A5"/>
    </li>
    </ol>
  	</li>
    <li>
    <abbr class="title">Box Inside Shadow </abbr>
    <ol><li>
    <label>Color : </label><input type="text" id="in_color" size="4" value="#ffffff"/>
    </li><li>
    <label> x : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="in_shadow_x" type="slider"  value="0" /></span></li><li>
    <label> y : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="in_shadow_y" type="slider"  value="0" /></span></li><li>
    <label> Blur : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="in_shadow_blur" type="slider"  value="1" /></span>
    </ol>
    </li>
    <li>
    <abbr class="title">Box Outside Shadow </abbr>
    <ol><li>
    <label>Color : </label><input type="text" id="outside_color" size="4" value="#bababa"/>
    </li><li>
    <label> x : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="out_shadow_x" type="slider"  value="0" /></span></li><li>
    <label> y : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="out_shadow_y" type="slider"  value="0" /></span></li><li>
    <label> Blur : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="out_shadow_blur" type="slider"  value="2" /></span>
    </ol>
    </li>
    <li>
    <abbr class="title">Opacity</abbr>
    <ol><li>
    <label>Opacity : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="opacity" type="slider"  value="100" /></span></li></ol>
    </li>
    <li>
    <abbr class="title">Transition</abbr>
    <ol>
    <li>
    <label>Type : </label>
<select id="transition_type">
<option>none</option>
<option>all</option>
<option>background</option>
<option>with</option>
<option>height</option>
<option>color</option>
<option>outline</option>
</select>
    </li>
     <li><label>Function : </label><select id="transition_function"><option>linear</option><option>ease</option><option>ease-in</option><option>ease-out</option><option>ease-in-out</option></select></li>
    <li><label>Duration : </label><span style="display: inline-block; width: 200px; padding: 0 0 0 40px;"><input id="transition_second" type="slider"  value="0" /></span></li>
    </ol>
    </li>
    </ul>
                </div>
                <div id="right">
                <div id="right_c">
            	<a href="#"  class="button" />Preview</a>
                <span></span>
                </div>
<div id="grab">Grab the code</div>
<div id="right_b">
<ol ><li><label>Html : </label><textarea></textarea></li><li><label>CSS : </label><textarea style="height:200px;" ></textarea></li></ol></div>
                <div style="clear:both">
                </div>
                <div style="clear:both">
            </div>
	    </div>
    </div>
</div>