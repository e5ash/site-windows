<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['width'])) {$width = $_POST['width'];}
if (isset($_POST['height'])) {$height = $_POST['height'];}
if (isset($_POST['windowCount'])) {$windowCount = $_POST['windowCount'];}
if (isset($_POST['windowType'])) {$windowType = $_POST['windowType'];}
if (isset($_POST['laminaton'])) {$laminaton = $_POST['laminaton'];}
if (isset($_POST['type'])) {$type = $_POST['type'];}
if (isset($_POST['profile'])) {$profile = $_POST['profile'];}
if (isset($_POST['fittings'])) {$fittings = $_POST['fittings'];}
$message;
if ($name == true) {
	$message .= "Имя: $name\n";
}
if ($phone == true) {
	$message .= "Телефон: $phone\n";
}
if ($type == true) {
	$message .= "Тип: ";
	if ($type == 1) {
		$message .= "Энергосберегающие\n";
	}
	if ($type == 2) {
		$message .= "Мультифункция\n";
	}
	if ($type == 3) {
		$message .= "Шумоизолирующие\n";
	}
	if ($type == 4) {
		$message .= "Антивандальные\n";
	}
}
if ($profile == true) {
	$message .= "Профиль: ";
	if ($profile == 1) {
		$message .= "Rehau\n";
	}
	if ($profile == 2) {
		$message .= "KBE\n";
	}
	if ($profile == 3) {
		$message .= "KnipPing\n";
	}
}
if ($fittings == true) {
	$message .= "Фурнитура: ";
	if ($fittings == 1) {
		$message .= "Roto\n";
	}
	if ($fittings == 2) {
		$message .= "Wink Haus\n";
	}
	if ($fittings == 3) {
		$message .= "Siegenia\n";
	}
}
if ($windowCount == true) {
	$message .= "Тип окна: ";
	if ($windowCount == 1) {
		$message .= "1 створчатаые\n";
		if ($windowType == 1) {
			$message .= "Подтип: глухое\n";
		}
		if ($windowType == 2) {
			$message .= "Подтип: пов-отк\n";
		}
	}
	if ($windowCount == 2) {
		$message .= "2 створчатаые\n";
		if ($windowType == 1) {
			$message .= "Подтип: глух/пов-отк\n";
		}
		if ($windowType == 2) {
			$message .= "Подтип: отк/пов-отк\n";
		}
	}
	if ($windowCount == 3) {
		$message .= "3 створчатаые\n";
		if ($windowType == 1) {
			$message .= "Подтип: пов/глух/пов-отк\n";
		}
		if ($windowType == 2) {
			$message .= "Подтип: глух/пов-отк/глух\n";
		}
	}
	if ($windowCount == 4) {
		$message .= "Балкон\n";
		if ($windowType == 1) {
			$message .= "Подтип: дверь+глух\n";
		}
		if ($windowType == 2) {
			$message .= "Подтип: дверь+пов-отк\n";
		}
	}
}
if ($laminaton == true) {
	$message .= "Ламинация: ";
	if ($laminaton == 1) {
		$message .= "без ламинации\n";
	}
	if ($laminaton == 2) {
		$message .= "ламинация внутрия\n";
	}
	if ($laminaton == 3) {
		$message .= "ламинация снаружи\n";
	}
	if ($laminaton == 4) {
		$message .= "ламинация внутри и снаружи\n";
	}
}
if ($color == true) {
	$message .= "Цвет: ";
	if ($color == 1) {
		$message .= "Красный\n";
	}
	if ($color == 2) {
		$message .= "Синий\n";
	}

}
if ($width == true) {
	$message .= "Ширина: $width мм. \n";
}
if ($height == true) {
	$message .= "Высота: $height мм.\n";
}
$to = "e5ash.bro@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>