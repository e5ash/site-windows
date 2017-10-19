$(document).ready(function($) {

	$( "#tabs" ).tabs();
	
	setTimeout(function() {
	  $('select').styler();
	}, 100)

	function valueElementForm(nameElement) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find($('input')),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('radio');
	valueElementForm('checkbox');

	$('.certificates__list').slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 700,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.input_phone').mask('+7 (999) 999-99-99');


	$('.go-to').on("click", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});



	/* Calc */

	var arrea = $('#windowArrea'),
		selectedWindow = 'window_selected',
		selectedImg = 'img_selected',
		windowBlock = $('.window'),
		priceBlock = $('.price__count-sum span'),
		priceSize = $('.price__count-name span'),
		windowCountBlock = $('#windowCount'),
		windowTypeBlock = $('#windowType');
	windowBlock.each(function(index, el) {
		var selectedArrea = $(this).find('.window__selected'),
			imgFirst = $(this).find('img:nth-of-type(1)'),
			img = $(this).find('img'),
			thisIsIndex = index;
		
		img.each(function(index, el) {
			$(this).attr('data-type', index+1);
			$(this).attr('data-window',thisIsIndex+1);
			if ($(this).hasClass('window_active')) {
				var clone = $(this).clone()
				arrea.html(clone);
			}
		});

		imgFirst.addClass(selectedImg);

		var imgFirstClone = imgFirst.clone();
		selectedArrea.html(imgFirstClone);
		
	});

	$('.window__selected img').click(function(event) {
		$('.window__list').fadeOut(0);
		var selectedList = $(this).parents('.window').find('.window__list');
		selectedList.fadeIn(0);
	});
	$('.window__list img').click(function(event) {
		var selectedList = $(this).parents('.window').find('.window__list');
		$('.window__list').fadeOut(0);
		selectedList.fadeOut();
		// if (!$(this).hasClass(selectedImg)) {
			var friend = $(this).siblings();
			friend.removeClass(selectedImg);
			$(this).addClass(selectedImg);
			var clone = $(this).clone();
			arrea.html(clone);
			calc();
		// }
	});

	function calc() {
		var windowSelectedWindow = $('#windowArrea img'),
			windowCount = windowSelectedWindow.attr('data-window'),
			windowType = windowSelectedWindow.attr('data-type'),
			typeWindowInput = Number($('#typeWindow input:checked').val()),
			typeProfilInput = Number($('#typeProfil input:checked').val()),
			typeFyrnityraInput = Number($('#typeFyrnityra input:checked').val());
		windowCountBlock.val(windowCount);
		windowTypeBlock.val(windowType);
		if (typeProfilInput == 1) {
			if (windowCount == 1) {
				size(true, 800, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(3150);
					}
					if (typeWindowInput == 2) {
						sum(3165);
					}
					if (typeWindowInput == 3) {
						sum(4781);
					}
					if (typeWindowInput == 4) {
						sum(4781);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(5439);
					}
					if (typeWindowInput == 2) {
						sum(5282);
					}
					if (typeWindowInput == 3) {
						sum(6067);
					}
					if (typeWindowInput == 4) {
						sum(6067);
					}
				}
			}
			if (windowCount == 2) {
				size(true, 1300, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(6324);
					}
					if (typeWindowInput == 2) {
						sum(6913);
					}
					if (typeWindowInput == 3) {
						sum(9146);
					}
					if (typeWindowInput == 4) {
						sum(9146);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(8054);
					}
					if (typeWindowInput == 2) {
						sum(8713);
					}
					if (typeWindowInput == 3) {
						sum(10136);
					}
					if (typeWindowInput == 4) {
						sum(10136);
					}
				}
			}
			if (windowCount == 3) {
				size(true, 2000, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(11346);
					}
					if (typeWindowInput == 2) {
						sum(12164);
					}
					if (typeWindowInput == 3) {
						sum(15255);
					}
					if (typeWindowInput == 4) {
						sum(15255);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(9500);
					}
					if (typeWindowInput == 2) {
						sum(10388);
					}
					if (typeWindowInput == 3) {
						sum(13736);
					}
					if (typeWindowInput == 4) {
						sum(13736);
					}
				}
			}
			if (windowCount == 4) {
				size(true, 2000, 2050);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(11073);
					}
					if (typeWindowInput == 2) {
						sum(12115);
					}
					if (typeWindowInput == 3) {
						sum(16050);
					}
					if (typeWindowInput == 4) {
						sum(16050);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(13960);
					}
					if (typeWindowInput == 2) {
						sum(14900);
					}
					if (typeWindowInput == 3) {
						sum(18500);
					}
					if (typeWindowInput == 4) {
						sum(18500);
					}
				}
			}
		}
		if (typeProfilInput == 2) {
			if (windowCount == 1) {
				size(true, 800, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(2848);
					}
					if (typeWindowInput == 2) {
						sum(5415);
					}
					if (typeWindowInput == 3) {
						sum(6445);
					}
					if (typeWindowInput == 4) {
						sum(6445);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(5359);
					}
					if (typeWindowInput == 2) {
						sum(6701);
					}
					if (typeWindowInput == 3) {
						sum(7731);
					}
					if (typeWindowInput == 4) {
						sum(7731);
					}
				}
			}
			if (windowCount == 2) {
				size(true, 1300, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(6500);
					}
					if (typeWindowInput == 2) {
						sum(7000);
					}
					if (typeWindowInput == 3) {
						sum(10163);
					}
					if (typeWindowInput == 4) {
						sum(10163);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(8368);
					}
					if (typeWindowInput == 2) {
						sum(8800);
					}
					if (typeWindowInput == 3) {
						sum(11142);
					}
					if (typeWindowInput == 4) {
						sum(11142);
					}
				}
			}
			if (windowCount == 3) {
				size(true, 2000, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(11095);
					}
					if (typeWindowInput == 2) {
						sum(11897);
					}
					if (typeWindowInput == 3) {
						sum(14920);
					}
					if (typeWindowInput == 4) {
						sum(14920);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(9215);
					}
					if (typeWindowInput == 2) {
						sum(10085);
					}
					if (typeWindowInput == 3) {
						sum(13363);
					}
					if (typeWindowInput == 4) {
						sum(13363);
					}
				}
			}
			if (windowCount == 4) {
				size(true, 2000, 2050);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(10770);
					}
					if (typeWindowInput == 2) {
						sum(11800);
					}
					if (typeWindowInput == 3) {
						sum(15670);
					}
					if (typeWindowInput == 4) {
						sum(15670);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(13440);
					}
					if (typeWindowInput == 2) {
						sum(14373);
					}
					if (typeWindowInput == 3) {
						sum(17900);
					}
					if (typeWindowInput == 4) {
						sum(17900);
					}
				}
			}
		}
		if (typeProfilInput == 3) {
			if (windowCount == 1) {
				size(true, 800, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(2480);
					}
					if (typeWindowInput == 2) {
						sum(2830);
					}
					if (typeWindowInput == 3) {
						sum(4150);
					}
					if (typeWindowInput == 4) {
						sum(4150);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(4517);
					}
					if (typeWindowInput == 2) {
						sum(4795);
					}
					if (typeWindowInput == 3) {
						sum(5845);
					}
					if (typeWindowInput == 4) {
						sum(5845);
					}
				}
			}
			if (windowCount == 2) {
				size(true, 1300, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(5600);
					}
					if (typeWindowInput == 2) {
						sum(6500);
					}
					if (typeWindowInput == 3) {
						sum(8400);
					}
					if (typeWindowInput == 4) {
						sum(8400);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(7672);
					}
					if (typeWindowInput == 2) {
						sum(8100);
					}
					if (typeWindowInput == 3) {
						sum(9750);
					}
					if (typeWindowInput == 4) {
						sum(9750);
					}
				}
			}
			if (windowCount == 3) {
				size(true, 2000, 1400);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(10245);
					}
					if (typeWindowInput == 2) {
						sum(11045);
					}
					if (typeWindowInput == 3) {
						sum(14105);
					}
					if (typeWindowInput == 4) {
						sum(14105);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(8550);
					}
					if (typeWindowInput == 2) {
						sum(9424);
					}
					if (typeWindowInput == 3) {
						sum(12740);
					}
					if (typeWindowInput == 4) {
						sum(12740);
					}
				}
			}
			if (windowCount == 4) {
				size(true, 2000, 2050);
				if (windowType == 1) {
					if (typeWindowInput == 1) {
						sum(9999);
					}
					if (typeWindowInput == 2) {
						sum(11025);
					}
					if (typeWindowInput == 3) {
						sum(14900);
					}
					if (typeWindowInput == 4) {
						sum(14900);
					}
				}
				if (windowType == 2) {
					if (typeWindowInput == 1) {
						sum(12420);
					}
					if (typeWindowInput == 2) {
						sum(13355);
					}
					if (typeWindowInput == 3) {
						sum(16885);
					}
					if (typeWindowInput == 4) {
						sum(16885);
					}
				}
			}
		}
	}
	calc();

	function sum(myStr) {
		var newMyStr = String(myStr);
		priceBlock.html(newMyStr.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
	}
	function size(bool,one,two) {
		if (bool == true) {
			priceSize.html(one+' Х '+two+' мм.');
		} else {
			priceSize.html('Введите ваши параметры');
		}
	}
	$('.price__elements .radio input').click(function(event) {
		calc();
	});
	$('.price__input').keydown(function(event) {
        // Разрешаем: backspace, delete, tab и escape
        if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || 
             // Разрешаем: Ctrl+A
            (event.keyCode == 65 && event.ctrlKey === true) || 
             // Разрешаем: home, end, влево, вправо
            (event.keyCode >= 35 && event.keyCode <= 39)) {
                 // Ничего не делаем
                 return;
        }
        else {
            // Обеждаемся, что это цифра, и останавливаем событие keypress
            if ((event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
                event.preventDefault(); 
            }   
        }
    });


	$('.price__button').click(function(event) {
		valPopup('width', 'text');
		valPopup('height', 'text');
		valPopup('windowCount', 'text');
		valPopup('windowType', 'text');
		valPopup('laminaton', 'select');
		valPopup('color', 'select');
		valPopup('type', 'checkbox');
		valPopup('profile', 'checkbox');
		valPopup('fittings', 'checkbox');
	});

	function valPopup(argument,type) {
		if (type == 'text'){
			$('#popup-white-calc input[name='+argument+']').val($('.price__container input[name='+argument+']').val())
		}
		if (type == 'select') {
			$('#popup-white-calc input[name='+argument+']').val($('.price__container select[name='+argument+'] option:selected').val())
		}
		if (type == 'checkbox') {
			$('#popup-white-calc input[name='+argument+']').val($('.price__container input[name='+argument+']:checked').val())
		}
		
	}


    $('form').submit(function() {
		$.ajax({
		    type: "POST",
		    url: "/order.php",
		    data: $(this).serialize()
		}).done(function() {
		    $.fancybox.open('<div class="popup"><div class="popup__close" data-fancybox-close></div><div class="popup__title">Ваша заявка успешно отправлена</div></div>');
		});
		return false;
	});
});