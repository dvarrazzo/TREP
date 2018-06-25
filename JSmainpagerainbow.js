/* Below code block copied and modified from here:
 * https://github.com/xoxco/Rainbow-Text/blob/master/rainbow.js
 */

(function($) {
	$.fn.rainbow = function(options) {
		this.each(function() {

			options.originalText = $(this).html();
			options.iterations = 0;
			if (!options.pauseLength) {
				options.pauseLength = options.animateInterval;
			}
			$(this).data('options',options);

			if (options.pad) {

				for (x = 0; x < options.originalText.length; x++) {
					options.colors.unshift(options.colors[options.colors.length-1]);
				}
			}

			$.fn.rainbow.render(this);

		});
	}

	$.fn.pauseRainbow = function() {
		this.each(function() {
			var options = $(this).data('options');
			if (options) {
				options.animate = false;
				$(this).data('options',options);
			}
		});
	}


	$.fn.resumeRainbow = function() {
		this.each(function() {
			var options = $(this).data('options');
			if (options) {
				options.animate = true;
				$(this).data('options',options);
				$.fn.rainbow.render(this);
			}
		});
	}


	$.fn.rainbow.render = function(obj) {

			var options = $(obj).data('options');
			/* originalText equals the following string "The Rainbow Encyclopaedia Project"
			 * So the split below is separating this string into an array, which is stored in the local variable chars, as per the below:
			 * ["T", "h", "e", " ", "R", "a", "i", "n", "b", "o", "w", " ", "E", "n", "c", "y", "c", "l", "o", "p", "a", "e", "d", "i", "a", " ", "P", "r", "o", "j", "e", "c", "t"]
			 * This means that the individual letters can now have a separate style at every frame of the animation
			 */
			var chars = options.originalText.split('');

			options.iterations++;

			var newstr = '';
 			var counter = 0;
			/* x equals the index (which is 33 characters or 0-32 as an array) assigned
			 * to each individual letter within the aforementioned chars array for which
			 * is executed in a loop, as per the below so as to have each letter appear one after the other
			 */
 			for (var x in chars) {
				/* chars is the letter array, x is an index ranging from 0-32,
				 * chars[x] is running through the letter array using the x index from 0 to 32
				 */
 				if (chars[x] != ' ') {

					var col
					if (x < options.iterations)
  					/* The below colors attribute refers to the colors array attribute in the JSwebpages file */
						col = options.colors[counter];
					else
						col = 'rgba(255,255,255,0)';
					/* The above can be written more compactly as the expression:
					 * var col = (++i < options.iterations) ? options.colors[counter] : 'rgba(255,255,255,0)';
					 */

  				newstr = newstr + '<span style="color: ' + col + ';">' + chars[x] + '</span>';
          /* <span style="color: #FF0000;">T</span>;
					 * <span style="color: ##f26522;">h</span>;
					 * etc...
					 */
					counter++;
					/* The counter only increments on letters whereas the below else statement
					 * refers to any spaces in the array given they are not in need of being
					 * assigned a color
					 */
 				} else {
 					newstr = newstr + ' ';
				}

				if (counter >= options.colors.length) {
					counter = 0;
				/* Counter refers to the colors array in the JSwebpages file, which is 0-6,
				 * so when the counter passes the length of the colors array and the above statement becomes
				 * true, the counter is reset to 0 to iterate through the colors array again
				 */
				}
			}
			$(obj).html(newstr);

			var pause = (options.iterations % options.colors.length == 0);

			if (options.animate) {

				(
					function(obj,interval) {
						var options = $(obj).data('options');
						var i = setTimeout(function() {
							$.fn.rainbow.shift(obj);
						},interval);
						options.interval = i;
						$(obj).data('options',options);
					}
				)(obj,pause?options.pauseLength:options.animateInterval);
			}


	}


	$.fn.rainbow.shift = function(obj) {

 		var options = $(obj).data('options');
		if (!options.rotateEach || options.iterations % options.rotateEach == 0) {
			var color = options.colors.pop();
			options.colors.unshift(color);
		}
 		$.fn.rainbow.render(obj);

 	}

})(jQuery);
